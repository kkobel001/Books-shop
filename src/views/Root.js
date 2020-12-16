import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Shop from './Shop';
import Contact from './Contact';
import Gallery from './Gallery';
import Card from '../components/molecules/Card';

// import { routes } from '../routes';

const Root = () => (
  <>
    <Router>
      <Card />
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
