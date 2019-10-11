const outputFiles = require('../src')
const withLocalTmpDir = require('with-local-tmp-dir')
const { exists } = require('fs-extra')
const glob = require('glob-promise')
const { spawn } = require('child-process-promise')

test('undefined path uses cwd', async () => withLocalTmpDir(async path => {
  await spawn(require.resolve('./cli'), { cwd: path })
  expect(await glob('**', { cwd: path })).toEqual(['foo.txt'])
}))

test('undefined files does nothing', async () => withLocalTmpDir(async path => {
  await outputFiles(path, undefined)
  expect(await glob('**', { cwd: path })).toEqual([])
}))

test('create files', async () => withLocalTmpDir(async path => {
  await outputFiles(path, { 'foo.txt': 'foo' })
  expect(await glob('**', { cwd: path })).toEqual(['foo.txt'])
}))

test('create inside a folder', async () => withLocalTmpDir(async path => {
  await outputFiles(path, {
    'foo.txt': 'foo',
    folder: {
      'bar.txt': 'bar',
      'baz.txt': 'baz',
    },
  })
  expect(await glob('**', { cwd: path })).toEqual([
    'folder',
    'folder/bar.txt',
    'folder/baz.txt',
    'foo.txt',
  ])
}))

test('nested folders', async () => withLocalTmpDir(async path => {
  await outputFiles(path, {
    'foo.txt': 'foo',
    folder: {
      'bar.txt': 'bar',
      folder2: {
        'baz.txt': 'baz',
      },
    },
  })
  expect(await glob('**', { cwd: path })).toEqual([
    'folder',
    'folder/bar.txt',
    'folder/folder2',
    'folder/folder2/baz.txt',
    'foo.txt',
  ])
}))

test('folder chain', async () => withLocalTmpDir(async path => {
  await outputFiles(path, {
    'foo.txt': 'foo',
    'folder/folder2': {
      'foo.txt': 'foo bar',
    }
  })
  expect(await glob('**', { cwd: path })).toEqual([
    'folder',
    'folder/folder2',
    'folder/folder2/foo.txt',
    'foo.txt',
  ])
}))

test('file folder chain', async () => withLocalTmpDir(async path => {
  await outputFiles(path, {
    'foo.txt': 'foo',
    'folder/folder2/foo.txt': 'foo bar',
  })
  expect(await glob('**', { cwd: path })).toEqual([
    'folder',
    'folder/folder2',
    'folder/folder2/foo.txt',
    'foo.txt',
  ])
}))

test('empty folder', async () => withLocalTmpDir(async path => {
  await outputFiles(path, {
    'foo.txt': 'foo',
    folder: {},
  })
  expect(await glob('**', { cwd: path })).toEqual([
    'folder',
    'foo.txt',
  ])
}))
