// const request = require('./request');
// const response = require('./response');

// make it fancy with the (...spread)...operator 
module.exports = {
    ...require('./request'),
    ...require('./response'),
}

// module.exports = {
//     REQUEST_TIMEOUT: request.REQUEST_TIMEOUT,
//     send: request.send, 
//     read: response.read,
// };

// in node you can treat a folder like a module.

// WE don't even really need index.js but this is just for some information.
// "it needlessly complicates the module loading system and requires support and package.json" -Ryan Dahl. 