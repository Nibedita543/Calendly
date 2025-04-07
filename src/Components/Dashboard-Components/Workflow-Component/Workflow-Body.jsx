import React from "react";
import {
  Box,
  Typography,
  Link,
  Button,
  Stack,
  Select,
  MenuItem,
  Divider,
} from "@mui/material";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import AddIcon from "@mui/icons-material/Add";
import Header from "../Availability-Component/Header.jsx";
import UpgradeBanner from "../Banner.jsx";

function WorkflowBody({ children }) {
  return (
    <Box
      sx={{
        backgroundColor: "#f5f5f5",
        minHeight: "100vh",
        width: "95%",
        margin: "0 auto",
        p: 2,
      }}
    >
      <Header title={"Workflow"} />
      <UpgradeBanner
        message="Upgrade to the Teams plan to access this feature and other advanced scheduling tools."
        buttonText="Explore the Teams plan"
      />
      {/* Dropdown */}
      <Select
        value="My Calendly"
        sx={{
          display: "inline-flex",
          gap: "16px",
          justifyContent: "space-between",
          alignItems: "center",
          width: "20%",
          maxWidth: "30%",
          height: "46px",
          minHeight: "46px",
          padding: "0.5em 1em",
          border: "0.5px solid #a6bbd1",
          borderRadius: "8px",
          backgroundColor: "#ffffff",
          color: "#0a2540",
          textAlign: "left",
        }}
      >
        <MenuItem value="My Calendly">My Calendly</MenuItem>
        {/* Add more menu items if needed */}
      </Select>
      {/* Main Message */}
      <Box
        sx={{
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 2,
          mt: 8,
        }}
      >
        <img
          src="https://assets.calendly.com/assets/frontend/media/workflows_icon-90ccbc36ff93eba360f6.svg"
          alt="Workflow Icon"
          style={{ width: 100, height: 80 }}
        />

        <Typography
          sx={{
            color: "rgb(10, 37, 64)",
            fontSize: "var(--fontSizeHeadline3, 24px)",
            m: 0,
            fontWeight: "var(--fontWeightBold, 700)",
            lineHeight: "var(--lineHeightStandard, 1.4)",
          }}
        >
          Automate your meeting communications
        </Typography>

        <Typography
          variant="body1"
          sx={{
            color: "#476788",
            fontWeight: "var(--fontWeightStandard, 400)",
            fontSize: "var(--fontSizeMedium, 15px)",
            m: 0,
            lineHeight: 1.4,
            width: "600px",
          }}
        >
          Workflows help you reduce no-shows and have more productive meetings.
          Plus, automated emails and texts save you time before and after
          events.
        </Typography>
        <Link
          href="#"
          underline="hover"
          sx={{
            display: "flex",
            gap: "4px",
            justifyContent: "center",
            alignItems: "center",
            color: "rgb(0, 105, 255)",
          }}
        >
          <InfoOutlinedIcon fontSize="small" />
          Learn more
          <span>➔</span>
        </Link>
      </Box>
      {/* Bottom Line and Text */}
    
      <Box sx={{ my: 4 }}>
        <Divider sx={{ display: "flex", alignItems: "center" }}>
          <Typography
            variant="caption"
            fontWeight="bold"
            sx={{
              px: 2,
              color: "#002B49", // Dark blue (adjust if needed)
              fontSize: "12px",
              letterSpacing: "0.5px",
            }}
          >
            START WITH A WORKFLOW TEMPLATE
          </Typography>
        </Divider>
      </Box>
    </Box>
  );
}

export default WorkflowBody;
