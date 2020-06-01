import React from 'react';
import './portfolio.css';
import airbnb from './img/airbnb.png'; 
import leads from './img/show-me-the-leads.png'; 
import jil from './img/jil.png'; 
import quartzo from './img/quartzo.png'; 
import guidance from './img/guidance.png';
import {
    CardImg,
    CardBody,
    CardTitle,
    CardText,
    Card,
    NavLink,
  } from 'reactstrap';
import Hr from '../Hr/hr';
import pokedex from './img/pokedex.png'; 


export default function Portfolio() {


    return (
      
      <div className="portifolio" id="portifolio"> 
      
        <h2>Últimos Projetos</h2> 
        <Hr/>
        <div className="row"> 

        <Card className="cardOnHover" >
              <div className="divImg">
                <CardImg variant="top" src={pokedex} />
                  <div className="icons">
                  <NavLink id="gitIcon" target="_blank" href="https://github.com/andressalh/pokedex"><img src="https://img.icons8.com/clouds/100/000000/github.png" alt="iconGit"/></NavLink>
                  <NavLink id="LogoWebsite" target="_blank" href="http://pokedex.andressahenriques.com/"><img src="https://img.icons8.com/clouds/100/000000/domain.png" alt="iconWebSite" /></NavLink>
                </div>          
              </div>
              <CardBody className="cardBodyPortfolio">
                <CardTitle>Pokedex</CardTitle>
                <CardText>
                  Design / Desenvolvimento / react / api
                </CardText>
              </CardBody>
            </Card>

            <Card className="cardOnHover" >
              <div className="divImg">
                <CardImg variant="top" src={airbnb} />
                  <div className="icons">
                  <NavLink id="gitIcon" target="_blank" href="https://github.com/andressalh/airbnb-GamaAcademy"><img src="https://img.icons8.com/clouds/100/000000/github.png" alt="iconGit"/></NavLink>
                  <NavLink id="LogoWebsite" target="_blank" href="http://airbnbcopy.andressahenriques.com/"><img src="https://img.icons8.com/clouds/100/000000/domain.png"  alt="iconWebSite"/></NavLink>
                </div>          
              </div>
              <CardBody className="cardBodyPortfolio">
                <CardTitle>Site baseado no Airbnb</CardTitle>
                <CardText>
                  Desenvolvimento / html / css / js / api
                </CardText>
              </CardBody>
            </Card>
  
            <Card className="cardOnHover">
              <div className="divImg">
                <CardImg variant="top" src={leads} />
                    <div className="icons">
                    <NavLink id="gitIcon" target="_blank" href="https://github.com/andressalh/fuscao-preto"><img src="https://img.icons8.com/clouds/100/000000/github.png" alt="iconGit"/></NavLink>
                    <NavLink id="LogoWebsite" target="_blank" href="http://oneline.andressahenriques.com/"><img src="https://img.icons8.com/clouds/100/000000/domain.png"  alt="iconWebSite"/></NavLink>
                  </div>  
              </div>
              <CardBody>
                <CardTitle>Show Me The Leads</CardTitle>
                <CardText>
                  Desenvolvimento / html / css / js
                </CardText>
              </CardBody>
              </Card>
  
            <Card className="cardOnHover">
              <div className="divImg">
                <CardImg variant="top" src={quartzo} />
                    <div className="icons">
                    <NavLink id="LogoWebsite" target="_blank" href="https://www.quartzorganics.com/about/"><img src="https://img.icons8.com/clouds/100/000000/domain.png"  alt="iconWebSite"/></NavLink>
                  </div>  
              </div>
                <CardBody>
                  <CardTitle>Quartz organics</CardTitle>
                  <CardText>
                    Desenvolvimento / WordPress / Divi / CSS
                  </CardText>
                </CardBody>
              </Card>
  
              <Card className="cardOnHover">
                <div className="divImg">  
                  <CardImg variant="top" src={jil} />
                    <div className="icons">
                    <NavLink id="LogoWebsite" target="_blank" href="http://journeys.wildsidedev.com/"><img src="https://img.icons8.com/clouds/100/000000/domain.png"  alt="iconWebSite"/></NavLink>
                    </div>
                  </div>  
                <CardBody>
                  <CardTitle>Journeys in love</CardTitle>
                  <CardText>
                    Desenvolvimento / WordPress / Divi / CSS
                  </CardText>
                </CardBody>
              </Card> 
  
              <Card className="cardOnHover">
                <div className="divImg"> 
                  <CardImg variant="top" src={guidance} />
                      <div className="icons">
                      <NavLink id="LogoWebsite" target="_blank" href="http://guidance.wildsidedev.com/"><img src="https://img.icons8.com/clouds/100/000000/domain.png"  alt="iconWebSite"/></NavLink>
                    </div>  
                </div>
                <CardBody>
                  <CardTitle>Guidance</CardTitle>
                  <CardText>
                    Desenvolvimento / WordPress / Divi / CSS
                  </CardText>
                </CardBody>
              </Card>
          </div>
        </div>
    );
   
  }

