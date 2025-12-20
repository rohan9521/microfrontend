
import React, { useContext } from "react";
import { AuthContext } from "../context/ContextProvider";
import { Redirect } from "react-router-dom";
export const ProtectedRoute = ({ Children }) => {
  const { isAuthenticated } = useContext(AuthContext);
  if (!isAuthenticated) {
   return  <Redirect to="/auth/signin" />;
  }
  return <Children/>;
};
