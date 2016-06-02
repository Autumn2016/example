var request = require('superagent');

request
    .get('127.0.0.1:3000/search')
    .query({ query: 'Manny' })
    .query({ range: '1..5' })
    .query({ order: 'desc' })
    .end(function(res){

    });