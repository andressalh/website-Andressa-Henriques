import React from 'react';
import './home.css';
import {
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  CardImg,
  CardBody,
  CardTitle,
  CardText,
  Button,
  Card,
} from 'reactstrap';
import logo from './img/logo.png'; 
import airbnb from './img/airbnb.png'; 
import leads from './img/show-me-the-leads.png'; 
import jil from './img/jil.png'; 
import quartzo from './img/quartzo.png'; 
import guidance from './img/guidance.png';

import LogoGithub from 'react-ionicons/lib/LogoGithub';
import LogoLinkedin from 'react-ionicons/lib/LogoLinkedin';

  function App() {

  return (
    
    <div>
        <div className="menu">
          <Nav sticky="top" className="navbar navbar-expand-lg ">
            <NavbarBrand href="/"><img className="logo" src={logo} alt="Logo" /></NavbarBrand>
          </Nav>
          <hr/>
          <Nav className="navbar navbar-expand-lg ">
            <NavItem>
              <NavLink href="#">Sobre</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#portifolio">Portfolio</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">Contato</NavLink>
            </NavItem>
          </Nav>
          <hr/>
      </div>

    <div className="portifolio" id="portifolio"> 
    <h2>Últimos Trabalhos</h2>
    <hr/>
      <div className="row"> 
          <Card >
            <a target="_blank" href="http://airbnbcopy.andressahenriques.com/" class="text-warning stretched-link"></a>
              <CardImg variant="top" src={airbnb} />
              <CardBody>
                <CardTitle>Site baseado no Airbnb</CardTitle>
                <CardText>
                  Desenvolvimento / html / css / js / api
                </CardText>
              </CardBody>
            </Card>

          <Card >
            <a target="_blank" href="http://oneline.andressahenriques.com/" class="text-warning stretched-link"></a>
              <CardImg variant="top" src={leads} />
              <CardBody>
                <CardTitle>Show Me The Leads</CardTitle>
                <CardText>
                  Desenvolvimento / html / css / js
                </CardText>
              </CardBody>
            </Card>

          <Card >
            <a target="_blank" href="https://www.quartzorganics.com/about/" class="text-warning stretched-link"></a>
              <CardImg variant="top" src={quartzo} />
              <CardBody>
                <CardTitle>Quartz organics</CardTitle>
                <CardText>
                  Desenvolvimento / WordPress / Divi / CSS
                </CardText>
              </CardBody>
            </Card>

            <Card >
            <a target="_blank" href="http://journeys.wildsidedev.com/" class="text-warning stretched-link"></a>
              <CardImg variant="top" src={jil} />
              <CardBody>
                <CardTitle>Journeys in love</CardTitle>
                <CardText>
                  Desenvolvimento / WordPress / Divi / CSS
                </CardText>
              </CardBody>
            </Card> 

            <Card >
            <a target="_blank" href="http://guidance.wildsidedev.com/" class="text-warning stretched-link"></a>
              <CardImg variant="top" src={guidance} />
              <CardBody>
                <CardTitle>Guidance</CardTitle>
                <CardText>
                  Desenvolvimento / WordPress / Divi / CSS
                </CardText>
              </CardBody>
            </Card>
        </div>
      </div>

      <div className="contact" id="contact"> 
      </div>






      <footer>
        <Nav className="navbar navbar-expand-lg">
          <NavItem>
            <NavLink target="_blank" href="https://github.com/andressalh"><LogoGithub name="logo-github"></LogoGithub></NavLink>
          </NavItem>
          <NavItem>
            <NavLink target="_blank"  href="https://www.linkedin.com/in/andressalh/" ><LogoLinkedin name="logo-linkedin"></LogoLinkedin></NavLink>
          </NavItem>
        </Nav>
      </footer> 

    </div>
    );
}

export default App;
/*style={{ width: '18rem' }}*/ 