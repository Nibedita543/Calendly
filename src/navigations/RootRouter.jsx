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
      <Container
        maxWidth="lg"
        sx={{
          minHeight: "100vh",
          mt: 10,
        }}
      >
        <Routes>
          <Route path="/" element={<SignUpPage />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Container>
      <Footer />
    </>
  );
}
