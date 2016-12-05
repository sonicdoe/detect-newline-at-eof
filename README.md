# detect-newline-at-eof

[![Node.js package](https://img.shields.io/npm/v/detect-newline-at-eof.svg)](https://www.npmjs.com/package/detect-newline-at-eof)
[![Linux Build Status](https://img.shields.io/travis/sonicdoe/detect-newline-at-eof/develop.svg)](https://travis-ci.org/sonicdoe/detect-newline-at-eof)
[![Windows Build Status](https://img.shields.io/appveyor/ci/sonicdoe/detect-newline-at-eof.svg)](https://ci.appveyor.com/project/sonicdoe/detect-newline-at-eof)

Detect newline at end of file.

detect-newline-at-eof is similar to [trailing-newline](https://github.com/bendrucker/trailing-newline) but will also match `\n` on Windows and `\r\n` on OS X.

## Getting started

Install using:

```shell
$ npm install detect-newline-at-eof --save
```

Use it like this:

```js
var fs = require('fs');
var detectNewlineAtEof = require('detect-newline-at-eof');

var fileContents = fs.readFileSync('file.txt', 'utf8');
var newlineCharacter = detectNewlineAtEof(fileContents);

// \n, \r\n, or null if no newline character at end of file was found.
console.log(newlineCharacter);
```

## Release History

This project follows [Semantic Versioning 2](http://semver.org/).

- v0.1.0 (2015-07-18): Initial release.

## License

detect-newline-at-eof is licensed under the BSD 2-clause license. See [LICENSE](./LICENSE) for the full license text.
