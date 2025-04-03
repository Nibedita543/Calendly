import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import PublicRouter from "./PublicRouter";
import ProtectedRouter from "./ProtectedRouter";

export default function RootRouter() {
  const isAuthenticated = !!localStorage.getItem("token"); // Replace with actual auth logic

  return <div>{true ? <ProtectedRouter /> : <PublicRouter />}</div>;
}
