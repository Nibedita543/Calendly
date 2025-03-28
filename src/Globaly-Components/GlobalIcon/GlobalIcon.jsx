import React from "react";
import * as MuiIcons from "@mui/icons-material"; // Import all Material UI icons dynamically
import { Box, Tooltip } from "@mui/material";

const GlobalIcon = ({
  name = "HelpOutline", // Default icon if name is incorrect
  size = "24px", // Default size
  color = "inherit", // Default color
  tooltip = "", // Tooltip text (optional)
  onClick = null, // Click handler
  sx = {}, // Custom styles
  tabIndex = 0, // Keyboard navigation support
  ariaLabel = "", // Accessibility label
  role = "img", // ARIA role
  ...props // Additional props
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
        "&:hover": onClick ? { opacity: 0.7, transform: "scale(1.1)" } : {}, // Hover effect
        "&:focus": { outline: "2px solid #1976d2" }, // Focus styling
        ...sx,
      }}
      onClick={onClick}
      tabIndex={tabIndex}
      aria-label={ariaLabel || name} // Default to icon name if ariaLabel not provided
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
