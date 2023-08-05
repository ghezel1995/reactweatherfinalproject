import React, { useState } from 'react';
import './Weather.css';
import axios from 'axios';
import WeatherInfo from './WeatherInfo';

export default function Weather(props) {
  const [inputCity, setInputCity] = useState(props.defaultCity);
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

  function search() {
    const apiKey = '6b27a083f4447ft3fa5232f2oed26a80';
    const apiUrl = `https://api.shecodes.io/weather/v1/current?query=${inputCity}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search(inputCity);
  }
  function handleChange(event) {
    setInputCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <>
        <div className='weather'>
          <form onSubmit={handleSubmit}>
            <div className='row'>
              <div className='col-10'>
                <input
                  type='search'
                  className='form-control'
                  placeholder='Enter a city'
                  onChange={handleChange}
                />
              </div>
              <div className='col-1'>
                <input
                  type='submit'
                  value='Search'
                  className='btn btn-primary'
                />
              </div>
            </div>
          </form>
          <WeatherInfo data={weatherData} />
        </div>
      </>
    );
  } else {
    search();
    return 'Loading...';
  }
}
