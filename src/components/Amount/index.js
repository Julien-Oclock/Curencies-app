// == Import npm
import React from 'react';
import { PropTypes } from 'prop-types';


// == Import


import './styles.scss';

// == Composant
const Amount = ({ currency, value }) => (
  <div className='amount'>
    <p className='amount__value'>{value}</p>
    <p className='amount__currency'>{currency}</p>
  </div>

);

Amount.propTypes = {
  currency: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
}

Amount.defaultProps = {
  currency: 'euro',
  value: 1
}
// == Export
export default Amount;
