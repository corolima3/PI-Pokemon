import React from "react";
//import style from "./CardsContainer.module.css";
import Card from "../Card/card";
//import { useSelector } from "react-redux";

const CardContener = () => {
  
 //   const pokemonsByName = useSelector(state => state.allPokemons);
 const pokemonsByName= [{
    "id": 1,
    "name": "bulbasaur",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg",
    "hp": 45,
    "attack": 49,
    "defense": 49,
    "speed": 45,
    "height": 7,
    "weight": 69,
    "types": [
      "grass",
      "poison"
    ],
    "created": false
  },
  {
    "id": 2,
    "name": "ivysaur",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/2.svg",
    "hp": 60,
    "attack": 62,
    "defense": 63,
    "speed": 60,
    "height": 10,
    "weight": 130,
    "types": [
      "grass",
      "poison"
    ],
    "created": false
  },
  ];
  
  return (
    <div >
      <h1>hola </h1> 
    </div>
  )
}
    

export default CardContener;