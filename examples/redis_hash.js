var redis = require('redis'),
    client = redis.createClient();

client.on('ready',function(res){
    console.log('ready');    
});

client.on('connect',function(){
    client.hmset('short', {'js':{'pic1':{'title':'t1', 'describel':'desc', 'picUrl':'123', 'url':'456'}},
    	'C#':{'pic1':{'title':'t1', 'describel':'desc', 'picUrl':'123', 'url':'456'}}}, redis.print);

    client.hgetall("short", function(err,res){
        if(err)
        {
            console.log('Error:'+ err);
            return;
        }            
        console.dir(res);
    });
});