'use strict';

var file = process.argv[2];
var http = require('http');

http.get('http://localhost:3072/' + encodeURIComponent(file), function (res) {
	if (res.statusCode !== 200) {
		console.error('statusCode !== 200... (' + res.statusCode + ')');
		process.exit(1);
	}

	res
		.on('error', function (e) {
			console.error('error with result stream: ' + e.message);
			process.exit(1);
		})
		.on('finish', function (e) {
			setTimeout(function () {
				process.exit(0);
			});
		})
		.pipe(process.stdout, {end: 'false'});

}).on('error', function (e) {
	console.error('error loading transpiled file: ' + e.message);
	process.exit(1);
});
