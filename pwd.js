
const done = require('./bash')

function pwd() {
        done(process.cwd())
}

module.exports = pwd;