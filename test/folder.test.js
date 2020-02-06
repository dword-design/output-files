import outputFiles from 'output-files'
import withLocalTmpDir from 'with-local-tmp-dir'
import glob from 'glob-promise'

export default () => withLocalTmpDir(async () => {
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
})
