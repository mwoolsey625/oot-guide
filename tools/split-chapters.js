#!/usr/bin/env node
/* Writes one JSON file per walkthrough chapter to research/verify/inputs/, holding the chapter's
   steps plus every collectible row those steps tick. Verification agents read these instead of
   the full data files. Usage: node tools/split-chapters.js */
const fs = require('fs');
const path = require('path');
const vm = require('vm');

const ROOT = path.join(__dirname, '..');
const g = {}; g.window = g; vm.createContext(g);
for (const f of ['collectibles.js', 'reference.js', 'walkthrough-child.js', 'walkthrough-adult.js']) {
  vm.runInContext(fs.readFileSync(path.join(ROOT, 'data', f), 'utf8'), g, { filename: f });
}
const OOT = g.OOT;

// Index every object with an id inside collectibles, remembering its group.
const rows = {};
for (const group of OOT.collectibles) {
  const walk = (o) => {
    if (Array.isArray(o)) { o.forEach(walk); return; }
    if (o && typeof o === 'object') {
      if (o.id && o !== group) rows[o.id] = Object.assign({ group: group.id }, o);
      Object.values(o).forEach(walk);
    }
  };
  walk(group.items || group);
}

const outDir = path.join(ROOT, 'research', 'verify', 'inputs');
fs.mkdirSync(outDir, { recursive: true });
const summary = [];
for (const ch of OOT.walkthrough) {
  const ids = new Set();
  let steps = 0;
  for (const s of ch.sections) for (const st of s.steps) { steps++; (st.collect || []).forEach((c) => ids.add(c)); }
  const linked = {};
  for (const id of ids) linked[id] = rows[id] || { missing: true };
  const out = { chapter: ch, collectibleRows: linked };
  const file = path.join(outDir, ch.id + '.json');
  fs.writeFileSync(file, JSON.stringify(out, null, 1));
  summary.push(`${ch.id}\t${ch.era}\tsections=${ch.sections.length}\tsteps=${steps}\trows=${ids.size}\tbytes=${fs.statSync(file).size}\t${ch.title}`);
}
console.log(summary.join('\n'));
