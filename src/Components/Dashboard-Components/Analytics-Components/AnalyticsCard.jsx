// Analytics.jsx
import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import GlobalCard from "../../../Globaly-Components/GlobalCard/GlobalCard.jsx";

const cardData = [
  { title: "Created events", count: 0 },
  { title: "Completed events", count: 0 },
  { title: "Rescheduled events", count: 0 },
  { title: "Canceled events", count: 0 },
];

const AnalyticsCard = () => {
  return (
    <Box
      sx={{
        position: "relative",
        display: "grid",
        gap: "1.25em",
        maxHeight: "300%",
        paddingTop: "1.25em",
        filter: "grayscale(0)",
        transition: "filter 0.5s ease",
        opacity: 0.4,
      }}
    >
      <Typography
        variant="subtitle2"
        fontWeight={600}
        color="text.secondary"
        mb={2}
      >
        EVENT DATA
      </Typography>

      <Grid
        container
        spacing={2}
        justifyContent="space-between"
        alignItems="stretch"
      >
        {cardData.map((card, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <GlobalCard
              title={
                <Typography
                  variant="subtitle2"
                  color="text.secondary"
                  fontWeight={600}
                  sx={{
                    position: "relative",
                    display: "grid",
                    gap: "1.25em",
                    maxHeight: "300%",
                    paddingTop: "1.25em",
                    filter: "grayscale(0)",
                    transition: "filter 0.5s ease",
                  }}
                >
                  {card.title}
                </Typography>
              }
              description={
                <Typography
                  sx={{
                    fontWeight: "var(--fontWeightBold, 700)",
                    fontSize: "2.5em",
                    lineHeight: 1.4,
                    color: "text.disabled", // optional for gray look
                  }}
                >
                  0
                </Typography>
              }
              sx={{
                display: "grid",
                boxSizing: "border-box",
                border:
                  "1px solid var(--text-color-level3, rgba(26, 26, 26, 0.1))",
                borderRadius: "8px",
                background: "var(--color-bg-white-l-1, rgba(255, 255, 255, 1))",
                boxShadow: "0 1px 6px 0 rgb(0 0 0 / 10%)",
                width: "auto",
              }}
            />
          </Grid>
        ))}
      </Grid>

      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <GlobalCard
            title="Completed events trend"
            description={
              <Box
                height={180}
                display="flex"
                justifyContent="center"
                alignItems="center"
                color="text.secondary"
              >
                No data available
              </Box>
            }
            sx={{
              display: "grid",
              boxSizing: "border-box",
              // padding: "10px 16px",
              border:
                "1px solid var(--text-color-level3, rgba(26, 26, 26, 0.1))",
              borderRadius: "8px",
              background: "var(--color-bg-white-l-1, rgba(255, 255, 255, 1))",
              boxShadow: "0 1px 6px 0 rgb(0 0 0 / 10%)",
              width: "auto",
            }}
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <GlobalCard
            title="Event distribution by duration"
            description={
              <Box
                height={180}
                display="flex"
                justifyContent="center"
                alignItems="center"
                color="text.secondary"
              >
                No data available
              </Box>
            }
            sx={{
              display: "grid",
              boxSizing: "border-box",
              // padding: "10px 16px",
              border:
                "1px solid var(--text-color-level3, rgba(26, 26, 26, 0.1))",
              borderRadius: "8px",
              background: "var(--color-bg-white-l-1, rgba(255, 255, 255, 1))",
              boxShadow: "0 1px 6px 0 rgb(0 0 0 / 10%)",
              width: "auto",
            }}
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <GlobalCard
            title="Popular events"
            description={
              <Box
                height={120}
                display="flex"
                justifyContent="center"
                alignItems="center"
                color="text.secondary"
              >
                No data available
              </Box>
            }
            sx={{
              display: "grid",
              boxSizing: "border-box",
              // padding: "10px 16px",
              border:
                "1px solid var(--text-color-level3, rgba(26, 26, 26, 0.1))",
              borderRadius: "8px",
              background: "var(--color-bg-white-l-1, rgba(255, 255, 255, 1))",
              boxShadow: "0 1px 6px 0 rgb(0 0 0 / 10%)",
              width: "auto",
            }}
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <GlobalCard
            title="Popular times"
            description={
              <Box
                height={120}
                display="flex"
                justifyContent="center"
                alignItems="center"
                color="text.secondary"
              >
                No data available
              </Box>
            }
            sx={{
              display: "grid",
              boxSizing: "border-box",
              // padding: "10px 16px",
              border:
                "1px solid var(--text-color-level3, rgba(26, 26, 26, 0.1))",
              borderRadius: "8px",
              background: "var(--color-bg-white-l-1, rgba(255, 255, 255, 1))",
              boxShadow: "0 1px 6px 0 rgb(0 0 0 / 10%)",
              width: "auto",
            }}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default AnalyticsCard;
