import React from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const PrivateRoute = ({ element: Component, ...rest }) => {
  const isAuthenticated = useSelector((state) => state.auth.is_login);
  return isAuthenticated ? <Component {...rest} /> : <Navigate to="/home" />;
};

export default PrivateRoute;
