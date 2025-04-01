import React from "react";
import { Typography, Link } from "@mui/material";

const SignupHere = () => {
  return (
    <Typography
      variant="body2"
      sx={{
        width: "100%",
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
      <Link href="/signup" className="signup-link">
        Sign up for free
      </Link>
    </Typography>
  );
};

export default SignupHere;
