var redis           = require('redis');

global.redisClient = redis.createClient({
    host: '127.0.0.1',
    port: '6379'
});
redisClient.select(2);

var str =
[
    {
        title: '申请成为协同平台会员',
        description: '申请成为企业会员，享受更多企业优惠',
        picurl: 'http://wxfrontier.yiyao365.cn:9000/tpl/static/images/membercard.jpg',
        url: 'http://wxfrontier.yiyao365.cn:9000/index.php?g=Wap&m=CardCorp&a=index&token=vvpzzk1442880054&wecha_id=ovQrfvg3Sx7Z-7VkTZYXhwLk9-JA'
    },
    {
        title: '申请成为协同平台会员',
        description: '申请成为企业会员，享受更多企业优惠',
        picurl: 'http://wxfrontier.yiyao365.cn:9000/tpl/static/images/membercard.jpg',
        url: 'http://wxfrontier.yiyao365.cn:9000/index.php?g=Wap&m=CardCorp&a=index&token=vvpzzk1442880054&wecha_id=ovQrfvg3Sx7Z-7VkTZYXhwLk9-JA'
    }
]

str = JSON.stringify(str);

redisClient.set('gh_bfdfbab29851_会员卡', str);