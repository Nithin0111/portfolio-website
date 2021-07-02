import React from "react";
import styled from "styled-components";

const Header = () => {
  return (
    <NavBar>
      <NavContainer>
        <Logo>n</Logo>
        <NavList>
          <NavItems>
            <NavItem>Home</NavItem>
            <NavItem>Projects</NavItem>
            <NavItem>Blog</NavItem>
          </NavItems>
          <GetInTouchButton>Get In Touch</GetInTouchButton>
          <ResumeButton>
            <span>
              <img src="/images/download-icon.svg" alt="Download Icon" />
            </span>
            Resume
          </ResumeButton>
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
`;
const NavItems = styled.ul`
  display: flex;
  justify-content: space-around;
  align-items: center;
  list-style: none;
  margin-right: 1vw;
`;
const NavItem = styled.li`
  font-family: "Poppins", sans-serif;
  font-weight: bold;
  font-size: 20px;
  color: #e6af2e;
  margin-right: 1vw;
  cursor: pointer;
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
