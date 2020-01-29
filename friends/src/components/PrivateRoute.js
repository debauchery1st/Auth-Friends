import React from "react";
import { Route, Redirect } from "react-router";

const PrivateRoute = ({ component: Component, ...maybeSomePropsToo }) => {
  const token = localStorage.getItem("token");
  const ProtectedComponent = () => {
    return token ? (
      <Component {...maybeSomePropsToo} />
    ) : (
      <Redirect to="/login" />
    );
  };
  return <Route render={ProtectedComponent} />;
};

export default PrivateRoute;
