var http = require('http');
var querystring = require('querystring');

var contents = querystring.stringify({
	'text' : 'this is a test',
	'compilation_level' : 'ADVANCED_OPTIMIZATIONS',
	'output_format': 'json',
	'output_info': 'compiled_code',
	'warning_level' : 'QUIET',
});

var options = {
	host: '127.0.0.1',
	port: '3000',
	path: '/login',
	method: 'POST',
	headers: {
		'Content-Type': 'application/x-www-form-urlencoded',
		'Content-Length' : contents.length
	}
};

var req = http.request(options, function(res) {
	res.setEncoding('utf8');
	res.on('data', function (data) {
		console.log(data);
	});
});

req.write(contents);
req.end();

