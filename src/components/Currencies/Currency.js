// == Import npm
import React from 'react';
import { PropTypes } from 'prop-types';
// == Import


import './styles.scss';

// == Composant
const Currency = ({ name }) => (
  <li className='currencies__item'>{name}</li>
);

Currency.propTypes = {
  name: PropTypes.string.isRequired
}


// == Export
export default Currency;
