// == Import npm
import React from 'react';
import { PropTypes } from 'prop-types';
// == Import


import './styles.scss';

// == Composant
const Toggler = ({isOpen, onClick}) => {

   const togglerClassName = isOpen ? 'toggler toggler--open' : 'toggler'
    
    return (
    <button
        type='button'
        className={togglerClassName}
        onClick= {onClick}
        >=
    </button>
    );
};

Toggler.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    onClick: PropTypes.func.isRequired
}

Toggler.defaultProps = {
    isOpen: false
}

// == Export
export default Toggler;
