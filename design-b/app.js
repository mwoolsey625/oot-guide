/* Waypoint — design B renderer.
   Reads window.OOT (walkthrough, collectibles, reference) exactly as BRIEF.md defines it.
   No modules, no fetch, no libraries: works from file://. */
(function () {
  'use strict';

  /* ================= Data + indexes ================= */
  var OOT = window.OOT || {};
  var CH = (Array.isArray(OOT.walkthrough) ? OOT.walkthrough : []).slice()
    .sort(function (a, b) { return (a.num || 0) - (b.num || 0); });
  var CATS = Array.isArray(OOT.collectibles) ? OOT.collectibles : [];
  var REF = OOT.reference || {};

  /* Fixed chapter list from BRIEF.md: used only to show not-yet-written chapters in the dial and lists. */
  var KNOWN = [
    ['c01-deku-tree', 'Kokiri Forest & Inside the Great Deku Tree', 'child'],
    ['c02-hyrule-castle', 'Hyrule Field, Lon Lon Ranch & the Princess', 'child'],
    ['c03-kakariko-lost-woods', 'Kakariko, Lost Woods & Death Mountain', 'child'],
    ['c04-dodongos-cavern', "Dodongo's Cavern", 'child'],
    ['c05-jabu-jabu', "Zora's Domain & Jabu-Jabu's Belly", 'child'],
    ['c06-temple-of-time', 'The Door of Time', 'child'],
    ['c07-forest-temple', 'Seven Years Later & the Forest Temple', 'adult'],
    ['c08-fire-temple', 'Death Mountain Crater & the Fire Temple', 'adult'],
    ['c09-ice-cavern', "Zora's Fountain & the Ice Cavern", 'adult'],
    ['c10-water-temple', 'Lake Hylia & the Water Temple', 'adult'],
    ['c11-bottom-of-well', 'Kakariko & the Bottom of the Well', 'child'],
    ['c12-shadow-temple', 'The Shadow Temple', 'adult'],
    ['c13-spirit-temple', 'Desert Colossus & the Spirit Temple', 'both'],
    ['c14-ganons-castle', "Ganon's Castle & the Finale", 'adult']
  ];

  var chById = {}, stepById = {}, stepOrder = [], itemById = {}, catById = {};
  CH.forEach(function (ch) {
    chById[ch.id] = ch;
    ch.sections = Array.isArray(ch.sections) ? ch.sections : [];
    ch._steps = []; ch._collect = [];
    ch.sections.forEach(function (sec) {
      sec.steps = Array.isArray(sec.steps) ? sec.steps : [];
      sec.steps.forEach(function (st, i) {
        stepById[st.id] = { ch: ch, sec: sec, st: st, i: stepOrder.length, n: i + 1 };
        stepOrder.push(st);
        ch._steps.push(st);
        (st.collect || []).forEach(function (cid) { if (ch._collect.indexOf(cid) < 0) ch._collect.push(cid); });
      });
    });
  });
  CATS.forEach(function (c) {
    c.items = Array.isArray(c.items) ? c.items : [];
    catById[c.id] = c;
    c.items.forEach(function (it) { if (!itemById[it.id]) itemById[it.id] = { cat: c, it: it }; });
  });

  /* Full chapter roster = known IDs plus anything extra the data adds. */
  var ROSTER = KNOWN.map(function (k, i) {
    return { id: k[0], num: i + 1, title: k[1], era: k[2], ch: chById[k[0]] || null };
  });
  CH.forEach(function (ch) {
    if (!ROSTER.some(function (r) { return r.id === ch.id; }))
      ROSTER.push({ id: ch.id, num: ch.num, title: ch.title, era: ch.era, ch: ch });
  });
  ROSTER.forEach(function (r) { if (r.ch) { r.title = r.ch.title || r.title; r.era = r.ch.era || r.era; r.num = r.ch.num || r.num; } });
  ROSTER.sort(function (a, b) { return a.num - b.num; });

  /* ================= Presentation maps ================= */
  var CAT_META = {
    'gold-skulltulas': ['Skulltula', 'gs', 'gold'],
    'heart-pieces': ['Heart Piece', 'heartpiece', 'rose'],
    'heart-containers': ['Heart Container', 'heart', 'rose'],
    'songs': ['Song', 'note', 'sky'],
    'spiritual-stones': ['Spiritual Stone', 'gem', 'teal'],
    'medallions': ['Medallion', 'medal', 'teal'],
    'inventory-items': ['Item', 'bag', 'violet'],
    'equipment': ['Equipment', 'sword', 'violet'],
    'upgrades': ['Upgrade', 'up', 'violet'],
    'bottles': ['Bottle', 'bottle', 'sky'],
    'great-fairies': ['Great Fairy', 'sparkle', 'pink'],
    'big-poes': ['Big Poe', 'flame', 'violet'],
    'magic-beans': ['Magic Bean', 'bean', 'green'],
    'masks': ['Mask', 'mask', 'gold'],
    'adult-trade': ['Trade Item', 'swap', 'gold'],
    'skulltula-rewards': ['Skulltula Reward', 'gift', 'gold']
  };
  function catMeta(c) {
    var m = c && CAT_META[c.id];
    return m ? { short: m[0], icon: m[1], hue: 'var(--h-' + m[2] + ')' }
             : { short: c ? (c.name || c.id) : 'Item', icon: 'dot', hue: 'var(--brand)' };
  }
  var KIND = {
    overworld: ['Overworld', 'map', 'var(--h-green)'],
    dungeon: ['Dungeon', 'dungeon', 'var(--h-violet)'],
    boss: ['Boss', 'boss', 'var(--warn)'],
    sweep: ['Collectible sweep', 'sweep', 'var(--h-gold)'],
    sidequest: ['Side quest', 'flag', 'var(--h-sky)']
  };
  function eraColor(e) { return e === 'adult' ? 'var(--adult)' : e === 'both' || e === 'either' ? 'var(--both)' : 'var(--child)'; }
  function eraLabel(e) { return e === 'adult' ? 'Adult' : e === 'child' ? 'Child' : e === 'both' ? 'Child + Adult' : e === 'either' ? 'Either age' : (e || ''); }

  var IC = {
    check: '<path d="M5 12.5l4.5 4.5L19 7.5"/>',
    search: '<circle cx="11" cy="11" r="6.5"/><path d="M16 16l4.5 4.5"/>',
    home: '<path d="M4 10.5l8-6.5 8 6.5V20h-5.5v-5.5h-5V20H4z"/>',
    guide: '<path d="M5 5.5A2.5 2.5 0 0 1 7.5 3H19v15H7.5A2.5 2.5 0 0 0 5 20.5z"/><path d="M5 20.5A2.5 2.5 0 0 1 7.5 18H19v3H7.5"/><path d="M9 7.5h6"/>',
    collect: '<rect x="4" y="4" width="7" height="7" rx="2"/><rect x="13" y="4" width="7" height="7" rx="2"/><rect x="4" y="13" width="7" height="7" rx="2"/><path d="M14 16.5l2 2 3.5-3.5"/>',
    ref: '<path d="M5 4h4v16H5zM10 4h4v16h-4z"/><path d="M15.5 5.2l3.8-1 3 15.5-3.8 1z"/>',
    gear: '<path d="M4 7h9M17 7h3M4 17h3M11 17h9"/><circle cx="15" cy="7" r="2.2"/><circle cx="9" cy="17" r="2.2"/>',
    sun: '<circle cx="12" cy="12" r="4"/><path d="M12 2.5V5M12 19v2.5M2.5 12H5M19 12h2.5M5.3 5.3l1.8 1.8M16.9 16.9l1.8 1.8M5.3 18.7l1.8-1.8M16.9 7.1l1.8-1.8"/>',
    moon: '<path d="M19.5 14.5A7.5 7.5 0 0 1 9.5 4.5a7.5 7.5 0 1 0 10 10z"/>',
    auto: '<circle cx="12" cy="12" r="8"/><path d="M12 4a8 8 0 0 1 0 16z" fill="currentColor"/>',
    warn: '<path d="M12 3.8L21.5 20h-19z"/><path d="M12 10v4.5M12 17.4v.1"/>',
    tip: '<path d="M9.5 18h5M10.5 21h3"/><path d="M12 3a6 6 0 0 0-3.6 10.8c.7.6 1.1 1.3 1.1 2.1V16h5v-.1c0-.8.4-1.5 1.1-2.1A6 6 0 0 0 12 3z"/>',
    remake: '<path d="M4.5 12a7.5 7.5 0 0 1 13-5.1L20 9.5M20 4.5v5h-5"/><path d="M19.5 12a7.5 7.5 0 0 1-13 5.1L4 14.5M4 19.5v-5h5"/>',
    chevR: '<path d="M9 5l7 7-7 7"/>', chevL: '<path d="M15 5l-7 7 7 7"/>', chevD: '<path d="M5 9l7 7 7-7"/>',
    arrow: '<path d="M5 12h14M13 6l6 6-6 6"/>',
    down: '<path d="M12 4v11M7 10.5l5 5 5-5M5 20h14"/>',
    upload: '<path d="M12 16V5M7 9.5l5-5 5 5M5 20h14"/>',
    x: '<path d="M6 6l12 12M18 6L6 18"/>',
    gs: '<path d="M12 3l2 4.4 4.7-1.3-1.9 4.5L21 13.4l-4.6 1.2.4 4.9L12 17l-4.8 2.5.4-4.9L3 13.4l4.2-2.8-1.9-4.5L10 7.4z"/><circle cx="12" cy="12" r="2"/>',
    heart: '<path d="M12 20s-7.5-4.6-7.5-10.2A4.3 4.3 0 0 1 12 7.2a4.3 4.3 0 0 1 7.5 2.6C19.5 15.4 12 20 12 20z"/>',
    heartpiece: '<path d="M12 20s-7.5-4.6-7.5-10.2A4.3 4.3 0 0 1 12 7.2a4.3 4.3 0 0 1 7.5 2.6C19.5 15.4 12 20 12 20z"/><path d="M12 7.2V20M4.6 11.4h14.8"/>',
    note: '<path d="M9 18V5.5l10-2V16"/><circle cx="6.5" cy="18" r="2.5"/><circle cx="16.5" cy="16" r="2.5"/>',
    gem: '<path d="M7 4h10l4 5.5L12 21 3 9.5z"/><path d="M3 9.5h18M9.5 4L12 9.5 14.5 4M12 9.5V21"/>',
    medal: '<circle cx="12" cy="14" r="6"/><circle cx="12" cy="14" r="2.4"/><path d="M8.5 3l3.5 5 3.5-5"/>',
    bag: '<path d="M5.5 8.5h13L17.5 20h-11z"/><path d="M9 8.5V7a3 3 0 0 1 6 0v1.5"/>',
    sword: '<path d="M19.5 4.5l-9 9M15 4.5h4.5V9"/><path d="M7 12l5 5M8.5 15.5L4.5 19.5"/>',
    up: '<path d="M12 19V6M6.5 11.5L12 6l5.5 5.5"/><path d="M5 3.5h14"/>',
    bottle: '<path d="M10 3h4M10.5 3v4.2L7.5 11v8.5c0 .8.7 1.5 1.5 1.5h6c.8 0 1.5-.7 1.5-1.5V11l-3-3.8V3"/><path d="M7.5 14h9"/>',
    sparkle: '<path d="M12 3l1.9 6.1L20 11l-6.1 1.9L12 19l-1.9-6.1L4 11l6.1-1.9z"/>',
    flame: '<path d="M12 21a6 6 0 0 0 6-6c0-4.2-3.2-6.3-4.2-10.5C11.6 6.3 10.6 8.4 10.6 10.5 9.5 9.6 9 8.6 8.9 7.5 7.3 9.4 6 12 6 15a6 6 0 0 0 6 6z"/>',
    bean: '<path d="M8.5 19.5c-3-2-3.6-7.5-.6-11.4s7.8-5 9.8-2.4c1.4 1.9-.8 3.6-1.6 5.6-.9 2.2.6 4.8-1.3 7.2-1.7 2.1-4.4 2.4-6.3 1z"/>',
    mask: '<path d="M4 6.5c5-2.2 11-2.2 16 0 0 7.2-3.2 13-8 13S4 13.7 4 6.5z"/><path d="M7.8 10.5h2.8M13.4 10.5h2.8M10 15.5h4"/>',
    swap: '<path d="M4 8h15l-3.5-3.5M20 16H5l3.5 3.5"/>',
    gift: '<rect x="4" y="9" width="16" height="11" rx="1.5"/><path d="M12 9v11M4 13.5h16"/><path d="M12 9C10.5 6 7 5 7 7.5S11 9 12 9zm0 0c1.5-3 5-4 5-1.5S13 9 12 9z"/>',
    dot: '<circle cx="12" cy="12" r="5"/>',
    map: '<path d="M3 6.5l6-2.5 6 2.5 6-2.5V18l-6 2.5L9 18l-6 2.5z"/><path d="M9 4v14M15 6.5v14"/>',
    dungeon: '<path d="M5 21V10.5a7 7 0 0 1 14 0V21"/><path d="M3 21h18M9.5 21v-5a2.5 2.5 0 0 1 5 0v5"/>',
    boss: '<path d="M4 8.5l4 3 4-6.5 4 6.5 4-3-1.8 10.5H5.8z"/>',
    sweep: '<circle cx="12" cy="12" r="8.5"/><circle cx="12" cy="12" r="4.5"/><path d="M12 12l6-6"/>',
    flag: '<path d="M5.5 21V3.5M5.5 4h12l-2.5 4.5 2.5 4.5h-12"/>',
    target: '<circle cx="12" cy="12" r="8.5"/><circle cx="12" cy="12" r="4.5"/><circle cx="12" cy="12" r="1" fill="currentColor"/>',
    trophy: '<path d="M8 4h8v5a4 4 0 0 1-8 0zM8 6H5a3 3 0 0 0 3 4.3M16 6h3a3 3 0 0 1-3 4.3M12 13v4M8.5 20.5h7M9.5 17h5v3.5h-5z"/>',
    paw: '<circle cx="12" cy="15.5" r="3.5"/><circle cx="6.5" cy="10.5" r="1.8"/><circle cx="17.5" cy="10.5" r="1.8"/><circle cx="9.5" cy="6" r="1.8"/><circle cx="14.5" cy="6" r="1.8"/>',
    list: '<path d="M9 6h11M9 12h11M9 18h11"/><circle cx="4.5" cy="6" r="1"/><circle cx="4.5" cy="12" r="1"/><circle cx="4.5" cy="18" r="1"/>',
    screen: '<rect x="6.5" y="2.5" width="11" height="19" rx="2.5"/><path d="M10.5 18.5h3"/>',
    eye: '<path d="M2.5 12S6 5.5 12 5.5 21.5 12 21.5 12 18 18.5 12 18.5 2.5 12 2.5 12z"/><circle cx="12" cy="12" r="3"/>',
    textsize: '<path d="M3 19l5-13 5 13M4.8 14.5h6.4M14.5 19l3.2-8.5 3.3 8.5M15.5 16.5h4.5"/>',
    play: '<path d="M7 4.5v15l12-7.5z"/>',
    clock: '<circle cx="12" cy="12" r="8.5"/><path d="M12 7.5V12l3 2"/>'
  };
  function ic(name, cls) {
    return '<svg class="ic' + (cls ? ' ' + cls : '') + '" viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round">' + (IC[name] || IC.dot) + '</svg>';
  }
  var BRAND = '<svg class="brand-mark" viewBox="0 0 32 32" aria-hidden="true"><circle cx="16" cy="16" r="12.5" fill="none" stroke="var(--line-2)" stroke-width="3"/><path d="M16 3.5A12.5 12.5 0 0 1 27.8 20" fill="none" stroke="var(--brand)" stroke-width="3" stroke-linecap="round"/><path d="M16 9.5l4.5 6.5L16 22.5 11.5 16z" fill="var(--brand)"/></svg>';

  /* ================= Helpers ================= */
  function esc(s) {
    return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }
  function md(s) { return esc(s).replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>'); }
  function plain(s) { return String(s == null ? '' : s).replace(/\*\*/g, ''); }
  function pad(n) { return (n < 10 ? '0' : '') + n; }
  function $(sel, root) { return (root || document).querySelector(sel); }
  function $$(sel, root) { return Array.prototype.slice.call((root || document).querySelectorAll(sel)); }
  function attr(s) { return esc(s); }
  function href(view, a, b) {
    return '#/' + [view, a, b].filter(function (x) { return x; }).map(encodeURIComponent).join('/');
  }
  function chNumFromId(id) { var m = /^c(\d+)/.exec(id || ''); return m ? parseInt(m[1], 10) : null; }
  function rosterOf(id) { for (var i = 0; i < ROSTER.length; i++) if (ROSTER[i].id === id) return ROSTER[i]; return null; }
  var ABBR = /^(kf|lw|sfm|hf|llr|hc|ogc|tot|kak|gc|dmt|dmc|zr|zd|zf|lh|gv|gf|wf|hw|gs|poh)$/;
  function pretty(id) {
    return String(id).split('-').filter(Boolean).map(function (w) {
      return ABBR.test(w) ? (w === 'poh' ? 'PoH' : w.toUpperCase()) : w.charAt(0).toUpperCase() + w.slice(1);
    }).join(' ');
  }
  function uniq(a) { return a.filter(function (x, i) { return x && a.indexOf(x) === i; }); }

  /* ================= State (localStorage, always guarded) ================= */
  var KEY = 'oot-guide.design-b.v1';
  var storageOK = true;
  function obj(o) { return o && typeof o === 'object' && !Array.isArray(o) ? o : {}; }
  function normalize(o) {
    o = obj(o);
    var prefs = obj(o.prefs);
    return {
      v: 1, steps: obj(o.steps), items: obj(o.items),
      last: o.last && typeof o.last === 'object' ? o.last : null,
      prefs: {
        theme: ['light', 'dark', 'system'].indexOf(prefs.theme) >= 0 ? prefs.theme : 'system',
        scale: typeof prefs.scale === 'number' && prefs.scale >= 0.85 && prefs.scale <= 1.5 ? prefs.scale : 1,
        hideDone: !!prefs.hideDone, wake: !!prefs.wake
      },
      collapsed: obj(o.collapsed), filters: obj(o.filters)
    };
  }
  function load() {
    try {
      var raw = window.localStorage.getItem(KEY);
      var probe = KEY + '.probe';
      window.localStorage.setItem(probe, '1'); window.localStorage.removeItem(probe);
      return raw ? JSON.parse(raw) : null;
    } catch (e) { storageOK = false; return null; }
  }
  var S = normalize(load());
  var saveTimer = null;
  function save() {
    clearTimeout(saveTimer);
    saveTimer = setTimeout(function () {
      try { window.localStorage.setItem(KEY, JSON.stringify(S)); storageOK = true; }
      catch (e) { storageOK = false; }
      renderStorageState();
    }, 60);
  }

  /* ================= Progress ================= */
  function isDone(id) { return !!S.steps[id]; }
  function isGot(id) { return !!S.items[id]; }
  function prog(list, test) { var d = 0; list.forEach(function (x) { if (test(x)) d++; }); return [d, list.length]; }
  function chProg(ch) { return prog(ch._steps, function (s) { return isDone(s.id); }); }
  function secProg(sec) { return prog(sec.steps, function (s) { return isDone(s.id); }); }
  function catProg(c) { var p = prog(c.items, function (it) { return isGot(it.id); }); return [p[0], c.total || p[1], p[1]]; }
  function allProg() { return prog(stepOrder, function (s) { return isDone(s.id); }); }
  function pct(p) { return p[1] ? p[0] / p[1] : 0; }
  function nextStep(ch) { for (var i = 0; i < ch._steps.length; i++) if (!isDone(ch._steps[i].id)) return ch._steps[i]; return null; }
  function nextChapter(ch) { var i = CH.indexOf(ch); return i >= 0 && i < CH.length - 1 ? CH[i + 1] : null; }
  function prevChapter(ch) { var i = CH.indexOf(ch); return i > 0 ? CH[i - 1] : null; }

  function resumeTarget() {
    var ch = (S.last && chById[S.last.ch]) || null;
    if (ch && !nextStep(ch)) ch = null;
    if (!ch) for (var i = 0; i < CH.length; i++) if (nextStep(CH[i])) { ch = CH[i]; break; }
    if (!ch) return null;
    return { ch: ch, st: nextStep(ch) };
  }

  function ring(p, size, w, key, color) {
    var r = (size - w) / 2, c = 2 * Math.PI * r;
    return '<svg class="ring" width="' + size + '" height="' + size + '" viewBox="0 0 ' + size + ' ' + size + '" aria-hidden="true"' +
      (color ? ' style="--c:' + color + '"' : '') + '>' +
      '<circle class="trk" cx="' + size / 2 + '" cy="' + size / 2 + '" r="' + r + '" fill="none" stroke-width="' + w + '"/>' +
      '<circle class="val" ' + (key ? 'data-ring="' + attr(key) + '" ' : '') + 'cx="' + size / 2 + '" cy="' + size / 2 + '" r="' + r +
      '" fill="none" stroke-width="' + w + '" stroke-linecap="round" stroke-dasharray="' + c.toFixed(2) + '" stroke-dashoffset="' + (c * (1 - p)).toFixed(2) + '"/></svg>';
  }
  function bar(p, key, color) {
    return '<div class="bar"' + (color ? ' style="--c:' + color + '"' : '') + '><i ' + (key ? 'data-bar="' + attr(key) + '" ' : '') + 'style="width:' + (p * 100).toFixed(1) + '%"></i></div>';
  }
  function countSpan(key, p) { return '<span data-count="' + attr(key) + '">' + p[0] + '/' + p[1] + '</span>'; }

  function progFor(key) {
    var k = key.split(':'), t = k[0], id = k.slice(1).join(':');
    if (t === 'all') return allProg();
    if (t === 'ch') return chById[id] ? chProg(chById[id]) : [0, 0];
    if (t === 'sec') { var s = findSection(id); return s ? secProg(s) : [0, 0]; }
    if (t === 'cat') return catById[id] ? catProg(catById[id]) : [0, 0];
    if (t === 'chc') { var ch = chById[id]; return ch ? prog(ch._collect, isGot) : [0, 0]; }
    return [0, 0];
  }
  var secIndex = null;
  function findSection(id) {
    if (!secIndex) { secIndex = {}; CH.forEach(function (ch) { ch.sections.forEach(function (s) { secIndex[s.id] = s; }); }); }
    return secIndex[id];
  }

  /* Update every counter, ring and bar in place so toggling never re-renders the chapter. */
  function refreshProgress() {
    $$('[data-count]').forEach(function (el) { var p = progFor(el.getAttribute('data-count')); el.textContent = p[0] + '/' + p[1]; });
    $$('[data-pct]').forEach(function (el) { el.textContent = Math.round(pct(progFor(el.getAttribute('data-pct'))) * 100); });
    $$('[data-ring]').forEach(function (el) {
      var p = pct(progFor(el.getAttribute('data-ring'))), c = parseFloat(el.getAttribute('stroke-dasharray'));
      el.setAttribute('stroke-dashoffset', (c * (1 - p)).toFixed(2));
    });
    $$('[data-bar]').forEach(function (el) { el.style.width = (pct(progFor(el.getAttribute('data-bar'))) * 100).toFixed(1) + '%'; });
    $$('[data-step-el]').forEach(function (el) {
      var id = el.getAttribute('data-step-el'), d = isDone(id);
      el.classList.toggle('done', d);
      var b = el.querySelector('.chk'); if (b) b.setAttribute('aria-pressed', String(d));
    });
    $$('[data-item]').forEach(function (el) {
      var g = isGot(el.getAttribute('data-item'));
      el.classList.toggle('got', g);
      if (el.hasAttribute('aria-pressed')) el.setAttribute('aria-pressed', String(g));
      var b = el.querySelector('.chk'); if (b) b.setAttribute('aria-pressed', String(g));
    });
    $$('.sec[data-sec]').forEach(function (el) {
      var s = findSection(el.getAttribute('data-sec')); if (!s) return;
      var p = secProg(s); el.classList.toggle('clear', p[1] > 0 && p[0] === p[1]);
    });
    markNow();
    renderDockAndPanel();
  }
  function markNow() {
    $$('.step.now').forEach(function (el) { el.classList.remove('now'); });
    if (route.view !== 'guide' || !current.ch) return;
    var st = nextStep(current.ch);
    if (st) { var el = document.getElementById('st-' + st.id); if (el) el.classList.add('now'); }
  }

  /* ================= Mutations ================= */
  function setStep(id, on, quiet) {
    var rec = stepById[id]; if (!rec) return;
    var before = rec ? secProg(rec.sec) : null;
    if (on) S.steps[id] = Date.now(); else delete S.steps[id];
    var gained = [];
    (rec.st.collect || []).forEach(function (cid) {
      if (on) { if (!S.items[cid]) { S.items[cid] = Date.now(); gained.push(cid); } }
      else delete S.items[cid];
    });
    S.last = { ch: rec.ch.id, step: id, t: Date.now() };
    save();
    if (quiet || !on) return;
    var after = secProg(rec.sec), chp = chProg(rec.ch);
    if (chp[0] === chp[1]) toast('Chapter ' + rec.ch.num + ' complete', 'check');
    else if (after[0] === after[1] && before[0] !== before[1]) toast(rec.sec.title + ' cleared', 'check');
    else if (gained.length) toastItem(gained[gained.length - 1]);
  }
  function setItem(id, on) {
    if (on) S.items[id] = Date.now(); else delete S.items[id];
    save();
    if (on) toastItem(id);
  }
  function toastItem(id) {
    var r = itemById[id];
    if (!r) { toast(pretty(id), 'check'); return; }
    var p = catProg(r.cat), m = catMeta(r.cat);
    toast(r.it.name + ' · ' + m.short + ' ' + p[0] + '/' + p[1], m.icon);
  }

  /* ================= Toast ================= */
  var toastTimer = null;
  function toast(msg, icon) {
    var t = $('#toast');
    t.innerHTML = ic(icon || 'check') + '<span>' + esc(msg) + '</span>';
    t.classList.add('on');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () { t.classList.remove('on'); }, 2200);
  }

  /* ================= Theme, scale, wake lock ================= */
  var mq = window.matchMedia ? window.matchMedia('(prefers-color-scheme: dark)') : null;
  function effectiveTheme() { return S.prefs.theme === 'system' ? (mq && mq.matches ? 'dark' : 'light') : S.prefs.theme; }
  function applyTheme() {
    var root = document.documentElement;
    if (S.prefs.theme === 'system') root.removeAttribute('data-theme'); else root.setAttribute('data-theme', S.prefs.theme);
    root.style.setProperty('--scale', String(S.prefs.scale));
    var m = document.getElementById('themeColor');
    if (m) m.setAttribute('content', effectiveTheme() === 'dark' ? '#0a0f14' : '#eef1f4');
  }
  if (mq && mq.addEventListener) mq.addEventListener('change', function () { applyTheme(); renderChrome(); });
  function cycleTheme() {
    var order = ['system', 'light', 'dark'];
    S.prefs.theme = order[(order.indexOf(S.prefs.theme) + 1) % 3];
    applyTheme(); save(); renderChrome();
    toast('Theme: ' + (S.prefs.theme === 'system' ? 'follow system' : S.prefs.theme), themeIcon());
  }
  function themeIcon() { return S.prefs.theme === 'system' ? 'auto' : S.prefs.theme === 'dark' ? 'moon' : 'sun'; }

  var wakeLock = null;
  var wakeSupported = !!(navigator.wakeLock && navigator.wakeLock.request);
  function applyWake() {
    if (!wakeSupported) return;
    if (S.prefs.wake && document.visibilityState === 'visible' && !wakeLock) {
      navigator.wakeLock.request('screen').then(function (l) {
        wakeLock = l; l.addEventListener('release', function () { wakeLock = null; });
      }).catch(function () { wakeLock = null; });
    } else if (!S.prefs.wake && wakeLock) {
      try { wakeLock.release(); } catch (e) {} wakeLock = null;
    }
  }
  document.addEventListener('visibilitychange', applyWake);

  /* ================= Router ================= */
  var route = { view: 'home', a: '', b: '' };
  var current = { ch: null };
  function parseHash() {
    var h = (location.hash || '').replace(/^#\/?/, '');
    var parts = h.split('/').map(function (p) { try { return decodeURIComponent(p); } catch (e) { return p; } });
    return { view: parts[0] || 'home', a: parts[1] || '', b: parts[2] || '' };
  }
  function go(h) { if (location.hash === h) onRoute(); else location.hash = h; }
  function onRoute() {
    route = parseHash();
    closeSheet(true);
    current.ch = null;
    var target = null;
    document.body.classList.remove('has-dock', 'has-panel');
    switch (route.view) {
      case 'guide': target = renderGuide(route.a, route.b); break;
      case 'collect': renderCollect(route.a); break;
      case 'ref': renderRef(route.a); break;
      case 'search': renderSearch(); break;
      case 'settings': renderSettings(); break;
      default: route.view = 'home'; renderHome();
    }
    renderChrome();
    renderDockAndPanel();
    if (target) {
      var el = document.getElementById('st-' + target);
      if (el) requestAnimationFrame(function () {
        el.scrollIntoView({ block: 'start' });
        el.classList.remove('flash'); void el.offsetWidth; el.classList.add('flash');
      });
    } else {
      window.scrollTo(0, 0);
    }
  }
  window.addEventListener('hashchange', onRoute);

  /* ================= Chrome: topbar, tabbar, rail ================= */
  var NAV = [
    ['home', 'Home', 'home'], ['guide', 'Guide', 'guide'], ['collect', 'Collect', 'collect'],
    ['ref', 'Reference', 'ref'], ['search', 'Search', 'search']
  ];
  function renderChrome() {
    var v = route.view;
    $('#tabbar').innerHTML = NAV.map(function (n) {
      var h = n[0] === 'guide' && current.ch ? href('guide', current.ch.id) : n[0] === 'guide' ? guideHref() : href(n[0]);
      return '<a class="tab" href="' + h + '"' + (v === n[0] ? ' aria-current="page"' : '') + '><span class="pill">' + ic(n[2]) + '</span>' + n[1] + '</a>';
    }).join('');

    var title, sub, btn = false;
    if (v === 'guide' && current.ch) {
      title = esc(current.ch.title); sub = 'Chapter ' + pad(current.ch.num) + ' · ' + countSpan('ch:' + current.ch.id, chProg(current.ch)); btn = true;
    } else if (v === 'collect') { var c = catById[route.a]; title = esc(c ? c.name : 'Collectibles'); sub = c ? countSpan('cat:' + c.id, catProg(c)) + ' collected' : 'Trackers'; }
    else if (v === 'ref') { title = 'Reference'; sub = esc((REF_TABS[refTabIndex(route.a)] || [])[1] || ''); }
    else if (v === 'search') { title = 'Search'; sub = 'Steps, collectibles, reference'; }
    else if (v === 'settings') { title = 'Settings'; sub = 'Theme, text, progress file'; }
    else { title = 'Waypoint'; sub = 'Ocarina of Time companion'; }
    $('#topbar').innerHTML =
      '<a class="icon-btn" href="#/" aria-label="Home">' + BRAND + '</a>' +
      (btn ? '<button class="tb-title" data-act="chapters" aria-label="Choose chapter">' : '<div class="tb-title">') +
      '<span class="txt"><span class="s">' + sub + '</span><span class="t">' + title + '</span></span>' +
      (btn ? ic('chevD', 'ic-sm') + '</button>' : '</div>') +
      '<button class="icon-btn" data-act="theme" aria-label="Theme: ' + esc(S.prefs.theme) + '">' + ic(themeIcon()) + '</button>' +
      '<a class="icon-btn" href="#/settings" aria-label="Settings"' + (v === 'settings' ? ' aria-current="page"' : '') + '>' + ic('gear') + '</a>';

    var curId = current.ch ? current.ch.id : (S.last && S.last.ch);
    $('#rail').innerHTML =
      '<a class="rail-brand" href="#/">' + BRAND + '<span><b>Waypoint</b><span>Ocarina of Time companion</span></span></a>' +
      '<nav class="rail-nav">' + NAV.map(function (n) {
        var h = n[0] === 'guide' ? (current.ch ? href('guide', current.ch.id) : guideHref()) : href(n[0]);
        return '<a href="' + h + '"' + (v === n[0] ? ' aria-current="page"' : '') + '>' + ic(n[2]) + n[1] + (n[0] === 'search' ? '<kbd>/</kbd>' : '') + '</a>';
      }).join('') + '<a href="#/settings"' + (v === 'settings' ? ' aria-current="page"' : '') + '>' + ic('gear') + 'Settings</a></nav>' +
      '<div class="rail-sec eyebrow">Chapters</div>' +
      '<div class="rail-ch">' + ROSTER.map(function (r) {
        if (!r.ch) return '<a class="na" style="--c:' + eraColor(r.era) + '" aria-disabled="true"><span class="n">' + pad(r.num) + '</span><span class="t">' + esc(r.title) + '</span><span></span></a>';
        return '<a href="' + href('guide', r.id) + '" style="--c:' + eraColor(r.era) + '"' + (v === 'guide' && curId === r.id ? ' aria-current="page"' : '') + '>' +
          '<span class="n">' + pad(r.num) + '</span><span class="t">' + esc(r.title) + '</span>' + ring(pct(chProg(r.ch)), 26, 4, 'ch:' + r.id, eraColor(r.era)) + '</a>';
      }).join('') + '</div>' +
      '<div class="rail-foot"><span class="st" id="storeState"></span><button class="icon-btn" data-act="theme" aria-label="Theme">' + ic(themeIcon()) + '</button></div>';
    renderStorageState();
  }
  function countText(key) { var p = progFor(key); return p[0] + '/' + p[1]; }
  function guideHref() { var r = resumeTarget(); return r ? href('guide', r.ch.id) : CH[0] ? href('guide', CH[0].id) : '#/'; }
  function renderStorageState() {
    var el = document.getElementById('storeState');
    if (el) el.textContent = storageOK ? 'Progress saved on this device' : 'Storage blocked: progress lasts this visit only';
  }

  /* ================= Dock (phone) + panel (desktop) ================= */
  function renderDockAndPanel() {
    var dock = $('#dock'), panel = $('#panel');
    if (route.view === 'guide' && current.ch) {
      var ch = current.ch, st = nextStep(ch), nx = nextChapter(ch);
      document.body.classList.add('has-dock', 'has-panel');
      if (st) {
        var rec = stepById[st.id];
        dock.innerHTML = '<div class="dock-in"><button class="dock-go" data-act="goto" data-id="' + attr(st.id) + '">' +
          '<span class="dock-lbl">' + ic('play', 'ic-sm') + 'Up next · ' + esc(rec.sec.title) + '</span>' +
          '<span class="dock-txt">' + esc(plain(st.text)) + '</span></button>' +
          '<button class="dock-done" data-act="done" data-id="' + attr(st.id) + '">' + ic('check') + 'Done</button></div>';
      } else {
        dock.innerHTML = '<div class="dock-in"><div class="dock-go"><span class="dock-lbl">' + ic('check', 'ic-sm') + 'Chapter complete</span>' +
          '<span class="dock-txt">' + (nx ? 'Next: ' + esc(nx.title) : 'Every written chapter is done.') + '</span></div>' +
          (nx ? '<a class="dock-done" href="' + href('guide', nx.id) + '">Next' + ic('chevR') + '</a>' : '<a class="dock-done alt" href="#/collect">Collect</a>') + '</div>';
      }
      panel.innerHTML = panelGuide(ch, st, nx);
    } else if (route.view === 'collect' && catById[route.a]) {
      document.body.classList.add('has-panel');
      dock.innerHTML = '';
      panel.innerHTML = panelCategory(catById[route.a]);
    } else {
      dock.innerHTML = ''; panel.innerHTML = '';
    }
  }
  function panelGuide(ch, st, nx) {
    var p = chProg(ch), pc = prog(ch._collect, isGot);
    var h = '<div class="panel-in">';
    h += '<section class="card p-card upnext"><h3>Up next</h3>';
    if (st) {
      var rec = stepById[st.id];
      h += '<div class="eyebrow" style="color:var(--brand)">' + esc(rec.sec.title) + ' · step ' + rec.n + '</div>' +
        '<p class="txt">' + md(st.text) + '</p>' +
        '<div class="btn-row"><button class="btn primary" data-act="done" data-id="' + attr(st.id) + '">' + ic('check') + 'Done, next step</button>' +
        '<button class="btn" data-act="goto" data-id="' + attr(st.id) + '">Show in guide</button></div>' +
        '<p class="muted" style="font-size:.78rem;margin-top:10px">Keys: <b>N</b> done · <b>J</b>/<b>K</b> move · <b>/</b> search</p>';
    } else {
      h += '<p class="txt">Chapter complete.</p>' + (nx ? '<a class="btn primary" href="' + href('guide', nx.id) + '">Chapter ' + nx.num + ': ' + esc(nx.title) + '</a>' : '');
    }
    h += '</section>';
    h += '<section class="card p-card"><h3>Chapter progress</h3><div class="p-stats">' +
      '<div class="p-stat"><b>' + countSpan('ch:' + ch.id, p) + '</b><span>Steps done</span></div>' +
      '<div class="p-stat"><b>' + countSpan('chc:' + ch.id, pc) + '</b><span>Collectibles here</span></div></div></section>';
    if (ch._collect.length) {
      h += '<section class="card p-card"><h3>Collect in this chapter</h3><div class="p-items">' + ch._collect.map(function (cid) {
        var r = itemById[cid], m = catMeta(r && r.cat), sid = stepWithCollect(ch, cid);
        return '<div class="p-item" data-item="' + attr(cid) + '" style="--c:' + m.hue + '">' +
          '<button class="chk" data-act="item" data-id="' + attr(cid) + '" aria-pressed="' + isGot(cid) + '" aria-label="Collected: ' + attr(r ? r.it.name : pretty(cid)) + '"><span class="box">' + ic('check') + '</span></button>' +
          '<span class="nm"><small>' + esc(m.short) + '</small>' + esc(r ? r.it.name : pretty(cid)) + '</span>' +
          (sid ? '<a href="' + href('guide', ch.id, sid) + '" aria-label="Go to step">' + ic('arrow', 'ic-sm') + '</a>' : '<span></span>') + '</div>';
      }).join('') + '</div></section>';
    }
    if (ch.boss) {
      h += '<section class="card p-card"><h3>Boss</h3><b style="font-family:var(--font-ui)">' + esc(ch.boss.name) + '</b>' +
        '<p class="muted" style="margin-top:6px;font-size:.92rem">Weak point: ' + esc(ch.boss.weakness) + '</p></section>';
    }
    return h + '</div>';
  }
  function stepWithCollect(ch, cid) {
    for (var i = 0; i < ch._steps.length; i++) if ((ch._steps[i].collect || []).indexOf(cid) >= 0) return ch._steps[i].id;
    return null;
  }
  function panelCategory(c) {
    var m = catMeta(c), areas = {};
    c.items.forEach(function (it) { var a = it.area || 'Other'; areas[a] = areas[a] || [0, 0]; areas[a][1]++; if (isGot(it.id)) areas[a][0]++; });
    var h = '<div class="panel-in"><section class="card p-card"><h3>By area</h3><div class="p-items">';
    Object.keys(areas).sort().forEach(function (a) {
      var p = areas[a];
      h += '<div style="padding:6px 0"><div style="display:flex;justify-content:space-between;font-size:.9rem;margin-bottom:6px"><span>' + esc(a) + '</span><span class="num muted">' + p[0] + '/' + p[1] + '</span></div>' + bar(pct(p), null, m.hue) + '</div>';
    });
    h += '</div></section>';
    if (c.note) h += '<section class="card p-card"><h3>Why it matters</h3><p style="font-size:.95rem">' + md(c.note) + '</p></section>';
    return h + '</div>';
  }

  /* ================= Home ================= */
  function dial() {
    var n = ROSTER.length, size = 240, cx = 120, r = 102, w = 16, gap = 4.5;
    var curId = (resumeTarget() || {}).ch; curId = curId ? curId.id : null;
    var out = '<svg class="dial" viewBox="0 0 ' + size + ' ' + size + '" role="img" aria-label="Progress by chapter">';
    ROSTER.forEach(function (ro, i) {
      var span = 360 / n, a0 = -90 + i * span + gap / 2, a1 = a0 + span - gap;
      var d = arc(cx, cx, r, a0, a1), len = (Math.PI * r * (a1 - a0) / 180);
      var col = eraColor(ro.era);
      if (!ro.ch) { out += '<path class="seg-miss" d="' + d + '" fill="none" stroke-width="4" stroke-linecap="round"/>'; return; }
      var p = pct(chProg(ro.ch));
      out += '<path class="seg-trk" d="' + d + '" fill="none" stroke-width="' + w + '"/>';
      out += '<path class="seg-val" data-ring="ch:' + ro.id + '" d="' + d + '" fill="none" stroke="' + col + '" stroke-width="' + w + '" stroke-dasharray="' + len.toFixed(2) + '" stroke-dashoffset="' + (len * (1 - p)).toFixed(2) + '"/>';
      if (ro.id === curId) {
        var mid = (a0 + a1) / 2 * Math.PI / 180;
        out += '<circle class="seg-cur" cx="' + (cx + (r - w - 4) * Math.cos(mid)).toFixed(1) + '" cy="' + (cx + (r - w - 4) * Math.sin(mid)).toFixed(1) + '" r="3.5" fill="var(--text)"/>';
      }
      out += '<title>Chapter ' + ro.num + '</title>';
    });
    return out + '</svg>';
  }
  function arc(cx, cy, r, a0, a1) {
    var p0 = [cx + r * Math.cos(a0 * Math.PI / 180), cy + r * Math.sin(a0 * Math.PI / 180)];
    var p1 = [cx + r * Math.cos(a1 * Math.PI / 180), cy + r * Math.sin(a1 * Math.PI / 180)];
    return 'M' + p0[0].toFixed(2) + ' ' + p0[1].toFixed(2) + 'A' + r + ' ' + r + ' 0 ' + (a1 - a0 > 180 ? 1 : 0) + ' 1 ' + p1[0].toFixed(2) + ' ' + p1[1].toFixed(2);
  }
  function renderHome() {
    var all = allProg(), r = resumeTarget();
    var h = storageBanner();
    h += '<section class="card home-hero"><div class="dial-wrap">' + dial() +
      '<div class="dial-center"><div class="big"><span data-pct="all">' + Math.round(pct(all) * 100) + '</span><small>%</small></div>' +
      '<div class="sub">' + countSpan('all', all) + ' steps</div></div></div>' +
      '<div><div class="eyebrow">Your journey</div><h1 style="margin-top:4px">' + (all[0] ? 'Welcome back.' : 'Ready when you are.') + '</h1>' +
      '<p class="muted hero-help">Each ring segment is a chapter. The dot marks where you are.</p></div>' +
      '<div class="legend"><span style="--c:var(--child)"><i></i>Child</span><span style="--c:var(--adult)"><i></i>Adult</span><span style="--c:var(--both)"><i></i>Both</span><span style="--c:var(--line-2)"><i style="opacity:.6"></i>Not written yet</span></div></section>';
    if (r) {
      var rec = stepById[r.st.id];
      h += '<section class="card resume"><div class="where"><span class="badge ' + attr(rec.sec.era || r.ch.era) + '">' + esc(eraLabel(rec.sec.era || r.ch.era)) + '</span>' +
        '<span class="eyebrow">Ch ' + pad(r.ch.num) + ' · ' + esc(rec.sec.title) + ' · step ' + rec.n + '</span></div>' +
        '<p class="txt">' + md(r.st.text) + '</p>' +
        '<div class="btn-row"><a class="btn primary" href="' + href('guide', r.ch.id, r.st.id) + '">' + ic('play', 'ic-sm') + (all[0] ? 'Resume' : 'Start') + '</a>' +
        '<button class="btn" data-act="done" data-id="' + attr(r.st.id) + '">' + ic('check', 'ic-sm') + 'Mark done</button></div></section>';
    } else if (CH.length) {
      h += '<section class="card resume"><p class="txt">Every written step is checked off.</p></section>';
    }
    if (CATS.length) {
      h += '<h2 class="h2">' + ic('collect') + 'Collectibles<a class="count" href="#/collect" style="text-decoration:none;color:var(--brand)">All trackers</a></h2>';
      h += '<div class="cat-grid">' + CATS.map(catCard).join('') + '</div>';
    }
    h += '<h2 class="h2">' + ic('guide') + 'Chapters</h2>' + chapterList(r ? r.ch.id : null);
    $('#main').innerHTML = h;
  }
  function catCard(c) {
    var m = catMeta(c), p = catProg(c);
    return '<a class="cat-card' + (p[0] >= p[1] && p[1] ? ' done' : '') + '" href="' + href('collect', c.id) + '" style="--c:' + m.hue + '">' +
      '<span class="top">' + ic(m.icon) + '<span class="name">' + esc(c.name) + '</span></span>' +
      '<span class="cnt"><span data-count="cat:' + attr(c.id) + '">' + p[0] + '/' + p[1] + '</span></span>' + bar(pct(p), 'cat:' + c.id, m.hue) + '</a>';
  }
  function chapterList(curId) {
    return '<div class="ch-list">' + ROSTER.map(function (r) {
      var col = eraColor(r.era);
      if (!r.ch) return '<div class="ch-row na" style="--c:' + col + '"><span class="n">' + pad(r.num) + '</span><span><span class="t">' + esc(r.title) + '</span><span class="m"><span class="f">Not in this build yet</span></span></span><span></span></div>';
      var p = chProg(r.ch);
      return '<a class="ch-row' + (r.id === curId ? ' cur' : '') + '" href="' + href('guide', r.id) + '" style="--c:' + col + '"><span class="n">' + pad(r.num) + '</span>' +
        '<span><span class="t">' + esc(r.title) + '</span><span class="m">' + bar(pct(p), 'ch:' + r.id, col) + '<span class="f">' + countSpan('ch:' + r.id, p) + '</span></span></span>' + ic('chevR', 'ic-sm muted') + '</a>';
    }).join('') + '</div>';
  }
  function storageBanner() {
    return storageOK ? '' : '<div class="banner">' + ic('warn') + '<span>This browser is blocking storage, so checkmarks last only until you close the page. Use <b>Settings → Export</b> to keep a copy.</span></div>';
  }

  /* ================= Guide ================= */
  function renderGuide(chId, stepId) {
    var ch = chById[chId];
    if (!ch && stepId && stepById[stepId]) ch = stepById[stepId].ch;
    if (!ch) { var r = resumeTarget(); ch = r ? r.ch : CH[0]; }
    if (!ch) { $('#main').innerHTML = '<div class="empty">No walkthrough data loaded.</div>'; return null; }
    current.ch = ch;
    S.last = { ch: ch.id, step: (S.last && S.last.ch === ch.id && S.last.step) || null, t: Date.now() }; save();
    var p = chProg(ch), col = eraColor(ch.era), nowSt = nextStep(ch);
    var h = storageBanner();
    h += '<header class="card ch-hero" style="--c:' + col + '"><div class="row1"><span class="no">' + pad(ch.num) + '</span>' +
      '<div style="flex:1;min-width:0"><div style="display:flex;gap:6px;flex-wrap:wrap;margin-bottom:6px"><span class="badge ' + attr(ch.era) + '">' + esc(eraLabel(ch.era)) + '</span></div>' +
      '<h1>' + esc(ch.title) + '</h1></div>' +
      '<div class="ring-wrap">' + ring(pct(p), 58, 6, 'ch:' + ch.id, col) + '<span class="lab"><span data-pct="ch:' + attr(ch.id) + '">' + Math.round(pct(p) * 100) + '</span>%</span></div></div>' +
      (ch.summary ? '<p class="summary">' + md(ch.summary) + '</p>' : '') +
      '<div class="ng">' + ngRow('Needs', ch.needs, '') + ngRow('Gains', ch.gains, 'gain') + '</div>' +
      '<div class="ch-stats"><span><b>' + countSpan('ch:' + ch.id, p) + '</b> steps</span>' +
      (ch._collect.length ? '<span><b>' + countSpan('chc:' + ch.id, prog(ch._collect, isGot)) + '</b> collectibles</span>' : '') +
      '<span><b>' + ch.sections.length + '</b> sections</span></div></header>';

    var bossShown = false;
    ch.sections.forEach(function (sec) {
      var k = KIND[sec.kind] || ['Section', 'list', 'var(--text-2)'];
      var sp = secProg(sec), closed = !!S.collapsed[sec.id] && !(stepId && stepById[stepId] && stepById[stepId].sec === sec);
      h += '<section class="sec' + (closed ? ' closed' : '') + (sp[1] && sp[0] === sp[1] ? ' clear' : '') + '" data-sec="' + attr(sec.id) + '" id="sec-' + attr(sec.id) + '">' +
        '<button class="sec-h" data-act="sec" data-id="' + attr(sec.id) + '" aria-expanded="' + !closed + '">' +
        '<span class="kind" style="--c:' + k[2] + '">' + ic(k[1]) + '</span>' +
        '<span class="tt"><span>' + esc(k[0]) + (sec.era && sec.era !== ch.era ? ' · ' + esc(eraLabel(sec.era)) : '') + '</span><b>' + esc(sec.title) + '</b></span>' +
        '<span class="sc">' + countSpan('sec:' + sec.id, sp) + '</span>' + ic('chevD', 'ic-sm chev') + '</button><div class="sec-body">';
      if (sec.kind === 'boss' && ch.boss && !bossShown) { h += bossCard(ch.boss); bossShown = true; }
      var hidden = 0;
      h += '<ol class="steps">';
      sec.steps.forEach(function (st, i) {
        if (S.prefs.hideDone && isDone(st.id) && st.id !== stepId) { hidden++; return; }
        h += stepHTML(st, sec, i + 1, nowSt && nowSt.id === st.id);
      });
      h += '</ol>';
      if (hidden) h += '<p class="hidden-note">' + hidden + ' finished step' + (hidden > 1 ? 's' : '') + ' hidden. <a href="#/settings">Show them</a></p>';
      h += '</div></section>';
    });
    if (ch.boss && !bossShown) h += '<h2 class="h2">' + ic('boss') + 'Boss</h2>' + bossCard(ch.boss);

    var pv = prevChapter(ch), nx = nextChapter(ch);
    h += '<nav class="ch-foot">' +
      (pv ? '<a href="' + href('guide', pv.id) + '"><span>' + ic('chevL', 'ic-sm') + ' Chapter ' + pv.num + '</span><b>' + esc(pv.title) + '</b></a>' : '') +
      (nx ? '<a class="next" href="' + href('guide', nx.id) + '"><span>Chapter ' + nx.num + ' ' + '</span><b>' + esc(nx.title) + '</b></a>' : '') + '</nav>';
    $('#main').innerHTML = h;
    return stepId && stepById[stepId] && stepById[stepId].ch === ch ? stepId : null;
  }
  function ngRow(label, list, cls) {
    list = Array.isArray(list) ? list : [];
    return '<div class="ng-row"><span class="k">' + label + '</span><span class="tags">' +
      (list.length ? list.map(function (x) { return '<span class="tag ' + cls + '">' + md(x) + '</span>'; }).join('') : '<span class="muted" style="font-size:.9rem;padding-top:4px">Nothing</span>') +
      '</span></div>';
  }
  function stepHTML(st, sec, n, now) {
    var d = isDone(st.id);
    var h = '<li class="step' + (d ? ' done' : '') + (now ? ' now' : '') + '" id="st-' + attr(st.id) + '" data-step-el="' + attr(st.id) + '">' +
      '<button class="chk" data-act="step" data-id="' + attr(st.id) + '" aria-pressed="' + d + '" aria-label="Step ' + n + ' done"><span class="box">' + ic('check') + '</span></button>' +
      '<div class="st-body"><div class="st-meta"><span class="st-no">STEP ' + pad(n) + '</span>' + timeBadge(st.time) +
      (st.warn ? '<span class="badge miss">' + ic('warn') + 'Heads up</span>' : '') + '</div>' +
      '<p class="st-text">' + md(st.text) + '</p>';
    if (st.collect && st.collect.length) h += '<div class="chips">' + st.collect.map(chip).join('') + '</div>';
    if (st.warn) h += note('warn', 'Warning', st.warn);
    if (st.tip) h += note('tip', 'Tip', st.tip);
    if (st.remake) h += note('remake', 'Remake check', st.remake);
    return h + '</div></li>';
  }
  function timeBadge(t) {
    if (t === 'night') return '<span class="badge night">' + ic('moon') + 'Night only</span>';
    if (t === 'day') return '<span class="badge day">' + ic('sun') + 'Day only</span>';
    return '';
  }
  function note(kind, label, text) {
    var icon = kind === 'warn' ? 'warn' : kind === 'tip' ? 'tip' : 'remake';
    return '<div class="note ' + kind + '">' + ic(icon) + '<div><span class="lbl">' + label + '</span>' + md(text) + '</div></div>';
  }
  function chip(cid) {
    var r = itemById[cid], m = catMeta(r && r.cat), g = isGot(cid);
    var name = r ? r.it.name : pretty(cid);
    return '<button class="chip' + (g ? ' got' : '') + (r ? '' : ' unknown') + '" data-act="item" data-id="' + attr(cid) + '" data-item="' + attr(cid) + '" aria-pressed="' + g + '" style="--c:' + m.hue + '" title="' + attr(name) + '">' +
      '<span class="ico">' + '<span class="i-off">' + ic(m.icon) + '</span><span class="i-on">' + ic('check') + '</span>' + '</span><span class="lab"><small>' + esc(r ? m.short : 'Item') + '</small>' + esc(name) + '</span></button>';
  }
  function bossCard(b) {
    return '<article class="boss"><div class="eyebrow">' + ic('boss', 'ic-sm') + 'Boss</div><h3>' + esc(b.name) + '</h3>' +
      (b.location ? '<div class="loc">' + esc(b.location) + '</div>' : '') +
      (b.weakness ? '<div class="weak">' + ic('target') + '<div><b>Weak point</b>' + md(b.weakness) + '</div></div>' : '') +
      (b.strategy && b.strategy.length ? '<ol class="strat">' + b.strategy.map(function (s) { return '<li><span>' + md(s) + '</span></li>'; }).join('') + '</ol>' : '') +
      '</article>';
  }

  /* ================= Collect ================= */
  function renderCollect(catId) {
    var c = catById[catId];
    if (!c) {
      var h = '<div class="view-h"><div><div class="eyebrow">Trackers</div><h1>Collectibles</h1></div></div>' + storageBanner();
      h += CATS.length ? '<div class="cat-grid">' + CATS.map(catCard).join('') + '</div>' : '<div class="empty">No collectible data loaded.</div>';
      $('#main').innerHTML = h; return;
    }
    var m = catMeta(c), p = catProg(c), f = filtersFor(c.id);
    var areas = uniq(c.items.map(function (it) { return it.area || 'Other'; })).sort();
    var h2 = '<header class="card cat-head" style="--c:' + m.hue + '"><div class="ring-wrap">' + ring(pct(p), 84, 8, 'cat:' + c.id, m.hue) +
      '<span class="lab" style="color:var(--c)">' + ic(m.icon, 'ic-lg') + '</span></div>' +
      '<div><div class="eyebrow">' + esc(m.short) + ' tracker</div><div class="big"><span data-count="cat:' + attr(c.id) + '">' + p[0] + '/' + p[1] + '</span></div>' +
      (p[2] < p[1] ? '<div class="listed">' + p[2] + ' of ' + p[1] + ' listed in this build</div>' : '') + '</div>' +
      (c.note ? '<p class="note-t" style="grid-column:1/-1">' + md(c.note) + '</p>' : '') + '</header>';
    h2 += '<div class="filters">' +
      segs('st', f.st, [['all', 'All'], ['missing', 'Missing'], ['got', 'Collected']]) +
      '<div class="two">' + segs('age', f.age, [['any', 'Any age'], ['child', 'Child'], ['adult', 'Adult']]) +
      segs('time', f.time, [['any', 'Any time'], ['day', 'Day only'], ['night', 'Night only']]) + '</div>' +
      '<label class="sr" for="areaSel">Area</label><select class="select" id="areaSel" data-filter="area"><option value="">All areas (' + areas.length + ')</option>' +
      areas.map(function (a) { return '<option' + (f.area === a ? ' selected' : '') + '>' + esc(a) + '</option>'; }).join('') + '</select></div>';
    h2 += '<div id="itemList">' + itemList(c, f) + '</div>';
    $('#main').innerHTML = h2;
  }
  function segs(key, val, opts) {
    return '<div class="seg" role="group">' + opts.map(function (o) {
      return '<button data-act="filter" data-key="' + key + '" data-val="' + o[0] + '" aria-pressed="' + (val === o[0]) + '">' + o[1] + '</button>';
    }).join('') + '</div>';
  }
  function filtersFor(id) {
    var f = obj(S.filters[id]);
    return { st: f.st || 'all', age: f.age || 'any', time: f.time || 'any', area: f.area || '' };
  }
  function itemList(c, f) {
    var m = catMeta(c);
    var list = c.items.filter(function (it) {
      if (f.st === 'missing' && isGot(it.id)) return false;
      if (f.st === 'got' && !isGot(it.id)) return false;
      if (f.age !== 'any' && it.age && it.age !== 'either' && it.age !== f.age) return false;
      if (f.time !== 'any' && it.time !== f.time) return false;   /* Day/Night = only at that time */
      if (f.area && (it.area || 'Other') !== f.area) return false;
      return true;
    });
    if (!list.length) return '<div class="empty">Nothing matches these filters.</div>';
    var groups = {}, order = [];
    list.forEach(function (it) { var a = it.area || 'Other'; if (!groups[a]) { groups[a] = []; order.push(a); } groups[a].push(it); });
    return order.map(function (a) {
      var g = groups[a], gp = prog(g, function (it) { return isGot(it.id); });
      return '<div class="area-h"><span>' + esc(a) + '</span><span class="num">' + gp[0] + '/' + gp[1] + '</span></div><div class="items grid2">' +
        g.map(function (it) { return itemRow(it, m); }).join('') + '</div>';
    }).join('');
  }
  function itemRow(it, m) {
    var g = isGot(it.id), ro = rosterOf(it.chapter), haveStep = it.step && stepById[it.step];
    var link;
    if (haveStep) link = '<a class="jump" href="' + href('guide', stepById[it.step].ch.id, it.step) + '">' + ic('arrow', 'ic-sm') + 'Go to step · Ch ' + stepById[it.step].ch.num + '</a>';
    else if (ro && ro.ch) link = '<a class="jump" href="' + href('guide', ro.id) + '">' + ic('arrow', 'ic-sm') + 'Open chapter ' + ro.num + '</a>';
    else if (it.chapter) link = '<span class="jump off">' + ic('clock', 'ic-sm') + 'Chapter ' + (chNumFromId(it.chapter) || '?') + ' · not written yet</span>';
    else link = '';
    var req = Array.isArray(it.requires) && it.requires.length ? '<p class="it-req"><b>Needs:</b> ' + it.requires.map(esc).join(', ') + '</p>' : '';
    return '<article class="item' + (g ? ' got' : '') + '" data-item="' + attr(it.id) + '" style="--c:' + m.hue + '">' +
      '<button class="chk" data-act="item" data-id="' + attr(it.id) + '" aria-pressed="' + g + '" aria-label="Collected: ' + attr(it.name) + '"><span class="box">' + ic('check') + '</span></button>' +
      '<div style="min-width:0"><h3 class="it-name">' + esc(it.name) + '</h3><div class="it-meta">' +
      (it.age && it.age !== 'either' ? '<span class="badge ' + attr(it.age) + '">' + esc(eraLabel(it.age)) + ' only</span>' : '') + timeBadge(it.time) +
      (it.missable ? '<span class="badge miss">' + ic('warn') + 'Missable</span>' : '') +
      '</div>' + (it.how ? '<p class="it-how">' + md(it.how) + '</p>' : '') + req +
      (it.remake ? note('remake', 'Remake check', it.remake) : '') +
      '<div class="it-foot">' + link + '</div></div></article>';
  }

  /* ================= Reference ================= */
  var REF_TABS = [['songs', 'Songs', 'note'], ['bosses', 'Bosses', 'boss'], ['bestiary', 'Bestiary', 'paw'],
    ['minigames', 'Minigames', 'trophy'], ['sidequests', 'Side quests', 'flag'], ['remake', 'Remake', 'remake']];
  function refTabIndex(a) { for (var i = 0; i < REF_TABS.length; i++) if (REF_TABS[i][0] === a) return i; return 0; }
  function renderRef(tab) {
    var t = REF_TABS[refTabIndex(tab)][0];
    var h = '<div class="view-h"><div><div class="eyebrow">Reference</div><h1>' + esc(REF_TABS[refTabIndex(tab)][1]) + '</h1></div></div>';
    h += '<nav class="tabs3">' + REF_TABS.map(function (x) {
      return '<a href="' + href('ref', x[0]) + '"' + (x[0] === t ? ' aria-current="page"' : '') + '>' + ic(x[2], 'ic-sm') + x[1] + '</a>';
    }).join('') + '</nav>';
    var arr = REF[t];
    if (t === 'songs') {
      h += '<p class="notes-cap">Glyphs show the original layout: <span class="nt nt-a" style="width:22px;height:22px;display:inline-grid;font-size:.7rem;vertical-align:middle">A</span> plus four direction notes. The remake\'s button mapping is not confirmed.</p>';
      h += list(arr, songCard);
    } else if (t === 'bosses') h += list(arr, function (b) { return bossCard(b); });
    else if (t === 'bestiary') h += list(arr, function (e) {
      return '<article class="card ref-card" id="ref-' + attr(e.id) + '"><h3>' + esc(e.name) + '</h3>' +
        (e.locations && e.locations.length ? '<div class="meta">' + e.locations.map(function (l) { return '<span class="tag">' + esc(l) + '</span>'; }).join('') + '</div>' : '') +
        '<dl class="kv">' + (e.weakness ? '<dt>Weakness</dt><dd>' + md(e.weakness) + '</dd>' : '') + (e.notes ? '<dt>Notes</dt><dd>' + md(e.notes) + '</dd>' : '') + '</dl></article>';
    });
    else if (t === 'minigames') h += list(arr, function (g) {
      return '<article class="card ref-card" id="ref-' + attr(g.id) + '"><h3>' + esc(g.name) + '</h3><div class="meta">' +
        (g.age ? '<span class="badge ' + attr(g.age) + '">' + esc(eraLabel(g.age)) + '</span>' : '') + '</div>' +
        '<dl class="kv"><dt>Where</dt><dd>' + esc(g.location || '') + '</dd><dt>Cost</dt><dd>' + esc(g.cost || '—') + '</dd>' +
        (g.rewards && g.rewards.length ? '<dt>Rewards</dt><dd><ul style="margin:0">' + g.rewards.map(function (r) { return '<li>' + md(r) + '</li>'; }).join('') + '</ul></dd>' : '') + '</dl></article>';
    });
    else if (t === 'sidequests') h += list(arr, function (q) {
      return '<article class="card ref-card" id="ref-' + attr(q.id) + '"><h3>' + esc(q.name) + '</h3>' + (q.summary ? '<p style="margin-top:6px;color:var(--text-2)">' + md(q.summary) + '</p>' : '') +
        (q.steps && q.steps.length ? '<ol>' + q.steps.map(function (s) { return '<li>' + md(s) + '</li>'; }).join('') + '</ol>' : '') +
        (q.rewards && q.rewards.length ? '<div class="meta" style="margin-top:12px">' + q.rewards.map(function (r) { return '<span class="tag gain">' + ic('gift', 'ic-sm') + '&nbsp;' + md(r) + '</span>'; }).join('') + '</div>' : '') + '</article>';
    });
    else h += remakeHTML(obj(REF.remake));
    $('#main').innerHTML = h;
  }
  function list(arr, fn) {
    arr = Array.isArray(arr) ? arr : [];
    return arr.length ? '<div class="ref-list grid2">' + arr.map(fn).join('') + '</div>' : '<div class="empty">Nothing here yet.</div>';
  }
  var DIRS = { '↑': 'up', '^': 'up', 'up': 'up', '↓': 'down', 'v': 'down', 'down': 'down', '←': 'left', '<': 'left', 'left': 'left', '→': 'right', '>': 'right', 'right': 'right' };
  var ROT = { up: 0, right: 90, down: 180, left: 270 };
  function noteGlyphs(str) {
    return String(str || '').trim().split(/\s+/).filter(Boolean).map(function (tok) {
      var t = tok.replace(/^c[-_]?(?=.)/i, '');
      if (/^a$/i.test(t)) return '<span class="nt nt-a" aria-hidden="true">A</span>';
      var d = DIRS[t.toLowerCase()];
      if (d) return '<span class="nt nt-c" aria-hidden="true"><svg class="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round" style="transform:rotate(' + ROT[d] + 'deg)"><path d="M12 19V5M6 11l6-6 6 6"/></svg></span>';
      return '<span class="nt nt-x" aria-hidden="true">' + esc(tok) + '</span>';
    }).join('');
  }
  function songCard(s) {
    var r = itemById[s.id], ro = rosterOf(s.chapter);
    var spoken = String(s.notes || '').split(/\s+/).filter(Boolean).map(function (t) { var d = DIRS[t.toLowerCase()]; return d || t; }).join(', ');
    return '<article class="card ref-card song" id="ref-' + attr(s.id) + '"><div class="song-top"><h3>' + esc(s.name) + '</h3>' +
      (r ? '<button class="learned" data-act="item" data-id="' + attr(s.id) + '" data-item="' + attr(s.id) + '" aria-pressed="' + isGot(s.id) + '">' + ic('check', 'ic-sm') + 'Learned</button>' : '') + '</div>' +
      '<div class="notes-row" role="img" aria-label="Notes: ' + attr(spoken) + '">' + noteGlyphs(s.notes) + '</div>' +
      '<dl class="kv" style="margin-top:0">' + (s.effect ? '<dt>Effect</dt><dd>' + md(s.effect) + '</dd>' : '') +
      (s.learnedFrom ? '<dt>From</dt><dd>' + md(s.learnedFrom) + '</dd>' : '') +
      (s.chapter ? '<dt>Chapter</dt><dd>' + (ro && ro.ch ? '<a href="' + href('guide', ro.id) + '">' + ro.num + ' · ' + esc(ro.title) + '</a>' : esc((ro ? ro.num + ' · ' + ro.title : s.chapter))) + '</dd>' : '') +
      '</dl></article>';
  }
  function srcHTML(s) {
    if (!s) return '';
    return '<p class="src">Source: ' + (/^https?:\/\//.test(s) ? '<a href="' + attr(s) + '" target="_blank" rel="noopener">' + esc(s) + '</a>' : esc(s)) + '</p>';
  }
  function remakeHTML(r) {
    var c = Array.isArray(r.confirmed) ? r.confirmed : [], u = Array.isArray(r.unconfirmed) ? r.unconfirmed : [], g = Array.isArray(r.guideImpacts) ? r.guideImpacts : [];
    var h = '<p class="muted" style="margin-bottom:14px;font-size:.95rem">This guide follows the original game. Anything the remake might change is flagged on the step with a dashed <b style="color:var(--remake)">Remake check</b> note.</p>';
    h += '<h2 class="h2" style="margin-top:8px">' + ic('check') + 'Confirmed<span class="count">' + c.length + '</span></h2><div class="ref-list">' +
      (c.length ? c.map(function (x) { return '<article class="card ref-card"><p>' + md(x.fact) + '</p>' + srcHTML(x.source) + '</article>'; }).join('') : '<div class="empty">Nothing confirmed yet.</div>') + '</div>';
    h += '<h2 class="h2">' + ic('remake') + 'Reported, not confirmed<span class="count">' + u.length + '</span></h2><div class="ref-list">' +
      u.map(function (x) { return '<article class="card ref-card" style="border-style:dashed"><p>' + md(x.claim) + '</p>' + srcHTML(x.source) + '</article>'; }).join('') + '</div>';
    h += '<h2 class="h2">' + ic('guide') + 'What it changes in this guide<span class="count">' + g.length + '</span></h2><div class="ref-list">' +
      g.map(function (x) { return '<article class="card ref-card"><h3 style="font-size:1rem">' + esc(x.area) + '</h3><p style="margin-top:6px">' + md(x.impact) + '</p></article>'; }).join('') + '</div>';
    return h;
  }

  /* ================= Search ================= */
  var searchIndex = null, lastQuery = '';
  function buildIndex() {
    var idx = [];
    stepOrder.forEach(function (st) {
      var r = stepById[st.id];
      idx.push({ t: 'Steps', icon: 'guide', c: 'var(--brand)', title: r.sec.title + ' · step ' + r.n, text: plain(st.text),
        extra: [st.tip, st.warn, st.remake].join(' '), meta: 'Chapter ' + r.ch.num + ' · ' + r.ch.title, href: href('guide', r.ch.id, st.id) });
    });
    CATS.forEach(function (c) {
      var m = catMeta(c);
      c.items.forEach(function (it) {
        var target = it.step && stepById[it.step] ? href('guide', stepById[it.step].ch.id, it.step) : href('collect', c.id);
        idx.push({ t: 'Collectibles', icon: m.icon, c: m.hue, title: it.name, text: it.how || '', extra: (it.area || '') + ' ' + (it.requires || []).join(' '),
          meta: m.short + ' · ' + (it.area || '') + (isGot(it.id) ? ' · collected' : ''), href: target });
      });
    });
    (REF.songs || []).forEach(function (s) { idx.push({ t: 'Reference', icon: 'note', c: 'var(--h-sky)', title: s.name, text: s.effect || '', extra: s.learnedFrom || '', meta: 'Song', href: href('ref', 'songs') }); });
    (REF.bosses || []).forEach(function (b) { idx.push({ t: 'Reference', icon: 'boss', c: 'var(--warn)', title: b.name, text: b.weakness || '', extra: (b.strategy || []).join(' ') + ' ' + (b.location || ''), meta: 'Boss', href: href('ref', 'bosses') }); });
    (REF.bestiary || []).forEach(function (e) { idx.push({ t: 'Reference', icon: 'paw', c: 'var(--h-green)', title: e.name, text: e.weakness || '', extra: (e.locations || []).join(' ') + ' ' + (e.notes || ''), meta: 'Enemy', href: href('ref', 'bestiary') }); });
    (REF.minigames || []).forEach(function (g) { idx.push({ t: 'Reference', icon: 'trophy', c: 'var(--h-gold)', title: g.name, text: (g.rewards || []).join(', '), extra: g.location || '', meta: 'Minigame · ' + (g.location || ''), href: href('ref', 'minigames') }); });
    (REF.sidequests || []).forEach(function (q) { idx.push({ t: 'Reference', icon: 'flag', c: 'var(--h-sky)', title: q.name, text: q.summary || '', extra: (q.steps || []).join(' ') + ' ' + (q.rewards || []).join(' '), meta: 'Side quest', href: href('ref', 'sidequests') }); });
    idx.forEach(function (e) { e.hay = (e.title + ' ' + e.text + ' ' + e.extra + ' ' + e.meta).toLowerCase(); e.tl = e.title.toLowerCase(); });
    return idx;
  }
  function renderSearch() {
    var h = '<div class="view-h"><div><div class="eyebrow">Everything</div><h1>Search</h1></div></div>' +
      '<div class="search-box">' + ic('search') + '<input id="q" type="search" placeholder="Try “night”, “Boomerang”, “Gohma”" autocomplete="off" enterkeyhint="search" aria-label="Search the guide" value="' + attr(lastQuery) + '"></div>' +
      '<div id="results"></div>';
    $('#main').innerHTML = h;
    var q = $('#q');
    q.addEventListener('input', function () { lastQuery = q.value; drawResults(q.value); });
    drawResults(lastQuery);
    setTimeout(function () { try { q.focus({ preventScroll: true }); } catch (e) { q.focus(); } }, 30);
  }
  function drawResults(query) {
    var out = $('#results'); if (!out) return;
    var terms = query.toLowerCase().trim().split(/\s+/).filter(Boolean);
    if (!terms.length) {
      out.innerHTML = '<p class="eyebrow" style="margin:6px 4px 10px">Quick searches</p><div class="hint-list">' +
        ['Night only', 'Gold Skulltula', 'Piece of Heart', 'Boomerang', 'Deku Shield', 'Song'].map(function (s) { return '<button class="btn" data-act="q" data-val="' + attr(s) + '">' + esc(s) + '</button>'; }).join('') + '</div>';
      return;
    }
    if (!searchIndex) searchIndex = buildIndex();
    var night = terms.indexOf('night') >= 0;
    var hits = searchIndex.filter(function (e) { return terms.every(function (t) { return e.hay.indexOf(t) >= 0; }); })
      .map(function (e) { var s = 0; terms.forEach(function (t) { if (e.tl.indexOf(t) >= 0) s += 3; if (e.tl.indexOf(t) === 0) s += 2; }); return { e: e, s: s }; })
      .sort(function (a, b) { return b.s - a.s; }).slice(0, 80);
    if (!hits.length) { out.innerHTML = '<div class="empty">No matches for “' + esc(query) + '”.</div>'; return; }
    var groups = {}, order = ['Steps', 'Collectibles', 'Reference'];
    hits.forEach(function (x) { (groups[x.e.t] = groups[x.e.t] || []).push(x.e); });
    out.innerHTML = '<p class="muted" style="margin:0 4px 12px;font-size:.85rem">' + hits.length + ' result' + (hits.length > 1 ? 's' : '') + (night ? '' : '') + '</p>' +
      order.filter(function (g) { return groups[g]; }).map(function (g) {
        return '<div class="res-group"><h2 class="h2" style="margin-top:0">' + g + '<span class="count">' + groups[g].length + '</span></h2>' + groups[g].map(function (e) {
          return '<a class="res" href="' + e.href + '"><span class="ri" style="--c:' + e.c + '">' + ic(e.icon, 'ic-sm') + '</span><span style="min-width:0"><span class="rt">' + hl(e.title, terms) + '</span>' +
            (e.text ? '<span class="rs">' + hl(e.text, terms) + '</span>' : '') + '<span class="rm">' + esc(e.meta) + '</span></span></a>';
        }).join('') + '</div>';
      }).join('');
  }
  function hl(s, terms) {
    var out = esc(s);
    terms.forEach(function (t) {
      var et = esc(t).replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      out = out.replace(new RegExp('(' + et + ')(?![^<]*>)', 'gi'), '<mark>$1</mark>');
    });
    return out;
  }

  /* ================= Settings ================= */
  function renderSettings() {
    var a = allProg(), got = Object.keys(S.items).length;
    var h = '<div class="view-h"><div><div class="eyebrow">Preferences</div><h1>Settings</h1></div></div>' + storageBanner();
    h += '<section class="card set-group">' +
      '<div class="set-row col"><div class="k"><b>Theme</b><span>Dark is easiest on the eyes in a dim room.</span></div>' +
      '<div class="seg">' + [['system', 'System'], ['light', 'Light'], ['dark', 'Dark']].map(function (o) {
        return '<button data-act="setTheme" data-val="' + o[0] + '" aria-pressed="' + (S.prefs.theme === o[0]) + '">' + o[1] + '</button>'; }).join('') + '</div></div>' +
      '<div class="set-row"><div class="k"><b>Text size</b><span>Scales the whole guide.</span></div><div class="stepper">' +
      '<button class="icon-btn" data-act="scale" data-val="-1" aria-label="Smaller text">A−</button><output>' + Math.round(S.prefs.scale * 100) + '%</output>' +
      '<button class="icon-btn" data-act="scale" data-val="1" aria-label="Larger text">A+</button></div></div>' +
      '<div class="set-row"><div class="k"><b>Hide finished steps</b><span>Keeps only what is left in each section.</span></div>' + sw('hideDone', S.prefs.hideDone) + '</div>' +
      (wakeSupported ? '<div class="set-row"><div class="k"><b>Keep screen awake</b><span>Stops the phone dimming while the guide is open.</span></div>' + sw('wake', S.prefs.wake) + '</div>' : '') +
      '</section>';
    h += '<section class="card set-group">' +
      '<div class="set-row"><div class="k"><b>Your progress</b><span>' + a[0] + ' of ' + a[1] + ' steps · ' + got + ' collectibles checked</span></div></div>' +
      '<div class="set-row col"><div class="k"><b>Back up or move devices</b><span>Export saves a small .json file. Import replaces the progress on this device with that file.</span></div>' +
      '<div class="btn-row"><button class="btn primary" data-act="export">' + ic('down', 'ic-sm') + 'Export</button><button class="btn" data-act="import">' + ic('upload', 'ic-sm') + 'Import</button></div></div>' +
      '<div class="set-row"><div class="k"><b>Start over</b><span>Clears every checkmark on this device.</span></div><button class="btn danger" data-act="reset">Reset</button></div>' +
      '<div class="set-row"><div class="k"><b>Storage</b><span id="storeState2">' + (storageOK ? 'Saved in this browser only. Other devices need an export.' : 'Blocked. Progress lasts until you close this page.') + '</span></div></div>' +
      '</section>';
    h += '<p class="muted" style="font-size:.85rem;padding:0 4px">Fan-made guide. Not affiliated with Nintendo. No game artwork is used.</p>';
    $('#main').innerHTML = h;
  }
  function sw(key, on) { return '<button class="switch" role="switch" data-act="pref" data-key="' + key + '" aria-checked="' + on + '" aria-label="' + key + '"><i></i></button>'; }

  function exportProgress() {
    var data = { app: 'oot-guide', format: 1, exported: new Date().toISOString(), steps: S.steps, items: S.items, last: S.last };
    try {
      var blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
      var a = document.createElement('a');
      a.href = URL.createObjectURL(blob);
      a.download = 'oot-progress-' + new Date().toISOString().slice(0, 10) + '.json';
      document.body.appendChild(a); a.click();
      setTimeout(function () { URL.revokeObjectURL(a.href); a.remove(); }, 1500);
      toast('Progress exported', 'down');
    } catch (e) { toast('Export failed in this browser', 'warn'); }
  }
  function importProgress(file) {
    var fr = new FileReader();
    fr.onload = function () {
      try {
        var d = JSON.parse(String(fr.result));
        if (!d || typeof d !== 'object' || (typeof d.steps !== 'object' && typeof d.items !== 'object')) throw new Error('shape');
        var steps = {}, items = {};
        Object.keys(obj(d.steps)).forEach(function (k) { if (d.steps[k]) steps[k] = d.steps[k]; });
        Object.keys(obj(d.items)).forEach(function (k) { if (d.items[k]) items[k] = d.items[k]; });
        if (!window.confirm('Replace progress on this device with ' + Object.keys(steps).length + ' steps and ' + Object.keys(items).length + ' collectibles from the file?')) return;
        S.steps = steps; S.items = items; S.last = d.last && typeof d.last === 'object' ? d.last : null;
        save(); searchIndex = null; onRoute();
        toast('Progress imported', 'upload');
      } catch (e) { toast('That file is not a progress export', 'warn'); }
    };
    fr.readAsText(file);
  }

  /* ================= Sheet (chapter picker) ================= */
  var lastFocus = null;
  function openChapters() {
    lastFocus = document.activeElement;
    var groups = [['child', 'Child'], ['adult', 'Adult'], ['both', 'Child + Adult']];
    var h = '<div class="grab"></div><div class="sheet-h"><h2 id="sheetTitle">Chapters</h2><button class="icon-btn" data-act="close" aria-label="Close">' + ic('x') + '</button></div>';
    var curId = current.ch && current.ch.id;
    h += '<div class="ch-list">' + ROSTER.map(function (r) {
      var col = eraColor(r.era);
      if (!r.ch) return '<div class="ch-row na" style="--c:' + col + '"><span class="n">' + pad(r.num) + '</span><span><span class="t">' + esc(r.title) + '</span><span class="m"><span class="f">Not in this build yet</span></span></span><span></span></div>';
      var p = chProg(r.ch);
      return '<a class="ch-row' + (r.id === curId ? ' cur' : '') + '" href="' + href('guide', r.id) + '" style="--c:' + col + '"><span class="n">' + pad(r.num) + '</span>' +
        '<span><span class="t">' + esc(r.title) + '</span><span class="m">' + bar(pct(p), null, col) + '<span class="f">' + p[0] + '/' + p[1] + '</span></span></span>' + ic('chevR', 'ic-sm muted') + '</a>';
    }).join('') + '</div>';
    void groups;
    var sh = $('#sheet');
    sh.innerHTML = h; sh.hidden = false; $('#scrim').hidden = false;
    var cur = sh.querySelector('.ch-row.cur'); if (cur) cur.scrollIntoView({ block: 'center' });
    var btn = sh.querySelector('[data-act="close"]'); if (btn) btn.focus();
  }
  function closeSheet(silent) {
    var sh = $('#sheet'); if (sh.hidden) return;
    sh.hidden = true; $('#scrim').hidden = true; sh.innerHTML = '';
    if (!silent && lastFocus && lastFocus.focus) lastFocus.focus();
  }

  /* ================= Events ================= */
  document.addEventListener('click', function (ev) {
    var el = ev.target.closest('[data-act]');
    if (!el) {
      if (ev.target.id === 'scrim') closeSheet();
      return;
    }
    var act = el.getAttribute('data-act'), id = el.getAttribute('data-id');
    switch (act) {
      case 'step': setStep(id, !isDone(id)); refreshProgress(); break;
      case 'done': doneAndAdvance(id); break;
      case 'item': setItem(id, !isGot(id)); refreshProgress(); break;
      case 'goto': scrollToStep(id); break;
      case 'sec': {
        var sec = el.closest('.sec'), closed = sec.classList.toggle('closed');
        el.setAttribute('aria-expanded', String(!closed));
        if (closed) S.collapsed[id] = 1; else delete S.collapsed[id];
        save(); break;
      }
      case 'chapters': openChapters(); break;
      case 'close': closeSheet(); break;
      case 'theme': cycleTheme(); break;
      case 'setTheme': S.prefs.theme = el.getAttribute('data-val'); applyTheme(); save(); renderSettings(); renderChrome(); break;
      case 'scale': {
        var s = Math.round((S.prefs.scale + 0.1 * parseInt(el.getAttribute('data-val'), 10)) * 10) / 10;
        S.prefs.scale = Math.min(1.4, Math.max(0.9, s)); applyTheme(); save(); renderSettings(); break;
      }
      case 'pref': {
        var k = el.getAttribute('data-key'); S.prefs[k] = !S.prefs[k]; save();
        el.setAttribute('aria-checked', String(S.prefs[k]));
        if (k === 'wake') applyWake();
        break;
      }
      case 'filter': {
        var c = route.a, f = filtersFor(c); f[el.getAttribute('data-key')] = el.getAttribute('data-val');
        S.filters[c] = f; save(); renderCollect(c); break;
      }
      case 'export': exportProgress(); break;
      case 'import': $('#importFile').click(); break;
      case 'reset':
        if (window.confirm('Clear every step and collectible checkmark on this device? Export first if you want a copy.')) {
          S.steps = {}; S.items = {}; S.last = null; save(); onRoute(); toast('Progress cleared', 'x');
        }
        break;
      case 'q': { var q = $('#q'); if (q) { q.value = el.getAttribute('data-val'); lastQuery = q.value; drawResults(q.value); } break; }
    }
  });
  document.addEventListener('change', function (ev) {
    var t = ev.target;
    if (t.id === 'importFile' && t.files && t.files[0]) { importProgress(t.files[0]); t.value = ''; }
    if (t.getAttribute && t.getAttribute('data-filter') === 'area') {
      var c = route.a, f = filtersFor(c); f.area = t.value; S.filters[c] = f; save();
      var list = $('#itemList'); if (list && catById[c]) list.innerHTML = itemList(catById[c], f);
      renderDockAndPanel();
    }
  });
  function doneAndAdvance(id) {
    if (!stepById[id]) return;
    setStep(id, true);
    var ch = stepById[id].ch;
    if (route.view !== 'guide') { refreshProgress(); if (route.view === 'home') renderHome(); return; }
    var sec = stepById[id].sec;
    if (S.prefs.hideDone) { renderGuide(ch.id); renderDockAndPanel(); } else refreshProgress();
    var nx = nextStep(ch);
    if (nx) {
      var nsec = stepById[nx.id].sec;
      if (S.collapsed[nsec.id]) { delete S.collapsed[nsec.id]; var se = document.getElementById('sec-' + nsec.id); if (se) se.classList.remove('closed'); }
      scrollToStep(nx.id, true);
    }
    void sec;
  }
  function scrollToStep(id, soft) {
    var el = document.getElementById('st-' + id);
    if (!el) { var r = stepById[id]; if (r) go(href('guide', r.ch.id, id)); return; }
    var sec = el.closest('.sec'); if (sec && sec.classList.contains('closed')) { sec.classList.remove('closed'); }
    el.scrollIntoView({ block: 'start', behavior: soft ? 'smooth' : 'auto' });
    el.classList.remove('flash'); void el.offsetWidth; el.classList.add('flash');
  }
  $('#scrim').addEventListener('click', function () { closeSheet(); });
  document.addEventListener('keydown', function (ev) {
    if (ev.key === 'Escape') { closeSheet(); return; }
    var tag = (ev.target.tagName || '').toLowerCase();
    if (tag === 'input' || tag === 'textarea' || tag === 'select' || ev.ctrlKey || ev.metaKey || ev.altKey) return;
    if (ev.key === '/') { ev.preventDefault(); go('#/search'); return; }
    if (route.view !== 'guide' || !current.ch) return;
    var k = ev.key.toLowerCase();
    if (k === 'n') { var st = nextStep(current.ch); if (st) doneAndAdvance(st.id); }
    if (k === 'j' || k === 'k') {
      var steps = $$('.step'), mid = window.innerHeight / 2, idx = 0, best = 1e9;
      steps.forEach(function (el, i) { var r = el.getBoundingClientRect(), d = Math.abs(r.top + r.height / 2 - mid); if (d < best) { best = d; idx = i; } });
      var t = steps[Math.max(0, Math.min(steps.length - 1, idx + (k === 'j' ? 1 : -1)))];
      if (t) { t.scrollIntoView({ block: 'center', behavior: 'smooth' }); }
    }
  });

  /* ================= Boot ================= */
  applyTheme();
  applyWake();
  if (!location.hash) {
    /* Opening the guide without a link lands on Home, which leads with "Resume". */
    route = { view: 'home', a: '', b: '' };
  }
  onRoute();
})();
