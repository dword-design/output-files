<!--@h1([pkg.name])-->
# output-files
<!--/@-->

<!--@shields('travis', 'coveralls')-->
[![Build Status](https://img.shields.io/travis/dword-design/output-files/master.svg)](https://travis-ci.org/dword-design/output-files) [![Coverage Status](https://img.shields.io/coveralls/dword-design/output-files/master.svg)](https://coveralls.io/r/dword-design/output-files?branch=master)
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
  'example1.js': "console.log('This is a first example')"
  'example2.js': "console.log('This is another example')",
  data: {
    'content.txt': 'Vivamus sagittis lacus vel augue laoreet.',
    'README.md': '# This needs to be filled',
  }
})
```

<!--@license()-->
## License

MIT © Sebastian Landwehr
<!--/@-->
