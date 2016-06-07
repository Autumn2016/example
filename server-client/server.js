var http 				= require('http');
var querystring 		= require('querystring');
var util 				= require('util');
var url	 				= require('url');
var express 			= require('express');
var bodyParser 			= require('body-parser');

var app 				= express();
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

function getClientIp(req) {
  var ipAddress;
  var forwardedIpsStr = req.header('x-forwarded-for');
  if (forwardedIpsStr) {
    var forwardedIps = forwardedIpsStr.split(',');
    ipAddress = forwardedIps[0];
  }
  if (!ipAddress) {
    ipAddress = req.connection.remoteAddress;
  }
  return ipAddress;
}

function test1(req, res, next) {
  console.log('test1');
  next();
}

function test2(req, res) {
  console.log('test2');
}

app.use('/good', test1, test2);


app.listen(2022);