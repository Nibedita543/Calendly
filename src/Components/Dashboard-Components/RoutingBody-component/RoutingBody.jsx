import React from "react";
import { Box, Typography, Link, Button, Stack } from "@mui/material";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import AddIcon from "@mui/icons-material/Add";
import Header from "../Availability-Component/Header.jsx";
import UpgradeBanner from "../Banner.jsx";

function RoutingBody({ children }) {
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
      <Header title={"Routing"} />
      <UpgradeBanner
        message="Upgrade to the Teams plan to access this feature and other advanced scheduling tools."
        buttonText="Explore the Teams plan"
      />
      {/* Main routing form content */}
      <Box
        sx={{
          mt: 6,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        <Stack spacing={3} alignItems="center">
          {/* Image/Icon */}
          <Box
            component="img"
            src="https://assets.calendly.com/assets/frontend/media/routing_forms_icon-cdb9903527c4a970315b.svg"
            alt="Routing Icon"
            sx={{ width: 80, height: 80 }}
          />

          {/* Title */}
          <Typography
            sx={{
              color: "rgb(10, 37, 64)",
              fontSize: "var(--fontSizeHeadline3, 24px)",
              m: 0,
              fontWeight: "var(--fontWeightBold, 700)",
              lineHeight: "var(--lineHeightStandard, 1.4)",
            }}
          >
            Qualify, route, and schedule meetings from your website
          </Typography>

          {/* Description */}
          <Typography
            sx={{
              color: "#476788",
              fontWeight: "var(--fontWeightStandard, 400)",
              fontSize: "var(--fontSizeMedium, 15px)",
              m: 0,
              lineHeight: 1.4,
              width: "600px",
            }}
          >
            Create or import an existing marketing form. Set up screening rules
            that send people to a specific booking page or URL based on their
            responses.
          </Typography>

          {/* Learn more link */}
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
          </Link>

          {/* Disabled button */}
          <Button
            variant="contained"
            startIcon={<AddIcon />}
            disabled
            sx={{
              bgcolor: "#e7edf6",
              color: "#a6bbd1",
              border: "#f0f3f8",
              fontWeight: 500,
              px: 3,
              py: 1.5,
              borderRadius: 7,
              textTransform: "none",
            }}
          >
            New routing form
          </Button>
        </Stack>
      </Box>
    </Box>
  );
}

export default RoutingBody;
