const crypto = require("crypto");

// @md5加密模块(加密固定,不可逆)
// @param str string 要加密的字符串
// @param secret string 要使用的加密密码
// @return string 加密后的字符串

module.exports.getMd5 = function (str, secret = '9vApxLk5G3PAsJrM') {
    const md5 = crypto.createHash('md5');
    return md5.update(str + secret).digest('hex');
}

// @aes128加密模块(加密固定,不可逆)
// @param str string 要加密的字符串
// @param secret string 要使用的加密密码
// @return string 加密后的字符串

module.exports.getEncAes128 = function (str, secret = '9vApxLk5G3PAsJrM', iv = 'FnJL7EDzjqWjcaY9') {
    const cipheriv = crypto.createCipheriv('aes-128-cbc', secret, iv);
    var enc = cipheriv.update(str, "utf8", "hex"); //编码方式从utf-8转为hex
    enc += cipheriv.final('hex'); //编码方式转为hex
    return enc; //返回加密后的字符串
}

// @aes128解密模块
// @param str string 要解密的字符串
// @param secret string 要使用的解密密码
// @return string 解密后的字符串
module.exports.getDecAes128 = function (str, secret = '9vApxLk5G3PAsJrM', iv = 'FnJL7EDzjqWjcaY9') {
    const decipheriv = crypto.createDecipheriv('aes-128-cbc', secret, iv);
    var dec = decipheriv.update(str, "hex", "utf8"); //编码方式从hex转为utf-8
    dec += decipheriv.final('utf8'); //编码方式转为utf8
    return decc; //返回加密后的字符串
}

// @aes128解密模块
// @param str string 要加密的字符串
// @param secret string 要使用的加密密码
// @return string 加密后的字符串
module.exports.getHmac = function (str, secret = '9vApxLk5G3PAsJrM') {
    var buf = crypto.randomBytes(16);
    secret = buf.toString("hex");//密钥加密
    var Signture = crypto.createmac("sha1", secret);//定义加密方式
    Signture.update(str);
    //生成的密文后将再次作为明文通过pbkdf2算法迭代加密
    var miwen = Signture.digest().toString("base64");
    return miwen;
}

module.exports.getSha1 = function (str) {
    //定义加密方式：md5不可逆，此处的md5可以换成任意hash加密的方法名称
    var sha1=crypto.createHash("sha1");
    sha1.update(str);
    var res=sha1.digest("hex");//加密后的值
    return res;
}
