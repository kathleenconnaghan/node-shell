process.stdin.write('prompt > ');

process.stdin.on('data', (data) => {
    const cmdArray = data.toString().trim().split(' ');
    const cmd = cmdArray[0]
    const fileName = cmdArray[1]
    const pwd = require('./pwd')
    const ls = require('./ls')
    const cat = require('./cat')
   

    if (cmd === 'pwd'){pwd()}
    if (cmd === 'ls') {ls()}
    if (cmd === 'cat') {cat(fileName)}
    process.stdout.write('You typed: ' + cmd);
    process.stdout.write('\nprompt > ');
});


