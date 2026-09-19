import test from 'node:test';
import assert from 'node:assert/strict';
import { existsSync, readFileSync, readdirSync, mkdtempSync, cpSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join, resolve } from 'node:path';
import { execFileSync } from 'node:child_process';
import { aliases, loadCatalog, skillRoot } from '../scripts/catalog.mjs';

const skills = loadCatalog();
test('catalogue has distinct Astra workflows and valid consolidation targets', () => {
  assert.equal(skills.length, 8);
  assert.equal(new Set(skills.map(skill => skill.id)).size, 8);
  assert.equal(Object.keys(aliases).length, 6);
  for (const skill of skills) assert.equal(skill.model, 'gpt-6-astra');
});

test('downloaded skill references are self-contained; source links are explicit', () => {
  for (const skill of skills) {
    const directory = join(skillRoot, skill.id);
    for (const name of ['SKILL.md', 'references.md', 'example.md']) {
      const text = readFileSync(join(directory, name), 'utf8');
      for (const [, link] of text.matchAll(/\]\(([^)]+)\)/g)) {
        if (/^https:\/\//.test(link)) continue;
        assert.ok(!link.startsWith('../'), `${skill.id}: sibling dependency ${link}`);
        assert.ok(existsSync(resolve(directory, link)), `${skill.id}: missing ${link}`);
      }
    }
  }
});

test('metadata drift fails validation before a site can build', () => {
  const temporary = mkdtempSync(join(tmpdir(), 'founder-catalog-'));
  try {
    cpSync(skillRoot, temporary, { recursive: true });
    const file = join(temporary, 'copywriter', 'catalog.json');
    const original = readFileSync(file, 'utf8');
    for (const change of [
      data => { data.model = 'other-model'; },
      data => { data.relatedSkills = ['retired-skill']; },
      data => { data.exampleOutput = 'Drifted example'; },
      data => { data.whatYouGet = []; },
    ]) {
      const data = JSON.parse(original); change(data); writeFileSync(file, JSON.stringify(data));
      assert.throws(() => loadCatalog(temporary));
    }
  } finally { rmSync(temporary, { recursive: true, force: true }); }
});

test('archives contain current source bytes and are reproducible', () => {
  const output = mkdtempSync(join(tmpdir(), 'founder-packages-'));
  try {
    writeFileSync(join(output, 'retired.skill'), 'stale');
    writeFileSync(join(output, 'notes.txt'), 'keep');
    execFileSync('python3', ['scripts/package_skills.py', '--output', output]);
    assert.equal(existsSync(join(output, 'retired.skill')), false);
    assert.equal(readFileSync(join(output, 'notes.txt'), 'utf8'), 'keep');
    assert.equal(readdirSync(output).filter(name => name.endsWith('.zip')).length, skills.length + 1);
    const before = readFileSync(join(output, 'skills-all.zip'));
    execFileSync('python3', ['-c', `
import pathlib, sys, zipfile
root, output = map(pathlib.Path, sys.argv[1:])
for archive in output.glob('*.zip'):
    with zipfile.ZipFile(archive) as z:
        assert z.testzip() is None
        assert len(z.namelist()) == (32 if archive.stem == 'skills-all' else 4)
        for name in z.namelist():
            assert z.read(name) == (root / name).read_bytes()
`, skillRoot, output]);
    execFileSync('python3', ['scripts/package_skills.py', '--output', output]);
    assert.deepEqual(readFileSync(join(output, 'skills-all.zip')), before);
  } finally { rmSync(output, { recursive: true, force: true }); }
});
