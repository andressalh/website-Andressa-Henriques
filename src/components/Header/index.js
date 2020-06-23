import React from 'react';
import {
    Nav,
    NavItem,
    NavLink,
    NavbarBrand,
  } from 'reactstrap';
import logo from './img/logo.png'; 
import iconPT from './img/pt.png'; 
import iconEn from './img/en.png'; 
import './header.css';
import { useTranslation } from 'react-i18next';
import i18n from 'i18next';


/*<Nav className="navbar navbar-expand-lg navbarMenu ">
            <NavItem>
                <NavLink href="#about">{t('About.1')}</NavLink>
            </NavItem>
            <NavItem>
                <NavLink href="#portifolio">{t('Portfolio.1')}</NavLink>
            </NavItem>
            <NavItem>
                <NavLink href="#contact">{t('Contact.1')}</NavLink>
            </NavItem>
            </Nav>
            <hr/>*/
function Header() {
    const {t, i18n} = useTranslation();

    function handleClick(lang){
        i18n.changeLanguage(lang);
    }
    return (
        <div className="menu">
            <Nav className="navbar navbar-expand-lg menuLanguage">
            <NavItem>
                <NavLink onClick={()=>handleClick('en')}><img className="iconEn" src={iconEn} alt="iconEn" /></NavLink>
            </NavItem>
            <NavItem>
                <NavLink onClick={()=>handleClick('pt')}><img className="iconPT" src={iconPT} alt="iconPT" /></NavLink>
            </NavItem>
            </Nav>
            <Nav sticky="top" className="navbar navbar-expand-lg navbarMenu">
                <NavbarBrand href="/"><img className="logo" src={logo} alt="Logo" /></NavbarBrand>
            </Nav>
            
        </div>
    );
  }
  
  export default Header;