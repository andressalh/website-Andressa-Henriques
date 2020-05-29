import React, { Fragment, useState } from 'react';
import axios from 'axios';
import './home.css';
import {
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';
import logo from './img/logo.gif'; 
import LogoGithub from 'react-ionicons/lib/LogoGithub';
import LogoLinkedin from 'react-ionicons/lib/LogoLinkedin'


function App(props) {
  const [usuario, setUsuario] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  function handleSearch(){
    axios.get(`https://api.github.com/users/${usuario}/repos`).then(response => console.log(response.data))
  }
  return (
    <div class="menu">
      <Nav sticky="top" className="navbar navbar-expand-lg ">
         <NavbarBrand href="/"><img class="logo" src={logo} alt="Logo" /></NavbarBrand>
      </Nav>
      <hr/>
      <Nav className="navbar navbar-expand-lg ">
        <NavItem>
          <NavLink href="#">Sobre</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">Portifolio</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">Contato</NavLink>
        </NavItem>
      </Nav>
      <hr/>

      
      <Nav className="navbar navbar-expand-lg">
        <NavItem>
          <NavLink target="_blank" href="https://github.com/andressalh"><LogoGithub name="logo-github"></LogoGithub></NavLink>
        </NavItem>
        <NavItem>
          <NavLink target="_blank"  href="https://www.linkedin.com/in/andressalh/" ><LogoLinkedin name="logo-linkedin"></LogoLinkedin></NavLink>
        </NavItem>
      </Nav>
    </div>
    );
}

export default App;
