import { useEffect, useRef } from "react";
import { mount } from "dashboard/DashboardIndex";
import React from "react";
import { AuthContext } from "../context/ContextProvider";
import { useContext } from "react";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";
const DashBoardApp = () => {
  const ref = useRef(null);
  useEffect(() => {
     mount(ref.current)
  }, []);
  return  <div ref={ref}></div>;
};

export default DashBoardApp;
