'use strict'

module.exports = function(str) {
	if(typeof str !== 'string') {
		throw new TypeError('Argument to detect-newline-at-eof must be a string')
	}

	var matches = str.match(/\r?\n$/)

	if(matches) {
		return matches[0]
	} else {
		return null
	}
}
