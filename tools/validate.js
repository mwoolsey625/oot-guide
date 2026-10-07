#!/usr/bin/env node
/* OoT guide data validator. No dependencies.
   Run from the repo root:  node tools/validate.js
   Loads data/*.js the way a browser does (each file runs with `window` as its global object),
   then checks them against BRIEF.md: schema, chapter list, IDs, collectible placement, category
   totals, ledger coverage, style, step size, control-free text and name-map coverage.
   Exit code 1 when any ERROR is found; warnings never fail the run. */
'use strict';
const fs = require('fs');
const path = require('path');
const vm = require('vm');

const ROOT = path.resolve(__dirname, '..');
const DATA = path.join(ROOT, 'data');
const FILES = ['walkthrough-child.js', 'walkthrough-adult.js', 'collectibles.js', 'reference.js'];

const errors = [];
const warnings = [];
const info = [];
const err = (area, msg) => errors.push(`[${area}] ${msg}`);
const warn = (area, msg) => warnings.push(`[${area}] ${msg}`);
const note = (msg) => info.push(msg);
// filled in below; declared here so the report can run after an early stop
let W = [], CATS = [], REF = {}, avgRows = [], sectionIds = new Set(), itemsById = {};

/* ------------------------------------------------------------------ load */
// A fake window: a fresh context whose global object is also `window`, so both
// `window.OOT.x = ...` and the bare `OOT.walkthrough.push(...)` the BRIEF schema uses work.
function makeWindow() { const g = {}; g.window = g; vm.createContext(g); return g; }
const all = makeWindow();
const perFile = {};
for (const f of FILES) {
  const full = path.join(DATA, f);
  let src;
  try { src = fs.readFileSync(full, 'utf8'); } catch (e) { err('parse', `${f}: cannot read (${e.message})`); continue; }
  const code = src.replace(/^﻿/, '').replace(/^\s*(\/\*[\s\S]*?\*\/\s*|\/\/[^\n]*\n\s*)*/, '');
  if (!code.startsWith('window.OOT = window.OOT || {};')) err('parse', `${f}: first statement must be "window.OOT = window.OOT || {};" (BRIEF data schema)`);
  try {
    const own = makeWindow();
    vm.runInContext(src, own, { filename: f });
    perFile[f] = own.OOT || {};
    vm.runInContext(src, all, { filename: f });
  } catch (e) { err('parse', `${f}: ${e.name}: ${e.message}`); }
}
if (errors.length) finish();
const OOT = all.OOT || {};
W = Array.isArray(OOT.walkthrough) ? OOT.walkthrough : [];
CATS = Array.isArray(OOT.collectibles) ? OOT.collectibles : [];
REF = OOT.reference || {};

function readJson(rel) {
  try { return JSON.parse(fs.readFileSync(path.join(ROOT, rel), 'utf8')); }
  catch (e) { err('parse', `${rel}: ${e.message}`); return null; }
}
const LEDGER = readJson('research/ledger.json') || [];
const NAMEMAP = readJson('research/name-map.json') || {};

/* ------------------------------------------------------------------ helpers */
const SLUG = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;
const isStr = (v) => typeof v === 'string';
const isStrArr = (v) => Array.isArray(v) && v.every(isStr);
const typeName = (v) => Array.isArray(v) ? 'array' : v === null ? 'null' : typeof v;

/* Check one object against a spec { key: 'string' | 'string?' | 'number' | 'boolean' | 'string[]' | 'array' | 'object' | 'object|null' | [enum values] } */
function checkShape(area, where, obj, spec, opts = {}) {
  if (!obj || typeof obj !== 'object' || Array.isArray(obj)) { err(area, `${where}: expected an object, got ${typeName(obj)}`); return false; }
  for (const [k, t] of Object.entries(spec)) {
    const optional = (typeof t === 'string' && t.endsWith('?')) || (Array.isArray(t) && t.includes(undefined));
    const ty = optional ? t.slice(0, -1) : t;
    const v = obj[k];
    if (v === undefined) { if (!optional) err(area, `${where}: missing field "${k}"`); continue; }
    let ok;
    if (Array.isArray(ty)) ok = ty.includes(v);
    else if (ty === 'string[]') ok = isStrArr(v);
    else if (ty === 'array') ok = Array.isArray(v);
    else if (ty === 'object') ok = v && typeof v === 'object' && !Array.isArray(v);
    else if (ty === 'object|null') ok = v === null || (typeof v === 'object' && !Array.isArray(v));
    else ok = typeof v === ty;
    if (!ok) err(area, `${where}: field "${k}" should be ${Array.isArray(ty) ? 'one of ' + JSON.stringify(ty) : ty}, got ${JSON.stringify(v)}`);
  }
  if (!opts.open) for (const k of Object.keys(obj)) if (!(k in spec)) warn(area, `${where}: unexpected field "${k}"`);
  return true;
}

