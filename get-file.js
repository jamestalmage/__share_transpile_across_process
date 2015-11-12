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
var hello = path.join(__dirname, 'hello');

// fetch via another node process
function viaNode(filePath) {
	return childProcess.execFileSync(node, [requireFromServer, filePath], {encoding: 'utf8'})
}

function viaGo(filePath) {
	return viaExec(hello, filePath)
}

// curl is much lighter weight than forking another node process, so performs better.
function viaCurl(filePath) {
	return viaExec(curl, filePath);
}

function viaExec(cmdPath, filePath) {
	return childProcess.execFileSync(cmdPath, [encodeURI('http://localhost:3072/' + filePath)], {encoding: 'utf8'});
}

module.exports = {
	viaNode: viaNode,
	viaCurl: viaCurl,
	viaGo: viaGo
};
