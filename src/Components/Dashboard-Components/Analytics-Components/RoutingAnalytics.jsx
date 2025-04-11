import React from "react";
import { Box, Typography, Link } from "@mui/material";
import UpgradeBanner from "../../Main-Components/Banner";
import GlobalCard from "../../../Globaly-Components/GlobalCard/GlobalCard";
import RoutingCard from "./RoutingCard.jsx";

const RoutingAnalytics = () => {
  return (
    <>
      <UpgradeBanner />
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        p={2}
        bgcolor="#f9fbfd"
        borderRadius={2}
      >
        <GlobalCard
          title={
            <>
              <Typography variant="overline" color="text.secondary">
                No Analytics Yet
              </Typography>
              <Typography variant="h6" fontWeight={700}>
                Tools to increase routing form performance
              </Typography>
            </>
          }
          description={
            <>
              <ul style={{ paddingLeft: 18, marginTop: 8 }}>
                <li>Report on meeting conversation rates</li>
                <li>Discover booked meeting trends week to week</li>
                <li>Track and evaluate the customer journey.</li>
              </ul>
              <Box mt={2}>
                <Link href="#" underline="hover" fontWeight={500}>
                  Learn more
                </Link>
              </Box>
            </>
          }
          buttonText="Add routing form"
          buttonProps={{
            disabled: true,
            startIcon: <span style={{ fontSize: 18 }}>＋</span>,
            sx: {
              bgcolor: "#e7edf6 !important",
              color: "#a6bbd1",
              border: "#f0f3f8",
              px: 2,
              py: 1.3,
              borderRadius: 7,
              textTransform: "none",
              fontSize: 13,
              fontWeight: 600,
              width: "fit-content",
            },
          }}
          sx={{ flex: 1, bgcolor: "#fff" }}
        />

        <Box ml={4}>
          <img
            src="https://assets.calendly.com/assets/frontend/media/analytics_routing_side-dba1bd08805123ac1827.svg"
            alt="Chart Illustration"
            style={{ maxWidth: 320, borderRadius: 8 }}
          />
        </Box>
      </Box>
      <RoutingCard />
    </>
  );
};

export default RoutingAnalytics;