/* ------------------------------------------------------------------ chapters vs BRIEF */
const brief = fs.readFileSync(path.join(ROOT, 'BRIEF.md'), 'utf8');
const BRIEF_CH = [];
for (const line of brief.split(/\r?\n/)) {
  const m = line.match(/^\|\s*(c\d\d-[a-z0-9-]+)\s*\|\s*(.*?)\s*\|\s*(.*?)\s*\|\s*$/);
  if (m) BRIEF_CH.push({ id: m[1], era: m[3].split(/\s/)[0] });
}
if (BRIEF_CH.length !== 14) err('chapters', `could not read 14 chapters from BRIEF.md (got ${BRIEF_CH.length})`);
const gotIds = W.map((c) => c && c.id);
if (JSON.stringify(gotIds) !== JSON.stringify(BRIEF_CH.map((c) => c.id)))
  err('chapters', `chapter IDs/order differ from BRIEF.md.\n    expected: ${BRIEF_CH.map((c) => c.id).join(', ')}\n    got:      ${gotIds.join(', ')}`);
const childIds = ((perFile['walkthrough-child.js'] || {}).walkthrough || []).map((c) => c.id);
const adultIds = ((perFile['walkthrough-adult.js'] || {}).walkthrough || []).map((c) => c.id);
if (JSON.stringify(childIds) !== JSON.stringify(BRIEF_CH.slice(0, 6).map((c) => c.id))) err('chapters', `walkthrough-child.js must hold c01-c06 in order (has ${childIds.join(', ')})`);
if (JSON.stringify(adultIds) !== JSON.stringify(BRIEF_CH.slice(6).map((c) => c.id))) err('chapters', `walkthrough-adult.js must hold c07-c14 in order (has ${adultIds.join(', ')})`);

/* ------------------------------------------------------------------ walkthrough schema + IDs */
const ERAS = ['child', 'adult', 'both'];
const KINDS = ['overworld', 'dungeon', 'boss', 'sweep', 'sidequest'];
const stepById = {};      // step id -> { ch, sec, step }

const collectAt = {};     // collect id -> [step ids]
W.forEach((ch, ci) => {
  const where = ch && ch.id ? ch.id : `walkthrough[${ci}]`;
  if (!checkShape('schema', where, ch, { id: 'string', num: 'number', title: 'string', era: ERAS, summary: 'string', needs: 'string[]', gains: 'string[]', sections: 'array', boss: 'object|null' })) return;
  if (ch.num !== ci + 1) err('schema', `${where}: num is ${ch.num}, expected ${ci + 1}`);
  const bc = BRIEF_CH[ci];
  if (bc && bc.id === ch.id && bc.era !== ch.era) warn('schema', `${where}: era "${ch.era}" but BRIEF.md lists "${bc.era}"`);
  const cpre = (ch.id || '').slice(0, 3);
  if (ch.boss) {
    checkShape('schema', `${where}.boss`, ch.boss, { id: 'string', name: 'string', weakness: 'string', strategy: 'string[]' });
    if (!SLUG.test(ch.boss.id || '') || !/^boss-/.test(ch.boss.id || '')) err('ids', `${where}.boss.id "${ch.boss.id}" should be a boss-* slug`);
    const rb = Array.isArray(REF.bosses) ? REF.bosses.find((b) => b.id === ch.boss.id) : null;
    if (!rb) err('ids', `${where}.boss.id "${ch.boss.id}" is not in reference.bosses`);
    else if (rb.name !== ch.boss.name) err('reference', `${where}.boss.name "${ch.boss.name}" differs from reference.bosses ("${rb.name}")`);
  }
  (ch.sections || []).forEach((sec, si) => {
    const swhere = sec && sec.id ? sec.id : `${where}.sections[${si}]`;
    if (!checkShape('schema', swhere, sec, { id: 'string', title: 'string', era: ['child', 'adult'], kind: KINDS, steps: 'array' })) return;
    if (!/^c\d\d-s\d\d$/.test(sec.id)) err('ids', `section id "${sec.id}" is not cNN-sNN`);
    else if (sec.id.slice(0, 3) !== cpre) err('ids', `section id "${sec.id}" does not belong to chapter ${ch.id}`);
    else if (sec.id !== `${cpre}-s${String(si + 1).padStart(2, '0')}`) warn('ids', `section id "${sec.id}" is out of sequence (position ${si + 1} in ${ch.id})`);
    if (sectionIds.has(sec.id)) err('ids', `duplicate section id "${sec.id}"`);
    sectionIds.add(sec.id);
    sec.steps.forEach((st, ti) => {
      const twhere = st && st.id ? st.id : `${swhere}.steps[${ti}]`;
      if (!checkShape('schema', twhere, st, { id: 'string', text: 'string', collect: 'string[]', tip: 'string?', warn: 'string?', time: ['', 'night', 'day', undefined], remake: 'string?' })) return;
      if (!st.text.trim()) err('schema', `${twhere}: empty text`);
      if (!/^c\d\d-s\d\d-\d\d$/.test(st.id)) err('ids', `step id "${st.id}" is not cNN-sNN-NN`);
      else if (st.id.slice(0, 7) !== sec.id) err('ids', `step id "${st.id}" does not belong to section ${sec.id}`);
      else if (st.id !== `${sec.id}-${String(ti + 1).padStart(2, '0')}`) warn('ids', `step id "${st.id}" is out of sequence (position ${ti + 1} in ${sec.id})`);
      if (stepById[st.id]) err('ids', `duplicate step id "${st.id}"`);
      stepById[st.id] = { ch, sec, step: st };
      const seen = new Set();
      for (const id of st.collect) {
        if (!SLUG.test(id)) err('ids', `${st.id}: collect id "${id}" is not a lowercase-dash slug`);
        if (seen.has(id)) err('ids', `${st.id}: collect id "${id}" listed twice`);
        seen.add(id);
        (collectAt[id] = collectAt[id] || []).push(st.id);
      }
    });
  });
});

