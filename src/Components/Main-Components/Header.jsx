import React from "react";
import GlobalText from "../../Globaly-Components/GlobalTypography/GlobalTypography.jsx";

const Header = ({ title }) => {
  return (
    <header style={{ padding: "5px" }}>
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
        {title}
      </GlobalText>
    </header>
  );
};

export default Header;
