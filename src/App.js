import React, { Component } from 'react';
import LocationList from './components/WeatherLocation/LocationList';
import './App.css';

const cities = [
  'Bogota, col',
  'Chachapoyas, pe',
  'Lima, pe',
  'Ciudad de México, mx',
];

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header"> 
          <LocationList cities = { cities } ></LocationList>
        </header>
      </div>
    );
  }
}

export default App;
