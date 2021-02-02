import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import Navbar from '../components/molecules/Navbar';
import Home from './Home';
import About from './About';
import Shop from './Shop';
import Contact from './Contact';
import Gallery from './Gallery';
import GlobalStyle from '../theme/GlobalStyle';
import { theme } from '../theme/mainTheme';

// import { routes } from '../routes';s

const Root = () => (
  <>
    <Router>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Navbar />
        <Switch>
          <Route exact path="/" render={() => <Redirect to="/home" />} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/shop" component={Shop} />
          <Route exact path="/gallery" component={Gallery} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </ThemeProvider>
    </Router>
  </>
);

export default Root;
