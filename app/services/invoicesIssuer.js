const { createInvoice } = require('../requests/invoice');
const { createRandomUser } = require('../services/randomUsersGen');

async function issueInvoices(req,res){
    const userData = await createRandomUser()
    const promiseArray = [];

    for (let i=0; i < userData.length; i++){
        const amount = Math.floor(Math.random() * (90000 - 1000 + 1)) + 1000;
        const dueDiscount = new Date(new Date().setDate(new Date().getDate() + 20)).toISOString();
        const due = new Date(new Date().setDate(new Date().getDate() + 30)).toISOString();
        const discountPercentage = null;

        let payload ={
            amount: amount,
            name: userData[i].nome,
            taxId: userData[i].cpf
        };
        console.log(payload)
        const promise = createInvoice(payload);
        promiseArray.push(promise);
    };
    await Promise.all(promiseArray);
}

module.exports = {
    issueInvoices
}