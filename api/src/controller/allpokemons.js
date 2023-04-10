const axios = require('axios');
const {Pokemon, Type}=require('../db')

const cleanInfo= (obj) => {
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
const byNamePokemon = async (name)=>{
     
    let newArr=[];
    try {
     
        const pokemonDB = await Pokemon.findOne({ where: { name: name } });
        const pokemonRaw = (await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`)).data;
     
        const pokemonApi= cleanInfo(pokemonRaw)
        if (pokemonDB) {
            newArr.push(pokemonDB);
        }
        newArr.push(pokemonApi);
       
        return newArr;
    } catch (error) { throw new Error("Error en la búsqueda de Pokemon por nombre") }
}

const allpokemons= async ()=>{
    const pokemonsRawApi = [];
    let count = 0;

    let url = "https://pokeapi.co/api/v2/pokemon";

    while (count < 6) {
        const { data } = await axios.get(url);
        pokemonsRawApi.push(...data.results);
        url = data.next;

        count++;
    };

    const apiResultRaw = await Promise.all(
        pokemonsRawApi.map(async elem => {
            const response = await axios.get(elem.url);
            return response.data;
        })
    );
    //DDBB
    const dbResultsRaw = await Pokemon.findAll({
        include: {
            model: Type,
            attributes: ["name"],
            through: {
                attributes: [],
            },
        }
    });

    const dbResults = dbResultsRaw.map(elem => ({
        ...elem.toJSON(),
        types: elem.types.map(e => e.name),
    }));
    
    const apiResult = apiResultRaw.map(elem => cleanInfo(elem));
    return [...dbResults, ...apiResult];
    
}
module.exports= {allpokemons, byNamePokemon};
//const allArr = [];
//   for (let i = 0; i < 20; i++) {
//     axios.get(`https://rickandmortyapi.com/api/character/${i}`)
//     .then( response => response.data )
//     .then((data)=>{
//         const character = {
//                         id: data.id,
//                         name: data.name,
//                         image:data.image,
//                         species:data.species,
//                         status:data.status,
//                         gender:data.gender
//                     };

//                     allArr.push(character);
// if (allArr.length===19) {
//   res.status(200).json(allArr)
// }

//     }    )
//     .catch(error => {
//       if (!res.headersSent) res.status(500).json(error.message);
//         })
    
//   }