import React from 'react';

export default function WeatherTemperature(props) {
  return (
    <>
      <span className='degree'>{props.celsius}</span>
      <span className='celsius'>°C</span>
    </>
  );
}
