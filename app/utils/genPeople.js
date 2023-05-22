const axios = require('axios');

async function genPeople(req,res) {
  const baseURL = 'https://geradorbrasileiro.com/api/faker/pessoa?limit=';
  const limit = req.toString();

  let config = {
    method: 'get',
    maxBodyLength: Infinity,
    url: baseURL+limit,
    headers: { 
      'accept': 'application/json',
      'api_key': 'teste'
    }
  };

  return axios.request(config)
  .then((response) => {
    return response.data.values
  })
  .catch((error) => {
    console.log(error);
  });
}

module.exports = {
  genPeople
};