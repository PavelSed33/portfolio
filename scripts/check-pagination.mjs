import assert from 'node:assert/strict';
import {readFile, writeFile, unlink} from 'node:fs/promises';
import React from 'react';
import {renderToStaticMarkup} from 'react-dom/server';
import {transformWithOxc} from 'vite';

const output = new URL('./.pagination-check.mjs', import.meta.url);
const previousWindow = globalThis.window;
try {
  const source = await readFile(new URL('../src/ProjectPages.tsx', import.meta.url), 'utf8');
  const compiled = await transformWithOxc(source, 'ProjectPages.tsx', {jsx: {runtime: 'classic'}});
  await writeFile(output, compiled.code);
  const {ProjectPages} = await import(output.href);
  function render(count, query = '', enabled = true, lang = 'ru') {
    globalThis.window = {location: new URL(`https://example.com/portfolio/projects/${query}`)};
    return renderToStaticMarkup(React.createElement(ProjectPages, {enabled, lang},
      Array.from({length: count}, (_, i) => React.createElement('article', {key: i, 'data-project': i + 1}))));
  }
  function ids(html) { return [...html.matchAll(/data-project="(\d+)"/g)].map(m => Number(m[1])); }
  assert.deepEqual(ids(render(8)), [1,2,3,4,5,6,7,8]);
  assert.deepEqual(ids(render(9, '?page=2')), [9]);
  assert.deepEqual(ids(render(17, '?page=2')), [9,10,11,12,13,14,15,16]);
  assert.deepEqual(ids(render(17, '?page=3')), [17]);
  assert.deepEqual(ids(render(17, '?page=999')), [17]);
  for (const query of ['?page=0', '?page=-2', '?page=abc', '?page=1.5']) {
    assert.deepEqual(ids(render(9, query)), [1,2,3,4,5,6,7,8]);
  }
  assert.match(render(17, '?page=2&lang=en'), /href="\/portfolio\/projects\/\?lang=en#projects"/);
  assert.match(render(17, '?page=2'), /aria-current="page" aria-label="Страница 2"/);
  assert.match(render(6), /Проекты 1–6 из 6/);
  assert.match(render(0), /Проекты 0–0 из 0/);
  assert.match(render(9, '?page=2', true, 'en'), /Projects 9–9 of 9/);
  assert.equal(ids(render(17, '?page=2', false)).length, 17);
  assert(!render(17, '?page=2', false).includes('<nav'));
  console.log('Pagination: page boundaries, links, invalid URLs and detail pages passed');
} finally {
  if (previousWindow === undefined) delete globalThis.window;
  else globalThis.window = previousWindow;
  await unlink(output).catch(() => {});
}
