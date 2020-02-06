import outputFiles from 'output-files'
import withLocalTmpDir from 'with-local-tmp-dir'
import glob from 'glob-promise'

export default () => withLocalTmpDir(async () => {
  await outputFiles({ 'foo.txt': 'bar' })
  expect(await glob('**')).toEqual(['foo.txt'])
})
