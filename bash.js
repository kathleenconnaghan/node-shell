process.stdin.write('prompt > ');

process.stdin.on('data', (data) => {
    const cmdArray = data.toString().trim().split(' ');
    const cmd = cmdArray[0]
    const arg = cmdArray[1]
    const pwd = require('./pwd')
    const ls = require('./ls')
    const curl = require('./curl')
    const cat = require('./cat')
    if (cmd === 'pwd'){pwd()}
    if (cmd === 'ls'){ls()}
    if (cmd === 'cat') {cat(arg)}
    if (cmd === 'curl'){curl(arg)}

});

function done(output) {
    process.stdout.write(output);
    process.stdout.write('\nprompt > ');
}
module.exports = done; 