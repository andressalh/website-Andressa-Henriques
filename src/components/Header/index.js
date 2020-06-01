import React from 'react';
import {
    Nav,
    NavItem,
    NavLink,
    NavbarBrand,
  } from 'reactstrap';
  import logo from './img/logo.png'; 
  import './header.css';
  import { useTranslation } from 'react-i18next';
import i18n from '../../i18n';

function Header() {
    const {t, i18n} = useTranslation();

    function handleClick(lang){
        i18n.changeLanguage(lang);
    }
    return (
        <div className="menu">
            <Nav className="navbar navbar-expand-lg ">
            <NavItem>
                <NavLink onClick={()=>handleClick('en')}>EN</NavLink>
            </NavItem>
            <NavItem>
                <NavLink onClick={()=>handleClick('pt')}>PT</NavLink>
            </NavItem>
            </Nav>
            <Nav sticky="top" className="navbar navbar-expand-lg ">
            <NavbarBrand href="/"><img className="logo" src={logo} alt="Logo" /></NavbarBrand>
            </Nav>
            <hr/>
            <Nav className="navbar navbar-expand-lg ">
            <NavItem>
                <NavLink href="#sobre">{t('About.1')}</NavLink>
            </NavItem>
            <NavItem>
                <NavLink href="#portifolio">{t('Portfolio.1')}</NavLink>
            </NavItem>
            <NavItem>
                <NavLink href="#contato">{t('Contact.1')}</NavLink>
            </NavItem>
            </Nav>
            <hr/>
        </div>
    );
  }
  
  export default Header;