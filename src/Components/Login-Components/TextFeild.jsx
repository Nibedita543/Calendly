import React from "react";
import { TextField } from "@mui/material";

const CustomTextField = () => {
  return (
    <TextField
      fullWidth
      placeholder="Enter your email"
      variant="outlined"
      sx={{
        width: "100%",
        boxSizing: "border-box",
        background: "rgb(255, 255, 255)",
        padding: "8px 16px",
        color: "rgb(11, 53, 88)",
        fontWeight: 500,
        fontSize: "1.125rem",
        border: "1px solid rgb(166, 187, 209)",
        borderRadius: "8px",
      }}
    />
  );
};

export default CustomTextField;
