import React, { Component } from 'react';
import Location from './Location';
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

const data2 = {
  temperature: 15,
  weatherState: WINDY,
  humidity: 10,
  wind: '10 m/s',
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
    // Set state anywhere (out constructor) use "this.setState".
    this.setState({
        city: 'Amazonas',
        data: data2,
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
