'use strict';

var http = require('http');
var fs = require('fs');
var transform = require('./transform');

var cache = {};

module.exports = function (port, silent) {
	var server = http.createServer(function (req, res) {
		var filePath = req.url;

		if (!silent) {
			console.log('got request for URL:' + JSON.stringify(filePath) + " " + filePath.length);
		}

		if (!cache[filePath]) {
			cache[filePath] = new Promise(function (resolve, reject) {
				transform(filePath, function (err, file) {
					if (err) {
						reject(err);
						return;
					}
					resolve(file.code);
				});
			});
		}

		cache[filePath].then(function (code) {
			res.writeHead(200);
			res.write(code);
			res.end();
		}).catch(function (e) {
			res.writeHead(300, e.message);
			res.end();
		});
	});

	server.listen(port);

	return server;
};
