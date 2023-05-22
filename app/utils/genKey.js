const starkbank = require('starkbank');

let privateKey, publicKey;

[privateKey, publicKey] = starkbank.key.create("sample/destination/path");

console.log(privateKey)
console.log(publicKey)
