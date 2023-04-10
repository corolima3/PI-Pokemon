const {Router}= require('express');
const {handlerType}=require('../handler/handlerType')

const typeRouter = Router();

typeRouter.get("/", handlerType);

module.exports={typeRouter};