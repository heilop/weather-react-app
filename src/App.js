import React, { Component } from 'react';
import WeatherLocation from './components/WeatherLocation';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <WeatherLocation city="Lima, pe"></WeatherLocation>
        </header>
      </div>
    );
  }
}

export default App;
