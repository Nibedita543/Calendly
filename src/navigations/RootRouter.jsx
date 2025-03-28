import React from "react";
import { Routes, Route } from "react-router-dom";
import SignUpPage from "../Components/SignUp/SignUpPage";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";

export default function RootRouter() {
  return (
    <div>
      <Navbar />
      <div
        style={{
          marginTop: "200px",
        }}
      >
        <Routes>
          <Route path="/" element={<SignUpPage />} />
        </Routes>
      </div>
      <div style={{marginTop:"150px"}}>
        <Footer />
      </div>
    </div>
  );
}
