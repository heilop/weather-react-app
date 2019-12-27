import React from 'react';
import PropTypes from 'prop-types';
import ForecastItem from './ForecastItem';
import './styles.css';

  const renderForecastItemDays = (forecastData) => {
    // return "Render Items";
    return forecastData.map(
      forecast => (
        <ForecastItem
          key = { `${forecast.weekDay}${forecast.hour}` }
          weekDay = { forecast.weekDay }
          hour = { forecast.hour }
          data = { forecast.data } >
        </ForecastItem>
      )
    );
  }

  const renderProgress = () => {
    return 'Loading Extended Forecast!';
  }

const ForecastExtended = ({ city, forecastData }) => (
  <div>
    <h2 className='forecast-title'>Forecast Extended for {city}</h2>
    {
      forecastData ?
        renderForecastItemDays(forecastData) :
        renderProgress()
    }
  </div>
)

ForecastExtended.propTypes = {
  city: PropTypes.string.isRequired,
  forecastData: PropTypes.array.isRequired
}

export default ForecastExtended;
