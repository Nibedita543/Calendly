import React from "react";
import GlobalText from "../../Globaly-Components/GlobalTypography/GlobalTypography.jsx";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";

const Header = ({ title }) => {
  return (
    <header>
      <GlobalText
        variant="h5"
        fontWeight="bold"
        textAlign="center"
        gutterBottom
        sx={{
          color: "rgb(10, 37, 64)",
          fontSize: "27px",
          fontWeight: "var(--fontWeightBold, 700)",
          lineHeight: "1.5",
          fontFamily: '"Proxima Nova", sans-serif',
          margin: 0,
          wordBreak: "break-word",
          overflowWrap: "break-word",
          WebkitFontSmoothing: "antialiased",
        }}
      >
        {title}
        <HelpOutlineIcon
          sx={{
            margin: 0,
            paddingBottom: "5px",
            paddingLeft: "7px",
            border: "none",
            backgroundColor: "transparent",
            color: "inherit",
            font: "inherit",
            textAlign: "center",
            WebkitTextDecoration: "none",
            textDecoration: "none",
            cursor: "pointer",
            width: "18px",
            height: "18px",
            strokeWidth: 0.8,
            overflow: "hidden",
          }}
        />
      </GlobalText>
    </header>
  );
};

export default Header;
