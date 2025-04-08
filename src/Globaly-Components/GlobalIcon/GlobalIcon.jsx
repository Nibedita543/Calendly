import React from "react";
import * as MuiIcons from "@mui/icons-material"; // Import all Material UI icons dynamically
import { Box, Tooltip } from "@mui/material";

const GlobalIcon = ({
  name = "HelpOutline",
  size = "24px",
  color = "inherit",
  tooltip = "",
  onClick = null,
  sx = {},
  tabIndex = 0,
  ariaLabel = "",
  role = "img",
  ...props
}) => {
  const IconComponent = MuiIcons[name] || MuiIcons.HelpOutline;

  const iconElement = (
    <Box
      component={IconComponent}
      sx={{
        fontSize: size,
        color: color,
        cursor: onClick ? "pointer" : "default",
        transition: "0.3s ease-in-out",
        "&:hover": onClick ? { opacity: 0.7, transform: "scale(1.1)" } : {},
        "&:focus": { outline: "2px solid #1976d2" },
        ...sx,
      }}
      onClick={onClick}
      tabIndex={tabIndex}
      aria-label={ariaLabel || name}
      role={role}
      {...props}
    />
  );

  return tooltip ? (
    <Tooltip title={tooltip}>{iconElement}</Tooltip>
  ) : (
    iconElement
  );
};

export default GlobalIcon;
