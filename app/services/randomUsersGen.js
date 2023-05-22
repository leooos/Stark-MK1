const { genPeople } = require('../utils/genPeople');

async function createRandomUser(req,res){
    try {
        const userNum = Math.floor(Math.random() * (12 - 8 + 1)) + 8;
        const peopleArray = await genPeople(userNum);

        const userArray = [];
        for (let i=0; i<userNum ; i++){
            userArray.push({
                nome: peopleArray[i].nome,
                cpf: peopleArray[i].cpf
            });
        };
        return userArray
    } catch (error) {   
    }
}

module.exports = {
    createRandomUser
  };