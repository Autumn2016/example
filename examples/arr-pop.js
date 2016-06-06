var tmp = [1,2,3,4];

var arr = tmp.pop();
console.log(arr);

var tmp = {"Content":"QUERY_AUTH_CODE:queryauthcode@@@f9KglKDbf_LAkTU-8YMwCKexhTcUrsleqaE8mCSJcmlZ-x1irS9pUPRYhWwd-H9Yn9yaoI2JAt-IlgCozOCBxg"};
var content = tmp.Content;
console.log(content.substring(0, 15));

var code = content.split(':').pop();
console.log(code);