import React, {useState, useEffect} from 'react';
import { ImPacman } from "react-icons/im";
import { animateScroll as scroll} from 'react-scroll';
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
  const [scrollNav, setScrollNav] = useState(false)

  const changeNav = () => {
    if(window.scrollY >= 80 ) {
      setScrollNav(true)
    } else{
      setScrollNav(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', changeNav)
  }, []);

  const toggleHome = () => {
    scroll.scrollToTop();
  }

  return (
    <>
      <Nav scrollNav={scrollNav}>
        <NavbarContainer>
          <NavLogo to="/" onClick={toggleHome}><ImPacman color='#fff'/> Portfolio </NavLogo>
          <MobileIcon onClick={toggle}>
            {/* <FaBars/> */}
          </MobileIcon>
          {/* <NavMenu>
            <NavItem>
              <NavLinks to='About' 
              smooth={true} 
              duration={500} 
              spy={true} 
              exact='true' 
              offset={-100}
              >
                About
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="Education"
              smooth={true} 
              duration={500} 
              spy={true} 
              exact='true' 
              offset={-100}
              >Education</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="Skill"
              smooth={true} 
              duration={500} 
              spy={true} 
              exact='true' 
              offset={-100}
              >Skill</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="Contact"
              smooth={true} 
              duration={500} 
              spy={true} 
              exact='true' 
              offset={-100}
              >Contact</NavLinks>
            </NavItem>
          </NavMenu> */}
         
        </NavbarContainer>
      </Nav>
    </>
    
  );
};

export default Navbar;
