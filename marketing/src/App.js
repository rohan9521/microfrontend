import { StylesProvider } from "@material-ui/core";
import { Switch } from "react-router-dom/cjs/react-router-dom";
import {
  BrowserRouter,
  Route,
} from "react-router-dom/cjs/react-router-dom.min";
import Pricing from "./components/Pricing";
import Landing from "./components/Landing";
import React from "react";
import { StylesProvider,createGenerateClassName } from "@material-ui/styles";

  
export default () => {
  const generateClassName = createGenerateClassName({ productionPrefix: 'mktapp' });

  return (
    <StylesProvider generateClassName={generateClassName} >
      <BrowserRouter>
        <Switch>
          <Route path="/pricing" exact component={Pricing} />
          <Route path="/" exact component={Landing} />
        </Switch>
      </BrowserRouter>
    </StylesProvider>
  );
};
