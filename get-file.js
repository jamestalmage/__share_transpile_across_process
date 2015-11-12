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
var http = path.join(__dirname, 'http');

// fetch via another node process
function viaNode(filePath) {
	return exec(node, [requireFromServer, filePath]);
}

function viaGo(filePath) {
	return exec(hello, [toUrl(filePath)]);
}

function viaHttpTiny(filePath) {
	return exec(http, ['get', toUrl(filePath)]);
}

// curl is much lighter weight than forking another node process, so performs better.
function viaCurl(filePath) {
	return exec(curl, [toUrl(filePath)]);
}

function exec(cmdPath, args) {
	return childProcess.execFileSync(cmdPath, args, {encoding: 'utf8'});
}

function toUrl(filePath) {
	return encodeURI('http://localhost:3072/' + filePath);
}

module.exports = {
	viaNode: viaNode,
	viaCurl: viaCurl,
	viaGo: viaGo,
	viaHttpTiny: viaHttpTiny
};
