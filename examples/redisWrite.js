var http                = require('http');

var authPostOption  = {
    host: '127.0.0.1',
        port: '2022',
        path: '/index',
        method: 'POST',
        headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
    }
}

var req = http.request(authPostOption, function(res) {
    res.setEncoding('utf8');
    res.on('data', function (data) {
        console.log(JSON.stringify(data));
    });
});
req.write('this is test');
req.end();