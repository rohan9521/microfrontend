import React from "react";
import { BrowserRouter,Switch ,Route} from "react-router-dom";
import { StylesProvider, createGenerateClassName } from "@material-ui/styles";
import SignIn from "./components/Signin";
import SignUp from "./components/Signup";

export const App = () => {
  const generateClassName = createGenerateClassName({ productionPrefix: "au" });
  return (
    <StylesProvider generateClassName={generateClassName}>
      <BrowserRouter>
        <Switch >
          <Route path="/auth/signin" exact component={SignIn} />
          <Route path="/auth/signup" exact component={SignUp} />
        </Switch>
      </BrowserRouter>
    </StylesProvider>
  );
};
