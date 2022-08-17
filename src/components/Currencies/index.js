// == Import npm
import React from 'react';
import { PropTypes } from 'prop-types';

// == Import


import './styles.scss';
import Currency from './Currency';

// == Composant
const Currencies = ({ currencies }) => {
  console.log(currencies)

  return (
    <div className="currencies">
      <h2 className='currencies__title'>Currencies</h2>
      <ul className='currencies__list'>
        {currencies.map((currency) => (
          <Currency
            key={currency.name}
            name={currency.name} />
        ))}
      </ul>
    </div>
  )
};


Currencies.propTypes = {
  currencies: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired
    })
  ).isRequired,
}

// == Export
export default Currencies;
