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

import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import Header from "../../Main-Components/Header.jsx";
import UpgradeBanner from "../../Main-Components/Banner.jsx";
import DropdownTextBox from "../../Main-Components/DropdownTextBox.jsx";
import WorkflowCard from "./WorkflowCard.jsx";

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
      <DropdownTextBox />
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
          style={{ width: 120, height: 100 }}
        />

        <Typography
          sx={{
            color: "rgb(10, 37, 64)",
            fontSize: "var(--fontSizeHeadline3, 24px)",
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

      <Box sx={{ mt: 8}}>
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
      <WorkflowCard />
    </Box>
  );
}

export default WorkflowBody;
