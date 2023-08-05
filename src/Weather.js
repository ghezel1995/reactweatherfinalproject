import React, { useState } from 'react';
import './Weather.css';
import axios from 'axios';
import DateAndTime from './DateAndTime';

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  function handleResponse(response) {
    let roundedTemperature = Math.round(response.data.temperature.current);
    setWeatherData({
      ready: true,
      temperature: roundedTemperature,
      city: response.data.city,
      description: response.data.condition.description,
      wind: response.data.wind.speed,
      humidity: response.data.temperature.humidity,
      time: new Date(response.data.time * 1000),
    });
  }

  if (weatherData.ready) {
    return (
      <>
        <div className='weather'>
          <form>
            <div className='row'>
              <div className='col-10'>
                <input
                  type='search'
                  className='form-control'
                  placeholder='Enter a city'
                />
              </div>
              <div className='col-1'>
                <input type='submit' className='btn btn-primary' />
              </div>
            </div>
          </form>
          <div className='row'>
            <div className='col-6 brief'>
              <h1>{weatherData.city}</h1>
              <ul className='date-and-desc'>
                <li>
                  Last updated: <DateAndTime date={weatherData.time} />
                </li>
                <li className='text-capitalize'>{weatherData.description}</li>
              </ul>
            </div>
          </div>
          <div className='row'>
            <div className='col-6 main-temp'>
              <img
                className='main-icon'
                src='http://shecodes-assets.s3.amazonaws.com/api/weather/icons/rain-day.png'
                alt={weatherData.description}
              />
              <span className='degree'>{weatherData.temperature}</span>
              <span className='celsius'>°C</span>
            </div>
            <div className='col-6 humidity-wind'>
              <ul>
                <li>Humidity: {weatherData.humidity} %</li>
                <li>Wind: {weatherData.wind} km/h</li>
              </ul>
            </div>
          </div>
        </div>
      </>
    );
  } else {
    const apiKey = '6b27a083f4447ft3fa5232f2oed26a80';
    const apiUrl = `https://api.shecodes.io/weather/v1/current?query=${props.defaultCity}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
    return 'Loading...';
  }
}
