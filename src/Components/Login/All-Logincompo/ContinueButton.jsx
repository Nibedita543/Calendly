import React from "react";
import GlobalButton from "../../../Globaly-Components/GlobalButton/GlobalButton.jsx";

const GoogleButton = () => {
  return (
    <GlobalButton
      fullWidth
      sx={{
        backgroundColor: "rgb(0, 107, 255)", // Custom background color
        color: "rgb(255, 255, 255)", // Custom text color
        fontWeight: "600", // Custom font weight
        padding: "10px 18px", // Custom padding
        borderRadius: "8px", // Custom border-radius
        mb: 2,
        height: "fit-content",
        cursor: "pointer",
        border: "1px solid rgb(0, 107, 255)",
        fontSize: "1.160rem",
        lineHeight: 2,
        gap: "8px",
      }}
    >
      Continue
    </GlobalButton>
  );
};

export default GoogleButton;
