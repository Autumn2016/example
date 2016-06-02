var config = require('./config');
var tmpMod = require('./module1')(config);

tmpMod.test();
console.log(tmpMod.msg);
