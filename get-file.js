'use strict';

// Since require must be synchronous, we must use child_process.execFileSync to fetch
// the transpiled code from the server.

// This forks either a `curl` or `node` process that fetches the required file from the server
// and dumps the contents to stdout. The contents of stdout are returned as a string.

var childProcess = require('child_process');
var node = process.execPath;
var path = require('path');
var curl = process.argv[2];
var requireFromServer = path.join(__dirname, 'require-from-server.js');

// fetch via another node process
function viaNode(filePath) {
	return childProcess.execFileSync(node, [requireFromServer, filePath], {encoding: 'utf8'})
}

// curl is much lighter weight than forking another node process, so performs better.
function viaCurl(filePath) {
	return childProcess.execFileSync(curl, ['http://localhost:3072/' + encodeURIComponent(filePath)], {encoding: 'utf8'});
}

module.exports = {
	viaNode: viaNode,
	viaCurl: viaCurl
};
