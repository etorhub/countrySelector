import React from 'react';
import { CountryConsumer } from '../CountryContext'

const Splash = () => <h1>this is the main page</h1>

const Page1 = () => (
  <CountryConsumer>
    {({ country }) => <p>This is the page  for {country}</p> }
  </CountryConsumer>
)

const Page2 = () => (
  <CountryConsumer>
    {({ countries, country, resetCountry }) => (
      <React.Fragment>
        <p>This is the page 2 for { countries.find( c => c.id === country ).label}</p>
        <button onClick={() => resetCountry()}>Reset country</button>
      </React.Fragment>
    ) }
  </CountryConsumer>
)

export { Page1, Page2, Splash }