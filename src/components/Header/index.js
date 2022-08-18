// == Import npm
import React from 'react';
import { PropTypes } from 'prop-types';
// == Import


import './styles.scss';

// == Composant
const Header = (props) => (
  <div className="header">
    <h1 className='header__title'>Converter</h1>
    <p className='header__content'>{props.baseAmount} euro</p>
  </div>
);

Header.propTypes = {
  baseAmount: PropTypes.number
}

Header.defaultProps = {
  base: 1
}

// == Export
export default Header;
