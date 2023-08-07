import React from 'react';
import WeatherIcon from './WeatherIcon';

export default function ForecastDay(props) {
  function maximum() {
    let max = props.data.temperature.maximum;
    max = Math.round(max);
    return `${max}°`;
  }
  function minimum() {
    let min = props.data.temperature.minimum;
    min = Math.round(min);
    return `${min}°`;
  }
  function day() {
    let date = new Date(props.data.time * 1000);
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    let day = days[date.getDay()];
    return day;
  }
  return (
    <div className='col forecast-info'>
      <div className='forecast-day'>{day()}</div>
      <WeatherIcon code={props.data.condition.icon} size={44} />
      <div className='forecast-temperatures'>
        <span className='forecast-max'>{maximum()} </span>
        <span className='forecast-min'>{minimum()}</span>
      </div>
    </div>
  );
}
