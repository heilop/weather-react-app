import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ForecatsExtended from './../components/ForecastExtended';

class ForecatsExtendedContainer extends Component {
  render() {
    return (
      this.props.city &&
      <ForecatsExtended city = { this.props.city } />
    );
  }
}

ForecatsExtendedContainer.propTypes = {
  city: PropTypes.string.isRequired,
};

const mapStateToProps = ({ city }) => ({ city });

export default connect(mapStateToProps, null)(ForecatsExtendedContainer);