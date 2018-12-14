import React, { Component } from 'react';
import transformWeather from './../../services/transformWeather';
import Location from './Location';
import { api_weather } from './../../constants/api_url';
import WeatherData from './WeatherData';
import './styles.css';

import {
  SUN,
  WINDY,
} from './../../constants/weathers';

const data = {
  temperature: 5,
  weatherState: SUN,
  humidity: 25,
  wind: '20 m/s',
};

class WeatherLocation extends React.Component {
  constructor() {
    super();
    // Set state from constructor use "this.state".
    this.state = {
      city: 'Lima',
      data: data,
    };
  }

  handleUpdateClick = () => {
    fetch(api_weather).then(resolve => {
      return resolve.json();
    }).then(data => {
      const newWeather = transformWeather(data);

      console.log(newWeather);
      debugger;
      // Set state anywhere (out constructor) use "this.setState".
      this.setState({
          data: newWeather,
      });
    });
  }
  render () {
    // Destruting data from this.state.
    const {city, data} = this.state;
    return (
      <div className = 'weatherLocationWrapper'>
        <Location city={city}></Location>
        <WeatherData data={data}></WeatherData>
        <button onClick={this.handleUpdateClick}>Update</button>
      </div>
    );
  }
}

export default WeatherLocation;
