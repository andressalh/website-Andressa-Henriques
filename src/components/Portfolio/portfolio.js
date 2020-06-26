import React from 'react';
import './portfolio.css';
import airbnb from './img/airbnb.png'; 
import portstephenscleaning from './img/portstephenscleaning.png'; 
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
import pokedex from './img/pokedex.png'; 
import { useTranslation } from 'react-i18next';
import {Link} from 'react-router-dom';


export default function Portfolio() {
  const {t, i18n} = useTranslation();

    return (
      
      <div className="portifolio" id="portifolio"> 
      
        <h2 className="class-before">{t('Work.1')}</h2> 
        
        
        <div className="row"> 

          <NavLink target="_blank"  href="http://portstephenscleaningservices.com.au/" rel="noopener noreferrer">
            <Card className="cardOnHover">
                <div className="divImg">
                  <CardImg variant="top" src={portstephenscleaning} />
                </div>
                <CardBody>
                  <CardTitle>Port Stephens Cleaning</CardTitle>
                  <CardText>
                    Design / {t('Development.1')} / react / javascrit
                  </CardText>
                </CardBody>
            </Card>
          </NavLink>

          <NavLink target="_blank"  href="http://pokedex.andressahenriques.com/" rel="noopener noreferrer">
            <Card className="cardOnHover" >
                  <div className="divImg">
                    <CardImg variant="top" src={pokedex} />
                              
                  </div>
                  <CardBody className="cardBodyPortfolio">
                    <CardTitle>Pokedex</CardTitle>
                    <CardText>
                      Design / {t('Development.1')} / react / api
                    </CardText>
                  </CardBody>
            </Card>
          </NavLink>

          <NavLink target="_blank"  href="http://airbnbcopy.andressahenriques.com/" rel="noopener noreferrer">
              <Card className="cardOnHover" >
                <div className="divImg">
                  <CardImg variant="top" src={airbnb} />       
                </div>
                <CardBody className="cardBodyPortfolio">
                  <CardTitle>{t('Airbnb.1')}</CardTitle>
                  <CardText>
                  {t('Development.1')} / html / css / js / api
                  </CardText>
                </CardBody>
              </Card>
          </NavLink>
            
  
        </div>

          <div className="row"> 

            <NavLink target="_blank"  href="https://www.quartzorganics.com" rel="noopener noreferrer">
              <Card className="cardOnHover">
                <div className="divImg">
                  <CardImg variant="top" src={quartzo} /> 
                </div>
                  <CardBody>
                    <CardTitle>Quartz organics</CardTitle>
                    <CardText>
                    {t('Development.1')} / WordPress / Divi / CSS
                    </CardText>
                  </CardBody>
              </Card>
            </NavLink>
  
            <NavLink target="_blank"  href="http://journeys.wildsidedev.com/" rel="noopener noreferrer">
              <Card className="cardOnHover">
                <div className="divImg">  
                  <CardImg variant="top" src={jil} />
                </div>  
                <CardBody>
                  <CardTitle>Journeys in love</CardTitle>
                  <CardText>
                  {t('Development.1')} / WordPress / Divi / CSS
                  </CardText>
                </CardBody>
              </Card> 
            </NavLink>
  
            <NavLink target="_blank"  href="http://guidance.wildsidedev.com/" rel="noopener noreferrer">
              <Card className="cardOnHover">
                <div className="divImg"> 
                  <CardImg variant="top" src={guidance} />
                </div>
                <CardBody>
                  <CardTitle>Guidance</CardTitle>
                  <CardText>
                  {t('Development.1')} / WordPress / Divi / CSS
                  </CardText>
                </CardBody>
              </Card>
              </NavLink>
          </div>
      </div>
    );
   
  }

