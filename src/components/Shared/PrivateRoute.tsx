import * as React from "react";
import { Navigate, Outlet } from "react-router-dom";

export interface IPrivateRouteProps {}

export function PrivateRoute() {
  const isLoggedIn = Boolean(localStorage.getItem("access_token"));
  if (!isLoggedIn) return <Navigate to="/login" />;

  return <Outlet />;
}
