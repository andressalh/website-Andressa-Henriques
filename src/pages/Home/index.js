import React from 'react';
import './home.css';

import Portfolio from '../../components/Portfolio/portfolio.js';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Title from '../../components/Hr/hr';
import Hr from '../../components/Hr/hr';

function App() {

  return (
    
    <div>
      <Header/>
      <div id="about">
        <h2>Sobre</h2>
        <Hr/>
        <p>Olá. Me chamo Andressa Henriques, sou Software Engineer | Full Stack Developer Junior | 
          HTML, CSS, JS, JAVA, REACT.
        <br/><br/>Minha paixão é programar, encontro felicidade em ser minha melhor versão hoje do que fui ontem.
        Meu sonho é ter contato com extraterrestres; de preferência uma nave amiga vindo 
          para a Terra. Eu adoraria viver junto a eles.
          </p>
        
      </div>
      <Portfolio/>
      <div className="contact" id="contact"> 
      <h2>Contato</h2>
      <Hr/>
      <p>andressalhenriques@gmail.com</p>
      </div>
      <Footer/>
    </div>
    );
}

export default App;
