import React from "react";
import { Routes, Route } from "react-router-dom";
import SignUpPage from "../Components/SignUp/SignUpPage";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";

export default function RootRouter() {
  return (
    <div>
      <Navbar />
      <div style={{
        marginTop:"100px"
      }}>
        <Routes>
          <Route path="/" element={<SignUpPage />} />
        </Routes>
      </div>
      <Footer/>
    </div>
  );
}
