
import React from "react";
import { Link } from "react-router-dom";
import style from './NavBar.module.css'
const NavBar=()=>{

    return (
        <div className={style.NavBar}>
                <Link to="/home" ><button >PÁGINA PRINCIPAL</button></Link>
               
                <Link to="/create" ><button >CREAR POKEMON</button></Link>
          
        </div>
    )

};

export default NavBar;