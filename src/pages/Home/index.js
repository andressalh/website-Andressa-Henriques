import React from 'react';
import './home.css';
import {
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';
import Portfolio from '../../components/Portfolio/portfolio.js';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { useTranslation } from 'react-i18next';
import me2 from "../../assets/me2.png"
import github from "../../assets/github.png"
import linkedin from "../../assets/linkedin.png"

function App() {
  const {t, i18n} = useTranslation();

  return (
    
    <div className="div-body">
      <Header/>
      <div className="image-header">
      </div>
      <div id="about">
        
        
        <div className="div-about">
          <h2>{t('name.1')}</h2>
          <h5> {t('AboutMe.1')}</h5>
          <p> {t('AboutMeTwo.1')}</p>

        </div>
        <div className="img-about">
        <img src={me2} alt="me2" />
        < Nav className="navbar navbar-expand-lg socialicons">
              <NavItem>
                <NavLink target="_blank" href="https://github.com/andressalh"><img src={github} alt="github"></img></NavLink>
              </NavItem>
              <NavItem>
                <NavLink target="_blank" href="https://www.linkedin.com/in/andressalh/"><img src={linkedin} alt="linkedin"></img></NavLink>
              </NavItem>

          </Nav>
        </div>
        
      </div>
      <div className="div-yellow"></div>

      <Portfolio/>
      <Footer/>
    </div>
    );
}

export default App;
