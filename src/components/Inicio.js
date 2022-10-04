import React from "react";
import Portada from "../imagenes/inicio.jpg";


export const Inicio = () => {
    return (
        <div className="inicio">
            <a href="#">
                <h1 className="title">Inicio</h1>
            </a>  
            <a href="#">
                <h1 className="title">Productos</h1>
            </a> 
            <img src={Portada} alt="inicio"/>
        </div>
    )
}