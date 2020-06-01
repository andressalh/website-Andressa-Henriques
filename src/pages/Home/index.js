import React from 'react';
import './home.css';

import Portfolio from '../../components/Portfolio/portfolio.js';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Hr from '../../components/Hr/hr';
import { useTranslation } from 'react-i18next';


function App() {
  const {t, i18n} = useTranslation();

  return (
    
    <div>
      <Header/>
      <div id="about">
        <h2>{t('About.1')}</h2>
        <Hr/>
        <p>{t('AboutMe.1')}</p>
        <p> {t('AboutMeTwo.1')}</p>
        
      </div>
      <Portfolio/>
      <div className="contact" id="contact"> 
      <h2>{t('Contact.1')}</h2>
      <Hr/>
      <p>andressalhenriques@gmail.com</p>
      </div>
      <Footer/>
    </div>
    );
}

export default App;
