import React from 'react';
import { CountryProvider } from '../CountryContext'
import CountrySelector from './CountrySelector'

class Page1 extends React.Component {
    state = {  }
    render() { 
      return (
        <CountryProvider>
            <CountrySelector />
            <h1>
             this is some shit
            </h1>
        </CountryProvider>
      );
    }
}
 
export default Page1;
  