//httprequest.js
var http = require('http');
var querystring = require('querystring');

var contents = querystring.stringify({
	name: 'byvoid',
	email: 'byvoid@byvoid.com',
	address: 'Zijing 2#, Tsinghua University',
});

// var contents = ' <xml>\
//  <ToUserName><![CDATA[toUser]]></ToUserName>\
//  <FromUserName><![CDATA[fromUser]]></FromUserName> \
//  <CreateTime>1348831860</CreateTime>\
//  <MsgType><![CDATA[text]]></MsgType>\
//  <Content><![CDATA[this is a test]]></Content>\
//  <MsgId>1234567890123456</MsgId>\
//  </xml>\
// ';

var options = {
	host: '127.0.0.1',
	port: '3000',
	path: '/login',
	// host: 'www.byvoid.com',
	// path: '/application/node/post.php',
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