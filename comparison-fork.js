'use strict';

var assert = require('assert');

var hasGenerators = parseInt(process.version.slice(1), 10) > 0;

var options = {
	blacklist: hasGenerators ? ['regenerator'] : [],
	optional: hasGenerators ? ['asyncToGenerator', 'runtime'] : ['runtime']
};

require('babel-core/register')(options);

var dep1 = require('./es6-to-be-transpiled');
var dep2 = require('./es6-to-be-transpiled-2');

assert.strictEqual(typeof dep1().x, 'function');
assert.strictEqual(dep1().y, 'bar');

assert.strictEqual(typeof dep2().x, 'function');
assert.strictEqual(dep2().y, 'bar');
