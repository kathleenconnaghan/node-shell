const done = require('./bash')
const fs = require('fs');

function cat(arg) {
    //console.log('hello cat')
    fs.readFile(arg, 'utf8', (err, arg) =>{
        if (err) {
            throw err
        } else {
            done(arg)

        }
    })
}

module.exports = cat;