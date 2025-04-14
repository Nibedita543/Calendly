import React from "react";
import { Box } from "@mui/material";
 import GlobalButton from "../../Globaly-Components/GlobalButton/GlobalButton.jsx";
import GlobalImage from "../../Globaly-Components/GlobalImage/GlobalImage.jsx";
import rightArrow from "../../assets/right-arrow.svg"
const ChromeExtension = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        mt: 5,
        backgroundColor: "transparent",
        width: "100%",
        height: "38px",
        maxWidth: "996px",
      }}
    >
      <GlobalButton
        variant="contained"
        sx={{
          display: "flex",
          width: "fit-content",
          height: "100%",
          alignItems: "center",
          gap: 1, // Adjusted gap based on your style
          backgroundColor: "rgb(231, 237, 246)",
          borderRadius: "50px",
          fontWeight: 500,
          whiteSpace: "nowrap",
          color: "rgb(11, 53, 88)",
          transition: "0.2s",
          border: "none",
          "&:hover": {
            backgroundColor: "#E0E7FC", // Adjusted hover effect
          },
        }}
      >
        <GlobalImage
          src="https://images.ctfassets.net/k0lk9kiuza3o/1iXaOfSTG4LH14hl3jhgLV/9c262e7842e1e78a9e595a4477ecde7d/Chrome.svg"
          alt="Chrome Logo"
          width="24px"
          height="24px"
          objectFit="contain"
          borderRadius="50%" // Optional: to make the image circular
        />
        Get the Chrome Extension
        <img src={rightArrow} width="20px"/>
      </GlobalButton>
    </Box>
  );
};

export default ChromeExtension;
