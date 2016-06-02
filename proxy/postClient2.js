var request = require('request');

request.post(
    'http://localhost:3101/',
    { form: { key: 'value' } },
    function (error, response, body) {
        if (!error && response.statusCode == 200) {
            console.log(body)
        }
    }
);