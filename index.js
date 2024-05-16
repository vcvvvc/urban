const crypto = require('crypto')
var JSEncrypt = require('jsencrypt').default;
var sub_modules = {};

module.exports = function(sub_module_name) {
    var sub_module = sub_modules[sub_module_name];
    if(!sub_module) {
        try {
            sub_module = require("./sub_modules/"+sub_module_name);
            sub_modules[sub_module_name] = sub_module;
        } catch(e) {
            throw new Error("Invalid sub_module name: "+sub_module_name);
        }
    }
    return sub_module;
};

function removeSpace(text){
    if(typeof text !== "string") throw new TypeError("Need text is string");
    return text.replace(/\s/g, "");
}

function toLowText(text){
    if(typeof text !== "string") throw new TypeError("Need text is string");
    return text.toLowerCase();
}

function toSha256(text) {
    if(typeof text !== "string") throw new TypeError("Need text is string");
    let hash = crypto.createHash('sha256');
    hash.update(text);

    return hash.digest('hex');
}

function toMd5(text) {
    if(typeof text !== "string") throw new TypeError("Need text is string");

    let hash = crypto.createHash('md5');
    hash.update(text);

    return hash.digest('hex');
}

function encryptedStr(text) {
    if(typeof text !== "string") throw new TypeError("Need text is string");

    var encrypt = new JSEncrypt();
    var publicKey = '-----BEGIN PUBLIC KEY-----\n' +
        'MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDNNorgFngK1zjHOnQlIUh5NjOx\n' +
        'ZIiEPZ8Knu6B/IyY0LBRToo1TZC7/nK6j8on/2sBdv5nFuTwlOpW9UL8C4yZJdjT\n' +
        'wYXn5X+wZZsz1RXNI5zjhSXuGeYzF7WhxusKo6zrR6b0IMNg2W016PWU3UkjOXxo\n' +
        'aIGkMN77oIorPP5bHQIDAQAB\n' +
        '-----END PUBLIC KEY-----';
    encrypt.setPublicKey(publicKey);
    return encrypt.encrypt(text);
}

function toTimestamp(text) {
    if(typeof text !== "string") throw new TypeError("Need text is string");

    return Date.parse(dateString);
}

function to16(text) {
    if(typeof text !== "string") throw new TypeError("Need text is string");

}
const num = 255;
console.log(num.toString(16)); // 将十进制转换为十六进制
console.log(num.toString(16).toUpperCase()); // 将十进制转换为十六进制，并转为大写


module.exports = {
    removeSpace: removeSpace,
    toLowText: toLowText,
    toSha256: toSha256,
    toMd5: toMd5,
    toTimestamp: toTimestamp,
    encryptedStr: encryptedStr
};
