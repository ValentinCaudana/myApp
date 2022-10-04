import  BoxIconElement  from 'boxicons';
import React from 'react'
import Nike from '../../src/imagenes/Nike.jpg';


const NavBar = () => {
    return (
        <header>
            <a href='#'>
                <div className="logo">
                    <img src={Nike} alt="logo" width="150"/>
                </div>
            </a>
            <ul>
                <li>
                    <a href='/'>INICIO</a>  
                </li>
                <li>
                    <a href='/productos'>PRODUCTOS</a>
                </li>
            </ul>
            <div className='cart'>
                <box-icon name="cart"></box-icon>
                <span className='item__total'>0</span>
            </div>
        </header>
    )

} 

export default NavBar