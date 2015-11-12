'use strict';

var path = require('path');
var assert = require('assert');

// Switch this to viaNode to use a node process.
var getFile = require('./get-file').viaCurl;

[
	'es6-to-be-transpiled.js',
	'es6-to-be-transpiled-2.js',
	'es6-to-be-transpiled-3.js',
	'es6-to-be-transpiled-4.js',
	'es6-to-be-transpiled-5.js',
	'es6-to-be-transpiled-6.js',
	'es6-to-be-transpiled-7.js',
	'es6-to-be-transpiled-8.js',
	'es6-to-be-transpiled-9.js'
].forEach(function(relativePath) {
	var fullPath = path.join(__dirname, relativePath);

	var dep1 = eval(getFile(fullPath));

	assert.strictEqual(typeof dep1().x, 'function');
	assert.strictEqual(dep1().y, 'bar');
});
