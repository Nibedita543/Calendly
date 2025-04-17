import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import SignUpPage from "../Pages/SIGNUP/SignUpPage";
import Login from "../Pages/LOGIN/Login";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import { Box } from "@mui/material";

export default function PublicRouter() {
  return (
    <>
      {/* header */}
      <Navbar />
      <Box sx={{ mt: 20 }}>
        <Routes>
          <Route path="/" element={<SignUpPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Box>
      {/* footer */}
      <Box sx={{ mt: 15 }}>
        <Footer />
      </Box>
    </>
  );
}
