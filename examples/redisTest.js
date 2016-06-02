// redis.createClient({
//     host: config.redis.host,
//     port: config.redis.port
// });

var redis = require("redis");
//  创建一个用于订阅通知的client
var  subscriberClient = redis.createClient( );

function initRedisSubscribe() {  
  return subscriberClient.psubscribe('__keyevent@' + 2 +'__:expired');
}

//  当接收到订阅消息调用对应服务
subscriberClient.on("pmessage", function (pattern, channel, expiredKey) {

  var taskname = expiredKey;

  switch(taskname)
  {
    case 'oneTask':
      console.info('oneTask!');
      //return ProductTaskService[taskname].apply(this,_task);
      break;

    case 'twoTask':
      console.info('twoTask!');
      //return SitemapTaskService[taskname].apply(this,_task);
      break;

    default:
    	console.info('otherTask!');
      break;
  }

});

initRedisSubscribe();