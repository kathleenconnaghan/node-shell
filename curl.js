const done = require('./bash')
const request = require("request")


const curl = (url) => {
    request(url, function(error, response, body){
        console.error('error:', error);
        done(body)
    })
}

module.exports = curl;