/* ------------------------------------------------------------------ collectibles */
// itemsById: id -> [{cat, item}]
CATS.forEach((cat, ci) => {
  const where = cat && cat.id ? `collectibles.${cat.id}` : `collectibles[${ci}]`;
  if (!checkShape('schema', where, cat, { id: 'string', name: 'string', total: 'number', note: 'string', items: 'array' })) return;
  if (!SLUG.test(cat.id)) err('ids', `${where}: category id is not a slug`);
  if (cat.items.length !== cat.total) err('totals', `${where}: total says ${cat.total} but ${cat.items.length} items are listed`);
  const local = new Set();
  cat.items.forEach((it, ii) => {
    const iw = it && it.id ? `${where}/${it.id}` : `${where}.items[${ii}]`;
    if (!checkShape('schema', iw, it, { id: 'string', name: 'string', area: 'string', age: ['child', 'adult', 'either'], time: ['night', 'day', 'any'], requires: 'string[]', how: 'string', chapter: 'string', step: 'string', missable: 'boolean', remake: 'string' })) return;
    if (!SLUG.test(it.id)) err('ids', `${iw}: id is not a lowercase-dash slug`);
    if (local.has(it.id)) err('ids', `${iw}: listed twice in the same category`);
    local.add(it.id);
    (itemsById[it.id] = itemsById[it.id] || []).push({ cat, item: it });
  });
});

// required categories and totals (BRIEF "Required categories")
const REQUIRED = { 'gold-skulltulas': 100, 'heart-pieces': 36, 'heart-containers': 8, songs: 13, 'spiritual-stones': 3, medallions: 6,
  'inventory-items': null, equipment: null, upgrades: null, bottles: 4, 'great-fairies': 6, 'big-poes': 10, 'magic-beans': 10,
  masks: 8, 'adult-trade': null, 'skulltula-rewards': 6 };
for (const [id, n] of Object.entries(REQUIRED)) {
  const cat = CATS.find((c) => c.id === id);
  if (!cat) { err('totals', `required category "${id}" is missing`); continue; }
  if (n !== null && (cat.total !== n || cat.items.length !== n)) err('totals', `${id}: expected ${n}, total=${cat.total}, items=${cat.items.length}`);
}

// cross-category consistency for shared IDs (the same check may sit in 2 categories on purpose)
for (const [id, list] of Object.entries(itemsById)) {
  if (list.length < 2) continue;
  const a = list[0].item;
  for (const { cat, item } of list.slice(1))
    for (const k of ['chapter', 'step', 'age', 'time'])
      if (item[k] !== a[k]) err('collectibles', `${id}: "${k}" is "${a[k]}" in ${list[0].cat.id} but "${item[k]}" in ${cat.id}`);
}

