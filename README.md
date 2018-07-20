# detect-newline-at-eof

[![Node.js package](https://img.shields.io/npm/v/detect-newline-at-eof.svg)](https://www.npmjs.com/package/detect-newline-at-eof)
[![Linux Build Status](https://img.shields.io/travis/sonicdoe/detect-newline-at-eof/develop.svg)](https://travis-ci.org/sonicdoe/detect-newline-at-eof)
[![Windows Build Status](https://img.shields.io/appveyor/ci/sonicdoe/detect-newline-at-eof/develop.svg)](https://ci.appveyor.com/project/sonicdoe/detect-newline-at-eof)

> Detect newline at end of file

detect-newline-at-eof is similar to [trailing-newline](https://github.com/bendrucker/trailing-newline) but will also match `\n` on Windows and `\r\n` on macOS.

## Installation

```console
$ npm install detect-newline-at-eof
```

## Usage

```js
const fs = require('fs')
const detectNewlineAtEof = require('detect-newline-at-eof')

const fileContents = fs.readFileSync('file.txt', 'utf8')
const newlineCharacter = detectNewlineAtEof(fileContents)

console.log(newlineCharacter)
// => \n, \r\n, or null if no newline character at the end was found
```

## Changelog

This project follows [Semantic Versioning 2](https://semver.org).

- v0.1.0 (2015-07-18): Initial release.
