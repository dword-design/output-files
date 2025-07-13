import pathLib from 'node:path';

import { expect, test } from '@playwright/test';
import endent from 'endent';
import { execaCommand } from 'execa';
import fs from 'fs-extra';
import { globby } from 'globby';

import type { Files } from '.';
import self from '.';

type TestConfig = { files?: Files; result: Record<string, true> };

const tests: Record<string, TestConfig> = {
  'empty folder': {
    files: { folder: {}, 'foo.txt': 'foo' },
    result: { folder: true, 'foo.txt': true },
  },
  'file folder chain': {
    files: { 'folder/folder2/foo.txt': 'foo bar', 'foo.txt': 'foo' },
    result: {
      folder: true,
      'folder/folder2': true,
      'folder/folder2/foo.txt': true,
      'foo.txt': true,
    },
  },
  files: { files: { 'foo.txt': 'foo' }, result: { 'foo.txt': true } },
  folder: {
    files: { folder: { 'bar.txt': 'bar', 'baz.txt': 'baz' }, 'foo.txt': 'foo' },
    result: {
      folder: true,
      'folder/bar.txt': true,
      'folder/baz.txt': true,
      'foo.txt': true,
    },
  },
  'folder chain': {
    files: { 'folder/folder2': { 'foo.txt': 'foo bar' }, 'foo.txt': 'foo' },
    result: {
      folder: true,
      'folder/folder2': true,
      'folder/folder2/foo.txt': true,
      'foo.txt': true,
    },
  },
  'missing files': { result: {} },
  'nested folders': {
    files: {
      folder: { 'bar.txt': 'bar', folder2: { 'baz.txt': 'baz' } },
      'foo.txt': 'foo',
    },
    result: {
      folder: true,
      'folder/bar.txt': true,
      'folder/folder2': true,
      'folder/folder2/baz.txt': true,
      'foo.txt': true,
    },
  },
};

for (const [name, testConfig] of Object.entries(tests)) {
  test(name, async ({}, testInfo) => {
    const cwd = testInfo.outputPath();
    await self(cwd, testConfig.files);
    const result = await globby('**', { cwd, onlyFiles: false });

    expect(Object.fromEntries(result.map(path => [path, true]))).toEqual(
      testConfig.result,
    );
  });
}

test('default path', async ({}, testInfo) => {
  const cwd = testInfo.outputPath();

  await fs.outputFile(
    pathLib.join(cwd, 'cli.ts'),
    endent`
      import self from '../../src';

      self({ foo: 'bar' });
    `,
  );

  await execaCommand('tsx cli.ts', { cwd });
  expect(await fs.readFile(pathLib.join(cwd, 'foo'), 'utf8')).toEqual('bar');
});
