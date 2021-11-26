import React from 'react'
import './Home.scss';
import { Container } from "react-bootstrap";
import Historical from "../../componentes/Historical/Historical";
import CurrentWeather from "../../componentes/CurrentWeather/CurrentWeather";
import CitySection from "../../componentes/CitySection/CitySection";
import { CityProvider } from "../../componentes/ContextCity/ContextCity";
import { WeatherProvider } from "../../componentes/ContextWeather/ContextWeather";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';


const Home = () => (
    <div >
        <header  className='sectionTop'>
            <div>
                <h2 className="title" >Informe del clima</h2>
            </div>
            <div className="link">
                <Link to='/CityConfiguration' ><FontAwesomeIcon icon={faCog} />Mas ciudades...</Link>
            </div>            
        </header>
        <body>
            <Container>
                <CityProvider>
                    <WeatherProvider>
                        <CitySection />
                        <CurrentWeather />
                    </WeatherProvider>
                    <Historical />
                </CityProvider>
            </Container>
        </body>
    </div>

);
export default Home