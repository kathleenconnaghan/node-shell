const fs = require('fs');

function cat(fileName) {
    //console.log('hello cat')
    fs.readFile(fileName, 'utf8', (err, fileName) =>{
        if (err) {
            throw err
        } else {
            process.stdout.write(fileName)
            process.stdout.write('prompt > ');
        }
    })
}

module.exports = cat;