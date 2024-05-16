var fetch = require('google-docs-fetch');

function get(key, cb) {
    fetch(key, cb);
};

exports.get = get;
