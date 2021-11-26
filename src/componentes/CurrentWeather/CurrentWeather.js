import React, {useState} from 'react';
import './CurrentWeather.scss';
import { useWeather } from "../../componentes/ContextWeather/ContextWeather";
import { useCity } from "../../componentes/ContextCity/ContextCity";

const CurrentWeather = () => {
  const { city, timestamp, temperature, fellsLike, history } = useWeather();
  const { selectedCity, changeCitySelected } = useCity();
    
    return (
      <div>
        
        <div class="current">
          <div class="label">
            Fecha:
            <p class="data">{timestamp}</p>
          </div>
          <div class="label">
            Ciudad:
            <p class="data">{ selectedCity }</p>
            <p class="data">{ city }</p>
          </div>
          <div class="label">
            Clima:
            <p class="data">{temperature}</p>
          </div>
          <div class="label">
            Sens. térmica:
            <p class="data">{fellsLike}</p>
          </div>
        </div>
      </div>
    );
  };

export default CurrentWeather