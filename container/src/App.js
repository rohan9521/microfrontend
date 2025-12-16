import React from "react";
import MarketngApp from "./components/MarketingApp";
import Header from "./components/Header";
import { BrowserRouter } from "react-router-dom";
import { StylesProvider,createGenerateClassName } from "@material-ui/styles";


export const App = () => {
  const generateClassName = createGenerateClassName({ productionPrefix: 'ma' });
  return (
    <StylesProvider generateClassName={generateClassName}>
      <BrowserRouter>
        <>
          <Header />
          <MarketngApp />
        </>
      </BrowserRouter>
    </StylesProvider>
  );
};
