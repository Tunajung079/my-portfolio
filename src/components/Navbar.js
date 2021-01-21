import React from 'react';
import { ImPacman } from "react-icons/im";
import {FaBars} from 'react-icons/fa';
import {
  Nav, 
  NavbarContainer, 
  NavLogo, 
  MobileIcon, 
  NavMenu, 
  NavItem, 
  NavLinks
} from './NavElements';


const Navbar = ({toggle}) => {
  return (
    <>
      <Nav>
        <NavbarContainer>
          
          <NavLogo to="/"><ImPacman color='#fff'/> Portfolio </NavLogo>
          <MobileIcon onClick={toggle}>
            
            <FaBars/>
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to="About">About</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="Education">Education</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="Skill">Skill</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="Contact">Contact</NavLinks>
            </NavItem>
          </NavMenu>
         
        </NavbarContainer>
      </Nav>
    </>
    
  );
};

export default Navbar;
