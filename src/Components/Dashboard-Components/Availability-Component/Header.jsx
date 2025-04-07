import React from "react";
import GlobalText from "../../../Globaly-Components/GlobalTypography/GlobalTypography.jsx";

const Header = () => {
  return (
    <header style={{ padding: "10px",marginLeft:"10px" }}>
      <GlobalText
        variant="h5"
        fontWeight="bold"
        textAlign="center"
        gutterBottom
        sx={{
          fontSize: "var(--fontSizeHeadline2, 28px)",
          fontWeight: "var(--fontWeightBold, 700)",
          lineHeight: "var(--lineHeightStandard, 1.4)",
          color: "#0A2540",
        }}
      >
        Availability
      </GlobalText>
    </header>
  );
};

export default Header;
