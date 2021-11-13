import React from 'react';
import './CurrentWeather.scss'
import { Col } from 'react-bootstrap';
import Row from "react-bootstrap/Row";

const CurrentWeather = () => (           
       
    <div class="current">
        <div class="ciu">Ciudad: <p class="ciu-dato">Buenos Aires</p></div>
        <div class="">Clima: 32°</div>
        <div class="sensa">Sens. térmica: 33°</div>
    </div>                            
   
)

export default CurrentWeather