import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

const Location = (props) => {
  // Destructuring props.
  const { city } = props;
  return (
    <div className = 'locationWrapper'>
      <h1>
        {city}
      </h1>
    </div>
  );
};

Location.propTypes = {
  city:PropTypes.string.isRequired,
}

export default Location;
