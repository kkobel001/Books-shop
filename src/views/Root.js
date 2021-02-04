import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import MainTemplate from '../templates/MainTemplate';
import Home from './Home';
import About from './About';
import Shop from './Shop';
import Contact from './Contact';
import Gallery from './Gallery';

// import { routes } from '../routes';s

const Root = () => (
  <Router>
    <MainTemplate>
      <Switch>
        <Route exact path="/" render={() => <Redirect to="/home" />} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/shop" component={Shop} />
        <Route exact path="/gallery" component={Gallery} />
        <Route path="/contact" component={Contact} />
      </Switch>
    </MainTemplate>
  </Router>
);

export default Root;
