var start = Date.now();

setTimeout(function () {
	var runner = require('./test-runner');

	runner
		.then(function () {
			var end = Date.now();
			console.log();
			console.log('Using background server:');
			console.log(runner.count + ' children forked and loaded two transpiled dependencies each in ' + (end - start) + 'ms.');
			server.close();
		});
});


