import React, { forwardRef } from "react";
import { Button } from "@mui/material";

const GlobalButton = forwardRef((props, ref) => {
  const {
    title, 
    variant = "contained",
    size = "medium",
    color = "primary",
    fullWidth = false,
    onClick,
    sx = {},
    ...otherProps
  } = props;

  return (
    <Button
      ref={ref}
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
      {...otherProps}
    >
      {title}
    </Button>
  );
});

export default GlobalButton;
