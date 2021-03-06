import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-scroll";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <NavBar id="home">
      <NavContainer>
        <Logo>n</Logo>
        <MobilenavCta>
          <Link to="contact" smooth={true} duration={1000}>
            <GetInTouchButtonMobile>Get In Touch</GetInTouchButtonMobile>
          </Link>

          <NavBurger onClick={() => setIsOpen(!isOpen)}>
            <Burger1 isOpen={isOpen} />
            <Burger2 isOpen={isOpen} />
            <Burger3 isOpen={isOpen} />
          </NavBurger>
        </MobilenavCta>
        <NavList isOpen={isOpen}>
          <NavItems>
            <Link to="projects" smooth={true} duration={1000}>
              <NavItem>Projects</NavItem>
            </Link>
            <Link to="skills" smooth={true} duration={1000}>
              <NavItem>Skills</NavItem>
            </Link>

            <NavItem>Blog</NavItem>
          </NavItems>
          <NavCta>
            <Link to="contact" smooth={true} duration={1000}>
              <GetInTouchButton>Get In Touch</GetInTouchButton>
            </Link>

            <ResumeButton
              onClick={() =>
                window.open(
                  "https://drive.google.com/file/d/1VpXyEdrwPgxlUvR-YBV2CNUpwVNaV9o7/view?usp=sharing",
                  "_blank"
                )
              }
            >
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
  position: fixed;
  z-index: 999999;
  width: 100%;
`;

const NavContainer = styled.div`
  width: 90%;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  position: fixed;
  top: 0vh;
  padding-top: 2vh;
  z-index: 999999;
  left: 5%;
  right: 5%;
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
    height: 55%;
    max-width: 70%;
    margin-left: auto;
    position: fixed;
    top: 10vh;
    right: ${(props) => (props.isOpen ? "0" : "-100vw")};
    z-index: 999;
    background: #3d348b;
    border-bottom-left-radius: 140px;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
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
    margin-top: 7vh;
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
  @media (max-width: 670px) {
    color: yellow;
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
  cursor: pointer;
  border: 1px solid white;
`;
const ResumeButton = styled(GetInTouchButton)`
  background-color: #e6af2e;
  padding: 8px 40px;
  color: #000;
  display: flex;
  justify-content: center;
  cursor: pointer;
  align-items: center;
  border: 1px solid #3d3a8b;
  & > span {
    display: grid;
    place-items: center;
  }
  & > span > img {
    margin-right: 5px;
  }
  @media (max-width: 670px) {
    margin-top: 2vh;
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

const MobilenavCta = styled.div`
  display: none;
  @media (max-width: 670px) {
    display: flex;
    align-items: center;
  }
`;

const GetInTouchButtonMobile = styled.div`
  background-color: #3d348b;
  color: #fff;
  border: none;
  outline: none;
  font-family: "Poppins";
  font-weight: bold;
  font-size: 12px;
  padding: 10px 24px;
  border-radius: 50px;
  margin-right: 5vw;
  cursor: pointer;
  border: 1px solid white;
`;
