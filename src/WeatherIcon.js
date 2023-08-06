import React from 'react';
import ReactAnimatedWeather from 'react-animated-weather';

export default function WeatherIcon(props) {
    const iconMapping = {
      'clear-sky-day': 'CLEAR_DAY',
      'clear-sky-night': 'CLEAR_NIGHT',
      'few-clouds-day': 'PARTLY_CLOUDY_DAY',
      'few-clouds-night': 'PARTLY_CLOUDY_NIGHT',
      'scattered-clouds-day': 'CLOUDY',
      'scattered-clouds-night': 'CLOUDY',
      'broken-clouds-day': 'CLOUDY',
      'broken-clouds-night': 'CLOUDY',
      'shower-rain-day': 'SLEET',
      'shower-rain-night': 'SLEET',
      'rain-day': 'RAIN',
      'rain-night': 'RAIN',
      ' thunderstorm-day ': 'SLEET',
      ' thunderstorm-night ': 'SLEET',
      ' snow-day': 'SNOW',
      ' snow-night ': 'SNOW',
      ' mist-day  ': 'WIND',
      ' mist-night  ': 'WIND',
    };
  return (
    <ReactAnimatedWeather
      icon={iconMapping[props.code]}
      color='#005792'
      size={props.size}
      animate={true}
    />
  );
}
