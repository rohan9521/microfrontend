import { useEffect, useRef } from "react";
import { mount } from "marketing/MarkeingIndex";
import React from "react";
import { useHistory } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/ContextProvider";

const MarketngApp = () => {
  const ref = useRef(null);
  const history = useHistory();
  const {isAuthenticated, setIsAuthenticated} = useContext(AuthContext);
  console.log("Marketing Authenticated:", isAuthenticated);
  useEffect(() => {
    const { onParentNavigation } = mount(ref.current, {
      initialPath: history.location.pathname,
      onNavigation: ({ pathname: nextPathName }) => {
        if (history.location.pathname !== nextPathName) {
          history.push(nextPathName);
        }
      },
      isAuthenticated: isAuthenticated
    });
    history.listen(onParentNavigation);
  }, [isAuthenticated]);
  return <div ref={ref}></div>;
};

export default MarketngApp;
