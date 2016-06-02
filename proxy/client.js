curl = require('node-curl');

curl('127.0.0.1:3101/app1/qy', {
    MULTIPART: [
        {name: 'file', file: '/file/path', type: 'text/html'},
        {name: 'sumbit', contents: 'send'}
    ]
}, function(e) {
    console.log(e);
    console.log(this.body);
    this.close()
});