'use strict';

var path = require('path');
var mkdirp = require('mkdirp');
var transform = require('./transform');
var dir = path.join(__dirname, 'transpiled');
var fs = require('fs');

mkdirp.sync(dir);

require('./file-list').forEach(function (file) {
	fs.writeFileSync(path.join(dir, file), transform.sync(file).code);
});
