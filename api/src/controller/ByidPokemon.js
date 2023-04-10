const axios = require('axios');
const { Pokemon}= require('../db');
//const url = "https://pokeapi.co/api/v2/pokemon/{id}";
const cleanInfo = (obj) => {
    return {
        id: obj.id,
        name: obj.name,
        image: obj.sprites.other.dream_world.front_default,
        hp: obj.stats[0].base_stat,
        attack: obj.stats[1].base_stat,
        defense: obj.stats[2].base_stat,
        speed: obj.stats[5].base_stat,
        height: obj.height,
        weight: obj.weight,
        types: obj.types.map(elem => elem.type.name),
        created: false,
    };
};

async function ByidPokemon (id,source) {
    if(source==="api") {
        const pokemonRaw = (await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)).data;

        const pokemon = cleanInfo(pokemonRaw);

        return pokemon;
    } else {
        const searchByid= await Pokemon.findByPk(id);
        const pokemon = {
            ...searchByid.toJSON(),}
        return pokemon
    }
};

module.exports={ByidPokemon}