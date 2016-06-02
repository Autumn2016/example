var express = require("express");
var app = express();

app.get('/*',function(req,res) {
	console.log('enter app1!');
    res.send("Hello world From Server 1");
});

app.listen(3101);

console.log('listen port 3101...')