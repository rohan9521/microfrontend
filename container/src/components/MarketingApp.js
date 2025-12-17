import { useEffect, useRef } from "react";
import { mount } from "marketing/MarkeingIndex";
import React from "react";
import { useHistory } from "react-router-dom";

const MarketngApp = () => {
  const ref = useRef(null);
  const history = useHistory();
  useEffect(() => {
    const { onParentNavigation } = mount(ref.current, {
      onNavigation: ({ pathname: nextPathName }) => {
        if (history.location.pathname !== nextPathName) {
          history.push(nextPathName);
        }
      },
    });
    history.listen(onParentNavigation);
  }, []);
  return <div ref={ref}></div>;
};

export default MarketngApp;
