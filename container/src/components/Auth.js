import { useEffect, useRef } from "react";
import { mount } from "auth/AuthIndex";
import React from "react";
import { useHistory } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/ContextProvider";

const AuthApp = () => {
  const ref = useRef(null);
  const history = useHistory();
  const {setIsAuthenticated} = useContext(AuthContext);
  useEffect(() => {
    const { onParentNavigation } = mount(ref.current, {
      initialPath: history.location.pathname,
      onNavigation: ({ pathname: nextPathName }) => {
        if (history.location.pathname !== nextPathName) {
          history.push(nextPathName);
        }
      },
      onSignIn: () => { setIsAuthenticated(true); }    
    });
    history.listen(onParentNavigation);
  }, []);
  return <div ref={ref}></div>;
};

export default AuthApp;
