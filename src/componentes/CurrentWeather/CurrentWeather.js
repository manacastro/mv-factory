import React from 'react';
import './CurrentWeather.scss';

class CurrentWeather extends React.Component{

    render(){
       // const {selectedCity} = this.props;
        return(
            <div class="current">
            <div class="label">Fecha:
                <p class="data">27 de Septiembre de 2021</p>
            </div>
            <div class="label">Ciudad: 
                <p class="data"></p>
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
} 

export default CurrentWeather