// placement: every collectible in exactly one step; chapter/step fields match
const chapterIds = new Set(W.map((c) => c.id));
for (const [id, list] of Object.entries(itemsById)) {
  const at = collectAt[id] || [];
  const cats = list.map((x) => x.cat.id).join('+');
  if (at.length === 0) err('placement', `${id} (${cats}) is not in any step's collect[]`);
  if (at.length > 1) err('placement', `${id} (${cats}) is collected in ${at.length} steps: ${at.join(', ')}`);
  for (const { item } of list) {
    if (!chapterIds.has(item.chapter)) err('placement', `${id}: chapter "${item.chapter}" is not a chapter id`);
    if (at.length !== 1) continue;
    const s = stepById[at[0]];
    if (item.step !== at[0]) err('placement', `${id}: step field is "${item.step}" but the walkthrough collects it at ${at[0]}`);
    if (item.chapter !== s.ch.id) err('placement', `${id}: chapter field is "${item.chapter}" but ${at[0]} is in ${s.ch.id}`);
    if ((item.age === 'child' && s.sec.era === 'adult') || (item.age === 'adult' && s.sec.era === 'child'))
      err('placement', `${id}: ${item.age}-only collectible sits in ${s.sec.era} section ${s.sec.id}`);
    if (item.time === 'night' && s.step.time !== 'night') warn('placement', `${id}: night-only collectible, but step ${at[0]} has no time: "night"`);
    if (item.time === 'day' && s.step.time === 'night') err('placement', `${id}: day-only collectible on night step ${at[0]}`);
  }
}

/* ------------------------------------------------------------------ ledger coverage + collect ids */
const ledgerById = {};
for (const row of LEDGER) ledgerById[row.id] = row;
const outOfLogic = [];
for (const row of LEDGER) {
  if (itemsById[row.id] || collectAt[row.id]) continue;
  if ((row.tags || []).includes('out-of-logic')) { outOfLogic.push(row.id); continue; }
  err('ledger', `${row.id} (${row.type}, ${row.vanillaItem}) is not covered by any collectible or step`);
}
if (outOfLogic.length) note(`Ledger rows tagged out-of-logic and left out on purpose (rule B, see research/compile-notes-integration.md): ${outOfLogic.join(', ')}`);

// category membership must match the ledger where the ledger can say
const setEq = (label, want, have) => {
  const w = new Set(want), h = new Set(have);
  const miss = [...w].filter((x) => !h.has(x)), extra = [...h].filter((x) => !w.has(x));
  if (miss.length) err('totals', `${label}: ledger checks missing from the category: ${miss.join(', ')}`);
  if (extra.length) err('totals', `${label}: category items that are not ledger checks of that kind: ${extra.join(', ')}`);
};
const catIds = (id) => ((CATS.find((c) => c.id === id) || { items: [] }).items).map((i) => i.id);
const real = LEDGER.filter((r) => !(r.tags || []).includes('out-of-logic'));
setEq('gold-skulltulas', real.filter((r) => r.type === 'gold-skulltula').map((r) => r.id), catIds('gold-skulltulas'));
setEq('heart-pieces', real.filter((r) => /^Piece of Heart\b/.test(r.vanillaItem)).map((r) => r.id), catIds('heart-pieces'));
setEq('heart-containers', real.filter((r) => r.type === 'heart-container').map((r) => r.id), catIds('heart-containers'));
setEq('great-fairies', real.filter((r) => r.type === 'great-fairy').map((r) => r.id), catIds('great-fairies'));
if (CATS.some((c) => c.id === 'cows')) setEq('cows', real.filter((r) => r.type === 'cow').map((r) => r.id), catIds('cows'));
const ledgerSongs = real.filter((r) => r.type === 'song').map((r) => r.id);
for (const s of ledgerSongs) if (!catIds('songs').includes(s)) err('totals', `songs: ledger song ${s} missing from the category`);

// collect ids must resolve: a collectible, or a ledger check that the site shows as a muted Chest / Key / Prize chip
const minor = [];
for (const [id, at] of Object.entries(collectAt)) {
  if (itemsById[id]) continue;
  if (ledgerById[id]) { minor.push(id); continue; }
  err('ids', `collect id "${id}" (${at.join(', ')}) is neither a collectible nor a ledger.json check`);
}
note(`${minor.length} collect IDs are ledger checks outside the collectible categories (chests, keys, frog songs...); the site labels them Chest, Key or Prize.`);

