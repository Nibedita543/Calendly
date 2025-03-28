import React from "react";
import { Button } from "@mui/material";

const GlobalButton = ({
  children,
  variant = "contained",
  size = "medium",
  color = "primary",
  fullWidth = false,
  onClick,
  sx = {},
}) => {
  return (
    <Button
      variant={variant}
      size={size}
      color={color}
      fullWidth={fullWidth}
      onClick={onClick}
      sx={{
        textTransform: "none",
        fontWeight: 600,
        borderRadius: "8px",
        padding: "10px 16px",
        fontSize: { xs: "12px", sm: "14px", md: "16px" },
        ...sx, 
      }}
    >
      {children}
    </Button>
  );
};

export default GlobalButton;
