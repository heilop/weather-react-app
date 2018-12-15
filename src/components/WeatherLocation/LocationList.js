import React from 'react';
import PropTypes from 'prop-types';
import WeatherLocation from './../WeatherLocation';

const LocationList = ( { cities } ) => (
  <div>
    <WeatherLocation city='Bogota, co'></WeatherLocation>
    <WeatherLocation city='Lima, pe'></WeatherLocation>
    <WeatherLocation city='Mexico, mx'></WeatherLocation>
    <WeatherLocation city='Piura, pe'></WeatherLocation>
  </div>
)

LocationList.propTypes = {
  cities: PropTypes.array.isRequired,
}
export default LocationList;