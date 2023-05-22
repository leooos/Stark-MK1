const fs = require('fs');
const privateKey = fs.readFileSync('./app/config/key.pem', 'utf8');
console.log(privateKey)
const starkEnv = {
        environment: 'sandbox',
        id: '6262894438121472',
        privateKey: privateKey
    };

module.exports = {
    starkEnv
    };