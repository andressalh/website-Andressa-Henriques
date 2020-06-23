import React from 'react';
import './home.css';

import Portfolio from '../../components/Portfolio/portfolio.js';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { useTranslation } from 'react-i18next';


function App() {
  const {t, i18n} = useTranslation();

  return (
    
    <div>
      <Header/>
      <div id="about">
        <h2 className="class-before">{t('About.1')}</h2>
        
        <div className="div-about">
          <p>{t('AboutMe.1')}</p>
          <p> {t('AboutMeTwo.1')}</p>
        </div>
        
        
      </div>
      <Portfolio/>
      <Footer/>
    </div>
    );
}

export default App;
