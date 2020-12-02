<!-- TITLE/ -->
# output-files
<!-- /TITLE -->

<!-- BADGES/ -->
[![NPM version](https://img.shields.io/npm/v/output-files.svg)](https://npmjs.org/package/output-files)
![Linux macOS Windows compatible](https://img.shields.io/badge/os-linux%20%7C%C2%A0macos%20%7C%C2%A0windows-blue)
[![Build status](https://github.com/dword-design/output-files/workflows/build/badge.svg)](https://github.com/dword-design/output-files/actions)
[![Coverage status](https://img.shields.io/coveralls/dword-design/output-files)](https://coveralls.io/github/dword-design/output-files)
[![Dependency status](https://img.shields.io/david/dword-design/output-files)](https://david-dm.org/dword-design/output-files)
![Renovate enabled](https://img.shields.io/badge/renovate-enabled-brightgreen)

<a href="https://gitpod.io/#https://github.com/dword-design/bar">
  <img src="https://gitpod.io/button/open-in-gitpod.svg" alt="Open in Gitpod">
</a><a href="https://www.buymeacoffee.com/dword">
  <img
    src="https://www.buymeacoffee.com/assets/img/guidelines/download-assets-sm-2.svg"
    alt="Buy Me a Coffee"
    height="32"
  >
</a><a href="https://paypal.me/SebastianLandwehr">
  <img
    src="https://dword-design.de/images/paypal.svg"
    alt="PayPal"
    height="32"
  >
</a><a href="https://www.patreon.com/dworddesign">
  <img
    src="https://dword-design.de/images/patreon.svg"
    alt="Patreon"
    height="32"
  >
</a>
<!-- /BADGES -->

<!-- DESCRIPTION/ -->
Output a tree of files and directories by providing an object. Especially useful for testing with real files.
<!-- /DESCRIPTION -->

<!-- INSTALL/ -->
## Install

```bash
# NPM
$ npm install output-files

# Yarn
$ yarn add output-files
```
<!-- /INSTALL -->

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

<!-- LICENSE/ -->
## License

Unless stated otherwise all works are:

Copyright &copy; Sebastian Landwehr <info@dword-design.de>

and licensed under:

[MIT License](https://opensource.org/licenses/MIT)
<!-- /LICENSE -->
