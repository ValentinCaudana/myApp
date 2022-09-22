import React from 'react'
import styled from 'styled-components'
import CatWidjet from './CatWidget'
import '../App.css'

const NavBar = () => {
    return (
        <>
            <NavContainer>
                <div>
                    <a  href="/">Login</a>
                    <a  href="/">Perfil</a>
                    <a  href="/">Historial</a>
                    <a  href="/">Contacto</a>
                </div>
                <CatWidjet/> 
            </NavContainer>
        </>
    )

} 

export default NavBar

const NavContainer = styled.nav`
    h2{
    color: white;
    font-weight: 400;
    span{
      font-weight: bold;
    }
  } 
  padding: .4rem;
  background-color: #333;
  display: flex;
  align-items: center;
  justify-content: space-between;
  a{
    color: white;
    text-decoration: none;
    margin-right: 1rem;
  }

  `