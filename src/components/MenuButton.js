import React from "react";
import styled from "styled-components";
import burgerMenu from '../assets/img/burger.svg'
import cerrarBurgerMenu from '../assets/img/close.svg'

const MenuButtonWrapper = styled.button`
    background-color: transparent;
    border: none;
    margin-left: 20px;
    margin-right: 20px;

  @media only screen and (min-width: 1440px) {
    display: none;
  }
`;

function MenuButton({ open, handleClick }) {
  return !open ? (
    <MenuButtonWrapper onClick={handleClick}>
        <img src={burgerMenu} alt='burger-menu' />
    </MenuButtonWrapper>
  ) : (
    <MenuButtonWrapper onClick={handleClick}>
        <img src={cerrarBurgerMenu} alt='close-menu' />
    </MenuButtonWrapper>
  );
}

export default MenuButton;
