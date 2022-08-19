// == Import npm
import React from 'react';
import { PropTypes } from 'prop-types';

// == Import


import './styles.scss';
import Currency from './Currency';

// == Composant
const Currencies = ({ currencies, setCurrency }) => {

  return (
    <div className="currencies">
      <h2 className='currencies__title'>Currencies</h2>
      <ul className='currencies__list'>
        {currencies.map((currency) => (
          <Currency
            key={currency.name}
            name={currency.name}
            rate={currency.rate}
            setCurrency={setCurrency}
             />
        ))}
      </ul>
    </div>
  )
};


Currencies.propTypes = {
  currencies: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      rate: PropTypes.number.isRequired,
    })
  ).isRequired,
  setCurrency: PropTypes.func.isRequired,
}

Currencies.defaultProps = {
  setCurrency: () => { }, // fonction qui ne fait rien par default afin de garder le bon type pour setCurrency. Si on ne met pas de fonction.
}

// == Export
export default Currencies;
