import React, { Component } from 'react';
import Location from './Location';
import convert from 'convert-units';
import WeatherData from './WeatherData';
import './styles.css';
import {
  SUN,
  WINDY,
} from './../../constants/weathers';

const location = 'Lima, pe';
const api_key = '2f06324e6cdc0972675772513dfaab1a';
const url_base_weather = 'http://api.openweathermap.org/data/2.5/weather';
const api_wether = `${url_base_weather}?q=${location}&APPID=${api_key}`;

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

  getTemp = temp_kelvin => {
    return Number(convert(temp_kelvin).from('K').to('C').toFixed(2));
  }

  getWeatherState =  weather_data => {
    return SUN;
  }

  getData = weather_data => {
    const {humidity, temp} = weather_data.main;
    const {speed} = weather_data.wind;
    const weatherState = this.getWeatherState(weather_data);
    const temperature = this.getTemp(temp);
    const data = {
      humidity,
      temperature,
      weatherState,
      wind: `${speed} m/s`,
    }

    return data;
  }

  handleUpdateClick = () => {
    fetch(api_wether).then(resolve => {
      return resolve.json();
    }).then(data => {
      const newWeather = this.getData(data);

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
