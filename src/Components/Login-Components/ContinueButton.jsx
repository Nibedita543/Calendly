import React from "react";
import GlobalButton from "../../Globaly-Components/GlobalButton/GlobalButton.jsx";
import { Height } from "@mui/icons-material";

const GoogleButton = () => {
  return (
    <GlobalButton
      fullwidth
      sx={{
        backgroundColor: "rgb(0, 107, 255)", // Custom background color
        color: "rgb(255, 255, 255)", // Custom text color
        fontWeight: 600,
        borderRadius: "8px",
        cursor: "pointer",
        border: "1px solid rgb(0, 107, 255)",
        fontSize: "1.1rem",
        lineHeight: 1.7,
        gap: "8px",
        width: "93%",
        "&:hover": {
          backgroundColor: "rgb(0, 78, 186)", // Darker blue on hover
        },
      }}
    >
      Continue
    </GlobalButton>
  );
};

export default GoogleButton;
