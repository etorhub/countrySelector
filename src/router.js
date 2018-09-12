import React from 'react'

import { BrowserRouter, Route, Switch } from 'react-router-dom'


import App from './App'

import CountrySelector from './components/CountrySelector'
import Main from './components/Main'
// import Page1 from './components/Page1'
// import Page2 from './components/Page2'

class RouterComponent extends React.Component {
    onRouteChange() {
        window.scrollTo( 0, 0 )
    }

    requireCountry( nextState, replace ) {
      debugger;
        if ( !this.props.country )
            replace( {
                pathname: '/country',
                state: { nextPathname: nextState.location.pathname }
            } )
    }

    render() {
      return (
        <BrowserRouter>
          <Switch>
            <Route onChange={this.onRouteChange} path="/" component={App} onEnter={this.requireCountry}>
              <Route path="/" name="main" component={Main} />
              {/* <Route path="/page1" name="page1" component={Page1} />
              <Route path="/page2" name="page2" component={Page2} /> */}
            </Route>
            <Route path="/country" component={CountrySelector} />
          </Switch>
        </BrowserRouter>
      )
    }

}

export default RouterComponent
