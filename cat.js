const fs = require('fs');

function cat(arg) {
    //console.log('hello cat')
    fs.readFile(arg, 'utf8', (err, arg) =>{
        if (err) {
            throw err
        } else {
            process.stdout.write(arg)
            process.stdout.write('prompt > ');
        }
    })
}

module.exports = cat;