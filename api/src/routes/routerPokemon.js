const {Router}= require ('express');
const {handlerAllpokemons}= require('../handler/handlerAllpokemons');
const {handlerByParams}= require('../handler/handlerByParams');
const {handlerPostPokemon}=require('../handler/handlerPostPokemon');

const routerPokemon=Router();

routerPokemon.get('/',handlerAllpokemons);
routerPokemon.get('/:id',handlerByParams);
routerPokemon.post('/',handlerPostPokemon);


module.exports={routerPokemon}