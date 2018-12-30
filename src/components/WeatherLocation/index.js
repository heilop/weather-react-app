import React, { Component } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import PropTypes from 'prop-types';
import transformWeather from './../../services/transformWeather';
import getUrlWeatherByCity from './../../services/getUrlWeatherByCity';
import Location from './Location';
import WeatherData from './WeatherData';
import './styles.css';

class WeatherLocation extends Component {
  constructor(props) {
    super(props);
    const { city } = props;
    // Set state from constructor use "this.state".
    this.state = {
      city,
      data: null,
    };
    //console.log('Construct');
  }

  // Get data before render.
  componentDidMount() {
    console.log('componentDidMount');
    this.handleUpdateClick();
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('componentDidUpdate');
  }
  /******* START DOT NOT USE (Only to learn) *****/
  componentWillMount() {
    console.log('componentWillMount');
  }

  componentWillUpdate(nextProps, nextState) {
    console.log('componentWillUpdate');
  }
  /***** END DOT NOT USE *****/
  

  handleUpdateClick = () => {
    const api_weather = getUrlWeatherByCity(this.state.city);
    fetch(api_weather).then(resolve => {
      return resolve.json();
    }).then(data => {
      const newWeather = transformWeather(data);

      // console.log(newWeather);
      // debugger;
      // Set state anywhere (out constructor) use "this.setState".
      this.setState({
          data: newWeather,
      });
    });
  }
  render () {
    // Destruting data from this.state.
    const { city, data } = this.state;
    return (
      <div className = 'weatherLocationWrapper'>
        <Location city={city}></Location>
        {
          data ? 
            <WeatherData data={data}></WeatherData> : 
            <CircularProgress size = { 50 } />
        }
      </div>
    );
  }
}

WeatherLocation.prototypes = {
  city: PropTypes.string.isRequired,
}
export default WeatherLocation;
