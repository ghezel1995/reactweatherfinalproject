import React, { useState } from 'react';

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState('celsius');
  function displayFahrenheit(event) {
    event.preventDefault();
    setUnit('fahrenheit');
  }
  function displayCelsius(event) {
    event.preventDefault();
    setUnit('celsius');
  }
  if (unit === 'celsius') {
    return (
      <>
        <span className='degree'>{props.celsius}</span>
        <span className='celsius'>
          °C |{' '}
          <a href='/' onClick={displayFahrenheit}>
            °F
          </a>
        </span>
      </>
    );
  } else {
    function fahrenheit() {
      return Math.round((props.celsius * 9) / 5 + 32);
    }
    return (
      <>
        <span className='degree'>{fahrenheit()}</span>
        <span className='celsius'>
          <a href='/' onClick={displayCelsius}>
            °C
          </a>{' '}
          | °F
        </span>
      </>
    );
  }
}
