import { useEffect, useRef } from "react";
import { mount } from "marketing/MarkeingIndex";
import React from 'react';

const MarketngApp = () => {
  const ref = useRef(null);
  useEffect(() => {
    mount(ref.current);
  }, []);
  return <div ref={ref}></div>;
};

export default MarketngApp;
