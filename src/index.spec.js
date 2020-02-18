import outputFiles from '.'
import withLocalTmpDir from 'with-local-tmp-dir'
import glob from 'glob-promise'

export default {
  'empty folder': () => withLocalTmpDir(async () => {
    await outputFiles({
      'foo.txt': 'foo',
      folder: {},
    })
    expect(await glob('**')).toEqual([
      'folder',
      'foo.txt',
    ])
  }),
  'file folder chain': () => withLocalTmpDir(async () => {
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
  }),
  files: () => withLocalTmpDir(async () => {
    await outputFiles({ 'foo.txt': 'foo' })
    expect(await glob('**')).toEqual(['foo.txt'])
  }),
  'folder chain': () => withLocalTmpDir(async () => {
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
  }),
  folder: () => withLocalTmpDir(async () => {
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
  }),
  'missing files': () => withLocalTmpDir(async () => {
    await outputFiles('.')
    expect(await glob('**')).toEqual([])
  }),
  'missing path': () => withLocalTmpDir(async () => {
    await outputFiles({ 'foo.txt': 'bar' })
    expect(await glob('**')).toEqual(['foo.txt'])
  }),
  'nested folders': () => withLocalTmpDir(async () => {
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
  }),
  path: () => withLocalTmpDir(async () => {
    await outputFiles('foo', { 'bar.txt': 'baz' })
    expect(await glob('**')).toEqual(['foo', 'foo/bar.txt'])
  }),
}
