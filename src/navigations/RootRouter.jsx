import React from "react";
import PublicRouter from "./PublicRouter";
import ProtectedRouter from "./ProtectedRouter";

export default function RootRouter() {
  const isAuthenticated = !!localStorage.getItem("token"); // Replace with actual auth logic

  return <div>{false ? <ProtectedRouter /> : <PublicRouter />}</div>;
}
