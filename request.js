// module.
exports.REQUEST_TIMEOUT = 500;

function encrypt(data) {
    return 'encrypted data'
}

module.exports.send = function send(url, data) {
    const encryptedData = encrypt(data);
    console.log(`sending ${encryptedData} to ${url}`);
}

// we have to set the exports
// module.exports = {
//     REQUEST_TIMEOUT,
//     send, 
// } 
// console.log(module);