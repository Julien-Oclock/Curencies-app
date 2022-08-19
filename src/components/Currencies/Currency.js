// == Import npm
import React from 'react';
import { PropTypes } from 'prop-types';
// == Import


import './styles.scss';

// == Composant
const Currency = ({ name, rate, setCurrency }) => (
  <li onClick={() =>{setCurrency(name, rate)}} className='currencies__item'>{name}</li>
);

Currency.propTypes = {
  name: PropTypes.string.isRequired,
  setCurrency: PropTypes.func,
}

Currency.defaultProps = {
  setCurrency: () => { }, // fonction qui ne fait rien par default afin de garder le bon type pour setCurrency. Si on ne met pas de fonction.
}

// == Export
export default Currency;
