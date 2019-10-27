import outputFiles from 'output-files'
import withLocalTmpDir from 'with-local-tmp-dir'
import glob from 'glob-promise'

it('missing path uses cwd', async () => withLocalTmpDir(async () => {
  await outputFiles({ 'foo.txt': 'bar' })
  expect(await glob('**')).toEqual(['foo.txt'])
}))

it('specific root path', async () => withLocalTmpDir(async () => {
  await outputFiles('foo', { 'bar.txt': 'baz' })
  expect(await glob('**')).toEqual(['foo', 'foo/bar.txt'])
}))

it('missing files does nothing', async () => withLocalTmpDir(async () => {
  await outputFiles('.')
  expect(await glob('**')).toEqual([])
}))

it('create files', async () => withLocalTmpDir(async () => {
  await outputFiles({ 'foo.txt': 'foo' })
  expect(await glob('**')).toEqual(['foo.txt'])
}))

it('create inside a folder', async () => withLocalTmpDir(async () => {
  await outputFiles({
    'foo.txt': 'foo',
    folder: {
      'bar.txt': 'bar',
      'baz.txt': 'baz',
    },
  })
  expect(await glob('**')).toEqual([
    'folder',
    'folder/bar.txt',
    'folder/baz.txt',
    'foo.txt',
  ])
}))

it('nested folders', async () => withLocalTmpDir(async () => {
  await outputFiles({
    'foo.txt': 'foo',
    folder: {
      'bar.txt': 'bar',
      folder2: {
        'baz.txt': 'baz',
      },
    },
  })
  expect(await glob('**')).toEqual([
    'folder',
    'folder/bar.txt',
    'folder/folder2',
    'folder/folder2/baz.txt',
    'foo.txt',
  ])
}))

it('folder chain', async () => withLocalTmpDir(async () => {
  await outputFiles({
    'foo.txt': 'foo',
    'folder/folder2': {
      'foo.txt': 'foo bar',
    },
  })
  expect(await glob('**')).toEqual([
    'folder',
    'folder/folder2',
    'folder/folder2/foo.txt',
    'foo.txt',
  ])
}))

it('file folder chain', async () => withLocalTmpDir(async () => {
  await outputFiles({
    'foo.txt': 'foo',
    'folder/folder2/foo.txt': 'foo bar',
  })
  expect(await glob('**')).toEqual([
    'folder',
    'folder/folder2',
    'folder/folder2/foo.txt',
    'foo.txt',
  ])
}))

it('empty folder', async () => withLocalTmpDir(async () => {
  await outputFiles({
    'foo.txt': 'foo',
    folder: {},
  })
  expect(await glob('**')).toEqual([
    'folder',
    'foo.txt',
  ])
}))
