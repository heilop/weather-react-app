import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { getForecastDataFromCities } from './../reducers';
import ForecatsExtended from './../components/ForecastExtended';

class ForecatsExtendedContainer extends Component {
  render() {
    const { city, forecastData } = this.props;
    return (
      city &&
      <ForecatsExtended city = { city } forecastData = { forecastData } />
    );
  }
}

ForecatsExtendedContainer.propTypes = {
  city: PropTypes.string.isRequired,
  forecastData: PropTypes.array,
};

const mapStateToProps = state => ({
  city: state.city,
  forecastData: getForecastDataFromCities(state)
});

export default connect(mapStateToProps, null)(ForecatsExtendedContainer);
