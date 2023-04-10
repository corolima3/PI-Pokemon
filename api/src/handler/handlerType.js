
const {typePokemons}=require('../controller/typePokemons')

const handlerType= async (req, res) => {
    console.log("hola")
    try {
        const types = await typePokemons();
        res.status(200).send(types);
    } catch (error) {
        res.status(400).json({error: error.message});
    };    
}

module.exports ={handlerType};