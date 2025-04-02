import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import SignUpPage from "../Pages/SIGNUP/SignUpPage";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import Login from "../Pages/LOGIN/Login.jsx";
import Dashboard from "../Pages/DASHBOARD/Dashboard.jsx";
import { Box } from "@mui/material";

export default function RootRouter() {
  const location = useLocation(); // Get the current route
  const hideLayout = location.pathname === "/dashboard"; // Check if we are on the dashboard page

  return (
    <>
      {!hideLayout && <Navbar />} {/* Show Navbar only if not on dashboard */}
      <Box sx={{ mt: hideLayout ? 0 : 20 }}>
        <Routes>
          <Route path="/" element={<SignUpPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Box>
      {!hideLayout && (
        <Box sx={{ mt: 15 }}>
          <Footer />
        </Box>
      )}{" "}
      {/* Show Footer only if not on dashboard */}
    </>
  );
}
