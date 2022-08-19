// == Import npm
import React,  {Component} from 'react';

// == import component
import Amount from '../Amount';
import Currencies from '../Currencies';
import Header from '../Header';
import Toggler from '../Toggler';

// == Import style
import './styles.css';

// == Import data
import data from 'src/data/currencies'


// == Composant
class Converter extends Component {

  constructor(props){
    super(props); // on appellera le constructeur de la classe parente
    this.state = {
      open : false,
      currencies : data,
      baseAmount : 1,
      currentCurrency : {
        currency : 'USD',
        rate : 1.09
      },
      search : ''
      
    }; // on initialise le state qui représente l'état du composant. c'est un objet et il doit être imutable.
  }

 setCurrency = (name, rate) => {
    console.log({name, rate});
    this.setState(this.state.currentCurrency = {currency : name, rate : rate});
  }

  handleToggle = () => {
    this.setState({
      open : !this.state.open
    });
  }

  handleChange = (e) => {
    this.setState({
      search : e.target.value
    });
  }

  getFilteredCurrencies = () => {

    const { currencies, search } = this.state;

    if(search.trim() === ''){
      return currencies;
    }

    return currencies.filter((
      currency => 
        currency.name.toLowerCase().trim().includes(search.toLowerCase().trim())
    ))
  }

  render(){
    // ici 'open' n'est pas une réference, à this.state.open mais à la valeur de this.state.open. C'est une copie de la valeur de this.state.open
    const { open, baseAmount, currentCurrency, search } = this.state; 
    return (
      <div className="converter">
        <Header baseAmount={ baseAmount } />
        <Toggler isOpen={ open } onClick={ this.handleToggle } />
        { open && 
          <Currencies 
            search = { search }
            setCurrency= { this.setCurrency } 
            currencies= { this.getFilteredCurrencies() }
             onSearch = { this.handleChange }
          />
        }
        <Amount currency= { currentCurrency.currency } value={ (currentCurrency.rate * baseAmount).toFixed(2) }/>
      </div>
    );
  }
}



// == Export
export default Converter;
