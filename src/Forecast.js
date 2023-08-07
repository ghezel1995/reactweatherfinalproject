import React, { useState, useEffect } from 'react';
import './Forecast.css';
import axios from 'axios';
import ForecastDay from './ForecastDay';

export default function Forecast(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState(null);

  useEffect(() => {
    setLoaded(false);
  }, [props.city]);

  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }
  function load() {
    let apiKey = '6b27a083f4447ft3fa5232f2oed26a80';
    let url = `https://api.shecodes.io/weather/v1/forecast?query=${props.city}&key=${apiKey}&units=metric`;
    axios.get(url).then(handleResponse);
  }
  if (loaded) {
    return (
      <div className='forecast'>
        <div className='row'>
          {forecast.map(function (dailyForecast, index) {
            if (index < 6) {
              return <ForecastDay key={index} data={dailyForecast} />;
            } else {
              return null;
            }
          })}
        </div>
      </div>
    );
  } else {
    load();
    return null;
  }
}
