import React from "react";
import { Typography } from "@mui/material";

const GlobalText = ({
  children,
  variant = "body1",
  color = "textPrimary",
  align = "inherit",
  gutterBottom = false,
  noWrap = false,
  sx = {},
}) => {
  return (
    <Typography
      variant={variant}
      color={color}
      align={align}
      gutterBottom={gutterBottom}
      noWrap={noWrap}
      sx={{
        fontWeight: variant.includes("h") ? 600 : 400,
        lineHeight: 1.5,
        fontSize: { xs: "12px", sm: "14px", md: "16px" }, 
        ...sx, 
      }}
    >
      {children}
    </Typography>
  );
};

export default GlobalText;
