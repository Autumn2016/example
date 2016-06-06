var underscore = require('underscore');
var str = '';
var arr = [];
var obj = {};

console.log(underscore.isEmpty(str));
console.log(underscore.isEmpty(arr));
console.log(underscore.isEmpty(obj));

var tmp1 = {num1: 1};
var tmp2 = {num2: 2};

underscore.extend(tmp1, tmp2);
console.log(tmp1);