import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import { Grid, Col, Row } from 'react-flexbox-grid';
import LocationList from './components/WeatherLocation/LocationList';
import './App.css';

const cities = [
  'Bogota, col',
  'Chachapoyas, pe',
  'Lima, pe',
  'Ciudad de México, mx',
];

class App extends Component {
  handleSelectionLocation = city => {
    console.log(`handleSelectionLocation => ${city}`);
  }
  render() {
    return (
      <Grid>
        <Row>
          <AppBar position='sticky'>
            <Toolbar>
              <Typography variant='title' color='inherit'>
                Weather App
              </Typography>
            </Toolbar>
          </AppBar>
        </Row>
        <Row>
          <Col xs={12} md={6}>
            <LocationList 
              cities = { cities }
              onSelectedLocation = {this.handleSelectionLocation}
            >
            </LocationList>
          </Col>
          <Col xs={12} md={6}>
            <div className='details'>
            
            </div>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default App;
