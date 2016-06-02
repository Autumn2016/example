/**
 *
 * @param inputPar
 */
var md5 = function (inputPar) {
    var crypto = require('crypto');
    return crypto.createHash('md5').update(inputPar, 'utf8').digest('hex').toUpperCase();
}


function buildSignature() {
    // var prestr = createLinkString(req, true, false);
    //
    // prestr = prestr + settings.unipay.QSTRING_SPLIT + md5(settings.unipay.security_key);
    
    var str = 'appid=wx76a929753051df64&mch_id=1332296001&nonce_str=5K8264ILTKCH16CQ2502SI8ZNMTM67VS&product_id=88888&time_stamp=1414488825&key=chengduyunuoxinxijishugongsi2015';
    console.log(md5(str));

}

buildSignature();