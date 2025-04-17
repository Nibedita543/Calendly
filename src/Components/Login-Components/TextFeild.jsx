import React from "react";
import { TextField } from "@mui/material";

const CustomTextField = () => {
  return (
    <TextField
      fullWidth
      placeholder="Enter your email"
      variant="outlined"
      sx={{
        width: "93%",
        background: "rgb(255, 255, 255)",
        borderRadius: "8px",

        "& .MuiOutlinedInput-root": {
          borderRadius: "8px",
        },

        input: {
          fontSize: "1rem",
          color: "rgb(11, 53, 88)",
          fontWeight: "600",
          height: "20px",
        },
      }}
    />
  );
};

export default CustomTextField;
