const { send } = require('./request')
const { read } = response = require('./response')
const { REQUEST_TIMEOUT } = require('./request');

function makeRequest(url, data) {
    send(url, data);
    return read();
    console.log();
}

const responseData = makeRequest('https://google.com', 'hello');
console.log(responseData);

// this is a relative path 
// the .. represents one lvel up from what folder you're in

// use the module.exports and putting it at the bottom of the file it makes it clear what the interface to your module will be accessed. #NinjaNotes

// node maintains a cache of req modules to prevent loading again if running two require functions etc.. 