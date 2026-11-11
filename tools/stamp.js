#!/usr/bin/env node
// Stamp index.html with content versions so browsers never mix old and new files.
//
// Every local script and stylesheet link in index.html gets "?v=<hash of that file>", so a
// changed file gets a new URL and cannot come from a stale cache. The page also carries
// <meta name="build">, and version.json holds the same build id; assets/app.js compares the
// two and reloads once when the live site has a newer build (a page restored after a reboot
// or a Home Screen app waking up would otherwise keep running old files).
//
// Run `node tools/stamp.js` after changing any file in assets/ or data/, or index.html.
// tools/validate.js fails while the stamps are out of date.

const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

const ROOT = path.join(__dirname, '..');
const LINK_RE = /(<(?:script|link)\b[^>]*?\s(?:src|href)=")((?:assets|data)\/[^"?]+\.(?:js|css))(?:\?v=[0-9a-f]+)?(")/g;
const META_RE = /<meta name="build" content="[^"]*">/;

// Hash text with line endings normalised, so a CRLF checkout gives the same id as LF.
function hash(text) {
  return crypto.createHash('sha1').update(text.replace(/\r\n/g, '\n')).digest('hex').slice(0, 10);
}

// Returns the stamped html and the build id for the html as given.
function compute(html) {
  const parts = [];
  let out = html.replace(LINK_RE, (m, before, file, after) => {
    const h = hash(fs.readFileSync(path.join(ROOT, file), 'utf8'));
    parts.push(file + ':' + h);
    return `${before}${file}?v=${h}${after}`;
  });
  // index.html itself counts too, with its stamps blanked so the id does not depend on itself
  const plain = out.replace(/\?v=[0-9a-f]+"/g, '"').replace(/<meta name="build" content="[^"]*">\r?\n/, '');
  const build = hash(parts.join('\n') + '\n' + plain);
  const tag = `<meta name="build" content="${build}">`;
  if (META_RE.test(out)) out = out.replace(META_RE, tag);
  else out = out.replace(/(<meta charset="utf-8">)(\r?\n)/, `$1$2${tag}$2`);
  return { html: out, build };
}

function versionJson(build) {
  return JSON.stringify({ build }) + '\n';
}

module.exports = { ROOT, compute, versionJson };

if (require.main === module) {
  const indexPath = path.join(ROOT, 'index.html');
  const { html, build } = compute(fs.readFileSync(indexPath, 'utf8'));
  fs.writeFileSync(indexPath, html);
  fs.writeFileSync(path.join(ROOT, 'version.json'), versionJson(build));
  console.log('stamped build ' + build);
}
