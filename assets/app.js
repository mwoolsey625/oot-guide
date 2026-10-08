/* Hero's Almanac — renderer for design A.
   Reads window.OOT.walkthrough / .collectibles / .reference (see BRIEF.md). No modules, no fetch,
   works from file://. Only the open chapter is rendered. */
(function () {
  'use strict';

  var OOT = window.OOT || {};
  var CHAPTERS = (Array.isArray(OOT.walkthrough) ? OOT.walkthrough.slice() : []).sort(function (a, b) {
    return chNum(a) - chNum(b);
  });
  var CATS = Array.isArray(OOT.collectibles) ? OOT.collectibles : [];
  var REF = OOT.reference || {};

  /* ------------------------------------------------------------------ indexes */
  var chapterById = {}, sectionById = {}, stepById = {}, itemById = {}, catById = {}, stepOfItem = {};
  var TOTAL_STEPS = 0;
  CHAPTERS.forEach(function (ch) {
    chapterById[ch.id] = ch;
    (ch.sections || []).forEach(function (sec) {
      sectionById[sec.id] = { ch: ch, sec: sec };
      (sec.steps || []).forEach(function (st, i) {
        TOTAL_STEPS++;
        stepById[st.id] = { ch: ch, sec: sec, step: st, n: i + 1 };
        (st.collect || []).forEach(function (cid) { if (!stepOfItem[cid]) stepOfItem[cid] = st.id; });
      });
    });
  });
  CATS.forEach(function (cat) {
    catById[cat.id] = cat;
    (cat.items || []).forEach(function (it) { if (!itemById[it.id]) itemById[it.id] = { cat: cat, item: it }; });
  });

  var REALMS = {
    c01: 'forest', c02: 'field', c03: 'village', c04: 'cavern', c05: 'jabu', c06: 'time', c07: 'woods',
    c08: 'fire', c09: 'ice', c10: 'water', c11: 'well', c12: 'shadow', c13: 'spirit', c14: 'ganon'
  };
  var KNOWN_GLYPHS = ['gold-skulltulas', 'heart-pieces', 'heart-containers', 'songs', 'spiritual-stones', 'medallions',
    'inventory-items', 'equipment', 'upgrades', 'bottles', 'great-fairies', 'big-poes', 'magic-beans', 'masks',
    'adult-trade', 'skulltula-rewards'];
  var KINDS = { overworld: 'Overworld', dungeon: 'Dungeon', boss: 'Boss', sweep: 'Collectible sweep', sidequest: 'Side quest' };

  /* ------------------------------------------------------------------ storage (never trusted) */
  var Store = (function () {
    var mem = {}, ok = false;
    try {
      var t = '__oot_probe';
      window.localStorage.setItem(t, '1');
      window.localStorage.removeItem(t);
      ok = true;
    } catch (e) { ok = false; }
    return {
      ok: function () { return ok; },
      get: function (k) {
        if (ok) {
          try { var v = window.localStorage.getItem(k); if (v !== null) return v; } catch (e) { ok = false; }
        }
        return Object.prototype.hasOwnProperty.call(mem, k) ? mem[k] : null;
      },
      set: function (k, v) {
        mem[k] = v;
        if (ok) {
          try { window.localStorage.setItem(k, v); } catch (e) { ok = false; storageWarned = false; warnStorage(); }
        }
      }
    };
  })();
  function readJSON(k) { try { var s = Store.get(k); return s ? JSON.parse(s) : null; } catch (e) { return null; } }

  var KEY_P = 'oot-guide.progress.v1', KEY_S = 'oot-guide.prefs.v1';
  /* progress format: saves and exports carry `version`; anything without one is version 1 */
  var PROGRESS_VERSION = 3;
  /* version 2: cows stopped being collectibles (in the original game they only refill a Bottle; they were
     checks only in the randomizer's location list), and the steps that existed only for a cow went with them.
     Each list gives the old step numbers that survive, in their new order. */
  var V2_STEPS = { 'c02-s03': [1, 2, 3, 4, 6], 'c04-s06': [2, 3, 4], 'c07-s04': [1, 3, 4, 5, 6] };
  var storedProgress = readJSON(KEY_P);
  var progress = normalizeProgress(storedProgress);
  /* write a migrated save back at once, so it is never migrated twice */
  if (storedProgress && storedProgress.version !== PROGRESS_VERSION) saveProgress();
  var prefs = readJSON(KEY_S) || {};
  if (['system', 'light', 'dark'].indexOf(prefs.theme) < 0) prefs.theme = 'system';
  if (typeof prefs.scale !== 'number') prefs.scale = 1;
  if (!prefs.filters || typeof prefs.filters !== 'object') prefs.filters = {};
  /* walkthrough sections start folded; prefs.open lists the ones the reader has opened, keyed by section id.
     The older prefs.collapsed (folded-list, open by default) is dropped. */
  if (!prefs.open || typeof prefs.open !== 'object' || Array.isArray(prefs.open)) prefs.open = {};
  delete prefs.collapsed;
  prefs.hideDone = !!prefs.hideDone;
  /* which game the reader plays: 'n64' hides remake notes and draws ocarina notes as N64 buttons */
  if (prefs.version !== 'n64') prefs.version = 'switch2';

  function normalizeProgress(p) {
    var out = { version: PROGRESS_VERSION, done: {}, last: null };
    if (p && typeof p === 'object') {
      if (Array.isArray(p.done)) p.done.forEach(function (id) { if (typeof id === 'string') out.done[id] = 1; });
      else if (p.done && typeof p.done === 'object') Object.keys(p.done).forEach(function (id) { if (p.done[id]) out.done[id] = 1; });
      if (p.last && typeof p.last === 'object') out.last = { chapter: String(p.last.chapter || ''), step: String(p.last.step || '') };
      if (!(p.version >= 2)) migrateV1(out);
      if (!(p.version >= 3)) migrateV2(out);
    }
    return out;
  }
  /* version 2 -> 3: the Hylian Loach, Granny's Blue Potion and the Wasteland Bombchus stopped being collectibles
     for the same reason as the cows (they repeat and record nothing in the original game); no step changed */
  function migrateV2(out) {
    ['lh-loach-fishing', 'kak-granny-buy-blue-potion', 'wasteland-bombchu-salesman'].forEach(function (id) { delete out.done[id]; });
  }
  /* version 1 -> 2: drop the cow ticks and move step ticks to their new numbers (V2_STEPS) */
  function migrateV1(out) {
    var d = out.done;
    ['llr-stables-left-cow', 'llr-stables-right-cow', 'llr-tower-left-cow', 'llr-tower-right-cow', 'kak-impas-house-cow',
      'dmt-cow-grotto-cow', 'gv-cow', 'hf-cow-grotto-cow', 'kf-links-house-cow'].forEach(function (id) { delete d[id]; });
    var sid = function (sec, n) { return sec + '-' + (n < 10 ? '0' : '') + n; };
    Object.keys(V2_STEPS).forEach(function (sec) {
      var keep = V2_STEPS[sec], was = {}, n;
      for (n = 1; n <= keep[keep.length - 1]; n++) { was[n] = !!d[sid(sec, n)]; delete d[sid(sec, n)]; }
      keep.forEach(function (old, i) { if (was[old]) d[sid(sec, i + 1)] = 1; });
      /* the resume point moves with its step; a removed step resumes from the one before it */
      if (out.last && out.last.step.indexOf(sec + '-') === 0) {
        var at = parseInt(out.last.step.slice(-2), 10), to = 0;
        keep.forEach(function (old, i) { if (old <= at) to = i + 1; });
        out.last.step = sid(sec, to || 1);
      }
    });
  }
  function saveProgress() { Store.set(KEY_P, JSON.stringify(progress)); }
  function savePrefs() { Store.set(KEY_S, JSON.stringify(prefs)); }
  function isDone(id) { return !!progress.done[id]; }

  /* ------------------------------------------------------------------ helpers */
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };
  function esc(s) {
    return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }
  /* {notes:A ↓ → ↓} in guide text is an ocarina note sequence, drawn for the chosen version */
  var NOTES_TOKEN = /\{notes:([^}]*)\}/g;
  function md(s) {
    return esc(s).replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
      .replace(NOTES_TOKEN, function (m, seq) { return inlineNotes(seq); });
  }
  function plain(s) { return String(s || '').replace(/\*\*/g, '').replace(NOTES_TOKEN, '$1'); }
  function chNum(ch) { return typeof ch.num === 'number' ? ch.num : (parseInt(String(ch.id).slice(1, 3), 10) || 0); }
  function numFromId(id) { var n = parseInt(String(id || '').slice(1, 3), 10); return isNaN(n) ? null : n; }
  function realmOf(ch) { return REALMS[String(ch.id).slice(0, 3)] || (ch.era === 'adult' ? 'adult' : 'child'); }
  function ico(id, cls) { return '<svg class="ico' + (cls ? ' ' + cls : '') + '" aria-hidden="true"><use href="#' + id + '"/></svg>'; }
  function glyphId(catId) { return KNOWN_GLYPHS.indexOf(catId) >= 0 ? 'g-' + catId : (minorRank(catId) ? 'g-check' : 'g-other'); }
  function sel(id) { return window.CSS && CSS.escape ? CSS.escape(id) : String(id).replace(/["\\]/g, '\\$&'); }
  function eraLabel(era) { return era === 'adult' ? 'Adult' : era === 'both' ? 'Child & adult' : era === 'either' ? 'Either age' : 'Child'; }
  function eraIcon(era) { return era === 'adult' ? 'i-blade' : (era === 'both' || era === 'either') ? 'i-both' : 'i-leaf'; }
  function eraBadge(era) { return '<span class="badge ' + esc(era || 'child') + '">' + ico(eraIcon(era)) + esc(eraLabel(era)) + '</span>'; }
  function timeBadge(t, long) {
    if (t === 'night') return '<span class="badge night">' + ico('i-moon') + (long ? 'Night only' : 'Night') + '</span>';
    if (t === 'day') return '<span class="badge day">' + ico('i-sun') + (long ? 'Day only' : 'Day') + '</span>';
    return '';
  }
  var UPPER = { kf: 'KF', lw: 'LW', hc: 'HC', llr: 'LLR', hf: 'HF', gs: 'GS', poh: 'PoH', sfm: 'SFM', dmt: 'DMT', dmc: 'DMC', gc: 'GC', zr: 'ZR', zd: 'ZD', zf: 'ZF', lh: 'LH', gv: 'GV', gf: 'GF', hw: 'HW', kak: 'Kak', mq: 'MQ' };
  function humanize(id) {
    return String(id).split('-').map(function (w, i) {
      if (UPPER[w]) return UPPER[w];
      return i === 0 || w.length > 2 ? w.charAt(0).toUpperCase() + w.slice(1) : w;
    }).join(' ');
  }
  function itemInfo(id) {
    var hit = itemById[id];
    if (hit) return { id: id, name: hit.item.name, catId: hit.cat.id, catName: hit.cat.name, time: hit.item.time, minor: false, item: hit.item, cat: hit.cat };
    /* ledger checks outside the collectible categories: every chest id says "chest", every loose key "key"; the rest are minigame prizes */
    var k = /chest/.test(id) ? MINOR[0] : /key/.test(id) ? MINOR[1] : MINOR[2];
    return { id: id, name: humanize(id), catId: k.id, catName: k.name, groupName: k.group, time: '', minor: true };
  }
  var MINOR = [{ id: 'check-chest', name: 'Chest', group: 'Chests' }, { id: 'check-key', name: 'Key', group: 'Keys' }, { id: 'check-prize', name: 'Prize', group: 'Prizes' }];
  function minorRank(catId) { for (var i = 0; i < MINOR.length; i++) if (MINOR[i].id === catId) return i + 1; return 0; }
  function chapterLabel(chId, short) {
    var ch = chapterById[chId];
    if (ch) return short ? 'Ch ' + chNum(ch) : 'Ch ' + chNum(ch) + ' · ' + ch.title;
    var n = numFromId(chId);
    return n ? 'Chapter ' + n : 'Later chapter';
  }
  function chapterSteps(ch) {
    var out = [];
    (ch.sections || []).forEach(function (sec) { (sec.steps || []).forEach(function (st) { out.push(st); }); });
    return out;
  }
  function chapterCollect(ch) {
    var out = [], seen = {};
    chapterSteps(ch).forEach(function (st) {
      (st.collect || []).forEach(function (id) { if (!seen[id]) { seen[id] = 1; out.push(id); } });
    });
    return out;
  }
  function frac(arr, fn) { var d = 0; arr.forEach(function (x) { if (fn(x)) d++; }); return [d, arr.length]; }
  function pct(f) { return f[1] ? Math.round(100 * f[0] / f[1]) : 0; }

  /* ------------------------------------------------------------------ counters (live) */
  var COUNTERS = {
    sec: function (id) { var s = sectionById[id]; return s ? frac(s.sec.steps || [], function (st) { return isDone(st.id); }) : [0, 0]; },
    ch: function (id) { var c = chapterById[id]; return c ? frac(chapterSteps(c), function (st) { return isDone(st.id); }) : [0, 0]; },
    chc: function (id) { var c = chapterById[id]; return c ? frac(chapterCollect(c).filter(function (x) { return itemById[x]; }), isDone) : [0, 0]; },
    cat: function (id) {
      var c = catById[id]; if (!c) return [0, 0];
      var f = frac(c.items || [], function (it) { return isDone(it.id); });
      return [f[0], typeof c.total === 'number' ? c.total : f[1]];
    },
    area: function (key) {
      var parts = key.split('|'), c = catById[parts[0]];
      if (!c) return [0, 0];
      return frac((c.items || []).filter(function (it) { return (it.area || 'Elsewhere') === parts[1]; }), function (it) { return isDone(it.id); });
    },
    all: function () {
      var d = 0; Object.keys(stepById).forEach(function (id) { if (isDone(id)) d++; });
      return [d, TOTAL_STEPS];
    }
  };
  function counterVal(spec) {
    var i = spec.indexOf(':'), type = i < 0 ? spec : spec.slice(0, i), arg = i < 0 ? '' : spec.slice(i + 1);
    return COUNTERS[type] ? COUNTERS[type](arg) : [0, 0];
  }
  function countSpan(spec, fmt) {
    var f = counterVal(spec);
    return '<span class="num" data-count="' + esc(spec) + '" data-fmt="' + (fmt || 'frac') + '">' + fmtCount(f, fmt) + '</span>';
  }
  function fmtCount(f, fmt) {
    if (fmt === 'pct') return pct(f) + '%';
    if (fmt === 'big') return f[0] + '<small> / ' + f[1] + '</small>';
    return f[0] + '/' + f[1];
  }
  function bar(spec) { return '<div class="bar" data-bar="' + esc(spec) + '"><i style="width:' + pct(counterVal(spec)) + '%"></i></div>'; }
  function refreshCounts() {
    $$('[data-count]').forEach(function (el) { el.innerHTML = fmtCount(counterVal(el.getAttribute('data-count')), el.getAttribute('data-fmt')); });
    $$('[data-bar]').forEach(function (el) { var i = el.firstElementChild; if (i) i.style.width = pct(counterVal(el.getAttribute('data-bar'))) + '%'; });
    $$('[data-viz]').forEach(function (el) { var c = catById[el.getAttribute('data-viz')]; if (c) el.innerHTML = vizInner(c); });
    $$('[data-full]').forEach(function (el) { var f = counterVal(el.getAttribute('data-full')); el.classList.toggle('is-full', f[1] > 0 && f[0] >= f[1]); });
    $$('.section[data-sec]').forEach(function (el) { el.classList.toggle('is-clear', secClear(el.getAttribute('data-sec'))); });
    markNow();
  }
  function secClear(secId) { var f = COUNTERS.sec(secId); return f[1] > 0 && f[0] >= f[1]; }

  /* ------------------------------------------------------------------ check state */
  function setDone(ids, val) {
    ids.forEach(function (id) { if (val) progress.done[id] = 1; else delete progress.done[id]; });
    saveProgress();
    syncChecks(ids);
    refreshCounts();
  }
  function syncChecks(ids) {
    ids.forEach(function (id) {
      var v = isDone(id), s = sel(id);
      $$('[data-check="' + s + '"]').forEach(function (el) { el.setAttribute('aria-pressed', v ? 'true' : 'false'); });
      $$('[data-row="' + s + '"]').forEach(function (el) { el.classList.toggle('is-done', v); });
    });
  }
  function toggleCheck(btn) {
    var id = btn.getAttribute('data-check');
    var also = (btn.getAttribute('data-also') || '').split(' ').filter(Boolean);
    var ids = [id].concat(also);
    var before = ids.map(function (x) { return [x, isDone(x)]; });
    var val = !isDone(id);
    var lastBefore = progress.last ? { chapter: progress.last.chapter, step: progress.last.step } : null;
    var secId = stepById[id] ? stepById[id].sec.id : null;
    var wasClear = secId ? secClear(secId) : false, collapsedBefore = secId ? !prefs.open[secId] : false;
    if (stepById[id]) progress.last = { chapter: stepById[id].ch.id, step: id };
    setDone(ids, val);
    /* the last step of a section was just checked: the section clears and folds away */
    var cleared = !!(val && secId && !wasClear && secClear(secId));
    if (cleared) scheduleCollapse(secId);
    var msg;
    if (cleared) msg = stepById[id].sec.title + ' cleared' + (also.length ? ' · ' + also.length + ' collected' : '');
    else if (stepById[id]) msg = val ? 'Step ' + stepById[id].n + ' done' + (also.length ? ' · ' + also.length + ' collected' : '') : 'Step ' + stepById[id].n + ' unchecked';
    else msg = (val ? 'Got: ' : 'Unchecked: ') + itemInfo(id).name;
    toast(msg, function () {
      before.forEach(function (b) { if (b[1]) progress.done[b[0]] = 1; else delete progress.done[b[0]]; });
      progress.last = lastBefore;
      /* undo also undoes the automatic fold, so the step you un-ticked is in view */
      if (cleared) { cancelCollapse(secId); setCollapsed(secId, collapsedBefore, true); }
      saveProgress(); syncChecks(ids); refreshCounts();
    });
  }

  /* ------------------------------------------------------------------ collapsible sections (merged from Waypoint) */
  var reduceMq = window.matchMedia ? window.matchMedia('(prefers-reduced-motion: reduce)') : null;
  function reducedMotion() { return !!(reduceMq && reduceMq.matches); }
  var collapseTimers = {};
  function secEl(secId) {
    var el = document.getElementById('s-' + secId);
    return el && el.classList.contains('section') ? el : null;
  }
  function setCollapsed(secId, val, animate) {
    if (val) delete prefs.open[secId]; else prefs.open[secId] = 1;
    savePrefs();
    var el = secEl(secId);
    if (!el) return;
    var still = !animate || reducedMotion();
    if (still) el.classList.add('no-anim');
    el.classList.toggle('is-collapsed', !!val);
    var b = el.querySelector('.sec-toggle');
    if (b) b.setAttribute('aria-expanded', val ? 'false' : 'true');
    if (still) { void el.offsetHeight; requestAnimationFrame(function () { el.classList.remove('no-anim'); }); }
  }
  function scheduleCollapse(secId) {
    /* persist straight away so a reload honours it, then fold after the tick has had a moment to land */
    delete prefs.open[secId]; savePrefs();
    var el = secEl(secId);
    if (!el) return;
    cancelCollapse(secId);
    collapseTimers[secId] = setTimeout(function () {
      delete collapseTimers[secId];
      if (!el.isConnected || prefs.open[secId]) return;
      if (el.contains(document.activeElement) && !el.querySelector('.sec-head').contains(document.activeElement)) {
        var t = el.querySelector('.sec-toggle');
        if (t) { try { t.focus({ preventScroll: true }); } catch (e) { t.focus(); } }
      }
      setCollapsed(secId, true, true);
      /* if the folded header ended up above the screen, bring it back so the next section follows on */
      setTimeout(function () {
        if (!el.isConnected) return;
        var top = el.getBoundingClientRect().top, bar = $('#topbar');
        if (top < (bar ? bar.getBoundingClientRect().bottom : 0)) el.scrollIntoView({ block: 'start', behavior: reducedMotion() ? 'auto' : 'smooth' });
      }, reducedMotion() ? 0 : 360);
    }, 700);
  }
  function cancelCollapse(secId) { clearTimeout(collapseTimers[secId]); delete collapseTimers[secId]; }
  function openSectionOf(el) {
    var sec = el.classList.contains('section') ? el : el.closest('.section[data-sec]');
    if (!sec) return;
    var id = sec.getAttribute('data-sec');
    cancelCollapse(id);
    if (sec.classList.contains('is-collapsed')) setCollapsed(id, false, false);
    if (el.classList.contains('is-hidden')) showHidden(id);
  }
  function showHidden(secId) {
    var el = secEl(secId);
    if (!el) return;
    $$('.step.is-hidden', el).forEach(function (s) { s.classList.remove('is-hidden'); });
    $$('.steps.all-hidden', el).forEach(function (s) { s.classList.remove('all-hidden'); });
    var n = $('.hidden-note', el); if (n) n.remove();
  }
  function markNow() {
    $$('.step.is-now').forEach(function (el) { el.classList.remove('is-now'); el.removeAttribute('aria-current'); });
    $$('.section.has-now').forEach(function (el) { el.classList.remove('has-now'); });
    if (current.view !== 'chapter' || !current.ch) return;
    var nx = nextStepOf(current.ch);
    var el = nx ? document.getElementById('s-' + nx.id) : null;
    if (!el) return;
    el.classList.add('is-now'); el.setAttribute('aria-current', 'step');
    var sec = el.closest('.section'); if (sec) sec.classList.add('has-now');
  }

  /* ------------------------------------------------------------------ components */
  function chk(id, label, also) {
    return '<button type="button" class="chk" data-check="' + esc(id) + '"' + (also && also.length ? ' data-also="' + esc(also.join(' ')) + '"' : '') +
      ' aria-pressed="' + (isDone(id) ? 'true' : 'false') + '" aria-label="' + esc(label) + '"><span class="box">' + ico('i-tick') + '</span></button>';
  }
  function chip(id) {
    var inf = itemInfo(id);
    /* a quiet pill, not a second checkbox: the glyph turns into a filled tick once collected */
    return '<button type="button" class="chip' + (inf.minor ? ' is-minor' : '') + '" data-check="' + esc(id) + '" aria-pressed="' + (isDone(id) ? 'true' : 'false') + '"' +
      ' aria-label="' + esc(inf.catName + ': ' + inf.name) + '">' +
      '<span class="chip-g"><svg class="g" aria-hidden="true"><use href="#' + glyphId(inf.catId) + '"/></svg>' + ico('i-tick', 'chip-ok') + '</span>' +
      '<span class="chip-text"><span class="chip-cat">' + esc(inf.catName) + '</span>' + esc(inf.name) + '</span>' +
      (inf.time === 'night' ? '<svg class="chip-time" aria-hidden="true"><use href="#i-moon"/></svg>' : '') +
      '</button>';
  }
  function note(kind, text) {
    if (!text || (kind === 'remake' && prefs.version === 'n64')) return '';
    var map = { tip: ['i-spark', 'Hint'], warn: ['i-caution', 'Caution'], remake: ['i-hourglass', 'Remake check · unconfirmed'] };
    return '<div class="note ' + kind + '">' + ico(map[kind][0]) + '<div><b>' + map[kind][1] + '</b>' + md(text) + '</div></div>';
  }
  function emblem(n) { return '<span class="emblem"><svg aria-hidden="true"><use href="#emblem"/></svg><b>' + esc(n) + '</b></span>'; }
  function frontArt() {
    return '<svg class="front-sky" viewBox="0 0 400 140" preserveAspectRatio="xMaxYMin meet" aria-hidden="true">' +
      '<g class="sun"><circle cx="352" cy="44" r="30" fill="currentColor" opacity=".18"/><circle cx="352" cy="44" r="17" fill="currentColor"/></g>' +
      '<g class="moon" fill="currentColor"><path d="M356 24a20 20 0 1 0 17 31 16.5 16.5 0 0 1-17-31z"/><circle cx="60" cy="18" r="1.2"/><circle cx="160" cy="30" r="1"/><circle cx="250" cy="12" r="1.4"/><circle cx="300" cy="64" r=".9"/><circle cx="392" cy="98" r="1.1"/><circle cx="214" cy="80" r=".9"/><circle cx="320" cy="20" r="1"/></g></svg>' +
      '<svg class="front-art" viewBox="0 0 400 120" preserveAspectRatio="xMidYMax slice" aria-hidden="true">' +
      '<g class="era-child" fill="currentColor"><path opacity=".5" d="M0 120V82c40-18 80-22 120-10s70 14 110 2 90-20 170 0v46z"/>' +
      '<circle cx="64" cy="70" r="13"/><rect x="62" y="76" width="4" height="16"/><circle cx="84" cy="78" r="9"/><circle cx="300" cy="66" r="15"/><rect x="298" y="74" width="4" height="18"/><circle cx="326" cy="76" r="10"/>' +
      '<path d="M0 120V98c60-14 120-10 180 0s140 8 220-6v28z"/></g>' +
      '<g class="era-adult" fill="currentColor"><path opacity=".5" d="M0 120V80l30-14 22 10 30-26 26 22 20-8 34 20 30-30 24 18 40-12 34 22 30-16 40 18 30-8 30 10v54z"/>' +
      '<path d="M236 120V64h7v-7h6v7h6v-9h6v9h7v56z"/><path d="M276 120V82l6-4 5 5 6-3v40z"/><path d="M60 120V76h5v-6h5v6h5v-4h5v48z"/>' +
      '<path d="M0 120V100c50-6 110-12 170-4s150 10 230-2v26z"/></g></svg>';
  }

  /* ------------------------------------------------------------------ DOM refs */
  var mainEl = $('#main'), asideEl = $('#aside'), railEl = $('#rail'), appEl = $('.app');
  var topEyebrow = $('#topEyebrow'), topLabel = $('#topLabel'), fab = $('#fab');
  var sheet = $('#sheet'), sheetBody = $('#sheetBody'), sheetTitle = $('#sheetTitle');
  var current = { view: '', ch: null, cat: null };
  var sectionObserver = null;
  var scrollMemo = {};

  /* ------------------------------------------------------------------ chapter view */
  function renderChapter(ch, target) {
    current.view = 'chapter'; current.ch = ch;
    progress.last = { chapter: ch.id, step: (progress.last && progress.last.chapter === ch.id) ? progress.last.step : '' };
    saveProgress();
    var realm = realmOf(ch), n = chNum(ch);
    var needs = (ch.needs || []), gains = (ch.gains || []);
    var collectIds = chapterCollect(ch);
    /* a deep link always lands in an open section */
    var tSec = target && stepById[target] && stepById[target].ch === ch ? stepById[target].sec.id : (target && sectionById[target] && sectionById[target].ch === ch ? target : null);
    if (tSec && !prefs.open[tSec]) { prefs.open[tSec] = 1; savePrefs(); }

    var h = '<div data-realm="' + realm + '" class="era-' + esc(ch.era) + '">';
    h += '<header class="front">' + frontArt().replace('class="era-' + (ch.era === 'adult' ? 'child' : 'adult') + '"', 'style="display:none"') +
      '<div class="front-top">' + emblem(n) + '<div><p class="eyebrow">Chapter ' + n + '</p><div style="margin-top:6px">' + eraBadge(ch.era) + '</div></div></div>' +
      '<h1>' + esc(ch.title) + '</h1>' +
      (ch.summary ? '<p class="summary">' + md(ch.summary) + '</p>' : '') +
      '<div class="ng"><div><h3>Bring</h3><ul>' + (needs.length ? needs.map(function (x) { return '<li>' + esc(x) + '</li>'; }).join('') : '<li class="empty">Nothing. Start here.</li>') + '</ul></div>' +
      '<div class="gains"><h3>Earn</h3><ul>' + (gains.length ? gains.map(function (x) { return '<li>' + esc(x) + '</li>'; }).join('') : '<li class="empty">None listed</li>') + '</ul></div></div>' +
      '<div class="ch-progress">' + bar('ch:' + ch.id) + '<span>' + countSpan('ch:' + ch.id) + ' steps</span></div>';
    if (collectIds.length) {
      h += '<details class="haul"><summary>' + ico('g-gold-skulltulas') + '<span>Collectibles here · ' + countSpan('chc:' + ch.id) + '</span>' + ico('i-chev', 'chev') + '</summary>' +
        '<div class="haul-body">' + haulChips(collectIds) + '</div></details>';
    }
    h += '</header>';

    (ch.sections || []).forEach(function (sec) { h += renderSection(ch, sec, target); });
    if (ch.boss && !(ch.sections || []).some(function (s) { return s.kind === 'boss'; })) h += '<section class="section">' + bossCard(ch.boss, ch, false) + '</section>';
    h += chapterNav(ch) + '</div>';
    mainEl.innerHTML = h;

    setTop('Chapter ' + n + ' · ' + eraLabel(ch.era), (ch.sections && ch.sections[0]) ? ch.sections[0].title : ch.title);
    renderAside(chapterAside(ch, realm));
    fab.hidden = false;
    fab.setAttribute('data-realm', realm);
    updateFab();
    markNow();
    observeSections();

    if (target) focusTarget(target, 'center');
    else restoreScroll();
  }
  function haulChips(ids) {
    var groups = {}, order = [];
    ids.forEach(function (id) {
      var inf = itemInfo(id);
      if (!groups[inf.catId]) { groups[inf.catId] = { name: inf.groupName || inf.catName, ids: [] }; order.push(inf.catId); }
      groups[inf.catId].ids.push(id);
    });
    order.sort(function (a, b) { return minorRank(a) - minorRank(b); });
    return order.map(function (cid) {
      return '<div class="cat-h"><span>' + esc(groups[cid].name) + '</span></div><div class="chips">' + groups[cid].ids.map(chip).join('') + '</div>';
    }).join('');
  }
  /* Each section is a collapsible group: the header is a real button (inside the h2) with the kind icon,
     title, era badge when it differs from the chapter, an x/y count and a chevron. Sections start folded;
     the ones the reader opened live in prefs.open; finished steps can be tucked away at render time (prefs.hideDone). */
  function renderSection(ch, sec, target) {
    var era = sec.era || ch.era, kind = KINDS[sec.kind] ? sec.kind : 'overworld';
    var steps = sec.steps || [];
    var closed = !prefs.open[sec.id], clear = secClear(sec.id), bodyId = 'sb-' + sec.id;
    var h = '<section class="section k-' + kind + (closed ? ' is-collapsed' : '') + (clear ? ' is-clear' : '') + '" id="s-' + esc(sec.id) + '" data-sec="' + esc(sec.id) + '" data-era="' + esc(era) + '" data-title="' + esc(sec.title) + '">' +
      '<header class="sec-head"><h2 class="sec-h"><button type="button" class="sec-toggle" data-act="sec" data-sec="' + esc(sec.id) + '" aria-expanded="' + (closed ? 'false' : 'true') + '" aria-controls="' + esc(bodyId) + '">' +
      '<span class="sec-ico">' + ico('k-' + kind, 'ico-kind') + ico('i-tick', 'ico-clear') + '</span>' +
      '<span class="sec-tt"><span class="sec-title">' + esc(sec.title) + '</span>' +
      '<span class="sec-meta"><span class="sec-kind">' + esc(KINDS[kind]) + '</span>' + (era !== ch.era ? eraBadge(era) : '') +
      '<span class="sec-cleared">' + ico('i-tick') + 'Cleared</span><span class="sec-next">Up next</span></span></span>' +
      '<span class="sec-count">' + countSpan('sec:' + sec.id) + '<span class="visually-hidden"> steps done</span></span>' +
      ico('i-chev', 'sec-chev') + '</button></h2></header>' +
      '<div class="sec-body" id="' + esc(bodyId) + '"><div class="sec-inner">';
    if (kind === 'boss' && ch.boss) h += bossCard(ch.boss, ch, false);
    var hidden = 0, rows = '';
    steps.forEach(function (st, i) {
      var hide = prefs.hideDone && isDone(st.id) && st.id !== target;
      if (hide) hidden++;
      rows += renderStep(st, i + 1, hide);
    });
    if (hidden) h += '<p class="hidden-note">' + ico('i-tick') + '<span>' + hidden + ' finished step' + (hidden === 1 ? '' : 's') + ' hidden ·</span>' +
      '<button type="button" data-act="show-hidden" data-sec="' + esc(sec.id) + '">Show</button></p>';
    h += '<ol class="steps' + (hidden && hidden === steps.length ? ' all-hidden' : '') + '">' + rows + '</ol>';
    h += '</div></div></section>';
    return h;
  }
  function renderStep(st, n, hide) {
    var collect = st.collect || [];
    var t = st.time === 'night' || st.time === 'day' ? st.time : '';
    return '<li class="step' + (t ? ' t-' + t : '') + (isDone(st.id) ? ' is-done' : '') + (hide ? ' is-hidden' : '') + '" id="s-' + esc(st.id) + '" data-row="' + esc(st.id) + '">' +
      '<div class="step-rail">' + chk(st.id, 'Step ' + n + ' done', collect) + '<span class="step-n">' + n + '</span></div>' +
      '<div class="step-body">' +
      (t ? '<div class="step-badges">' + timeBadge(t, true) + '</div>' : '') +
      '<p class="step-text">' + md(st.text) + '</p>' +
      (collect.length ? '<div class="chips">' + collect.map(chip).join('') + '</div>' : '') +
      note('warn', st.warn) + note('tip', st.tip) + note('remake', st.remake) +
      '</div></li>';
  }
  function bossCard(b, ch, withLink) {
    var strat = Array.isArray(b.strategy) ? b.strategy : [];
    return '<article class="boss" id="boss-' + esc(b.id) + '">' +
      '<p class="eyebrow">' + ico('k-boss') + 'Boss' + (b.location ? ' · ' + esc(b.location) : '') + '</p>' +
      '<h3>' + esc(b.name) + '</h3>' +
      (b.weakness ? '<div class="weak"><b>Weak point</b>' + md(b.weakness) + '</div>' : '') +
      (strat.length ? '<ol>' + strat.map(function (s) { return '<li>' + md(s) + '</li>'; }).join('') + '</ol>' : '') +
      (withLink && ch ? '<a class="boss-link" href="#/ch/' + esc(ch.id) + '/' + esc(bossSectionId(ch)) + '">Fight it in ' + esc(chapterLabel(ch.id, true)) + ' ' + ico('i-chev') + '</a>' : '') +
      '</article>';
  }
  function bossSectionId(ch) {
    var s = (ch.sections || []).filter(function (x) { return x.kind === 'boss'; })[0];
    return s ? s.id : '';
  }
  function chapterNav(ch) {
    var i = CHAPTERS.indexOf(ch), prev = CHAPTERS[i - 1], next = CHAPTERS[i + 1];
    return '<nav class="ch-nav" aria-label="Chapters">' +
      (prev ? '<a class="prev" href="#/ch/' + esc(prev.id) + '"><span class="eyebrow">Previous · Ch ' + chNum(prev) + '</span><span>' + esc(prev.title) + '</span></a>' : '') +
      (next ? '<a class="next" href="#/ch/' + esc(next.id) + '"><span class="eyebrow">Next · Ch ' + chNum(next) + '</span><span>' + esc(next.title) + '</span></a>' : '') +
      '</nav>';
  }
  function chapterAside(ch, realm) {
    var ids = chapterCollect(ch);
    var h = '<div data-realm="' + realm + '"><div class="aside-block"><p class="eyebrow">This chapter</p><h2>' + esc(ch.title) + '</h2>' +
      '<div class="ch-progress" style="margin-top:10px">' + bar('ch:' + ch.id) + '<span>' + countSpan('ch:' + ch.id, 'pct') + '</span></div>' +
      '<ul class="mini-sec">' + (ch.sections || []).map(function (sec) {
        var kind = KINDS[sec.kind] ? sec.kind : 'overworld';
        return '<li><a href="#/ch/' + esc(ch.id) + '/' + esc(sec.id) + '">' + ico('k-' + kind) + '<span class="t">' + esc(sec.title) + '</span><span class="c">' + countSpan('sec:' + sec.id) + '</span></a></li>';
      }).join('') + '</ul></div>';
    if (ids.length) h += '<div class="aside-block"><p class="eyebrow">Collectibles here · ' + countSpan('chc:' + ch.id) + '</p>' + haulChips(ids) + '</div>';
    if (ch.boss) h += '<div class="aside-block"><p class="eyebrow">Boss</p><a class="btn" style="width:100%;justify-content:flex-start" href="#/ch/' + esc(ch.id) + '/' + esc(bossSectionId(ch)) + '">' + ico('k-boss') + esc(ch.boss.name) + '</a></div>';
    return h + '</div>';
  }
  function nextStepOf(ch) {
    var steps = chapterSteps(ch);
    var lastIdx = -1;
    steps.forEach(function (st, i) { if (isDone(st.id)) lastIdx = i; });
    for (var i = lastIdx + 1; i < steps.length; i++) if (!isDone(steps[i].id)) return steps[i];
    for (var j = 0; j < steps.length; j++) if (!isDone(steps[j].id)) return steps[j];
    return null;
  }
  function updateFab() {
    if (current.view !== 'chapter' || !current.ch) return;
    var nx = nextStepOf(current.ch);
    var i = CHAPTERS.indexOf(current.ch);
    fab.querySelector('span').textContent = nx ? 'Next step' : (CHAPTERS[i + 1] ? 'Next chapter' : 'Chapter done');
  }
  function onFab() {
    if (!current.ch) return;
    var nx = nextStepOf(current.ch);
    if (nx) { focusTarget(nx.id, 'center'); return; }
    var i = CHAPTERS.indexOf(current.ch);
    if (CHAPTERS[i + 1]) go('ch/' + CHAPTERS[i + 1].id);
  }
  function observeSections() {
    if (sectionObserver) sectionObserver.disconnect();
    if (!('IntersectionObserver' in window)) return;
    sectionObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) topLabel.textContent = e.target.getAttribute('data-title') || '';
      });
    }, { rootMargin: '-70px 0px -75% 0px' });
    $$('.section[data-title]').forEach(function (s) { sectionObserver.observe(s); });
  }
  function focusTarget(id, block) {
    var el = document.getElementById('s-' + id) || document.getElementById(id);
    if (!el) return;
    openSectionOf(el); /* FAB, deep links, search and tracker links: open the group before scrolling */
    requestAnimationFrame(function () {
      el.scrollIntoView({ block: el.classList.contains('section') ? 'start' : (block || 'center'), behavior: 'auto' });
      el.classList.remove('flash'); void el.offsetWidth; el.classList.add('flash');
    });
  }

  /* ------------------------------------------------------------------ journey */
  function renderJourney() {
    current.view = 'journey'; current.ch = null;
    var h = '<div class="page-head"><p class="eyebrow">Hero\'s Almanac</p><h1>Journey</h1><p>Every chapter in order. Tap one to open it; only that chapter loads.</p></div>';
    var last = progress.last && chapterById[progress.last.chapter] ? chapterById[progress.last.chapter] : null;
    if (last) {
      var nx = nextStepOf(last);
      h += '<a class="resume" data-realm="' + realmOf(last) + '" href="#/ch/' + esc(last.id) + (nx ? '/' + esc(nx.id) : '') + '">' + ico('i-next') +
        '<span style="min-width:0"><span class="eyebrow">Resume · ' + esc(chapterLabel(last.id, true)) + '</span><b>' + esc(nx ? stepById[nx.id].sec.title + ', step ' + stepById[nx.id].n : last.title) + '</b>' +
        (nx ? '<small>' + esc(plain(nx.text)) + '</small>' : '<small>Every step in this chapter is checked.</small>') + '</span></a>';
    }
    var feat = ['gold-skulltulas', 'heart-pieces'].filter(function (c) { return catById[c]; });
    if (feat.length < 2) CATS.slice(0, 2 - feat.length).forEach(function (c) { if (feat.indexOf(c.id) < 0) feat.push(c.id); });
    h += '<div class="overall"><div class="card"><p class="eyebrow">Steps</p><div class="big">' + countSpan('all', 'big') + '</div>' + bar('all') + '</div>';
    feat.slice(0, 1).forEach(function (cid) {
      h += '<a class="card" style="text-decoration:none" href="#/collect/' + esc(cid) + '"><p class="eyebrow">' + esc(catById[cid].name) + '</p><div class="big">' + countSpan('cat:' + cid, 'big') + '</div>' + bar('cat:' + cid) + '</a>';
    });
    h += '</div>';
    h += '<ol class="timeline">' + timelineItems(false) + '</ol>';
    mainEl.innerHTML = h;
    setTop('Hero\'s Almanac', 'Journey');
    renderAside('');
    fab.hidden = true;
    restoreScroll();
  }
  function timelineItems(compact) {
    var h = '', shown = false;
    CHAPTERS.forEach(function (ch, i) {
      var prev = CHAPTERS[i - 1];
      if (!shown && prev && prev.era !== 'adult' && ch.era === 'adult') {
        shown = true;
        h += compact ? '<li class="years-li">Seven years pass</li>' : '<li class="years"><em>Seven years pass</em><span></span></li>';
      }
      var isCur = current.ch === ch || (!current.ch && progress.last && progress.last.chapter === ch.id);
      if (compact) {
        h += '<li data-realm="' + realmOf(ch) + '"><a href="#/ch/' + esc(ch.id) + '"' + (current.ch === ch ? ' aria-current="true"' : '') + '><span class="jl-num">' + chNum(ch) + '</span><span class="jl-t">' + esc(ch.title) + '</span><span class="jl-c">' + countSpan('ch:' + ch.id, 'pct') + '</span></a></li>';
      } else {
        var ids = chapterCollect(ch).filter(function (x) { return itemById[x]; });
        h += '<li class="tl-item' + (isCur ? ' is-current' : '') + '" data-realm="' + realmOf(ch) + '"><a href="#/ch/' + esc(ch.id) + '">' + emblem(chNum(ch)) +
          '<div class="tl-body"><h3>' + esc(ch.title) + '</h3><div class="tl-meta">' + eraBadge(ch.era) + '<span>' + countSpan('ch:' + ch.id) + ' steps</span>' +
          (ids.length ? '<span>' + countSpan('chc:' + ch.id) + ' collectibles</span>' : '') + (ch.boss ? '<span>' + ico('k-boss') + ' ' + esc(shortBoss(ch.boss.name)) + '</span>' : '') + '</div>' +
          bar('ch:' + ch.id) + '</div></a></li>';
      }
    });
    return h;
  }
  function shortBoss(name) { var w = String(name).split(' '); return w.slice(-2).join(' '); }

  /* ------------------------------------------------------------------ collect */
  function renderCollectHub() {
    current.view = 'collect'; current.ch = null;
    var h = '<div class="page-head"><p class="eyebrow">Collect</p><h1>Trackers</h1><p>Checks here and in the walkthrough are the same. Tick either one.</p></div><div class="cat-grid">';
    CATS.forEach(function (cat) {
      var miss = (cat.items || []).filter(function (it) { return it.missable && !isDone(it.id); }).length;
      h += '<a class="card cat-card" data-full="cat:' + esc(cat.id) + '" href="#/collect/' + esc(cat.id) + '"><div class="top"><svg class="g" aria-hidden="true"><use href="#' + glyphId(cat.id) + '"/></svg><h3>' + esc(cat.name) + '</h3></div>' +
        (miss ? '<span><span class="badge miss">' + ico('i-caution') + miss + ' missable</span></span>' : '') +
        '<div class="count"><b>' + countSpan('cat:' + cat.id, 'big') + '</b></div>' + bar('cat:' + cat.id) + '</a>';
    });
    if (!CATS.length) h += '<p class="empty-state">No collectible data loaded.</p>';
    h += '</div>';
    mainEl.innerHTML = h;
    refreshCounts();
    setTop('Collect', 'All trackers');
    renderAside(missableAside());
    fab.hidden = true;
    restoreScroll();
  }
  function missableAside() {
    var open = [];
    CATS.forEach(function (cat) { (cat.items || []).forEach(function (it) { if (it.missable && !isDone(it.id)) open.push(it.id); }); });
    var h = '<div class="aside-block"><p class="eyebrow">Missable · still open</p><h2>Do these before it is too late</h2>';
    h += open.length ? '<div class="chips">' + open.map(chip).join('') + '</div>' : '<p class="muted" style="margin-top:8px">Nothing missable is open.</p>';
    return h + '</div>';
  }
  function catFilters(catId) {
    var f = prefs.filters[catId] || {};
    return { status: f.status || 'all', age: f.age || 'any', time: f.time || 'any', area: f.area || '' };
  }
  function renderTracker(cat, focusItem) {
    current.view = 'tracker'; current.ch = null; current.cat = cat;
    if (focusItem) prefs.filters[cat.id] = {};
    var f = catFilters(cat.id);
    var items = cat.items || [];
    var areas = [];
    items.forEach(function (it) { var a = it.area || 'Elsewhere'; if (areas.indexOf(a) < 0) areas.push(a); });

    var h = '<div class="tracker-head"><svg class="g" aria-hidden="true"><use href="#' + glyphId(cat.id) + '"/></svg><div style="min-width:0"><p class="eyebrow">Tracker</p><h1>' + esc(cat.name) + '</h1></div></div>' +
      '<div class="tracker-top"><div class="tracker-count">' + countSpan('cat:' + cat.id, 'big') + '</div>' +
      '<div class="viz" data-viz="' + esc(cat.id) + '">' + vizInner(cat) + '</div></div>' +
      (cat.note ? '<p class="tracker-note">' + md(cat.note) + '</p>' : '') +
      (typeof cat.total === 'number' && items.length < cat.total ? '<p class="build-note">' + items.length + ' of ' + cat.total + ' entries are in this build of the data.</p>' : '');

    h += '<div class="filters" data-cat="' + esc(cat.id) + '">' +
      '<div><p class="seg-label">Show</p>' + seg('status', f.status, [['all', 'All'], ['missing', 'Missing'], ['got', 'Got']]) + '</div>' +
      '<div class="row"><div><p class="seg-label">Age</p>' + seg('age', f.age, [['any', 'Any'], ['child', 'Child'], ['adult', 'Adult']]) + '</div>' +
      '<div><p class="seg-label">Gettable at</p>' + seg('time', f.time, [['any', 'Any'], ['day', ico('i-sun')], ['night', ico('i-moon')]]) + '</div></div>' +
      '<div><label class="seg-label" for="areaSel">Area</label><select class="select" id="areaSel" data-act="area"><option value="">All areas</option>' +
      areas.map(function (a) { return '<option' + (a === f.area ? ' selected' : '') + '>' + esc(a) + '</option>'; }).join('') + '</select></div></div>';

    var shown = items.filter(function (it) {
      if (f.status === 'missing' && isDone(it.id)) return false;
      if (f.status === 'got' && !isDone(it.id)) return false;
      if (f.age === 'child' && it.age === 'adult') return false;
      if (f.age === 'adult' && it.age === 'child') return false;
      if (f.time === 'day' && it.time === 'night') return false;
      if (f.time === 'night' && it.time === 'day') return false;
      if (f.area && (it.area || 'Elsewhere') !== f.area) return false;
      return true;
    });
    h += '<p class="result-count">' + shown.length + ' of ' + items.length + ' shown</p>';
    if (!shown.length) h += '<div class="empty-state">Nothing matches these filters.</div>';
    var byArea = {}, order = [];
    shown.forEach(function (it) { var a = it.area || 'Elsewhere'; if (!byArea[a]) { byArea[a] = []; order.push(a); } byArea[a].push(it); });
    order.forEach(function (a) {
      h += '<div class="area-head"><h2>' + esc(a) + '</h2><span>' + countSpan('area:' + cat.id + '|' + a) + '</span></div><ul class="items">' + byArea[a].map(function (it) { return trackerItem(cat, it); }).join('') + '</ul>';
    });
    mainEl.innerHTML = h;
    setTop('Collect', cat.name);
    renderAside(missableAside());
    fab.hidden = true;
    if (focusItem) focusTarget(focusItem); else restoreScroll();
  }
  function seg(key, val, opts) {
    return '<div class="seg" role="group">' + opts.map(function (o) {
      var label = o[1].indexOf('<svg') === 0 ? ' aria-label="' + (o[0] === 'day' ? 'Day' : 'Night') + '"' : '';
      return '<button type="button" data-act="filter" data-key="' + key + '" data-val="' + o[0] + '" aria-pressed="' + (o[0] === val) + '"' + label + '>' + o[1] + '</button>';
    }).join('') + '</div>';
  }
  function trackerItem(cat, it) {
    var stepId = it.step && stepById[it.step] ? it.step : stepOfItem[it.id];
    var link;
    if (stepId && stepById[stepId]) {
      var sb = stepById[stepId];
      link = '<a class="item-link" href="#/ch/' + esc(sb.ch.id) + '/' + esc(stepId) + '">' + ico('i-pin') + 'Walkthrough: ' + esc(chapterLabel(sb.ch.id, true)) + ' · ' + esc(sb.sec.title) + ', step ' + sb.n + '</a>';
    } else if (it.chapter) {
      link = '<span class="item-link off">Covered in ' + esc(chapterLabel(it.chapter)) + (chapterById[it.chapter] ? '' : ' (not in this build)') + '</span>';
    } else link = '';
    var req = (it.requires || []).map(function (r) { return '<span class="badge req">' + esc(r) + '</span>'; }).join('');
    return '<li class="item' + (isDone(it.id) ? ' is-done' : '') + '" id="s-' + esc(it.id) + '" data-row="' + esc(it.id) + '">' + chk(it.id, 'Collected: ' + it.name) +
      '<div class="item-body"><div class="item-name">' + esc(it.name) + (it.missable ? '<span class="badge miss">' + ico('i-caution') + 'Missable</span>' : '') + '</div>' +
      '<div class="item-meta">' + eraBadge(it.age || 'either') + timeBadge(it.time) + req + '</div>' +
      (it.how ? '<p class="item-how">' + md(it.how) + '</p>' : '') + note('remake', it.remake) + link + '</div></li>';
  }
  function vizInner(cat) {
    var total = typeof cat.total === 'number' ? cat.total : (cat.items || []).length;
    var got = counterVal('cat:' + cat.id)[0], i, h = '';
    if (cat.id === 'heart-pieces') {
      var hearts = Math.ceil(total / 4);
      for (i = 0; i < hearts; i++) {
        var q = function (k) { return 'q' + ((i * 4 + k) < got ? ' on' : ''); };
        h += '<svg viewBox="0 0 34 30" aria-hidden="true">' +
          '<path class="' + q(0) + '" d="M17 7.5C15 3.5 11.5 2 8.5 2 4.5 2 1.5 5.2 1.5 9.3c0 1.9.5 3.6 1.4 5.2H17z"/>' +
          '<path class="' + q(1) + '" d="M17 7.5c2-4 5.5-5.5 8.5-5.5 4 0 7 3.2 7 7.3 0 1.9-.5 3.6-1.4 5.2H17z"/>' +
          '<path class="' + q(2) + '" d="M17 28.5S6.6 22 2.9 14.5H17z"/>' +
          '<path class="' + q(3) + '" d="M17 28.5s10.4-6.5 14.1-14H17z"/></svg>';
      }
      return '<div class="viz-hearts">' + h + '</div><p class="viz-cap">' + Math.floor(got / 4) + ' full heart' + (Math.floor(got / 4) === 1 ? '' : 's') + ' from pieces · ' + (got % 4) + ' of 4 toward the next</p>';
    }
    if (total > 30) {
      for (i = 0; i < total; i++) h += '<i' + (i < got ? ' class="on"' : '') + '></i>';
      return '<div class="viz-gs" style="grid-template-columns:repeat(' + (total >= 100 ? 10 : Math.min(10, Math.ceil(Math.sqrt(total)))) + ',1fr)">' + h + '</div>' +
        (cat.id === 'gold-skulltulas' ? '<p class="viz-cap">' + nextReward(got) + '</p>' : '');
    }
    for (i = 0; i < total; i++) h += '<i' + (i < got ? ' class="on"' : '') + '></i>';
    return '<div class="viz-pips">' + h + '</div>';
  }
  function nextReward(got) {
    var marks = [10, 20, 30, 40, 50, 100];
    for (var i = 0; i < marks.length; i++) if (got < marks[i]) return (marks[i] - got) + ' more to the ' + marks[i] + '-token reward';
    return 'Every token reward reached';
  }

  /* ------------------------------------------------------------------ lore */
  var LORE = [
    ['songs', 'Songs', 'g-songs'], ['bosses', 'Bosses', 'k-boss'], ['bestiary', 'Bestiary', 'g-masks'],
    ['minigames', 'Minigames', 'g-skulltula-rewards'], ['sidequests', 'Side quests', 'k-sidequest'], ['remake', 'Remake notes', 'i-hourglass']
  ];
  function loreCount(key) {
    if (key === 'remake') { var r = REF.remake || {}; return ((r.confirmed || []).length + (r.unconfirmed || []).length) + ' notes'; }
    return (Array.isArray(REF[key]) ? REF[key].length : 0) + ' entries';
  }
  function renderLoreHub() {
    current.view = 'lore'; current.ch = null;
    var h = '<div class="page-head"><p class="eyebrow">Lore</p><h1>Reference</h1><p>Songs, foes, games and what the remake changes.</p></div><div class="lore-grid">';
    LORE.forEach(function (l) { h += '<a class="card lore-card" href="#/lore/' + l[0] + '">' + ico(l[2]) + '<span><b>' + l[1] + '</b><small>' + loreCount(l[0]) + '</small></span></a>'; });
    mainEl.innerHTML = h + '</div>';
    setTop('Lore', 'Reference');
    renderAside(''); fab.hidden = true; restoreScroll();
  }
  function loreSubnav(key) {
    return '<nav class="subnav" aria-label="Reference pages">' + LORE.map(function (l) {
      return '<a href="#/lore/' + l[0] + '"' + (l[0] === key ? ' aria-current="page"' : '') + '>' + l[1] + '</a>';
    }).join('') + '</nav>';
  }
  function renderLorePage(key, focus) {
    current.view = 'lore'; current.ch = null;
    var meta = LORE.filter(function (l) { return l[0] === key; })[0];
    if (!meta) { renderLoreHub(); return; }
    var h = '<div class="page-head"><p class="eyebrow">Lore</p><h1>' + meta[1] + '</h1></div>' + loreSubnav(key);
    var list = Array.isArray(REF[key]) ? REF[key] : [];
    if (key === 'songs') h += '<div class="entries">' + list.map(songCard).join('') + '</div>';
    else if (key === 'bosses') h += '<div class="entries">' + list.map(function (b) {
      var ch = CHAPTERS.filter(function (c) { return c.boss && c.boss.id === b.id; })[0];
      return '<div id="s-' + esc(b.id) + '" class="entry" style="padding:0;box-shadow:none;background:none">' + bossCard(b, ch, !!ch) + '</div>';
    }).join('') + '</div>';
    else if (key === 'bestiary') {
      h += '<div class="lore-filter"><input class="input" type="search" id="beastFilter" placeholder="Filter by name, place or weakness" aria-label="Filter the bestiary"></div><div class="entries" id="beasts">' + list.map(beastCard).join('') + '</div>';
    } else if (key === 'minigames') h += '<div class="entries">' + list.map(function (m) {
      return '<article class="card entry" id="s-' + esc(m.id) + '"><h2>' + esc(m.name) + '</h2><dl>' +
        '<dt>Where</dt><dd>' + esc(m.location) + '</dd><dt>Age</dt><dd>' + eraBadge(m.age || 'either') + '</dd><dt>Cost</dt><dd>' + esc(m.cost || 'Free') + '</dd>' +
        '<dt>Prizes</dt><dd><ul style="margin:0;padding-left:1.1em">' + (m.rewards || []).map(function (r) { return '<li>' + esc(r) + '</li>'; }).join('') + '</ul></dd></dl></article>';
    }).join('') + '</div>';
    else if (key === 'sidequests') h += '<div class="entries">' + list.map(function (q) {
      return '<article class="card entry" id="s-' + esc(q.id) + '"><h2>' + esc(q.name) + '</h2>' + (q.summary ? '<p class="muted" style="margin-top:6px">' + md(q.summary) + '</p>' : '') +
        ((q.steps || []).length ? '<ol>' + q.steps.map(function (s) { return '<li>' + md(s) + '</li>'; }).join('') + '</ol>' : '') +
        ((q.rewards || []).length ? '<dl><dt>Rewards</dt><dd class="tags">' + q.rewards.map(function (r) { return '<span class="badge req">' + esc(r) + '</span>'; }).join('') + '</dd></dl>' : '') + '</article>';
    }).join('') + '</div>';
    else if (key === 'remake') h += remakePage();
    if (key !== 'remake' && !list.length) h += '<p class="empty-state">No entries in this build of the data.</p>';
    mainEl.innerHTML = h;
    setTop('Lore', meta[1]);
    renderAside(''); fab.hidden = true;
    var bf = $('#beastFilter');
    if (bf) bf.addEventListener('input', function () {
      var q = bf.value.trim().toLowerCase();
      $$('#beasts .entry').forEach(function (el) { el.hidden = q && el.getAttribute('data-hay').indexOf(q) < 0; });
    });
    if (focus) focusTarget(focus); else restoreScroll();
  }
  function beastCard(b) {
    var hay = [b.name, (b.locations || []).join(' '), b.weakness, b.notes].join(' ').toLowerCase();
    return '<article class="card entry" id="s-' + esc(b.id) + '" data-hay="' + esc(hay) + '"><h2>' + esc(b.name) + '</h2><dl>' +
      (b.weakness ? '<dt>Weak to</dt><dd><strong>' + esc(b.weakness) + '</strong></dd>' : '') +
      ((b.locations || []).length ? '<dt>Found in</dt><dd class="tags">' + b.locations.map(function (l) { return '<span class="badge req">' + esc(l) + '</span>'; }).join('') + '</dd>' : '') +
      '</dl>' + (b.notes ? '<p class="muted" style="margin-top:10px">' + md(b.notes) + '</p>' : '') + '</article>';
  }
  function songItemId(name) {
    for (var i = 0; i < CATS.length; i++) {
      var items = CATS[i].items || [];
      for (var j = 0; j < items.length; j++) if (items[j].name === name) return items[j].id;
    }
    return null;
  }
  var ARROW_ROT = { '↑': 0, '→': 90, '↓': 180, '←': 270 };
  var PITCH = { 'A': -1, '↓': 1, '→': 3, '←': 4, '↑': 6 };
  function noteTokens(s) {
    return String(s || '').replace(/\s+/g, ' ').trim().split(' ').reduce(function (acc, t) {
      if (ARROW_ROT.hasOwnProperty(t) || t === 'A' || t.length <= 2) acc.push(t);
      else Array.prototype.push.apply(acc, Array.from(t));
      return acc;
    }, []).filter(Boolean);
  }
  /* N64 draws the real A / C buttons. Switch 2 controls are unknown until launch, so its
     notes use the same layout in neutral ink; set the remake's glyphs here once confirmed. */
  function noteButton(t) {
    var n64 = prefs.version === 'n64';
    if (t === 'A') return '<span class="nb ' + (n64 ? 'a' : 'n') + '" aria-hidden="true">A</span>';
    if (ARROW_ROT.hasOwnProperty(t)) return '<span class="nb ' + (n64 ? 'c' : 'n') + '" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M6 15 12 8.5l6 6.5" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" transform="rotate(' + ARROW_ROT[t] + ' 12 12)"/></svg></span>';
    return '<span class="nb x" aria-hidden="true">' + esc(t) + '</span>';
  }
  function staff(tokens) {
    var gap = 7, base = 64, x0 = 22, dx = 38, w = x0 * 2 + Math.max(0, tokens.length - 1) * dx;
    var h = '<svg class="staff" viewBox="0 0 ' + w + ' 84" aria-hidden="true">';
    for (var l = 0; l < 5; l++) { var y = base - l * 2 * gap; h += '<line class="ln" x1="4" x2="' + (w - 4) + '" y1="' + y + '" y2="' + y + '"/>'; }
    tokens.forEach(function (t, i) {
      var p = PITCH.hasOwnProperty(t) ? PITCH[t] : 2, cx = x0 + i * dx, cy = base - p * gap;
      if (t === 'A') h += '<circle class="ha" cx="' + cx + '" cy="' + cy + '" r="9.5"/><text class="ga" x="' + cx + '" y="' + (cy + 4) + '" text-anchor="middle">A</text>';
      else h += '<circle class="hc" cx="' + cx + '" cy="' + cy + '" r="9.5"/>' + (ARROW_ROT.hasOwnProperty(t) ? '<path class="gc" d="M' + (cx - 4) + ' ' + (cy + 2) + ' L' + cx + ' ' + (cy - 2.5) + ' L' + (cx + 4) + ' ' + (cy + 2) + '" transform="rotate(' + ARROW_ROT[t] + ' ' + cx + ' ' + cy + ')"/>' : '');
    });
    return h + '</svg>';
  }
  function spokenNotes(toks) {
    return toks.map(function (t) { return t === 'A' ? 'A' : ({ '↑': 'up', '↓': 'down', '←': 'left', '→': 'right' })[t] || t; }).join(', ');
  }
  function inlineNotes(seq) {
    var toks = noteTokens(seq);
    return '<span class="notes-inline" role="img" aria-label="Notes: ' + esc(spokenNotes(toks)) + '">' + toks.map(noteButton).join('') + '</span>';
  }
  function songCard(s) {
    var toks = noteTokens(s.notes), cid = songItemId(s.name);
    var spoken = spokenNotes(toks);
    return '<article class="card entry song" id="s-' + esc(s.id) + '"><div class="entry-head"><h2>' + esc(s.name) + '</h2>' + (cid ? chip(cid).replace('class="chip', 'class="chip chip-song') : '') + '</div>' +
      '<div class="notes-row" role="img" aria-label="Notes: ' + esc(spoken) + '">' + toks.map(noteButton).join('') + '</div>' + staff(toks) +
      '<dl><dt>Effect</dt><dd>' + md(s.effect) + '</dd><dt>From</dt><dd>' + esc(s.learnedFrom) + '</dd>' +
      (s.chapter ? '<dt>When</dt><dd>' + (chapterById[s.chapter] ? '<a href="#/ch/' + esc(s.chapter) + '">' + esc(chapterLabel(s.chapter)) + '</a>' : esc(chapterLabel(s.chapter))) + '</dd>' : '') + '</dl></article>';
  }
  function remakePage() {
    var r = REF.remake || {};
    var h = '<div class="notice" style="border-left-color:var(--remake);background:var(--remake-bg)">The walkthrough follows the original game. Lines marked <b>Remake check</b> may play differently on Switch 2 and get confirmed after launch.</div>';
    h += '<article class="card entry"><h2>Confirmed</h2><ul class="remake-list">' + (r.confirmed || []).map(function (c) { return '<li>' + md(c.fact) + '<span class="src">' + esc(c.source) + '</span></li>'; }).join('') + '</ul></article>';
    h += '<article class="card entry"><h2>Reported, not confirmed</h2><ul class="remake-list">' + (r.unconfirmed || []).map(function (c) { return '<li>' + md(c.claim) + '<span class="src">' + esc(c.source) + '</span></li>'; }).join('') + '</ul></article>';
    h += '<article class="card entry"><h2>What it could change in this guide</h2><dl>' + (r.guideImpacts || []).map(function (g) { return '<dt>' + esc(g.area) + '</dt><dd>' + md(g.impact) + '</dd>'; }).join('') + '</dl></article>';
    var flagged = [];
    Object.keys(stepById).forEach(function (id) { var s = stepById[id]; if (s.step.remake) flagged.push(s); });
    h += '<article class="card entry"><h2>Steps flagged for a post-launch check · ' + flagged.length + '</h2><ul class="flag-list">' + flagged.map(function (s) {
      return '<li><a href="#/ch/' + esc(s.ch.id) + '/' + esc(s.step.id) + '">' + esc(chapterLabel(s.ch.id, true) + ' · ' + s.sec.title + ', step ' + s.n) + '</a><div class="muted">' + md(s.step.remake) + '</div></li>';
    }).join('') + '</ul></article>';
    return h;
  }

  /* ------------------------------------------------------------------ search */
  var searchIndex = null, searchTimer = 0;
  function buildIndex() {
    var idx = [];
    function add(e) { e.hay = (e.title + ' ' + e.text + ' ' + e.type + ' ' + (e.extra || '')).toLowerCase(); e.tl = e.title.toLowerCase(); idx.push(e); }
    CHAPTERS.forEach(function (ch) {
      add({ type: 'Chapter ' + chNum(ch), glyph: 'i-journey', title: ch.title, text: plain(ch.summary), route: 'ch/' + ch.id });
      (ch.sections || []).forEach(function (sec) {
        (sec.steps || []).forEach(function (st, i) {
          add({ type: 'Ch ' + chNum(ch) + ' · ' + sec.title + ' · step ' + (i + 1), glyph: 'k-' + (KINDS[sec.kind] ? sec.kind : 'overworld'),
            title: plain(st.text), text: [st.tip, st.warn, prefs.version === 'n64' ? '' : st.remake].filter(Boolean).join(' '), extra: st.time ? st.time + ' only' : '', route: 'ch/' + ch.id + '/' + st.id, check: st.id, also: st.collect || [], step: true });
        });
      });
    });
    CATS.forEach(function (cat) {
      (cat.items || []).forEach(function (it) {
        add({ type: cat.name + (it.area ? ' · ' + it.area : ''), glyph: glyphId(cat.id), title: it.name,
          text: [it.how, (it.requires || []).length ? 'Needs ' + it.requires.join(', ') : ''].filter(Boolean).join(' · '), extra: [it.time === 'night' ? 'night only' : '', it.time === 'day' ? 'day only' : '', it.missable ? 'missable' : ''].join(' '),
          route: 'collect/' + cat.id + '/' + it.id, check: it.id });
      });
    });
    (REF.songs || []).forEach(function (s) { add({ type: 'Song', glyph: 'g-songs', title: s.name, text: [s.effect, s.learnedFrom].join(' · '), route: 'lore/songs/' + s.id }); });
    (REF.bosses || []).forEach(function (b) { add({ type: 'Boss', glyph: 'k-boss', title: b.name, text: [b.location, b.weakness].concat(b.strategy || []).join(' · '), route: 'lore/bosses/' + b.id }); });
    (REF.bestiary || []).forEach(function (b) { add({ type: 'Bestiary', glyph: 'g-masks', title: b.name, text: [b.weakness, (b.locations || []).join(', '), b.notes].join(' · '), route: 'lore/bestiary/' + b.id }); });
    (REF.minigames || []).forEach(function (m) { add({ type: 'Minigame', glyph: 'g-skulltula-rewards', title: m.name, text: [m.location, m.cost, (m.rewards || []).join(', ')].join(' · '), route: 'lore/minigames/' + m.id }); });
    (REF.sidequests || []).forEach(function (q) { add({ type: 'Side quest', glyph: 'k-sidequest', title: q.name, text: [q.summary, (q.rewards || []).join(', ')].join(' · '), route: 'lore/sidequests/' + q.id }); });
    return idx;
  }
  function runSearch(q) {
    if (!searchIndex) searchIndex = buildIndex();
    var toks = q.toLowerCase().split(/\s+/).filter(Boolean);
    if (!toks.length) return [];
    var ql = q.toLowerCase().trim();
    var res = searchIndex.filter(function (e) { return toks.every(function (t) { return e.hay.indexOf(t) >= 0; }); });
    res.forEach(function (e) {
      var s = 0;
      if (e.tl.indexOf(ql) >= 0) s += 10;
      if (e.tl.indexOf(ql) === 0) s += 5;
      toks.forEach(function (t) { if (e.tl.indexOf(t) >= 0) s += 3; });
      if (!e.step) s += 2;
      e.score = s;
    });
    return res.sort(function (a, b) { return b.score - a.score; }).slice(0, 80);
  }
  function hl(raw, toks, max) {
    raw = String(raw || '');
    if (max && raw.length > max) {
      var low = raw.toLowerCase(), at = -1;
      toks.forEach(function (t) { var p = low.indexOf(t); if (p >= 0 && (at < 0 || p < at)) at = p; });
      var start = Math.max(0, (at < 0 ? 0 : at) - 40);
      raw = (start ? '…' : '') + raw.slice(start, start + max) + (start + max < raw.length ? '…' : '');
    }
    if (!toks.length) return esc(raw);
    var re = new RegExp('(' + toks.map(function (t) { return t.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); }).join('|') + ')', 'ig');
    return raw.split(re).map(function (part, i) { return i % 2 ? '<mark>' + esc(part) + '</mark>' : esc(part); }).join('');
  }
  function renderSearch(q) {
    current.view = 'search'; current.ch = null;
    q = q || '';
    var h = '<div class="page-head" style="padding-bottom:0"><p class="eyebrow">Search</p><h1>Find anything</h1></div>' +
      '<div class="search-box"><input class="input" type="search" id="q" value="' + esc(q) + '" placeholder="Steps, items, places, songs, foes" aria-label="Search the guide" autocomplete="off" enterkeyhint="search"></div>' +
      '<div id="results"></div>';
    mainEl.innerHTML = h;
    setTop('Search', q ? '“' + q + '”' : 'Everything');
    renderAside(''); fab.hidden = true;
    var input = $('#q');
    drawResults(q);
    input.addEventListener('input', function () {
      clearTimeout(searchTimer);
      searchTimer = setTimeout(function () {
        var v = input.value;
        try { history.replaceState(null, '', '#/search/' + encodeURIComponent(v)); } catch (e) { /* file:// may refuse */ }
        topLabel.textContent = v ? '“' + v + '”' : 'Everything';
        var rs = $('#railSearch'); if (rs && rs !== document.activeElement) rs.value = v;
        drawResults(v);
      }, 110);
    });
    if (window.matchMedia('(min-width: 1024px)').matches || !q) { try { input.focus({ preventScroll: true }); } catch (e) { input.focus(); } }
    window.scrollTo(0, 0);
  }
  function drawResults(q) {
    var box = $('#results'); if (!box) return;
    var toks = q.toLowerCase().split(/\s+/).filter(Boolean);
    if (!toks.length) {
      box.innerHTML = '<div class="search-hints">Try ' + ['night', 'Piece of Heart', 'Boomerang', 'Gohma', 'missable'].map(function (s) {
        return '<button type="button" data-act="hint" data-val="' + esc(s) + '">' + esc(s) + '</button>';
      }).join('') + '</div>';
      return;
    }
    var res = runSearch(q);
    if (!res.length) { box.innerHTML = '<p class="empty-state">No matches for “' + esc(q) + '”.</p>'; return; }
    box.innerHTML = '<p class="result-count">' + res.length + (res.length === 80 ? '+' : '') + ' results</p><ul class="results">' + res.map(function (e) {
      return '<li class="res' + (e.check && isDone(e.check) ? ' is-done' : '') + '"' + (e.check ? ' data-row="' + esc(e.check) + '"' : '') + '><a href="#/' + esc(e.route) + '"><svg class="g" aria-hidden="true"><use href="#' + e.glyph + '"/></svg><span style="min-width:0">' +
        '<span class="res-type">' + esc(e.type) + '</span><span class="res-title">' + hl(e.title, toks, e.step ? 160 : 0) + '</span>' +
        (e.text ? '<span class="res-snip">' + hl(e.text, toks, 140) + '</span>' : '') + '</span></a>' +
        (e.check ? chk(e.check, (e.step ? 'Step done: ' : 'Collected: ') + plain(e.title).slice(0, 60), e.also) : '') + '</li>';
    }).join('') + '</ul>';
  }

  /* ------------------------------------------------------------------ settings */
  function renderSettings() {
    current.view = 'settings'; current.ch = null;
    var doneCount = Object.keys(progress.done).length;
    var h = '<div class="page-head"><p class="eyebrow">More</p><h1>Settings & progress</h1></div>';
    h += Store.ok()
      ? '<div class="notice ok">Progress saves on this device automatically. Export a copy to move it to another browser.</div>'
      : '<div class="notice"><b>Storage is blocked in this browser.</b> Your checks last until you close this tab. Use Export to keep them.</div>';
    h += '<section class="card set-group"><h2>Game version</h2><p>Pick the version you are playing. Original (N64) hides the Remake check notes and shows ocarina notes as N64 buttons. Switch 2 shows the notes; its controls are confirmed after launch, so ocarina notes stay neutral until then.</p>' +
      seg2('version', prefs.version, [['n64', 'Original (N64)'], ['switch2', 'Switch 2']]) + '</section>';
    h += '<section class="card set-group"><h2>Theme</h2><p>Day is sunlit vellum; Night is a dark sky for a dim room. System follows your phone.</p>' +
      seg2('theme', prefs.theme, [['system', 'System'], ['light', 'Day'], ['dark', 'Night']]) + '</section>';
    h += '<section class="card set-group"><h2>Text size</h2><p>Larger text helps at arm\'s length or across a desk.</p>' +
      seg2('scale', String(prefs.scale), [['0.92', 'Small'], ['1', 'Normal'], ['1.12', 'Large'], ['1.25', 'Huge']]) + '</section>';
    h += '<section class="card set-group"><label class="switch-row"><span><b>Hide finished steps</b><br><span class="muted" style="font-size:.9rem">Checked steps are tucked away when a chapter opens. Each section notes how many are hidden, with a Show button.</span></span>' +
      '<button type="button" class="switch" role="switch" data-act="hide-done" aria-checked="' + (!!prefs.hideDone) + '" aria-label="Hide finished steps"></button></label></section>';
    h += '<section class="card set-group"><h2>Your progress</h2><p>' + doneCount + ' checks saved. Export gives you a file or text to copy; Import takes either.</p><div class="set-row">' +
      '<button type="button" class="btn" data-act="export">' + ico('i-export') + 'Export</button>' +
      '<button type="button" class="btn" data-act="import">' + ico('i-import') + 'Import</button>' +
      '<button type="button" class="btn danger" data-act="reset">Reset all</button></div></section>';
    h += '<p class="muted" style="font-size:.84rem;padding:6px 4px">An unofficial fan guide. Not affiliated with Nintendo. All art on this page is original.</p>';
    mainEl.innerHTML = h;
    setTop('More', 'Settings & progress');
    renderAside(''); fab.hidden = true; window.scrollTo(0, 0);
  }
  function seg2(key, val, opts) {
    return '<div class="seg" role="group">' + opts.map(function (o) {
      return '<button type="button" data-act="' + key + '" data-val="' + o[0] + '" aria-pressed="' + (o[0] === val) + '">' + o[1] + '</button>';
    }).join('') + '</div>';
  }
  /* Export / Import / Reset use an in-page dialog: window.confirm/prompt and <a download> are blocked in
     some embeds (the claude.ai Artifact preview among them), so every path has a copy/paste fallback. */
  function exportProgress() {
    var data = { app: 'oot-guide', version: PROGRESS_VERSION, exportedAt: new Date().toISOString(), done: Object.keys(progress.done).sort(), last: progress.last };
    var json = JSON.stringify(data, null, 2);
    openDialog({
      title: 'Export progress',
      html: '<p>' + data.done.length + ' check' + (data.done.length === 1 ? '' : 's') + '. Save a file, or copy the text below and keep it somewhere safe, such as a note or a message to yourself. Import accepts either one.</p>' +
        '<label class="dlg-label" for="exportText">Your progress as text</label>' +
        '<textarea class="textarea" id="exportText" rows="6" readonly spellcheck="false">' + esc(json) + '</textarea>' + dlgStatus(),
      actions: [
        { label: 'Copy to clipboard', icon: 'i-copy', cls: 'primary', run: function () { copyExport(json); return false; } },
        { label: 'Download file', icon: 'i-export', run: function () { downloadJSON(json); return false; } },
        { label: 'Close' }
      ]
    });
  }
  function downloadJSON(json) {
    try {
      var blob = new Blob([json], { type: 'application/json' });
      var a = document.createElement('a');
      a.href = URL.createObjectURL(blob);
      a.download = 'oot-guide-progress-' + new Date().toISOString().slice(0, 10) + '.json';
      document.body.appendChild(a); a.click();
      setTimeout(function () { URL.revokeObjectURL(a.href); a.remove(); }, 1500);
      say('Download started. If no file appears, this page is blocking downloads: use Copy instead.');
    } catch (e) { say('This page cannot save files. Use Copy instead.', true); }
  }
  function copyExport(json) {
    var ta = $('#exportText');
    function fallback() {
      var ok = false;
      if (ta) { ta.focus(); ta.select(); try { ok = document.execCommand('copy'); } catch (e) { ok = false; } }
      if (ok) say('Copied to the clipboard.');
      else say('Copying is blocked here. The text is selected: press Ctrl+C (or Cmd+C), or long-press it and choose Copy.', true);
    }
    if (navigator.clipboard && navigator.clipboard.writeText && window.isSecureContext !== false) {
      navigator.clipboard.writeText(json).then(function () { say('Copied to the clipboard.'); }, fallback);
    } else fallback();
  }
  function importDialog() {
    openDialog({
      title: 'Import progress',
      html: '<p>Choose an exported file, or paste exported text. You will be asked before anything is replaced.</p>' +
        '<button type="button" class="btn" data-act="import-file">' + ico('i-import') + 'Choose a file</button>' +
        '<label class="dlg-label" for="importText">Or paste exported text</label>' +
        '<textarea class="textarea" id="importText" rows="6" spellcheck="false" autocomplete="off" placeholder="{ &quot;app&quot;: &quot;oot-guide&quot;, &quot;done&quot;: [ … ] }"></textarea>' + dlgStatus(),
      actions: [
        { label: 'Import pasted text', cls: 'primary', run: function () {
          var v = ($('#importText') || {}).value || '';
          if (!v.trim()) { say('Paste the exported text first.', true); return false; }
          parseImport(v); return false;
        } },
        { label: 'Cancel' }
      ],
      focus: '[data-act="import-file"]'
    });
  }
  function importProgress(file) {
    var r = new FileReader();
    r.onload = function () { parseImport(String(r.result)); };
    r.onerror = function () { importError('Could not read that file.'); };
    r.readAsText(file);
  }
  function importError(msg) { if (!dlgWrap.hidden && $('#dlgStatus')) say(msg, true); else toast(msg); }
  function parseImport(text) {
    var data;
    try { data = JSON.parse(String(text)); } catch (e) { importError('That is not exported progress (it is not valid JSON).'); return; }
    if (!data || typeof data !== 'object' || !data.done || typeof data.done !== 'object') { importError('There is no progress in that.'); return; }
    var next = normalizeProgress(data);
    var n = Object.keys(next.done).length, cur = Object.keys(progress.done).length;
    openDialog({
      title: 'Replace your progress?',
      html: '<p>Your current progress (<b>' + cur + '</b> check' + (cur === 1 ? '' : 's') + ') will be replaced by the imported progress (<b>' + n + '</b> check' + (n === 1 ? '' : 's') + '). This cannot be undone unless you exported a copy first.</p>',
      actions: [
        { label: 'Replace progress', cls: 'danger', run: function () { progress = next; saveProgress(); route(); toast('Imported ' + n + ' checks'); } },
        { label: 'Cancel' }
      ],
      focus: '[data-dlg="a1"]'
    });
  }
  function resetDialog() {
    var n = Object.keys(progress.done).length;
    openDialog({
      title: 'Reset all progress?',
      html: '<p>This clears all <b>' + n + '</b> check' + (n === 1 ? '' : 's') + ' and folds every section again. It cannot be undone unless you exported a copy first.</p>',
      actions: [
        { label: 'Reset all', cls: 'danger', run: function () {
          progress = normalizeProgress(null); prefs.open = {};
          saveProgress(); savePrefs(); renderSettings(); toast('Progress cleared');
        } },
        { label: 'Cancel' }
      ],
      focus: '[data-dlg="a1"]'
    });
  }

  /* ------------------------------------------------------------------ in-page dialog (focus-trapped, Esc closes) */
  var dlgWrap = $('#dlg'), dlgBox = $('#dlg .dlg'), dlgOpener = null, dlgNextOpener = null, dlgOpenerAct = '', dlgActs = {};
  function dlgStatus() { return '<p class="dlg-status" id="dlgStatus" role="status" aria-live="polite"></p>'; }
  function say(msg, err) { var s = $('#dlgStatus'); if (!s) { toast(msg); return; } s.textContent = msg; s.classList.toggle('err', !!err); }
  function openDialog(o) {
    if (dlgWrap.hidden) {
      dlgOpener = dlgNextOpener || document.activeElement; /* Safari does not focus buttons on click */
      dlgNextOpener = null;
      dlgOpenerAct = dlgOpener && dlgOpener.getAttribute ? (dlgOpener.getAttribute('data-act') || '') : '';
    }
    $('#dlgTitle').textContent = o.title || '';
    $('#dlgBody').innerHTML = o.html || '';
    dlgActs = {};
    $('#dlgActions').innerHTML = (o.actions || []).map(function (a, i) {
      dlgActs['a' + i] = a.run || null;
      return '<button type="button" class="btn' + (a.cls ? ' ' + a.cls : '') + '" data-dlg="a' + i + '">' + (a.icon ? ico(a.icon) : '') + esc(a.label) + '</button>';
    }).join('');
    dlgWrap.hidden = false;
    setInert(true);
    var f = (o.focus && dlgBox.querySelector(o.focus)) || dlgBox.querySelector('[data-dlg]') || dlgBox;
    try { f.focus({ preventScroll: true }); } catch (e) { f.focus(); }
  }
  function closeDialog() {
    if (dlgWrap.hidden) return;
    dlgWrap.hidden = true;
    setInert(false);
    dlgActs = {};
    $('#dlgBody').innerHTML = ''; $('#dlgActions').innerHTML = '';
    var back = dlgOpener && dlgOpener.isConnected ? dlgOpener : (dlgOpenerAct ? $('[data-act="' + dlgOpenerAct + '"]') : null);
    if (back) { try { back.focus({ preventScroll: true }); } catch (e) { back.focus(); } }
    dlgOpener = null; dlgOpenerAct = '';
  }
  function runDialogAction(key) {
    var fn = dlgActs[key];
    if (fn && fn() === false) return;
    closeDialog();
  }
  function setInert(on) {
    ['.app', '#tabbar', '#fab', '.skip', '#sheet'].forEach(function (s) {
      var el = $(s); if (!el) return;
      if (on) { el.setAttribute('inert', ''); el.setAttribute('aria-hidden', 'true'); } else { el.removeAttribute('inert'); el.removeAttribute('aria-hidden'); }
    });
  }
  function trapFocus(e) {
    var f = $$('button, [href], input, textarea, select, [tabindex]:not([tabindex="-1"])', dlgBox).filter(function (el) { return !el.disabled && el.offsetParent !== null; });
    if (!f.length) { e.preventDefault(); dlgBox.focus(); return; }
    var first = f[0], last = f[f.length - 1], a = document.activeElement;
    if (e.shiftKey && (a === first || !dlgBox.contains(a))) { e.preventDefault(); last.focus(); }
    else if (!e.shiftKey && (a === last || !dlgBox.contains(a))) { e.preventDefault(); first.focus(); }
  }

  /* ------------------------------------------------------------------ shell: rail, aside, top, sheet, toast, theme */
  function renderRail() {
    railEl.innerHTML = '<a class="brand" href="#/journey">' + emblem('') + '<span><b>Hero\'s Almanac</b><small>Ocarina of Time guide</small></span></a>' +
      '<div class="rail-search"><input class="input" type="search" id="railSearch" placeholder="Search" aria-label="Search the guide"></div>' +
      '<nav class="rail-nav" aria-label="Sections">' +
      [['journey', 'Journey', 'i-journey'], ['collect', 'Collect', 'i-collect'], ['search', 'Search', 'i-search'], ['lore', 'Lore', 'i-lore'], ['settings', 'Settings', 'i-more']]
        .map(function (n) { return '<a href="#/' + n[0] + '" data-tab="' + n[0] + '">' + ico(n[2]) + n[1] + '</a>'; }).join('') +
      '</nav><h3>Chapters</h3><ol class="jump-list" id="railChapters"></ol>' +
      '<div class="rail-foot"><button class="icon-btn theme-btn" type="button" data-act="theme-toggle" aria-label="Toggle day or night">' + ico('i-sun', 'ico-sun') + ico('i-moon', 'ico-moon') + '</button><span>Day / Night</span></div>';
    var rs = $('#railSearch');
    rs.addEventListener('input', function () {
      var v = rs.value;
      if (current.view !== 'search') { go('search/' + encodeURIComponent(v)); return; }
      var q = $('#q'); if (q) { q.value = v; q.dispatchEvent(new Event('input')); }
    });
  }
  function updateShell(tab) {
    $$('[data-tab]').forEach(function (a) { if (a.getAttribute('data-tab') === tab) a.setAttribute('aria-current', 'page'); else a.removeAttribute('aria-current'); });
    var rc = $('#railChapters'); if (rc) rc.innerHTML = timelineItems(true);
  }
  function renderAside(html) {
    asideEl.innerHTML = html;
    appEl.classList.toggle('has-aside', !!html);
    fab.classList.toggle('with-aside', !!html);
  }
  function setTop(eyebrow, label) { topEyebrow.textContent = eyebrow; topLabel.textContent = label; }

  function openSheet() {
    var h = '';
    if (current.view === 'chapter' && current.ch) {
      var ch = current.ch;
      sheetTitle.textContent = 'Chapter ' + chNum(ch);
      h += '<h3>Sections</h3><ul class="jump-list" data-realm="' + realmOf(ch) + '">' + (ch.sections || []).map(function (sec) {
        var kind = KINDS[sec.kind] ? sec.kind : 'overworld';
        return '<li><a href="#/ch/' + esc(ch.id) + '/' + esc(sec.id) + '">' + ico('k-' + kind) + '<span class="jl-t">' + esc(sec.title) + '</span><span class="jl-c">' + countSpan('sec:' + sec.id) + '</span></a></li>';
      }).join('') + '</ul>';
    } else sheetTitle.textContent = 'Chapters';
    h += '<h3>All chapters</h3><ol class="jump-list">' + timelineItems(true) + '</ol>';
    sheetBody.innerHTML = h;
    sheet.hidden = false;
    var first = sheet.querySelector('a'); if (first) try { first.focus({ preventScroll: true }); } catch (e) { /* ignore */ }
  }
  function closeSheet() { sheet.hidden = true; }

  var toastTimer = 0, toastUndo = null;
  function toast(msg, undo) {
    var t = $('#toast');
    toastUndo = undo || null;
    t.innerHTML = '<span>' + esc(msg) + '</span>' + (undo ? '<button type="button" data-act="undo">Undo</button>' : '');
    t.hidden = false;
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () { t.hidden = true; toastUndo = null; }, undo ? 5000 : 3000);
  }
  var storageWarned = false;
  function warnStorage() {
    if (storageWarned || Store.ok()) return;
    storageWarned = true;
    setTimeout(function () { toast('Storage is blocked: progress lasts until this tab closes. Export to keep it.'); }, 600);
  }

  var mq = window.matchMedia ? window.matchMedia('(prefers-color-scheme: dark)') : null;
  function isDark() {
    var a = document.documentElement.getAttribute('data-theme');
    return a === 'dark' || (!a && !!(mq && mq.matches));
  }
  function applyTheme() {
    if (prefs.theme === 'light' || prefs.theme === 'dark') document.documentElement.setAttribute('data-theme', prefs.theme);
    else document.documentElement.removeAttribute('data-theme');
    document.documentElement.style.setProperty('--scale', String(prefs.scale || 1));
    var dark = isDark();
    var m = $('#meta-theme'); if (m) m.setAttribute('content', dark ? '#0c0f1d' : '#efe7d3');
    $$('.theme-btn').forEach(function (b) { b.setAttribute('aria-label', dark ? 'Switch to day theme' : 'Switch to night theme'); });
  }
  if (mq && mq.addEventListener) mq.addEventListener('change', applyTheme);

  /* ------------------------------------------------------------------ routing */
  function go(path) { location.hash = '#/' + path; }
  function restoreScroll() {
    var y = scrollMemo[location.hash];
    requestAnimationFrame(function () { window.scrollTo(0, y || 0); });
  }
  var lastHash = location.hash;
  function route(isInitial) {
    closeSheet();
    var raw = (location.hash || '').replace(/^#\/?/, '');
    var parts = raw.split('/').map(function (p) { try { return decodeURIComponent(p); } catch (e) { return p; } });
    var v = parts[0] || '';
    if (!v) {
      var last = progress.last && chapterById[progress.last.chapter] ? chapterById[progress.last.chapter] : null;
      if (last) {
        var nx = nextStepOf(last);
        try { history.replaceState(null, '', '#/ch/' + last.id); } catch (e) { /* ignore */ }
        updateShellFor('journey', last);
        renderChapter(last, nx ? nx.id : null);
        lastHash = location.hash;
        return;
      }
      v = 'journey';
    }
    if (v === 'ch' && chapterById[parts[1]]) { updateShellFor('journey', chapterById[parts[1]]); renderChapter(chapterById[parts[1]], parts[2] || null); }
    else if (v === 'collect' && parts[1] && catById[parts[1]]) { updateShellFor('collect'); renderTracker(catById[parts[1]], parts[2] || null); }
    else if (v === 'collect') { updateShellFor('collect'); renderCollectHub(); }
    else if (v === 'search') { updateShellFor('search'); renderSearch(parts.slice(1).join('/')); }
    else if (v === 'lore' && parts[1]) { updateShellFor('lore'); renderLorePage(parts[1], parts[2] || null); }
    else if (v === 'lore') { updateShellFor('lore'); renderLoreHub(); }
    else if (v === 'settings') { updateShellFor('settings'); renderSettings(); }
    else { updateShellFor('journey'); renderJourney(); }
    lastHash = location.hash;
    if (!isInitial) { try { mainEl.focus({ preventScroll: true }); } catch (e) { /* ignore */ } }
  }
  function updateShellFor(tab, ch) { current.ch = ch || null; updateShell(tab); }
  window.addEventListener('hashchange', function () { scrollMemo[lastHash] = window.scrollY; route(false); });

  /* ------------------------------------------------------------------ events */
  document.addEventListener('click', function (e) {
    var t = e.target;
    if (!t.closest) return;
    if (t.closest('.haul summary')) {
      /* the haul list is thousands of px tall; scroll anchoring would pin the steps below and fling the summary off the top, so let it open downwards */
      var root = document.documentElement;
      root.style.overflowAnchor = 'none';
      requestAnimationFrame(function () { requestAnimationFrame(function () { root.style.overflowAnchor = ''; }); });
    }
    var dl = t.closest('[data-dlg]');
    if (dl) { runDialogAction(dl.getAttribute('data-dlg')); return; }
    if (t.closest('[data-dlg-close]')) { closeDialog(); return; }
    var c = t.closest('[data-check]');
    if (c) { e.preventDefault(); toggleCheck(c); if (current.view === 'chapter') updateFab(); return; }
    if (t.closest('[data-close-sheet]')) { closeSheet(); return; }
    var a = t.closest('a[href^="#/"]');
    if (a) {
      if (a.closest('#sheet')) closeSheet();
      if (a.getAttribute('href') === location.hash) { e.preventDefault(); route(false); }
      return;
    }
    var act = t.closest('[data-act]');
    if (!act) return;
    var kind = act.getAttribute('data-act'), val = act.getAttribute('data-val');
    if (kind === 'undo') { if (toastUndo) toastUndo(); $('#toast').hidden = true; toastUndo = null; updateFab(); }
    else if (kind === 'filter' && current.cat) {
      var f = prefs.filters[current.cat.id] || (prefs.filters[current.cat.id] = {});
      f[act.getAttribute('data-key')] = val; savePrefs(); renderTracker(current.cat);
    }
    else if (kind === 'theme') { prefs.theme = val; savePrefs(); applyTheme(); renderSettings(); }
    else if (kind === 'theme-toggle') { prefs.theme = isDark() ? 'light' : 'dark'; savePrefs(); applyTheme(); if (current.view === 'settings') renderSettings(); }
    else if (kind === 'version') { prefs.version = val === 'n64' ? 'n64' : 'switch2'; savePrefs(); searchIndex = null; renderSettings(); }
    else if (kind === 'scale') { prefs.scale = parseFloat(val) || 1; savePrefs(); applyTheme(); renderSettings(); }
    else if (kind === 'hide-done') { prefs.hideDone = !prefs.hideDone; savePrefs(); applyTheme(); act.setAttribute('aria-checked', String(!!prefs.hideDone)); }
    else if (kind === 'sec') {
      var sid = act.getAttribute('data-sec');
      cancelCollapse(sid);
      setCollapsed(sid, act.getAttribute('aria-expanded') === 'true', true);
    }
    else if (kind === 'show-hidden') showHidden(act.getAttribute('data-sec'));
    else if (kind === 'export') { dlgNextOpener = act; exportProgress(); }
    else if (kind === 'import') { dlgNextOpener = act; importDialog(); }
    else if (kind === 'import-file') $('#importFile').click();
    else if (kind === 'reset') { dlgNextOpener = act; resetDialog(); }
    else if (kind === 'hint') { var q = $('#q'); if (q) { q.value = val; q.dispatchEvent(new Event('input')); } }
  });
  document.addEventListener('change', function (e) {
    if (e.target.id === 'areaSel' && current.cat) {
      var f = prefs.filters[current.cat.id] || (prefs.filters[current.cat.id] = {});
      f.area = e.target.value; savePrefs(); renderTracker(current.cat);
    }
    if (e.target.id === 'importFile' && e.target.files && e.target.files[0]) { importProgress(e.target.files[0]); e.target.value = ''; }
  });
  document.addEventListener('focusin', function (e) { if (e.target && e.target.id === 'exportText') e.target.select(); });
  document.addEventListener('keydown', function (e) {
    if (!dlgWrap.hidden) {
      if (e.key === 'Escape') { e.preventDefault(); closeDialog(); }
      else if (e.key === 'Tab') trapFocus(e);
      return;
    }
    if (e.key === 'Escape' && !sheet.hidden) closeSheet();
    if (e.key === '/' && !/input|textarea|select/i.test((document.activeElement || {}).tagName || '')) { e.preventDefault(); go('search'); }
  });
  $('#topTitle').addEventListener('click', function () { if (window.matchMedia('(min-width: 1024px)').matches) return; openSheet(); });
  $('#themeBtn').addEventListener('click', function () { prefs.theme = isDark() ? 'light' : 'dark'; savePrefs(); applyTheme(); if (current.view === 'settings') renderSettings(); });
  fab.addEventListener('click', onFab);
  window.addEventListener('pagehide', function () { saveProgress(); });

  /* ------------------------------------------------------------------ boot */
  applyTheme();
  renderRail();
  route(true);
  if (!Store.ok()) warnStorage();
})();
