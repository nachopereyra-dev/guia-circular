import React from "react";
import { NavbarWrapper } from '../styles/NavBarStyles'
import { Link } from 'react-router-dom'

function Navbar({open, handleClick}) {

    const onClick = (sectionId) => {
      document.getElementById(sectionId).scrollIntoView()
      handleClick()
    }

    return (

      <NavbarWrapper open={open}>
        <Link to={'/'} onClick={() => onClick('home-top')}>Home</Link>
        <Link to={'/patrones'} onClick={() => onClick('patrones')}>Patrones</Link>
        <Link to={'/empresas'} onClick={() => onClick('empresas')}>Empresas circulares</Link>
        <Link to={'/sobre-nosotros'} onClick={() => onClick('sobre-proyecto')}>Sobre el proyecto</Link>
      </NavbarWrapper>
    );
  }
  
  export default Navbar;