import React from 'react'
import { CountryConsumer } from './CountryContext'
import ReactCountryFlag from 'react-country-flag';

const countryButtonStyle = { 
    padding: 5,
    fontSize: '1.5em',
    borderRadius: 40,
    margin: 10,
}

const CountrySelector = () => (
    <CountryConsumer>
    {({ countries, country, updateCountry }) => (
        <sidebar>
        <p>Choose Country</p> 
        { countries.map( c =>
        <button
            style={countryButtonStyle}
            onClick={() => updateCountry(c.id)}
        >
            <ReactCountryFlag
                styleProps={countryButtonStyle}
                code={c.id}
            />
        </button>
        ) }
        </sidebar>
    )}
    </CountryConsumer>
);

export default CountrySelector;