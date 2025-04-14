import React from "react";
import { Typography } from "@mui/material";

const Header = () => {
  return (
    <Typography
      variant="h5"
      fontWeight="bold"
      textAlign="center"
      gutterBottom
      sx={{
        fontSize: "2.343rem",
        lineHeight: 1.2,
        fontWeight: 700,
        whiteSpace: "nowrap",
        color: "rgb(11, 53, 88)",
        overflow: "hidden",
        width: "100%",
      }}
    >
      Log in to your account
    </Typography>
  );
};

export default Header;
