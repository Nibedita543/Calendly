import React from "react";
 import GlobalButton from "../../Globaly-Components/GlobalButton/GlobalButton.jsx";
import GoogleIcon from "@mui/icons-material/Google"; // Assuming you're using MUI's Google Icon

const GoogleButton = () => {
  return (
    <GlobalButton
      fullWidth
      variant="outlined"
      startIcon={<GoogleIcon />}
      sx={{
        cursor: "pointer",
        transition: "0.2s linear, background-position 1ms, background-size 1ms",
        color: "rgb(71, 103, 136)", // Text color
        border: "1px solid rgb(71, 103, 136)",
        backgroundColor: "transparent",
        padding: "10px 18px",
        fontSize: "1.125rem",
        lineHeight: 2,
        position: "relative",
        height: "fit-content",
        flexDirection: "row",
        display: "inline-flex",
        opacity: 1, // Full opacity
        alignItems: "center",
        justifyContent: "center",
        gap: "8px",
        borderRadius: "8px",
        textAlign: "center",
        fontWeight: "600",
        textTransform: "none",
      }}
    >
      Continue with Google
    </GlobalButton>
  );
};

export default GoogleButton;
