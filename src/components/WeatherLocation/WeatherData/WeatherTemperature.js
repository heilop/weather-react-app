import React from 'react';
import WeatherIcons from 'react-weathericons';
import PropTypes from 'prop-types';
import {
  CLOUD,
  SUN,
  RAIN,
  SNOW,
  THUNDER,
  DRIZZLE,
} from './../../../constants/weathers';

const icons = {
  [CLOUD]: 'cloud',
  [DRIZZLE]: 'day-showers',
  [SUN]: 'day-sunny',
  [RAIN]: 'rain',
  [SNOW]: 'snow',
  [THUNDER]: 'day-thunderstore',
}
const getWeatherIcon = weatherState => {
  let icon = icons[weatherState];
  const sizeIcon = '2x';
  if (!icon) {
    icon = 'day-sunny';
  }
  return <WeatherIcons className = 'wicon' name = {icon} size = { sizeIcon } />;
}

const WeatherTemperature = ({temperature, weatherState}) => (
  <div className = 'weatherTemperatureWrapper'>
    { getWeatherIcon(weatherState) }
    <span className = 'temperature'>{ ` ${temperature} `}</span>
    <span className = 'temperatureType'>{ `°C` }</span>
  </div>
);

WeatherTemperature.propTypes = {
  temperature: PropTypes.number.isRequired,
  weatherState: PropTypes.string.isRequired,
};

export default WeatherTemperature;
