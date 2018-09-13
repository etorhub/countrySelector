import React from 'react';
import { CountryConsumer } from '../CountryContext'

const Splash = () => <h1>this is the main page</h1>

const Page1 = () => (
  <CountryConsumer>
    {({ countries, country }) => <p>This is the page  for { countries.find( c => c.id === country ).label}</p> }
  </CountryConsumer>
)

const Page2 = () => (
  <CountryConsumer>
    {({ countries, country }) => <p>This is the page 2 for { countries.find( c => c.id === country ).label}</p> }
  </CountryConsumer>
)

export { Page1, Page2, Splash }