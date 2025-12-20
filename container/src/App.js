import React, { lazy, Suspense } from "react";
import Header from "./components/Header";
import { Router, Switch, Route } from "react-router-dom";
import { StylesProvider, createGenerateClassName } from "@material-ui/styles";
import Progress from "./components/Progress";
import { ContextProvider } from "./context/ContextProvider";
import {createBrowserHistory} from 'history';
import { ProtectedRoute } from "./components/ProtectedRoute";

export const App = () => {
  const generateClassName = createGenerateClassName({ productionPrefix: "ma" });
  const LazyAuthApp = lazy(() => import("./components/Auth"));
  const LazyMarketingApp = lazy(() => import("./components/MarketingApp"));
  const LazyDashBoardApp = lazy(() => import("./components/DashBoard"));
  const history = createBrowserHistory();
  return (
    <ContextProvider>
      <StylesProvider generateClassName={generateClassName}>
        <Router history={history}>
          <Header history={history} />
          <Suspense fallback={<Progress />}>
            <Switch>
              <Route path="/auth" component={LazyAuthApp} />
              <Route path="/dashboard" >
              <ProtectedRoute Children={  LazyDashBoardApp}/>

              </Route>
              <Route path="/" component={LazyMarketingApp} />
            </Switch>
          </Suspense>
        </Router>
      </StylesProvider>
    </ContextProvider>
  );
};