/* ------------------------------------------------------------------ reference */
if (!checkShape('schema', 'reference', REF, { songs: 'array', bosses: 'array', bestiary: 'array', minigames: 'array', sidequests: 'array', remake: 'object' })) finish();
const refSpec = {
  songs: { id: 'string', name: 'string', notes: 'string', effect: 'string', learnedFrom: 'string', chapter: 'string' },
  bosses: { id: 'string', name: 'string', location: 'string', weakness: 'string', strategy: 'string[]' },
  bestiary: { id: 'string', name: 'string', locations: 'string[]', weakness: 'string', notes: 'string' },
  minigames: { id: 'string', name: 'string', location: 'string', age: ['child', 'adult', 'either'], cost: 'string', rewards: 'string[]' },
  sidequests: { id: 'string', name: 'string', summary: 'string', steps: 'string[]', rewards: 'string[]' },
};
for (const [k, spec] of Object.entries(refSpec)) {
  const seen = new Set();
  (REF[k] || []).forEach((e, i) => {
    const where = `reference.${k}/${e && e.id ? e.id : i}`;
    checkShape('schema', where, e, spec);
    if (e && !SLUG.test(e.id || '')) err('ids', `${where}: id is not a slug`);
    if (e && seen.has(e.id)) err('ids', `${where}: duplicate id`);
    if (e) seen.add(e.id);
  });
  if (!(REF[k] || []).length) err('schema', `reference.${k} is empty`);
}
checkShape('schema', 'reference.remake', REF.remake, { confirmed: 'array', unconfirmed: 'array', guideImpacts: 'array' });
(REF.remake.confirmed || []).forEach((e, i) => checkShape('schema', `reference.remake.confirmed[${i}]`, e, { fact: 'string', source: 'string' }));
(REF.remake.unconfirmed || []).forEach((e, i) => checkShape('schema', `reference.remake.unconfirmed[${i}]`, e, { claim: 'string', source: 'string' }));
(REF.remake.guideImpacts || []).forEach((e, i) => checkShape('schema', `reference.remake.guideImpacts[${i}]`, e, { area: 'string', impact: 'string' }));
// songs: same set and chapters as the songs category
const songCat = CATS.find((c) => c.id === 'songs');
if (songCat) {
  for (const s of REF.songs || []) {
    const it = songCat.items.find((i) => i.id === s.id);
    if (!it) err('reference', `reference.songs/${s.id} is not in the songs category`);
    else {
      if (it.chapter !== s.chapter) err('reference', `reference.songs/${s.id}: chapter ${s.chapter} but the collectible says ${it.chapter}`);
      if (it.name !== s.name) err('reference', `reference.songs/${s.id}: name "${s.name}" but the collectible says "${it.name}"`);
    }
    if (!chapterIds.has(s.chapter)) err('reference', `reference.songs/${s.id}: chapter "${s.chapter}" is not a chapter id`);
  }
  for (const i of songCat.items) if (!(REF.songs || []).some((s) => s.id === i.id)) err('reference', `song ${i.id} has no reference.songs entry`);
}

