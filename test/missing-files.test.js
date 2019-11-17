import outputFiles from 'output-files'
import withLocalTmpDir from 'with-local-tmp-dir'
import glob from 'glob-promise'
import expect from 'expect'

export default () => withLocalTmpDir(async () => {
  await outputFiles('.')
  expect(await glob('**')).toEqual([])
})
