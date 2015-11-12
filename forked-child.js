'use strict';

var path = require('path');
var assert = require('assert');

// Switch this to viaNode to use a node process.
var getFile = require('./get-file').viaFsSync;

require('./file-list').forEach(function(relativePath) {
	var fullPath = path.join(__dirname, relativePath);

	var dep1 = eval(getFile(fullPath));

	assert.strictEqual(typeof dep1().x, 'function');
	assert.strictEqual(dep1().y, 'bar');
});
