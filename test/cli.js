#!/usr/bin/env node

const outputFiles = require('../src')

outputFiles(process.cwd(), { 'foo.txt': 'foo' })
