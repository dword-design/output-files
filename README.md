<!-- TITLE/ -->

<h1>output-files</h1>

<!-- /TITLE -->


<!-- BADGES/ -->

<span class="badge-npmversion"><a href="https://npmjs.org/package/output-files" title="View this project on NPM"><img src="https://img.shields.io/npm/v/output-files.svg" alt="NPM version" /></a></span>
<span class="badge-travisci"><a href="http://travis-ci.org/dword-design/output-files" title="Check this project's build status on TravisCI"><img src="https://img.shields.io/travis/dword-design/output-files/master.svg" alt="Travis CI Build Status" /></a></span>
<span class="badge-coveralls"><a href="https://coveralls.io/r/dword-design/output-files" title="View this project's coverage on Coveralls"><img src="https://img.shields.io/coveralls/dword-design/output-files.svg" alt="Coveralls Coverage Status" /></a></span>
<span class="badge-daviddm"><a href="https://david-dm.org/dword-design/output-files" title="View the status of this project's dependencies on DavidDM"><img src="https://img.shields.io/david/dword-design/output-files.svg" alt="Dependency Status" /></a></span>
<span class="badge-shields"><a href="https://img.shields.io/badge/renovate-enabled-brightgreen.svg"><img src="https://img.shields.io/badge/renovate-enabled-brightgreen.svg" /></a></span>

<!-- /BADGES -->


<!-- DESCRIPTION/ -->

Output a tree of files and directories by providing an object. Especially useful for testing with real files.

<!-- /DESCRIPTION -->


<!-- INSTALL/ -->

<h2>Install</h2>

<a href="https://npmjs.com" title="npm is a package manager for javascript"><h3>npm</h3></a>
<ul>
<li>Install: <code>npm install --save output-files</code></li>
<li>Import: <code>import * as pkg from ('output-files')</code></li>
<li>Require: <code>const pkg = require('output-files')</code></li>
</ul>

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

<h2>License</h2>

Unless stated otherwise all works are:

<ul><li>Copyright &copy; Sebastian Landwehr</li></ul>

and licensed under:

<ul><li><a href="http://spdx.org/licenses/MIT.html">MIT License</a></li></ul>

<!-- /LICENSE -->
