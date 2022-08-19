// == Import npm
import React from 'react';
import { PropTypes } from 'prop-types';

// == Import


import './styles.scss';
import Currency from './Currency';

// == Composant
const Currencies = ({ currencies, setCurrency, search, onSearch }) => {

  return (
    <div className="currencies">
      <h2 className='currencies__title'>Currencies</h2>
      <input
        className='currencies__search'
        type='text'
        placeholder='Search'
        value={ search }
        onChange= {onSearch}
      ></input>
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
  search : PropTypes.string,
  setCurrency: PropTypes.func.isRequired,
  onSearch: PropTypes.func
}

Currencies.defaultProps = {
  setCurrency: () => { }, // fonction qui ne fait rien par default afin de garder le bon type pour setCurrency. Si on ne met pas de fonction.
  onChange: () => { }, // fonction qui ne fait rien par default afin de garder le bon type pour setCurrency. Si on ne met pas de fonction.
  search  : ''
}

// == Export
export default Currencies;
