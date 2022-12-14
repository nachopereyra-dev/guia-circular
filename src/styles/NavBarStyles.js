import styled from "styled-components";

export const NavbarWrapper = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 120px 0 100px;
  backdrop-filter: blur(8px);
  color: black;
  position: fixed;
  top: 8.5vh;
  right: ${props => (props.open ? "0" : "-100%")};
  width: 100vw;
  height: 150vw;
  transition: right 0.3s linear;

  a {
    font-size: 30px;
    font-weight: 700;
    padding: 1rem 0.8rem;
    color: white;
    text-decoration: none;
  }

  @media only screen and (min-width: 1280px) {
    display: flex;
    flex-direction: column;
    padding: 0;
    position: initial;
    height: 100vw;
    font-size: 14px;
    width: 100%;
    margin: 80px 0px;

    
    a {
      font-size:24px;
    }
    
  }


`;
