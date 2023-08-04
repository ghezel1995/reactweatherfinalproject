import React from 'react';
import './Weather.css';
export default function Weather() {
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
            <h1>New York</h1>
            <ul className='date-and-desc'>
              <li>Last updated: 19 : 14</li>
              <li>Cloudy</li>
            </ul>
          </div>
        </div>
        <div className='row'>
          <div className='col-6 main-temp'>
            <img
              className='main-icon'
              src='https://openweathermap.org/img/w/13d.png'
              alt='weather icon'
            />
            <span className='degree'>19</span>
            <span className='celsius'>°C</span>
          </div>
          <div className='col-6'>
            <ul>
              <li>Humidity: 20 %</li>
              <li>Wind: 5 km/h</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
