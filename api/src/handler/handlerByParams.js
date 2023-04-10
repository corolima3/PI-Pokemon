const {ByidPokemon}=require('../controller/ByidPokemon')

async function handlerByParams (req, res) {
    const { id } = req.params;
    const source = isNaN(id) ? "bdd" : "api";
    
    try {
        const pokemonById = await ByidPokemon(id, source);
        res.status(200).json(pokemonById);
    } catch (error) {
        res.status(400).json({error: error.message});
    };
};
module.exports={handlerByParams};