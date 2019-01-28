import React from 'react';
import PropTypes from 'prop-types';

const WeatherExtraInfo = ({ humidity, wind }) => (
  <div className = 'weatherExtraInfoWrapper'>
    <span className = 'extraInfoText'>{`Humidity: ${humidity} %`}</span>
    <span className = 'extraInfoText'>{`Winds: ${wind}`}</span>
  </div>
);

WeatherExtraInfo.propTypes = {
  humidity : PropTypes.number.isRequired,
  wind: PropTypes.string.isRequired,
};
export default WeatherExtraInfo;
