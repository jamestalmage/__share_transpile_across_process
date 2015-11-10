'use strict';

var http = require('http');
var fs = require('fs');
var babel = require('babel-core');

var hasGenerators = parseInt(process.version.slice(1), 10) > 0;

var options = {
	blacklist: hasGenerators ? ['regenerator'] : [],
	optional: hasGenerators ? ['asyncToGenerator', 'runtime'] : ['runtime']
};

var cache = {};

module.exports = function (port, silent) {
	var server = http.createServer(function (req, res) {
		var filePath = decodeURIComponent(req.url);

		if (!silent) {
			console.log('got request for URL' + filePath);
		}

		if (!cache[filePath]) {
			cache[filePath] = new Promise(function (resolve, reject) {
				babel.transformFile(filePath, options, function (err, file) {
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
