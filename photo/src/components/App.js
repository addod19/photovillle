import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Feature from './Feature';
import Contact from './Contact';
import About from './About'
import Home from './Home'

import './app.css';

const App = () => {
  return(
    <nav className="nav">
     <Router>
        <ul className="nav-links">
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
          <Route path='/'>
            <Home />
          </Route>
        </Switch>
      </Router>
    </nav>
  );
}

export default App;