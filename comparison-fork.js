'use strict';

var assert = require('assert');

var hasGenerators = parseInt(process.version.slice(1), 10) > 0;

var options = {
	blacklist: hasGenerators ? ['regenerator'] : [],
	optional: hasGenerators ? ['asyncToGenerator', 'runtime'] : ['runtime']
};

require('babel-core/register')(options);

[
	'./es6-to-be-transpiled',
	'./es6-to-be-transpiled-2',
	'./es6-to-be-transpiled-3',
	'./es6-to-be-transpiled-4',
	'./es6-to-be-transpiled-5',
	'./es6-to-be-transpiled-6',
	'./es6-to-be-transpiled-7',
	'./es6-to-be-transpiled-8',
	'./es6-to-be-transpiled-9'
].forEach(function (path) {
	var dep1 = require(path);
	assert.strictEqual(typeof dep1().x, 'function');
	assert.strictEqual(dep1().y, 'bar');
});
