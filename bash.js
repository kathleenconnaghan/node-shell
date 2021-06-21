process.stdin.write('prompt > ');

process.stdin.on('data', (data) => {
    const cmd = data.toString().trim();
    const pwd = require('./pwd')
    if (cmd === 'pwd'){pwd()}

    process.stdout.write('You typed: ' + cmd);
    process.stdout.write('\nprompt > ');
});


