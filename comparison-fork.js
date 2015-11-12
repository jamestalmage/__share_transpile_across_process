'use strict';

var assert = require('assert');

var hasGenerators = parseInt(process.version.slice(1), 10) > 0;

var options = {
	blacklist: hasGenerators ? ['regenerator'] : [],
	optional: hasGenerators ? ['asyncToGenerator', 'runtime'] : ['runtime']
};

require('babel-core/register')(options);

require('./file-list').forEach(function (path) {
	var dep1 = require('./' + path);
	assert.strictEqual(typeof dep1().x, 'function');
	assert.strictEqual(dep1().y, 'bar');
});
