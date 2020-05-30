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
  } from 'reactstrap';
import Hr from '../Hr/hr';

function Portfolio() {

    return (
        <div className="portifolio" id="portifolio"> 
        <h2>Últimos Trabalhos</h2>
        <Hr/>
          <div className="row"> 
              <Card >
                <a rel="noopener noreferrer" target="_blank" href="http://airbnbcopy.andressahenriques.com/" className="text-warning stretched-link"> </a>
                  <CardImg variant="top" src={airbnb} />
                  <CardBody>
                    <CardTitle>Site baseado no Airbnb</CardTitle>
                    <CardText>
                      Desenvolvimento / html / css / js / api
                    </CardText>
                  </CardBody>
                </Card>
    
              <Card >
                <a rel="noopener noreferrer" target="_blank" href="http://oneline.andressahenriques.com/" className="text-warning stretched-link"> </a>
                  <CardImg variant="top" src={leads} />
                  <CardBody>
                    <CardTitle>Show Me The Leads</CardTitle>
                    <CardText>
                      Desenvolvimento / html / css / js
                    </CardText>
                  </CardBody>
                </Card>
    
              <Card >
                <a rel="noopener noreferrer" target="_blank" href="https://www.quartzorganics.com/about/" className="text-warning stretched-link"> </a>
                  <CardImg variant="top" src={quartzo} />
                  <CardBody>
                    <CardTitle>Quartz organics</CardTitle>
                    <CardText>
                      Desenvolvimento / WordPress / Divi / CSS
                    </CardText>
                  </CardBody>
                </Card>
    
                <Card >
                <a rel="noopener noreferrer" target="_blank" href="http://journeys.wildsidedev.com/" className="text-warning stretched-link"> </a>
                  <CardImg variant="top" src={jil} />
                  <CardBody>
                    <CardTitle>Journeys in love</CardTitle>
                    <CardText>
                      Desenvolvimento / WordPress / Divi / CSS
                    </CardText>
                  </CardBody>
                </Card> 
    
                <Card >
                <a rel="noopener noreferrer" target="_blank" href="http://guidance.wildsidedev.com/" className="text-warning stretched-link"> </a>
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
    );
  }
  
  export default Portfolio;