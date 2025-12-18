import React,{lazy,Suspense} from "react";
import Header from "./components/Header";
import { BrowserRouter ,Switch,Route} from "react-router-dom";
import { StylesProvider,createGenerateClassName } from "@material-ui/styles";
import Progress from "./components/Progress";


export const App = () => {
  const generateClassName = createGenerateClassName({ productionPrefix: 'ma' });
  const LazyAuthApp=lazy(()=>import('./components/Auth'));
  const LazyMarketingApp=lazy(()=>import('./components/MarketingApp')); 
  return (
    <StylesProvider generateClassName={generateClassName}>
      <BrowserRouter>
        <Header />
        <Suspense fallback={<Progress />}>
        <Switch>
          <Route path="/auth" component={LazyAuthApp} />
          <Route path="/" component={LazyMarketingApp} />
        </Switch>
        </Suspense>
      </BrowserRouter>
    </StylesProvider>
  );
};
