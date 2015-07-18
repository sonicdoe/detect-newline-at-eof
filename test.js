'use strict'

var assert = require('assert')
var detectNewlineAtEof = require('./')

it('should detect \\n at end of file', function() {
	assert.strictEqual(detectNewlineAtEof('foo\nbar\n'), '\n')
})

it('should detect \\r\\n at end of file', function() {
	assert.strictEqual(detectNewlineAtEof('foo\r\nbar\r\n'), '\r\n')
})

it('should ignore \\n in between', function() {
	assert.strictEqual(detectNewlineAtEof('foo\nbar'), null)
})

it('should ignore \\r\\n in between', function() {
	assert.strictEqual(detectNewlineAtEof('foo\r\nbar'), null)
})

it('should throw a TypeError if argument is not a string', function() {
	assert.throws(function() {
		detectNewlineAtEof({})
	}, TypeError)
})
