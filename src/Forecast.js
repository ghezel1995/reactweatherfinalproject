import React from 'react';
import WeatherIcon from './WeatherIcon';
import './Forecast.css';
import axios from 'axios';
export default function Forecast(props) {
  function handleResponse(response) {
    console.log(response.data);
  }
  let apiKey = '6b27a083f4447ft3fa5232f2oed26a80';
  let url = `https://api.shecodes.io/weather/v1/forecast?query=${props.city}&key=${apiKey}&units=metric`;
  axios.get(url).then(handleResponse);
  return (
    <div className='forecast'>
      <div className='row'>
        <div className='col forecast-info'>
          <div className='forecast-day'>Tue</div>
          <WeatherIcon code='clear-sky-day' size={44} />
          <div className='forecast-temperatures'>
            <span className='forecast-max'>18° </span>
            <span className='forecast-min'>16°</span>
          </div>
        </div>
      </div>
    </div>
  );
}
