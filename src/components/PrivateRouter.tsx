import React from "react";
import { Navigate } from "react-router-dom";

type PrivateRouterProps = {
  user: any;
  children?: React.ReactNode;
  redirectPath?: string;
};
const PrivateRouter = ({
  user,
  children,
  redirectPath = "/login",
}: PrivateRouterProps) => {
  console.log("toan");
  if (!user || Object.keys(user).length === 0) {
    return <Navigate to={redirectPath!} replace />;
  }
  return children;
};
export default PrivateRouter;
