import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from '../components/molecules/Navbar';
import Home from './Home';
import About from './About';
import Shop from './Shop';
import Contact from './Contact';
import Gallery from './Gallery';

import GlobalStyle from '../theme/GlobalStyle';

// import { routes } from '../routes';

const Root = () => (
  <>
    <Router>
      <GlobalStyle />
      <Navbar />
      <Switch>
        <Route exact path="/home" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/shop" component={Shop} />
        <Route exact path="/gallery" component={Gallery} />
        <Route path="/contact" component={Contact} />
      </Switch>
    </Router>
  </>
);

export default Root;
