'use strict';

var start = Date.now();

var path = require('path');
var forkedChild = path.join(__dirname, 'comparison-fork.js');
var childProcess = require('child_process');

var children = [];

var count = 100;

for (var i = 0; i < count; i++) {
	(function (i) {
		children.push(new Promise(function (resolve, reject) {
			childProcess.fork(forkedChild, {silent: true})
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

Promise.all(children).then(function () {
	var end = Date.now();
	console.log();
	console.log('Loading up an entire babel instance per fork: ');
	console.log(count + ' children forked and loaded two transpiled dependencies each in ' + (end - start) + 'ms.');
});
