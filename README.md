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

await outputFiles('example', {
  'example1.txt': 'Donec id elit non mi porta gravida at eget.',
  'example2.txt': 'Aenean eu leo quam. Pellentesque ornare.',
  someFolder: {
    'content.txt': 'Vivamus sagittis lacus vel augue laoreet.',
    'README.md': '# This needs to be filled',
  },
})
```

<!--@license()-->
## License

MIT © Sebastian Landwehr
<!--/@-->
