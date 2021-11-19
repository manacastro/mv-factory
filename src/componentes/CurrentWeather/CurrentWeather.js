import React from 'react';
//import ContextCity from '../ContextCity/ContextCity';
import './CurrentWeather.scss';
import ContextCity from '../../componentes/ContextCity/ContextCity';

class CurrentWeather extends React.Component {
    render() {        
        return (
            <ContextCity.Consumer>
                {
                    value =>
                    (
                        <div class="current">
                        <div class="label">Fecha:
                            <p class="data">27 de Septiembre de 2021</p>
                        </div>
                        <div class="label">Ciudad:
                            <p class="data">{value}</p>
                        </div>
                        <div class="label">Clima:
                            <p class="data">32°</p>
                        </div>
                        <div class="label">Sens. térmica:
                            <p class="data">31°</p>
                        </div>
                    </div>
                    )
                }               
            </ContextCity.Consumer>
        )
    }
}

export default CurrentWeather