import React, { Component } from 'react';
import LocationList from './components/WeatherLocation/LocationList';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header"> 
          <LocationList city="Lima, pe"></LocationList>
        </header>
      </div>
    );
  }
}

export default App;
