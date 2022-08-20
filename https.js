const { send } = require('./request')
const { read } = response = require('./response')

function makeRequest(url, data) {
    request.send(url, data);
    return read();
    console.log();
}

const responseData = makeRequest('https://google.com', 'hello');
console.log(responseData);

// this is a relative path 
// the .. represents one lvel up from what folder you're in

// use the module.exports and putting it at the bottom of the file it makes it clear what the interface to your module will be accessed. #NinjaNotes