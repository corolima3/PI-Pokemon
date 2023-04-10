const {allpokemons, byNamePokemon}= require('../controller/allpokemons')


const handlerAllpokemons= async(req, res)=>{
    let { name } = req.query;
   
    try {
        if (name){
             name=name.toLowerCase();
            const pokemon = await byNamePokemon(name);
            if (!pokemon) throw Error(`There isn't pokemon named, ${name}.`);
            res.status(200).send(pokemon);

        }else{
            const everyOnePokemons = await allpokemons ();
            res.status(200).send(everyOnePokemons);
        }

       } catch (error) { res.status(400).json({Message: error.message}) }

}

module.exports={handlerAllpokemons};

// let { name } = req.query;
//   try {
//     // no query
//     if (!name) {
//       const allPokemons = await getPokemonData();
//       return res.status(200).json(allPokemons);
//     }
//     // query
//     const pokemon = await getPokemonByName(name);
//     if (!pokemon) throw Error(`There is no pokemon named "${name}".`);
//     return res.status(200).json(pokemon);
//   } catch (error) {
//     res.status(404).send(error.message);
//   }