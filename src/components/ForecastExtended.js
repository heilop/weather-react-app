import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ForecastItem from './ForecastItem';
import transformForecast from './../services/transformForecast';
import './styles.css';

/*
const days = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday'
]

const data = {
  temperature: 10,
  humidity: 10,
  weatherState: 'normal',
  wind: 'normal',
};
*/
const api_key = '2f06324e6cdc0972675772513dfaab1a';
const url = 'http://api.openweathermap.org/data/2.5/forecast';

class ForecastExtended extends Component {
  constructor() {
    super();
    this.state = { forecastData: null }
  }

  componentDidMount() {
    // Fetch or axios.
    this.updateCity(this.props.city);
  }

  // Check next properties.
  componentWillReceiveProps(nextProps) {
    if (nextProps.city !== this.props.city) {
      this.setState({ forecastData: null });
      this.updateCity(nextProps.city);
    }
  }
  
  updateCity = city => {
    const url_forecast = `${url}?q=${this.props.city}&appid=${api_key}`;

    fetch(url_forecast).then(
      data => (data.json())
    ).then(
      weather_data => {
        console.log(weather_data);
        const forecastData = transformForecast(weather_data);
        console.log(forecastData);
        this.setState({ forecastData });
      }
    )
  }

  renderForecastItemDays(forecastData) {
    // return "Render Items";
    return forecastData.map( 
      forecast => (
        <ForecastItem 
          key = {`${forecast.weekDay}${forecast.hour}`}
          weekDay={ forecast.weekDay } 
          hour={ forecast.hour }
          data={ forecast.data }>
        </ForecastItem>
      )
    );
  }

  renderProgress() {
    return 'Loading Extended Forecast!'
  }

  render() {
    const { city } = this.props;
    const { forecastData } = this.state;
    return(
      <div>
        <h2 className='forecast-title'>Forecast Extended for {city}</h2>
        { 
          forecastData ?
            this.renderForecastItemDays(forecastData) :
            this.renderProgress()   
        }
      </div>
    );
  }
}

ForecastExtended.proptypes = {
  city: PropTypes.string.isRequired,
}

export default ForecastExtended;