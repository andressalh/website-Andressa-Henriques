import React from 'react';
import './home.css';

import Portfolio from '../../components/Portfolio/portfolio.js';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Hr from '../../components/Hr/hr';

function App() {

  return (
    
    <div>
      <Header/>
      <Portfolio/>

      <div className="contact" id="contact"> 
      <h2> Contato</h2>
      <Hr/>
      </div>
      <Footer/>
    </div>
    );
}

export default App;
