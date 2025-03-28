import React from "react";
import { Routes, Route } from "react-router-dom";
import SignUpPage from "../Components/SignUp/SignUpPage";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import Login from "../Components/Login/Login";
import { Container } from "@mui/material";

export default function RootRouter() {
  return (
    <>
      <Navbar />
      <div
        style={{
          marginTop: "200px",
        }}
      >
        <Routes>
          <Route path="/" element={<SignUpPage />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
      <div style={{marginTop:"150px"}}>
        <Footer />
      </div>
    </>
  );
}
