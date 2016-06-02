var http = require('http');
var querystring = require('querystring');
var util = require('util');

http.createServer(function(req, res) {
	var post = '';
	req.on('data', function(chunk) {
		post += chunk;
});

	req.on('end', function() {
		console.log('data:', post);
		// post = querystring.parse(post);
		// res.end(util.inspect(post));
		//res.end('i got it');
});

}).listen(3000);
