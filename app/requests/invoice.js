const { starkEnv } = require('../config/enviroment');
const starkbank = require('starkbank');

function createInvoice(req, res){
    let project = new starkbank.Project(starkEnv);
    starkbank.user = project;
    
    const payload =[{
        amount: req.amount,
        descriptions: [
            {
                'key': 'Service',
                'value': 'MK1'
            }
        ],
        /*discounts: [
            {
                'percentage': req.discountPercentage,
                'due': req.discountPercentageDue
            }
        ],
        due: req.due,
        expiration: req.expiration,
        'fine: payload.fine,
        'interest: payload.interest,
        */
        name: req.name,
        tags: [
            'Service-MK1'
        ],
        taxId: req.taxId
    }];

    (async() => {
        let invoices = await starkbank.invoice.create(payload);
    })();
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