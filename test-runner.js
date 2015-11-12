'use strict';

var path = require('path');
var forkedChild = path.join(__dirname, 'forked-child.js');
var childProcess = require('child_process');
var which = require('which');
var curl = which.sync('curl');

var children = [];

var count = 6;

for (var i = 0; i < count; i++) {
	(function (i) {
		children.push(new Promise(function (resolve, reject) {
			childProcess.fork(forkedChild, [curl], {silent: true})
				.on('exit', function (code) {
					if (code) {
						process.stdout.write('x');
						return reject(new Error('child' + i + ' exited with ' + code));
					}
					process.stdout.write('.');
					resolve(i);
				});
		}));
	})(i);
}

module.exports = Promise.all(children);
module.exports.count = count;
