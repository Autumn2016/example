var express = require('express');
var app = express();
var routes = require('./routes/index')(app);

app.listen(8088);