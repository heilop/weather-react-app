import React from 'react';
import PropTypes from 'prop-types';
import WeatherLocation from './../WeatherLocation';


// Transform string to Component.
const LocationList = ({ cities, onSelectedLocation }) => {
  const handleWeatherLocationClick = city => {
    console.log('handleWeatherLocationClick');
    onSelectedLocation(city);
  }
  const strToComponents = cities => (
    cities.map(
      city => 
        <WeatherLocation 
          key={city}
          city={city}
          onWeatherLocationClick = { () => handleWeatherLocationClick(city) }
        />));
  return (<div>
    { strToComponents(cities) }
  </div>);
};

LocationList.propTypes = {
  cities: PropTypes.array.isRequired,
}
export default LocationList;