import React from 'react';
import Location from './Location';
import WeatherData from './WeatherData';
import './styles.css';
import {
  SUN,
} from './../../constants/weathers';

const data = {
  temperature: 5,
  weatherState: SUN,
  humidity: 10,
  wind: '10 m/s',
};

const WeatherLocation = () => (
  <div className = 'weatherLocationWrapper'>
    <Location city={'Lima'}></Location>
    <WeatherData data={data}></WeatherData>
  </div>

);

export default WeatherLocation;
