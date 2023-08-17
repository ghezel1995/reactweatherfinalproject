import React, { useState } from 'react';
import './Weather.css';
import axios from 'axios';
import WeatherInfo from './WeatherInfo';
import Forecast from './Forecast';
import { Oval } from 'react-loader-spinner';

export default function Weather(props) {
  const [inputCity, setInputCity] = useState(props.defaultCity);
  const [weatherData, setWeatherData] = useState({ ready: false });
  function handleResponse(response) {
    let roundedTemperature = Math.round(response.data.temperature.current);
    console.log(response.data)
    setWeatherData({
      ready: true,
      temperature: roundedTemperature,
      city: response.data.city,
      description: response.data.condition.description,
      wind: response.data.wind.speed,
      humidity: response.data.temperature.humidity,
      time: new Date(response.data.time * 1000),
      icon: response.data.condition.icon,
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
              <div className='col-md-10'>
                <input
                  type='search'
                  className='form-control search-input'
                  placeholder='Enter a city'
                  onChange={handleChange}
                />
              </div>
              <div className='col-md-1 btn-container'>
                <input type='submit' value='Search' className='search-btn' />
              </div>
            </div>
          </form>
          <WeatherInfo data={weatherData} />

          <Forecast city={weatherData.city} />
        </div>
        <footer>
          This project coded by{' '}
          <a
            href='https://www.linkedin.com/in/mahsaghezel/'
            target='_blank'
            rel='noreferrer'
          >
            Mahsa Ghezel
          </a>{' '}
          and It is open-source on{' '}
          <a
            href='https://github.com/ghezel1995/reactweatherfinalproject'
            target='_blank'
            rel='noreferrer'
          >
            GitHub
          </a>{' '}
          and hosted on{' '}
          <a
            href='https://finalweatherproject.netlify.app/'
            target='_blank'
            rel='noreferrer'
          >
            Netlify
          </a>
        </footer>
      </>
    );
  } else {
    search();
    return (
      <Oval
        height={80}
        width={80}
        color='#005792'
        visible={true}
        ariaLabel='oval-loading'
        secondaryColor='#005792'
      />
    );
  }
}
