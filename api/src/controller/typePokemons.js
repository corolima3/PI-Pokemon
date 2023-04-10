const axios=require('axios');
const {Type}=require('../db');

const typePokemons=async ()=> {

    const DDBB = await Type.findAll();
    if (DDBB.length) return DDBB;

    const typesApi = (await axios.get("https://pokeapi.co/api/v2/type")).data.results;
    const data = typesApi.map(elem => {
        return {
            name: elem.name
        };
    });
    
    const results = await Type.bulkCreate(data);
    return results;
};
module.exports={typePokemons};