/* ------------------------------------------------------------------ text fields */
// Every guide string with where it lives; `remake` marks fields allowed to name remake controls.
const texts = [];
const add = (where, s, remake = false) => { if (isStr(s) && s) texts.push({ where, s, remake }); };
for (const ch of W) {
  add(`${ch.id}.title`, ch.title); add(`${ch.id}.summary`, ch.summary);
  (ch.needs || []).forEach((s, i) => add(`${ch.id}.needs[${i}]`, s));
  (ch.gains || []).forEach((s, i) => add(`${ch.id}.gains[${i}]`, s));
  if (ch.boss) { add(`${ch.id}.boss.name`, ch.boss.name); add(`${ch.id}.boss.weakness`, ch.boss.weakness); (ch.boss.strategy || []).forEach((s, i) => add(`${ch.id}.boss.strategy[${i}]`, s)); }
  for (const sec of ch.sections || []) {
    add(`${sec.id}.title`, sec.title);
    for (const st of sec.steps || []) { add(`${st.id}.text`, st.text); add(`${st.id}.tip`, st.tip); add(`${st.id}.warn`, st.warn); add(`${st.id}.remake`, st.remake, true); }
  }
}
for (const cat of CATS) {
  add(`collectibles.${cat.id}.name`, cat.name); add(`collectibles.${cat.id}.note`, cat.note);
  for (const it of cat.items || []) {
    const w = `collectibles.${cat.id}/${it.id}`;
    add(`${w}.name`, it.name); add(`${w}.area`, it.area); add(`${w}.how`, it.how); add(`${w}.remake`, it.remake, true);
    (it.requires || []).forEach((s, i) => add(`${w}.requires[${i}]`, s));
  }
}
for (const s of REF.songs || []) { add(`reference.songs/${s.id}.name`, s.name); add(`reference.songs/${s.id}.effect`, s.effect); add(`reference.songs/${s.id}.learnedFrom`, s.learnedFrom); }
for (const b of REF.bosses || []) { add(`reference.bosses/${b.id}.name`, b.name); add(`reference.bosses/${b.id}.location`, b.location); add(`reference.bosses/${b.id}.weakness`, b.weakness); (b.strategy || []).forEach((s, i) => add(`reference.bosses/${b.id}.strategy[${i}]`, s)); }
for (const b of REF.bestiary || []) { add(`reference.bestiary/${b.id}.name`, b.name); add(`reference.bestiary/${b.id}.weakness`, b.weakness); add(`reference.bestiary/${b.id}.notes`, b.notes); (b.locations || []).forEach((s, i) => add(`reference.bestiary/${b.id}.locations[${i}]`, s)); }
for (const m of REF.minigames || []) { add(`reference.minigames/${m.id}.name`, m.name); add(`reference.minigames/${m.id}.location`, m.location); add(`reference.minigames/${m.id}.cost`, m.cost); (m.rewards || []).forEach((s, i) => add(`reference.minigames/${m.id}.rewards[${i}]`, s)); }
for (const q of REF.sidequests || []) { add(`reference.sidequests/${q.id}.name`, q.name); add(`reference.sidequests/${q.id}.summary`, q.summary); (q.steps || []).forEach((s, i) => add(`reference.sidequests/${q.id}.steps[${i}]`, s)); (q.rewards || []).forEach((s, i) => add(`reference.sidequests/${q.id}.rewards[${i}]`, s)); }
const R = REF.remake || {};
(R.confirmed || []).forEach((e, i) => add(`reference.remake.confirmed[${i}].fact`, e.fact, true));
(R.unconfirmed || []).forEach((e, i) => add(`reference.remake.unconfirmed[${i}].claim`, e.claim, true));
(R.guideImpacts || []).forEach((e, i) => { add(`reference.remake.guideImpacts[${i}].area`, e.area, true); add(`reference.remake.guideImpacts[${i}].impact`, e.impact, true); });

/* ------------------------------------------------------------------ style lint */
const NOTE = '[A↑↓←→]';
const NOTES_OK = new RegExp(`^${NOTE}( ${NOTE})*$`);
const NUMBER_WORDS = /\b(two|three|four|five|six|seven|eight|nine|ten|eleven|twelve|thirteen|fourteen|fifteen|sixteen|seventeen|eighteen|nineteen|twenty|thirty|forty|fifty|sixty|seventy|eighty|ninety|hundred|thousand)\b/gi;
// fixed names that contain a number word (titles of things, not counts)
const NUMBER_OK = [/\bSeven Years Later\b/g, /\btwo-handed\b/gi];
const CONTROL = [
  [/\b(?:A|B|X|Y|Z|L|R|ZL|ZR|Start|Select)[ -]?[Bb]uttons?\b/g, 'button name'],
  [/\bC(?:-|\s)?(?:[Uu]p|[Dd]own|[Ll]eft|[Rr]ight)\b|\bC[▲▼◀▶↑↓←→]/g, 'C-button direction'],
  [/\bC[- ]?buttons?\b/gi, 'C-buttons'],
  [/\bZ[- ]?target(?:ing|ed|s)?\b/gi, 'Z-targeting'],
  [/\bControl Stick\b/gi, 'Control Stick'],
  [/\banalog(?:ue)? stick\b/gi, 'analog stick'],
  [/\bD[- ]?pad\b/gi, 'D-pad'],
];
const boldCount = {};
for (const { where, s, remake } of texts) {
  if (/\bsimply\b/i.test(s)) err('style', `${where}: uses "simply"`);
  let t = s;
  for (const re of NUMBER_OK) t = t.replace(re, '');
  const nw = t.match(NUMBER_WORDS);
  if (nw) err('style', `${where}: number written as a word (${[...new Set(nw)].join(', ')}); use digits`);
  const rl = s.match(/\brupees?\b/g);
  if (rl) err('style', `${where}: write "Rupee(s)" with a capital R`);
  const rs = s.match(/\b(\d+) Rupee\b(?!s)/g);
  if (rs && rs.some((x) => !/^1 /.test(x))) err('style', `${where}: write costs as "X Rupees" (${rs.join(', ')})`);
  if (/<\/?(b|strong|i|em)\b/i.test(s) || /__[^_]+__/.test(s)) err('style', `${where}: bold only via **...** (found HTML or __ markup)`);
  const stars = (s.match(/\*\*/g) || []).length;
  if (stars % 2) err('style', `${where}: unbalanced ** markers`);
  if (/(^|[^*])\*(?!\*)[^*\s][^*]*\*(?!\*)/.test(s.replace(/\*\*[^*]+\*\*/g, ''))) err('style', `${where}: single-* emphasis; bold only via **...**`);
  if (/\*\*\s*\*\*/.test(s)) err('style', `${where}: empty bold`);
  for (const m of s.matchAll(/\*\*([^*]+)\*\*/g)) {
    const term = m[1];
    if (term !== term.trim()) err('style', `${where}: bold term "${term}" has spaces inside the markers`);
    boldCount[term] = (boldCount[term] || 0) + 1;
  }
  // notes tokens and raw arrows
  for (const m of s.matchAll(/\{\s*notes?\s*:([^}]*)\}/gi)) {
    if (!/^\{notes:/.test(m[0]) || !NOTES_OK.test(m[1])) err('controls', `${where}: bad notes token "${m[0]}" (use {notes:A ↓ → ↓}: "A" and arrows, space-separated)`);
  }
  if (/[↑↓←→▲▼◀▶]/.test(s.replace(/\{notes:[^}]*\}/g, ''))) err('controls', `${where}: note arrows outside a {notes:...} token`);
  if (!remake) {
    for (const [re, label] of CONTROL) {
      const hit = s.match(re);
      if (hit) err('controls', `${where}: names a control (${label}: "${hit[0]}"); describe the action instead`);
    }
  }
}
// first-mention rule: the same term bolded twice in one step text
for (const st of Object.values(stepById).map((x) => x.step)) {
  const seen = {};
  for (const fld of ['text', 'tip', 'warn']) for (const m of String(st[fld] || '').matchAll(/\*\*([^*]+)\*\*/g)) {
    if (seen[m[1]]) warn('style', `${st.id}: "${m[1]}" is bolded more than once in the step (bold the first mention only)`);
    seen[m[1]] = true;
  }
}
for (const s of REF.songs || []) {
  if (s.notes === '') { if (!/scarecrow/i.test(s.id + s.name)) err('controls', `reference.songs/${s.id}: empty notes`); }
  else if (!NOTES_OK.test(s.notes)) err('controls', `reference.songs/${s.id}: notes "${s.notes}" must be "A" and arrows, space-separated`);
}

