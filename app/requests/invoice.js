const { starkEnv } = require('../config/enviroment');
const starkbank = require('starkbank');
let project = new starkbank.Project(starkEnv);
starkbank.user = project;

async function createInvoice(req, res){    
    const payload =[{
        amount: req.amount,
        descriptions: [
            {
                'key': 'Service',
                'value': 'MK1'
            }
        ],
        name: req.name,
        tags: [
            'Service-MK1',
            'productionV1.0'
        ],
        taxId: req.taxId
    }];
    const invoice = await starkbank.invoice.create(payload);
};

function getInvoices(req,res) {
    (async() => {
        let invoices = await starkbank.invoice.query({
            limit: 5
        });
    
        for await (let invoice of invoices) {
            console.log(invoice);
        }
    })();
};

module.exports = {
    createInvoice,
    getInvoices
  };