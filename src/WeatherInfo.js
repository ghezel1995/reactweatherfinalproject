import React from 'react';
import DateAndTime from './DateAndTime';

export default function WeatherInfo(props) {
  return (
    <>

        <div className='row'>
          <div className='col-6 brief'>
            <h1>{props.data.city}</h1>
            <ul className='date-and-desc'>
              <li>
                Last updated: <DateAndTime date={props.data.time} />
              </li>
              <li className='text-capitalize'>{props.data.description}</li>
            </ul>
          </div>
        </div>
        <div className='row'>
          <div className='col-6 main-temp'>
            <img
              className='main-icon'
              src={props.data.icon}
              alt={props.data.description}
            />
            <span className='degree'>{props.data.temperature}</span>
            <span className='celsius'>°C</span>
          </div>
          <div className='col-6 humidity-wind'>
            <ul>
              <li>Humidity: {props.data.humidity} %</li>
              <li>Wind: {props.data.wind} km/h</li>
            </ul>
          </div>
        </div>
    </>
  );
}
