import { StylesProvider ,createGenerateClassName} from "@material-ui/core";
import { Switch } from "react-router-dom/cjs/react-router-dom";
import {
  Router,
  Route,
} from "react-router-dom/cjs/react-router-dom.min";
import Pricing from "./components/Pricing";
import Landing from "./components/Landing";
import React from "react";

  
export default ({ history, isAuthenticated }) => {
  const generateClassName = createGenerateClassName({ productionPrefix: 'mktapp' });

  return (
    <StylesProvider generateClassName={generateClassName} >
      <Router history={history}>
        <Switch>
          <Route path="/pricing" exact >
            <Pricing isAuthenticated={isAuthenticated} />
          </Route>
          <Route path="/" exact  >
            <Landing isAuthenticated={isAuthenticated} />
          </Route>
        </Switch>
      </Router>
    </StylesProvider>
  );
};
