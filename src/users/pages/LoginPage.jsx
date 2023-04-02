import React from "react";
import { Navigate } from "react-router-dom";
import ROUTES from "../../routes/routesModel";

export default function LoginPage() {
  const user = {
    email: "asdasd",
  };

  if (user) {
    return <Navigate replace to={ROUTES.ROOT} />;
  }

  return <div>Login page</div>;
}