/* ------------------------------------------------------------------ step size */

for (const ch of W) {
  let n = 0;
  for (const sec of ch.sections || []) {
    const k = (sec.steps || []).length;
    n += k;
    if (k > 7) err('size', `${sec.id} "${sec.title}" has ${k} steps (max 7): merge steps or split the section`);
    else if (k < 3) warn('size', `${sec.id} "${sec.title}" has ${k} step${k === 1 ? '' : 's'} (aim for 4-6)${sec.kind === 'boss' ? ' [boss section]' : ''}`);
  }
  const ns = (ch.sections || []).length;
  const avg = ns ? n / ns : 0;
  avgRows.push(`${ch.id.padEnd(26)} ${String(ns).padStart(2)} sections ${String(n).padStart(3)} steps  avg ${avg.toFixed(1)}`);
  if (ns && (avg < 3.5 || avg > 6.5)) warn('size', `${ch.id}: ${avg.toFixed(1)} steps per section on average (aim for 4-6)`);
}

/* ------------------------------------------------------------------ name map (rule C) */
// Every bold term, every `requires` entry, every collectible area, every song/boss/bestiary name and
// every item-type collectible name must be a key in research/name-map.json, so a later bulk swap
// to the remake's names is mechanical.
const nmMissing = {};
const needName = (n, where) => { if (!(n in NAMEMAP)) (nmMissing[n] = nmMissing[n] || []).push(where); };
for (const term of Object.keys(boldCount)) needName(term, 'bold');
for (const cat of CATS) for (const it of cat.items || []) {
  (it.requires || []).forEach((r) => { if (!/^\d+ Gold Skulltula Tokens$/.test(r)) needName(r, 'requires'); });
  needName(it.area, 'area');
  if (['inventory-items', 'equipment', 'masks', 'songs', 'spiritual-stones', 'medallions', 'upgrades', 'adult-trade', 'child-trade'].includes(cat.id)
      && !/\(|\b(upgrade|capacity|Wake|Show)\b/.test(it.name)) needName(it.name, cat.id);
}
for (const s of REF.songs || []) needName(s.name, 'reference.songs');
for (const b of REF.bosses || []) needName(b.name, 'reference.bosses');
for (const b of REF.bestiary || []) {
  const m = b.name.match(/^(.*?)\s*\((.*)\)$/);
  const base = m ? m[1] : b.name;
  if (/^[A-Z]/.test(base) && !/\b(chest|trap)\b/.test(base)) needName(base, 'reference.bestiary');
  if (m && /^[A-Z]/.test(m[2])) m[2].split(/,\s*|\s+and\s+/).forEach((p) => needName(p.trim(), 'reference.bestiary'));
}
for (const v of Object.values(NAMEMAP)) if (!isStr(v)) err('names', 'name-map.json values must be strings');
const nmKeys = Object.keys(nmMissing);
if (nmKeys.length) err('names', `${nmKeys.length} names missing from research/name-map.json: ${nmKeys.map((k) => `"${k}" (${[...new Set(nmMissing[k])].join('/')})`).join(', ')}`);

// rule C: non-N64 spellings and known variants that must not appear anywhere
const VARIANTS = [
  [/\bKokiri Emerald\b/g, "Kokiri's Emerald"], [/\bGoron Ruby\b/g, "Goron's Ruby"], [/\bZora Sapphire\b/g, "Zora's Sapphire"],
  [/\bGerudo Fortress\b/g, "Gerudo's Fortress"], [/\bDampe\b/g, 'Dampé'], [/\bOdd (?:Poultice|Medicine)\b/g, 'Odd Potion'],
  [/\bDinalfos\b/g, 'Dinolfos'], [/\bGoron Bracelet\b/g, "Goron's Bracelet"], [/\bBiggoron Sword\b/g, "Biggoron's Sword"],
  [/\bHero's Bow\b/g, 'Fairy Bow'], [/\bGolden Skulltula\b/g, 'Gold Skulltula'], [/\bHeart Pieces?\b/g, 'Piece(s) of Heart'],
  [/\bGerudo Training Grounds\b/g, 'Gerudo Training Ground'], [/\bRe-?dead\b/g, 'ReDead'], [/\bLike-Like\b/g, 'Like Like'],
  [/\bSkulltula House\b/g, 'House of Skulltula'], [/\bScarecrow Song\b/g, "Scarecrow's Song"], [/\bShard of Agony\b/g, 'Stone of Agony'],
  [/\bGold Scale\b/g, 'Golden Scale'], [/\bmagic meter\b/g, 'Magic Meter'], [/\bFreezzard\b/g, 'Freezard'], [/\bZora River\b/g, "Zora's River"],
  [/\bZoras? Fountain\b/g, "Zora's Fountain"], [/\bJabu Jabu\b/g, 'Jabu-Jabu'], [/\bFishing Hole\b/g, 'Fishing Pond'], [/\bLon Lon milk\b/g, 'Lon Lon Milk'],
  [/\b[Ss]pin attacks?\b/g, 'Spin Attack'],
];
for (const { where, s, remake } of texts) {
  if (remake) continue;
  for (const [re, good] of VARIANTS) { const h = s.match(re); if (h) err('names', `${where}: "${h[0]}" should be "${good}" (rule C)`); }
}

finish();

/* ------------------------------------------------------------------ report */
function finish() {
  const line = '-'.repeat(72);
  console.log(line);
  console.log('OoT guide validator  (data/*.js against BRIEF.md)');
  console.log(line);
  if (W.length) {
    const nSteps = W.reduce((a, c) => a + (c.sections || []).reduce((b, s) => b + (s.steps || []).length, 0), 0);
    console.log(`Chapters ${W.length} · sections ${sectionIds.size} · steps ${nSteps} · collectible categories ${CATS.length} · distinct collectibles ${Object.keys(itemsById || {}).length}`);
    console.log('\nSteps per section:');
    for (const r of avgRows || []) console.log('  ' + r);
  }
  const group = (list) => { const g = {}; for (const m of list) { const k = m.match(/^\[([^\]]+)\]/)[1]; (g[k] = g[k] || []).push(m); } return g; };
  const show = (title, list) => {
    console.log(`\n${title} (${list.length})`);
    const g = group(list);
    for (const k of Object.keys(g)) { console.log(`  ${k}: ${g[k].length}`); for (const m of g[k]) console.log('    ' + m.replace(/^\[[^\]]+\] /, '')); }
  };
  show('ERRORS', errors);
  show('WARNINGS', warnings);
  if (info.length) { console.log('\nINFO'); for (const m of info) console.log('  ' + m); }
  console.log('\n' + line);
  console.log(errors.length ? `FAIL: ${errors.length} error(s), ${warnings.length} warning(s)` : `PASS: 0 errors, ${warnings.length} warning(s)`);
  process.exit(errors.length ? 1 : 0);
}
