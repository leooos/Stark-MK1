const { starkEnv } = require('../config/enviroment');
const starkbank = require('starkbank');


let project = new starkbank.Project(starkEnv);
starkbank.user = project;
(async() => {
    let balance = await starkbank.balance.get();

    console.log(balance);
})();
