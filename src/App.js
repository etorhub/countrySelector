import React from "react";
import { render } from "react-dom";
import "./App.css";
import { CountryConsumer, CountryProvider } from './CountryContext'
import CountrySelector from './CountrySelector'

const MyBody = ({ language }) => (
  <CountryConsumer>
    {({ countries, country }) => <p>This is the version for { countries.find( c => c.id === country ).label}</p> }
  </CountryConsumer>
);

const App = () => (
  <CountryProvider>
      <CountrySelector />
      <h1>
        <MyBody
          dictionary={{
            french: "Bonjour, Michel!",
            english: "Hello, Michael!",
            italian: "Ciao, Michele!"
          }}
        />
      </h1>
  </CountryProvider>
);

export default App