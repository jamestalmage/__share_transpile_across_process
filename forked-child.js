'use strict';

var path = require('path');
var assert = require('assert');

// Switch this to viaNode to use a node process.
var getFile = require('./get-file').viaCurl;


var fullPath = path.join(__dirname, 'es6-to-be-transpiled.js');
var fullPath2 = path.join(__dirname, 'es6-to-be-transpiled-2.js');

var dep1 = eval(getFile(fullPath));
var dep2 = eval(getFile(fullPath2));

assert.strictEqual(typeof dep1().x, 'function');
assert.strictEqual(dep1().y, 'bar');

assert.strictEqual(typeof dep2().x, 'function');
assert.strictEqual(dep2().y, 'bar');
