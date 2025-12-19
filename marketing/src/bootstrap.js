import React from "react";
import ReactDOM from "react-dom";
import Album from "./components/Landing";
import App from "./App";
import { createMemoryHistory, createBrowserHistory } from "history";
const mount = (element, { onNavigation, browserHistory, initialPath, isAuthenticated }) => {
  const history =
    browserHistory || createMemoryHistory({ initialEntries: [initialPath] });
  if (onNavigation) {
    history.listen(onNavigation);
  }

  ReactDOM.render(<App history={history} isAuthenticated={isAuthenticated} />, element);

  const onParentNavigation = ({ pathname: nextPathName }) => {
    if (history.location.pathname !== nextPathName) {
      history.push(nextPathName);
    }
  };
  return { onParentNavigation };
};

if (process.env.NODE_ENV === "development") {
  const devRoot = document.querySelector("#marketing-root");
  if (devRoot) {
    mount(devRoot, { browserHistory: createBrowserHistory() });
  }
}

export { mount };
