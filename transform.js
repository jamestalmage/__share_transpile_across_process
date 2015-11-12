'use strict';

var babel = require('babel-core');

var hasGenerators = parseInt(process.version.slice(1), 10) > 0;

var options = {
	blacklist: hasGenerators ? ['regenerator'] : [],
	optional: hasGenerators ? ['asyncToGenerator', 'runtime'] : ['runtime']
};

module.exports = function (path, cb) {
	return babel.transformFile(path, options, cb);
};

module.exports.sync = function (path) {
	return babel.transformFileSync(path, options);
};
