import React from "react";
import { TextField } from "@mui/material";

const CustomTextField = () => {
  return (
    <TextField
      fullWidth
      placeholder="Enter your email"
      sx={{
        width: "100%",
        boxSizing: "border-box",
        background: "rgb(255, 255, 255)",
        padding: "8px 16px",
        color: "#476788",
        fontWeight: 500,
        fontSize: "1.125rem",
        borderRadius: "8px",
      }}
    />
  );
};

export default CustomTextField;
