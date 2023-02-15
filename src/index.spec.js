import { identity, keyBy, mapValues, stubTrue } from '@dword-design/functions'
import tester from '@dword-design/tester'
import testerPluginTmpDir from '@dword-design/tester-plugin-tmp-dir'
import { globby } from 'globby'

import self from './index.js'

export default tester(
  {
    'empty folder': {
      files: {
        folder: {},
        'foo.txt': 'foo',
      },
      result: { folder: true, 'foo.txt': true },
    },
    'file folder chain': {
      files: {
        'folder/folder2/foo.txt': 'foo bar',
        'foo.txt': 'foo',
      },
      result: {
        folder: true,
        'folder/folder2': true,
        'folder/folder2/foo.txt': true,
        'foo.txt': true,
      },
    },
    files: {
      files: { 'foo.txt': 'foo' },
      result: {
        'foo.txt': true,
      },
    },
    folder: {
      files: {
        folder: {
          'bar.txt': 'bar',
          'baz.txt': 'baz',
        },
        'foo.txt': 'foo',
      },
      result: {
        folder: true,
        'folder/bar.txt': true,
        'folder/baz.txt': true,
        'foo.txt': true,
      },
    },
    'folder chain': {
      files: {
        'folder/folder2': {
          'foo.txt': 'foo bar',
        },
        'foo.txt': 'foo',
      },
      result: {
        folder: true,
        'folder/folder2': true,
        'folder/folder2/foo.txt': true,
        'foo.txt': true,
      },
    },
    'missing files': {
      result: {},
    },
    'nested folders': {
      files: {
        folder: {
          'bar.txt': 'bar',
          folder2: {
            'baz.txt': 'baz',
          },
        },
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
    path: {
      files: { 'bar.txt': 'baz' },
      path: 'foo',
      result: {
        foo: true,
        'foo/bar.txt': true,
      },
    },
  },
  [
    testerPluginTmpDir(),
    {
      transform: config => async () => {
        await self(...[...(config.path ? [config.path] : []), config.files])
        expect(
          globby('**', { onlyFiles: false })
            |> await
            |> keyBy(identity)
            |> mapValues(stubTrue)
        ).toEqual(config.result)
      },
    },
  ]
)
