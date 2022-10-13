import React from "react";
import Portada from "../imagenes/inicio.jpg";

export const Inicio = () =>{
    return (
        <div className="Inicio">
           <a href="/">
            <h1 >Inicio</h1>
           </a>
           <a href="/productos">
            <h1 >Productos</h1>
           </a>
           <img src={Portada} alt="inicio"/>
        </div>
    )
}