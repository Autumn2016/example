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

app.use('/good', function (req, res, next) {
  console.log('good');

//   var tmp = req.headers['x-forwarded-for'] ||
//         req.connection.remoteAddress ||
//         req.socket.remoteAddress ||
//         req.connection.socket.remoteAddress;
//
//   console.log(req.headers['x-forwarded-for']);
//   console.log(req.connection.remoteAddress);
//   console.log(req.socket.remoteAddress);
//   console.log(req.connection.socket.remoteAddress);

  tmp = getClientIp(req);
  console.log(tmp);
});




app.listen(2022);