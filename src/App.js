import React from "react";
import { render } from "react-dom";
import "./App.css";
import { CountryConsumer, CountryProvider } from './CountryContext'
import RouterComponent from './router'

const MyBody = ({ language }) => (
  <CountryConsumer>
    {({ countries, country }) => <p>This is the version for { countries.find( c => c.id === country ).label}</p> }
  </CountryConsumer>
);

const App = () => (
  <CountryProvider>
    <RouterComponent />
  </CountryProvider>
);

export default App