import { StylesProvider ,createGenerateClassName} from "@material-ui/core";
import { Switch } from "react-router-dom/cjs/react-router-dom";
import {
  Router,
  Route,
} from "react-router-dom/cjs/react-router-dom.min";
import React from "react";

  
export default ({ history, isAuthenticated }) => {
  const generateClassName = createGenerateClassName({ productionPrefix: 'dshApp' });
  return (
    <StylesProvider generateClassName={generateClassName} >
      <Router history={history}>
        <Switch>
          <Route path="/" exact  >
           <div>Dashboard</div>
          </Route>
        </Switch>
      </Router>
    </StylesProvider>
  );
};
