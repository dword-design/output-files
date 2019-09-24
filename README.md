<!--@h1([pkg.name])-->
# output-files
<!--/@-->

[![Build Status](https://travis-ci.org/dword-design/output-files.svg?branch=master)](https://travis-ci.org/dword-design/output-files)
[![Coverage Status](https://coveralls.io/repos/github/dword-design/output-files/badge.svg?branch=master)](https://coveralls.io/github/dword-design/output-files?branch=master)

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
