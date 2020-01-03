import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getWeatherCities, getCity } from './../reducers';
import { setSelectedCity, setWeather } from './../actions';
import LocationList from './../components/LocationList';

class LocationListContainer extends Component {
  componentDidMount() {
    this.props.setWeather(this.props.cities);
  }


  handleSelectionLocation = city => {
    this.props.setCity(city);
  }

  render() {
    return (
      <LocationList
        cities = { this.props.citiesWeather }
        onSelectedLocation = {this.handleSelectionLocation}
      >
      </LocationList>
    );
  }
}

LocationListContainer.propTypes = {
  setCity: PropTypes.func.isRequired,
  cities: PropTypes.array.isRequired,
  citiesWeather: PropTypes.array,
};

const mapDispatchToPropsActions = dispatch => ({
  setCity: value => dispatch(setSelectedCity(value)),
  setWeather: cities => dispatch(setWeather(cities))
});

const mapStateToProps = state => ({
  citiesWeather: getWeatherCities(state),
  city: getCity(state)
})

export default connect(mapStateToProps, mapDispatchToPropsActions)(LocationListContainer);
