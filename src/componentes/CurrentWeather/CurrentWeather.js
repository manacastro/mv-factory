import React from 'react';
import './CurrentWeather.scss'
import { Col } from 'react-bootstrap';
import Row from "react-bootstrap/Row";

const CurrentWeather = () => (

    <div class="current">
        <div class="label">Fecha:
            <p class="ciu-dato">27 de Septiembre de 2021</p>
        </div>
        <div class="label">Ciudad: 
            <p class="ciu-dato">Buenos Aires</p>
        </div>
        <div class="label">Clima: 
            <p class="ciu-dato">32°</p>
        </div>
        <div class="label">Sens. térmica: 
            <p class="ciu-dato">31°</p>
        </div>
    </div>
)

export default CurrentWeather