import React from "react";
import { Box, Button, Typography, Card } from "@mui/material";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";

const UpgradeBanner = ({
  icon = <MonetizationOnOutlinedIcon sx={{ color: "#2196f3" }} />,
  message = "Upgrade to the Teams plan to access this feature and other advanced scheduling tools.",
  buttonText = "Explore the Teams plan",
  onButtonClick = () => {},
  backgroundColor = "#f0f7ff",
  borderColor = "#2196f3",
  buttonColor = "#007aff",
  buttonHoverColor = "#006ae6",
}) => {
  return (
    <Card
      sx={{
        display: "flex",
        justifyContent: "space-between",
        marginBottom: "16px",
        padding: "24px",
        border: "2px solid var(--primary-color, rgb(0, 105, 255))",
        borderRadius: "8px",
        backgroundColor: "#F2F8FF",
        height: "50px",
        mt: 5,
      }}
    >
      <Box display="flex" alignItems="center" gap={1}>
        {icon}
        <Typography
          variant="body1"
          sx={{
            color: "#0a2540",
            fontSize: "16px",
            fontWeight: 400,
            fontFamily: '"Proxima Nova", sans-serif',
            lineHeight: 1.5,
            wordBreak: "break-word",
            overflowWrap: "break-word",
            WebkitFontSmoothing: "antialiased",
          }}
        >
          {message}
        </Typography>
      </Box>

      <Button
        variant="contained"
        onClick={onButtonClick}
        sx={{
          position: "relative",
          display: "inline-flex",
          verticalAlign: "middle",
          justifyContent: "center",
          alignItems: "center",
          boxSizing: "border-box",
          minHeight: "40px",
          padding: "5px 14px",
          border: "1px solid transparent",
          borderColor: "#006bff",
          borderRadius: "40px",
          fontSize: "var(--fontSizeSmall, 14px)",
          lineHeight: "20px",
          backgroundColor: "#006bff",
          color: "#ffffff",
          fontWeight: "var(--fontWeightBold, 700)",
          textTransform: "none",
        }}
      >
        {buttonText}
      </Button>
    </Card>
  );
};

export default UpgradeBanner;
