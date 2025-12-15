import React from "react";
import MarketngApp from "./components/MarketingApp";
import Header from "./components/Header";
import { BrowserRouter } from "react-router-dom";
export const App = () => {
  return (
    <BrowserRouter>
    <>
      <Header />
      <MarketngApp />
    </>
    </BrowserRouter>
  );
};
