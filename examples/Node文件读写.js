var fs = require('fs');
var iconv = require('iconv-lite');// 加载编码转换模块  

fs.readFile('content.txt','utf-8', function(err, data) {
	if (err) {
		console.error(err);
	} else {
		console.log(data);
	}
});

function writeFile(file){  
    // 测试用的中文  
    var str = "\r\n我是一个人Hello myself!";  
    // 把中文转换成字节数组  
    var arr = iconv.encode(str, 'gbk');  
    console.log(arr);  
      
    // appendFile，如果文件不存在，会自动创建新文件  
    // 如果用writeFile，那么会删除旧文件，直接写新文件  
    fs.appendFile(file, arr, function(err){  
        if(err)  
            console.log("fail " + err);  
        else  
            console.log("写入文件ok");  
    });  
}  

writeFile('./qy.txt');
