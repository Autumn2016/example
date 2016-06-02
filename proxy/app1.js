var http = require('http')
var httpProxy = require('http-proxy')

var proxy = httpProxy.createProxyServer({})

var server = require('http').createServer(function(req, res) {
  console.log(req.url);
  proxy.web(req, res, { target: 'http://www.baidu.com' });  
}).listen(3000)

proxy.on( 'error', function( error ){
    console.log( error );
});