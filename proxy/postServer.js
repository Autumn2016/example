    var http            = require('http');
    var queryStr        = require('querystring');
    /**
     * 服务器回调函数
     * @param request
     * @param response
     */
    function onRequest( req, res) {
        var requestPath = req.url;
        console.log('请求的路径=>', requestPath);//请求的路径=> /login
        res.writeHead(200, {'Content-Type':'text/html'});
        if(req.url == '/login' && req.method.toLowerCase() == 'post'){
            var postData = '';
            req.addListener('data', function(data){
                console.log('获取post请求中……');
                postData += data;
            })
            req.addListener('end', function () {
                console.log('获取post请求完成');
                console.log('postData:', postData);//postData: text=qiuyi
                var arg = queryStr.parse(postData);
                res.write(arg.text);
                res.end();
            })
        }
        else{
            res.write('other method');
            res.end();
        }
    }
    http.createServer(onRequest).listen(3000);
    console.log('Server Start On Port 3000……');

