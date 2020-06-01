import React from 'react';
import {
    Nav,
    NavItem,
    NavLink,
  } from 'reactstrap';
  import LogoGithub from 'react-ionicons/lib/LogoGithub';
  import LogoLinkedin from 'react-ionicons/lib/LogoLinkedin';


function Footer() {

  

    return (
        <footer>
        <Nav className="navbar navbar-expand-lg navbarMenu">
          <NavItem>
            <NavLink target="_blank" href="https://github.com/andressalh"><LogoGithub name="logo-github"></LogoGithub></NavLink>
          </NavItem>
          <NavItem>
            <NavLink target="_blank"  href="https://www.linkedin.com/in/andressalh/" ><LogoLinkedin name="logo-linkedin"></LogoLinkedin></NavLink>
          </NavItem>
        </Nav>
      </footer> 
    );
  }
  
  export default Footer;