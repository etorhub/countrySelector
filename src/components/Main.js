import React from 'react'
import { Route, Switch, BrowserRouter as Router, Link } from 'react-router-dom';
import { Splash, Page1, Page2 } from './components'
import CountrySelector from './CountrySelector'

import "./Main.css";

// const routes = [
//   {
//     path: '/',
//     exact: true,
//     sidebar: () => <div>home!</div>,
//     main: () => <h2>Home</h2>
//   },
//   {
//     path: '/page1',
//     sidebar: () => <div>In page1!</div>,
//     main: () => <h2>Page 1</h2>
//   },
//   {
//     path: '/page2',
//     sidebar: () => <div>in page2</div>,
//     main: () => <h2>Page 2</h2>
//   },

// ]

class Main extends React.Component {
    state = {  }
    render() {
      const { country } = this.props
      if(!country) {
        return <CountrySelector />
      }
      return (
      //   <Router>
      //     <div style={{ display: 'flex' }}>
      //       <div style={{
      //         padding: '10px',
      //         width: '40%',
      //         background: 'lightgrey'
      //       }}>
      //         <ul style={{ listStyleType: 'none', padding: 0 }}>
      //           <li><Link to="/">Home</Link></li>
      //           <li><Link to="/page1">Page1</Link></li>
      //           <li><Link to="/page2">Page2</Link></li>
      //         </ul>
      //         {routes.map(route => (
      //           <Route
      //             key={route.path}
      //             path={route.path}
      //             exact={route.exact}
      //             component={route.sidebar}
      //           />
      //         ))}
      //       </div>
      //     </div>
      //   </Router>
        <Router>
          <div className="primary-layout">
            <aside className="app-aside">
              <CountrySelector />
              <nav>
                <Link to="page1">Page1</Link>
                <Link to="page2">Page2</Link>
              </nav>
            </aside>
            <header className="app-header">
              Our React Router 4 App
            </header>
            <main className="app-body">
              <Route path="/" exact component={Splash} />
              <Route path="/page1" component={Page1} />
              <Route path="/page2" component={Page2} />
            </main>
          </div>
        </Router>
      );
    }
  }
   
  export default Main;