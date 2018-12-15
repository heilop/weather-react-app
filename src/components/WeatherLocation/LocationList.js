import React from 'react';
import WeatherLocation from './../WeatherLocation';

const LocationList = () => (
  <div>
    <WeatherLocation city='Bogota, co'></WeatherLocation>
    <WeatherLocation city='Lima, pe'></WeatherLocation>
    <WeatherLocation city='Mexico, mx'></WeatherLocation>
  </div>
)

export default LocationList;