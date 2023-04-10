const { Pokemon, Type } = require("../db")


const postPokemon= async( name, image, life, attack, defense, speed, height, weight, typesId )=>{

    const create= await Pokemon.create({ 
        name, image, life, attack, defense, speed, height, weight, typesId
    })
    let typeDb = await Type.findAll({
      where: { name: typesId}
    })
    await create.addType(typeDb);
    return create;
  
};

module.exports ={ postPokemon};