import React from "react";
import { Typography } from "@mui/material";
import rightArrow from "../../assets/right-arrow.svg";
import { Link } from "react-router-dom";

const SignupHere = () => {
  return (
    <Typography
      variant="body2"
      sx={{
        width: "90%",
        height: "100%",
        paddingLeft: "0px",
        paddingTop: "16px",
        textAlign: "center",
        color: "rgb(11, 53, 88)",
        fontSize: "1.170rem",
        lineHeight: 1.6,
        fontWeight: 520,
      }}
    >
      Don't have an account?{" "}
      <Link to="/" className="signup-link" sx={{ textDecoration: "none" }}>
        Sign up for free
        <img src={rightArrow} style={{ fill: "rgb(0, 107, 255)" }} />
      </Link>
    </Typography>
  );
};

export default SignupHere;
