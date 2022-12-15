import React from "react";
import { NavbarWrapper } from '../styles/NavBarStyles'
import { Link } from 'react-router-dom'

function Navbar({open, handleClick}) {

    const onClick = () => {
      handleClick()
    }

    return (

      <NavbarWrapper open={open}>
        <Link to={'/'} onClick={() => onClick()}>Home</Link>
        <Link to={'/patrones'} onClick={() => onClick()}>Patrones</Link>
        <Link to={'/empresas'} onClick={() => onClick()}>Empresas circulares</Link>
        <Link to={'/sobre-nosotros'} onClick={() => onClick()}>Sobre el proyecto</Link>
      </NavbarWrapper>
    );
  }
  
  export default Navbar;