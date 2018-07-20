'use strict'

const assert = require('assert')
const detectNewlineAtEof = require('.')

it('should detect \\n at end of file', () => {
	assert.strictEqual(detectNewlineAtEof('foo\nbar\n'), '\n')
})

it('should detect \\r\\n at end of file', () => {
	assert.strictEqual(detectNewlineAtEof('foo\r\nbar\r\n'), '\r\n')
})

it('should ignore \\n in between', () => {
	assert.strictEqual(detectNewlineAtEof('foo\nbar'), null)
})

it('should ignore \\r\\n in between', () => {
	assert.strictEqual(detectNewlineAtEof('foo\r\nbar'), null)
})

it('should throw a TypeError if argument is not a string', () => {
	assert.throws(() => {
		detectNewlineAtEof({})
	}, TypeError)
})
