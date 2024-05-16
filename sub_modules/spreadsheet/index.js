var sheets = require('google-drive-sheets');

exports.get = function get(key, cb) {
    var mySheet = new sheets(key);
    mySheet.getRows(1, cb);		// XXX
};
