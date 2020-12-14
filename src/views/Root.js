import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Card from '../components/molecules/Card';
import { routes } from '../routes';

const Root = () => (
  <>
    <Router>
      <Card />
      <Switch>
        <Route exact path={routes.home} render={() => <Redirect to="/" />} />
        <Route exact path={routes.aboutus} />
        {/* <Route
            path={routes.note}
            component={DetailsPage}
          /> */}
        <Route
          exact
          path={routes.shop}
          // component={Articales}
        />
        {/* <Route
            path={routes.article}
            component={DetailsPage}
          /> */}
        <Route exact path={routes.gallery} />
        <Route
          path={routes.contactus}
          // component={DetailsPage}
        />
      </Switch>
    </Router>
  </>
);

export default Root;
