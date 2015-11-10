
var start = Date.now();

var server = require('./create-server')(3072, true);

setTimeout(function () {
	var runner = require('./test-runner');

	runner
		.then(function () {
			var end = Date.now();
			console.log('');
			console.log('Launched server, loaded babel, plus:');
			console.log(runner.count + ' children forked and loaded two transpiled dependencies each in ' + (end - start) + 'ms.');
			server.close();
		});
});
