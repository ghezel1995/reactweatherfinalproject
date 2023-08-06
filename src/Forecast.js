import React from 'react';
import WeatherIcon from './WeatherIcon';
import './Forecast.css'
export default function Forecast() {
  return (
    <div className='forecast'>
      <div className='row'>
        <div className='col forecast-info'>
          <div className='forecast-day'>Tue</div>
          <WeatherIcon code='clear-sky-day' size={44}/>
          <div className='forecast-temperatures'>
            <span className='forecast-max'>18° </span>
            <span className='forecast-min'>16°</span>
          </div>
        </div>
      </div>
    </div>
  );
}
