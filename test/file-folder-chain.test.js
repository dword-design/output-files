import outputFiles from 'output-files'
import withLocalTmpDir from 'with-local-tmp-dir'
import glob from 'glob-promise'

export default () => withLocalTmpDir(async () => {
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
})
