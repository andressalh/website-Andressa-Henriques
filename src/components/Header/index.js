import React from 'react';
import {
    Nav,
    NavItem,
    NavLink,
    NavbarBrand,
  } from 'reactstrap';
  import logo from './img/logo.png'; 
  import './header.css';

function Header() {

    return (
        <div className="menu">
            <Nav sticky="top" className="navbar navbar-expand-lg ">
            <NavbarBrand href="/"><img className="logo" src={logo} alt="Logo" /></NavbarBrand>
            </Nav>
            <hr/>
            <Nav className="navbar navbar-expand-lg ">
            <NavItem>
                <NavLink href="#sobre">Sobre</NavLink>
            </NavItem>
            <NavItem>
                <NavLink href="#portifolio">Portfolio</NavLink>
            </NavItem>
            <NavItem>
                <NavLink href="#contato">Contato</NavLink>
            </NavItem>
            </Nav>
            <hr/>
        </div>
    );
  }
  
  export default Header;