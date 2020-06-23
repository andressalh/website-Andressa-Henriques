import React from 'react';
import {
    Nav,
    NavItem,
    NavLink,
  } from 'reactstrap';
  import LogoGithub from 'react-ionicons/lib/LogoGithub';
  import LogoLinkedin from 'react-ionicons/lib/LogoLinkedin';
  import { useTranslation } from 'react-i18next';
  import './footer.css';

function Footer() {
  const {t, i18n} = useTranslation();
  

    return (
        <footer>
          <div className="contact-text">
            <h2>{t('ProjectTitle.1')}</h2>
            <p>{t('Project.1')}</p>
            
          </div>
          <div className="contact-social">
          <p>andressalhenriques@gmail.com</p>
            <Nav className="navbar navbar-expand-lg navbarMenu">
              <NavItem>
                <NavLink target="_blank" href="https://github.com/andressalh"><LogoGithub name="logo-github"></LogoGithub></NavLink>
              </NavItem>
              <NavItem>
                <NavLink target="_blank"  href="https://www.linkedin.com/in/andressalh/" ><LogoLinkedin name="logo-linkedin"></LogoLinkedin></NavLink>
              </NavItem>
            </Nav>
          </div>
        
        <div className="copyright">
          <h5>Copyright © Andressa Henriques</h5>
        </div>
      </footer> 
    );
  }
  
  export default Footer;