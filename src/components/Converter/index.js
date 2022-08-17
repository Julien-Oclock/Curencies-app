// == Import npm
import React from 'react';

// == import component
import Amount from '../Amount';
import Currencies from '../Currencies';
import Header from '../Header';

// == Import style
import './styles.css';

// == Import data
import data from 'src/data/currencies'



// == Composant
const Converter = () => (
  <div className="converter">
    <Header />
    <Currencies currencies={data} />
    <Amount currency={"United State Dollar"} value={1.09} />
  </div>
);

// == Export
export default Converter;
