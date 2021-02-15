import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Feature from '../Feature/index';
import Contact from '../Contact/index';
import About from '../About/index'

const Home = () => {
  return(
    <>
      <Router>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/about'>About</Link>
          </li>
          <li>
            <Link to='/feature'>Features</Link>
          </li>
          <li>
            <Link to='/contact'>Contact</Link>
          </li>
        </ul>
        <Switch>
          <Route path='/about'>
            <About />
          </Route>
          <Route path='/feature'>
            <Feature />
          </Route>
          <Route path='/contact'>
            <Contact />
          </Route>
        </Switch>
      </Router>
    </>
  )
}
export default Home;