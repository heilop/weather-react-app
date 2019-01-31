import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import { Grid, Col, Row } from 'react-flexbox-grid';
import LocationList from './components/LocationList';
import ForecastExtended from './components/ForecastExtended';
import './App.css';

const cities = [
  'Bogota, col',
  'Chachapoyas, pe',
  'Lima, pe',
  'Ciudad de México, mx',
];

class App extends Component {
  constructor() {
    super();
    this.state = { 
      city: null
    };
  }
  handleSelectionLocation = city => {
    this.setState( { city });
    console.log(`handleSelectionLocation => ${city}`);
  }
  render() {
    const { city } = this.state;
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
            <Paper elevation={4}>
              <div className='details'>
                {
                  city &&
                  <ForecastExtended city={ city }></ForecastExtended>
                }
                
              </div>
            </Paper>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default App;
