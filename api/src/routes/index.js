const { Router } = require('express');
// Importar todos los routers;
const {routerPokemon}= require('./routerPokemon');
const {typeRouter}= require('./routerType');
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use('/pokemons', routerPokemon );
router.use('/types', typeRouter );



module.exports = router;
