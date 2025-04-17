import React, { useState } from "react";
import { AppBar, Toolbar } from "@mui/material";
import GlobalImage from "../../Globaly-Components/GlobalImage/GlobalImage.jsx";

import "./Navbar.css";
import SignUpContent from "./SignUpContent.jsx";
import LoginContent from "./LoginContent.jsx";
import { useLocation } from "react-router-dom";
import TopNavbar from "./TopNavbar.jsx";
const Navbar = () => {
  const location = useLocation();
  return (
    <div className="navbar-container">
      <TopNavbar />
      <AppBar position="static" className="navbar">
        <Toolbar className="navbar-toolbar">
          <GlobalImage
            src="https://marketing-assets.calendly.com/media/logo.svg"
            alt="Calendly Logo"
            width="180px"
            height="100%"
            objectFit="contain"
            className="logo"
            sx={{}}
            fallbackSrc="https://via.placeholder.com/120x40"
          />
          {location.pathname === "/" ? <SignUpContent /> : <LoginContent />}
        </Toolbar>
      </AppBar>
    </div>
  );
};
export default Navbar;
