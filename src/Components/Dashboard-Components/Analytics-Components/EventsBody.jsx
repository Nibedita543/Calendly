import React from "react";
import { Box, Typography, Link } from "@mui/material";
import UpgradeBanner from "../../Main-Components/Banner";
import GlobalCard from "../../../Globaly-Components/GlobalCard/GlobalCard";
import AnalyticsCard from "./AnalyticsCard";

const EventsBody = () => {
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
                Improve team scheduling using trends from booked meetings
              </Typography>
            </>
          }
          description={
            <>
              <ul style={{ paddingLeft: 18, marginTop: 8 }}>
                <li>Easily understand how scheduling impacts your business.</li>
                <li>Demonstrate the value of proposed scheduling changes.</li>
                <li>Get crucial buy-in from leaders and stakeholders.</li>
              </ul>
              <Box mt={2}>
                <Link href="#" underline="hover" fontWeight={500}>
                  Learn more
                </Link>
              </Box>
            </>
          }
          buttonText="Book your first meeting"
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

        {/* Right-side image/chart section */}
        <Box ml={4}>
          <img
            src="https://assets.calendly.com/assets/frontend/media/analytics_events_side-b252d96a4378c85864a1.svg"
            alt="Chart Illustration"
            style={{ maxWidth: 320, borderRadius: 8 }}
          />
        </Box>
      </Box>
      <AnalyticsCard />
    </>
  );
};

export default EventsBody;
