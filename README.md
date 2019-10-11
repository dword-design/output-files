<!--@h1([pkg.name])-->
# output-files
<!--/@-->

<!--@shields('npm', 'travis', 'coveralls', 'deps')-->
[![npm version](https://img.shields.io/npm/v/output-files.svg)](https://www.npmjs.com/package/output-files) [![Build Status](https://img.shields.io/travis/dword-design/output-files/master.svg)](https://travis-ci.org/dword-design/output-files) [![Coverage Status](https://img.shields.io/coveralls/dword-design/output-files/master.svg)](https://coveralls.io/r/dword-design/output-files?branch=master) [![dependency status](https://img.shields.io/david/dword-design/output-files.svg)](https://david-dm.org/dword-design/output-files)
<!--/@-->

<!--@pkg.description-->
Output a tree of files and directories by providing an object. Especially useful for testing with real files.
<!--/@-->

## Installation

```sh
# via NPM
npm install --save output-files

# via Yarn
yarn add output-files
```

## Usage

```js
const outputFiles = require('output-files')

// outputs files in process.cwd()
await outputFiles({
  'example1.md': 'Donec id elit non mi porta gravida at eget.',
  'example2.md': 'Aenean eu leo quam. Pellentesque ornare.',
  someFolder: {
    'content.md': 'Vivamus sagittis lacus vel augue laoreet.',
    'README.md': '# This needs to be filled',
  },
})

// outputs files in example subdirectory
await outputFiles('example', {
  'foo.md': 'This is an interesting file',
  'example2.md': 'This is another interesting file',
})

// you can also define subdirectories without nesting the object
await outputFiles({
  'folder1/folder2': {
    'foo.md': 'This is an interesting file',
  },
  'foo/bar/example2.md': 'This is another interesting file',
})
```

<!--@license()-->
## License

MIT © Sebastian Landwehr
<!--/@-->
