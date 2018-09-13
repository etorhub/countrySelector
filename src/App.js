import React from "react";

import { CountryProvider, CountryConsumer } from './CountryContext'
import Main from './components/Main'

class App extends React.Component {
  state = {  }
  render() {
    return (
      <CountryProvider>
        <CountryConsumer>
        {( { ...props } ) => (
          <Main {...props} />
        )}
        </CountryConsumer>
      </CountryProvider>
    )
  }
}
 
export default App;