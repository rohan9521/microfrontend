import React from "react";
import ReactDOM from "react-dom";
import { createMemoryHistory, createBrowserHistory } from "history";
import { App } from "./App";


const mount = (element, { onNavigation, browserHistory ,initialPath}) => {
  const history = browserHistory || createMemoryHistory({ initialEntries: [initialPath] });
  if (onNavigation) {
    history.listen(onNavigation);
  }

  ReactDOM.render(<App history={history} />, element);

  const onParentNavigation = ({ pathname: nextPathName }) => {
    if (history.location.pathname !== nextPathName) {
      history.push(nextPathName);
    }
  };
  return { onParentNavigation };
};

if (process.env.NODE_ENV === "development") {
  const devRoot = document.querySelector("#auth-root");
  if (devRoot) {
    mount(devRoot, { browserHistory: createBrowserHistory() });
  }
}

export { mount };
