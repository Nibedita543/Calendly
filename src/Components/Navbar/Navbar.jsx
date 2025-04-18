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
    <div
      className="navbar-container"
      sx={{
        "& .navbar": {
          display: "flex",
          alignItems: "center",
          height: {
            xs: "50px",
            sm: "50px",
            md: "75px",
            lg: "75px",
          },
        },
      }}
    >
      <TopNavbar />
      <AppBar
        position="static"
        className="navbar"
        sx={{
          "& .navbar-toolbar": {
            display: "flex",
            alignItems: "center",
            width: {
              xs: "100%", // <=600px
              sm: "100%", // <=960px
              md: "100%", // <=1200px
              lg: "84%", // >1200px
            },
            height: {
              xs: "50px",
              sm: "50px",
              md: "75px",
              lg: "75px",
            },
            px: { xs: 2, sm: 2 },
            justifyContent: {
              xs: "space-between",
              sm: "space-between",
            },
          },
        }}
      >
        <Toolbar className="navbar-toolbar">
          <GlobalImage
            src="https://marketing-assets.calendly.com/media/logo.svg"
            alt="Calendly Logo"
            width="180px"
            height="100%"
            objectFit="contain"
            className="logo"
            sx={{
              width: {
                xs: "135px",
                sm: "135px",
                md: "180px",
                lg: "180px",
              },
              height: "80%",
            }}
            fallbackSrc="https://via.placeholder.com/120x40"
          />
          {location.pathname === "/" ? <SignUpContent /> : <LoginContent />}
        </Toolbar>
      </AppBar>
    </div>
  );
};
export default Navbar;
