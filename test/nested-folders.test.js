import outputFiles from 'output-files'
import withLocalTmpDir from 'with-local-tmp-dir'
import glob from 'glob-promise'
import expect from 'expect'

export default () => withLocalTmpDir(async () => {
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
})
