import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import test from 'node:test';

const html = await readFile(new URL('../dist/index.html', import.meta.url), 'utf8');
const headline = 'Senior Software Engineer | .NET · Angular · Enterprise Integrations';

test('headline and employment title stay distinct across page and metadata', () => {
  assert.ok(html.includes(headline));
  const schema = JSON.parse(html.match(/<script[^>]*type="application\/ld\+json"[^>]*>(.*?)<\/script>/s)[1]);
  assert.equal(schema.jobTitle, 'Senior Software Developer');
  assert.equal(Object.hasOwn(schema, 'email'), false);
  assert.equal(Object.hasOwn(schema, 'address'), false);
  assert.equal(Object.hasOwn(schema, 'homeLocation'), false);
  assert.deepEqual(schema.sameAs, ['https://github.com/AnamRaz', 'https://www.linkedin.com/in/rawnazanam/']);
  assert.equal((html.match(/<h1\b/g) ?? []).length, 1);
  assert.match(html, /<title>Rawnaz Anam \| Senior Software Engineer<\/title>/);
});

test('section order and every internal navigation target are valid', () => {
  const ids = [...html.matchAll(/\bid="([^"]+)"/g)].map((match) => match[1]);
  assert.equal(new Set(ids).size, ids.length);
  for (const [, target] of html.matchAll(/href="#([^"]+)"/g)) assert.ok(ids.includes(target), target);
  const sections = ['top', 'about', 'work', 'case-study', 'expertise', 'contact'];
  const positions = sections.map((id) => html.indexOf(`id="${id}"`));
  assert.ok(positions.every((position, index) => position >= 0 && (!index || position > positions[index - 1])));
});

test('only supplied contact and profile destinations are linked', () => {
  const allowed = new Set(['https://github.com/AnamRaz', 'https://www.linkedin.com/in/rawnazanam/']);
  // Inspect rendered anchors, excluding canonical and other document metadata links.
  for (const [, destination] of html.matchAll(/<a\b[^>]*\bhref="([^"]+)"/g)) {
    assert.ok(destination.startsWith('#') || destination === '/resume.pdf' || allowed.has(destination), destination);
  }
  assert.doesNotMatch(html, /mailto:|tel:|Based in|[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/i);
});

test('existing project cards preserve ongoing stages without obsolete claims', () => {
  assert.equal((html.match(/class="project-card"/g) ?? []).length, 4);
  assert.match(html, /Ongoing modernization/);
  assert.match(html, /active development and pilot preparation/);
  assert.match(html, /ATARVI/);
  assert.doesNotMatch(html, /stockward|thousands of (?:employee )?hours|tel:|salary|relocation/i);
  assert.doesNotMatch(html, /\b\d{3}[- .]\d{3}[- .]\d{4}\b/);
});

test('the résumé download points to the exact public PDF included in the build', async () => {
  assert.match(html, /<a\b[^>]*href="\/resume\.pdf"[^>]*\bdownload(?:[\s=>])/);
  const original = await readFile(new URL('../public/resume.pdf', import.meta.url));
  const built = await readFile(new URL('../dist/resume.pdf', import.meta.url));
  assert.equal(original.subarray(0, 5).toString(), '%PDF-');
  assert.deepEqual(built, original);
});
