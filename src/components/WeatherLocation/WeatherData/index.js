import React from 'react';
import WeatherExtraInfo from './WeatherExtraInfo';
import WeatherTemperature from './WeatherTemperature';
import PropTypes from 'prop-types';

import './styles.css';

const WeatherData = ({ data }) => {
    const { temperature, weatherState, humidity, wind } = data;
    return (
      // Using destruting with constants.
      // const {temperature, weatherState, humidity, wind} = data;
      <div className = 'weatherDataWrapper'>
        <WeatherTemperature
          temperature={temperature}
          weatherState={weatherState}
        />
        <WeatherExtraInfo
          humidity = {humidity}
          wind = {wind}
        />
      </div>
    );
};

// export default ;
//
// const WeatherData = () => (
//   // Using destruting with constants.
//   // const {temperature, weatherState, humidity, wind} = data;
//     <div className = 'weatherDataWrapper'>
//       <WeatherTemperature
//         temperature={temperature}
//         weatherState={weatherState}
//       />
//       <WeatherExtraInfo
//         humidity = {humidity}
//         wind = {wind}
//       />
//     </div>
//   );

WeatherData.propTypes = {
  data : PropTypes.shape({
    temperature : PropTypes.number.isRequired,
    weatherState: PropTypes.string.isRequired,
    humidity: PropTypes.number.isRequired,
    wind: PropTypes.string.isRequired,
  }),
};

export default WeatherData;
