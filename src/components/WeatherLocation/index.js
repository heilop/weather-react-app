import React, { Component } from 'react';
import transformWeather from './../../services/transformWeather';
import Location from './Location';
import { api_weather } from './../../constants/api_url';
import WeatherData from './WeatherData';
import './styles.css';

class WeatherLocation extends React.Component {
  constructor() {
    super();
    // Set state from constructor use "this.state".
    this.state = {
      city: 'Lima',
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
          data ? <WeatherData data={data}></WeatherData> : 'Loading...'
        }
      </div>
    );
  }
}

export default WeatherLocation;
