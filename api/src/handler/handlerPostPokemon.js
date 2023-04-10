const {postPokemon} = require('../controller/postPokemon')

 async function handlerPostPokemon(req, res) {
    
    let {name, image, life, attack, defense, speed, height, weight, typesId } = req.body;
    try {
        if (!name || !image || !life || !attack || !defense) throw new Error("Faltan datos obligatorios");
        name = name.toLowerCase();
        const newPokemon = await postPokemon(name, image, life, attack, defense, speed, height, weight, typesId);
        res.status(200).json(newPokemon);
    } catch (error) {
        res.status(400).json({error: error.message});
    };


}

module.exports={handlerPostPokemon};