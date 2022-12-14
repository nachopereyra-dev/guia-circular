import React, { useState } from "react";
import { HeaderWrapper } from '../styles/Header'
import Navbar from "./NavBar";
import MenuButton from './MenuButton'

function Header() {

    const [open, setOpen] = useState(false);
  
    const handleClick = () => {
      setOpen(!open)
    };

    const onClick = (sectionId) => {
      document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth'})
    }
  
    return (
      <HeaderWrapper>


        <MenuButton open={open} handleClick={handleClick} />
        
        <div className="logo" onClick={() => onClick('home')}>
            <h2>Guia circular</h2>
        </div>

        <Navbar open={open} handleClick={handleClick} />

      </HeaderWrapper>
    );
  }

  export default Header