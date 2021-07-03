import React, { useState } from "react";
import styled from "styled-components";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <NavBar id="home">
      <NavContainer>
        <Logo>n</Logo>
        <NavBurger onClick={() => setIsOpen(!isOpen)}>
          <Burger1 isOpen={isOpen} />
          <Burger2 isOpen={isOpen} />
          <Burger3 isOpen={isOpen} />
        </NavBurger>
        <NavList isOpen={isOpen}>
          <NavItems>
            <NavItem>Home</NavItem>
            <NavItem>Projects</NavItem>
            <NavItem>Blog</NavItem>
          </NavItems>
          <NavCta>
            <GetInTouchButton>Get In Touch</GetInTouchButton>
            <ResumeButton>
              <span>
                <img src="/images/download-icon.svg" alt="Download Icon" />
              </span>
              Resume
            </ResumeButton>
          </NavCta>
        </NavList>
      </NavContainer>
    </NavBar>
  );
};

export default Header;

// Styled components

const NavBar = styled.nav`
  min-height: 10vh;
  background-color: #050505;
  display: grid;
  place-items: center;
`;

const NavContainer = styled.div`
  width: 90%;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`;

const Logo = styled.h1`
  font-family: "Aclonica", sans-serif;
  font-size: 54px;
  color: #23ce6b;
`;
const NavList = styled.div`
  color: white;
  display: flex;
  justify-content: space-around;
  align-items: center;
  transition: all 0.5s ease-in-out;
  @media (max-width: 670px) {
    display: flex;
    flex-direction: column;
    height: 100vh;
    min-width: 100%;
    position: fixed;
    top: ${(props) => (props.isOpen ? "10vh" : "-100vh")};
    z-index: 999;
    background: linear-gradient(0.05deg, #e6af2e 0.05%, #3d348b 99.96%);
  }
`;
const NavItems = styled.ul`
  display: flex;
  justify-content: space-around;
  align-items: center;
  list-style: none;
  margin-right: 1vw;
  @media (max-width: 670px) {
    flex-direction: column;
    height: 50vh;
  }
`;
const NavItem = styled.li`
  font-family: "Poppins", sans-serif;
  font-weight: bold;
  font-size: 20px;
  color: #e6af2e;
  margin-right: 1vw;
  cursor: pointer;
  transition: all 0.35s ease-in-out;

  &:hover {
    color: yellow;
    transform: scale(1.1);
  }
`;
const GetInTouchButton = styled.div`
  background-color: #3d348b;
  color: #fff;
  border: none;
  outline: none;
  font-family: "Poppins";
  font-weight: bold;
  font-size: 18px;
  padding: 10px 24px;
  border-radius: 50px;
  margin-right: 1vw;
`;
const ResumeButton = styled(GetInTouchButton)`
  background-color: #e6af2e;
  padding: 8px 40px;
  color: #000;
  display: flex;
  justify-content: center;
  align-items: center;
  & > span {
    display: grid;
    place-items: center;
  }
  & > span > img {
    margin-right: 5px;
  }
`;

const NavBurger = styled.div`
  display: none;
  @media (max-width: 670px) {
    display: block;
  }
`;

const Burger1 = styled.div`
  transition: all 0.5s ease-in-out;
  width: ${(props) => (props.isOpen ? "35px" : "25px")};
  height: 5px;
  background-color: #fff;
  border-radius: 3px;
  transform: rotate(${(props) => (props.isOpen ? "45deg" : "0deg")});
`;
const Burger2 = styled(Burger1)`
  transition: all 0.5s ease-in-out;
  margin-top: 5px;
  width: ${(props) => (props.isOpen ? "35px" : "20px")};
  margin-left: auto;
  transform: rotate(${(props) => (props.isOpen ? "-50deg" : "0deg")});
`;
const Burger3 = styled(Burger1)`
  margin-top: 5px;
  width: 15px;
  margin-left: auto;
  display: ${(props) => (props.isOpen ? "none" : "block")};
`;

const NavCta = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  @media (max-width: 670px) {
    padding-bottom: 10vh;
    padding-left: 1vw;
    padding-right: 1vw;
  }
`;
