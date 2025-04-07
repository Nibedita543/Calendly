import React from 'react'
import ZoomImg from '../../../assets/Zoom.svg'
import SalesForce from '../../../assets/SalesForce.svg'
import GoogleMeet from "../../../assets/Google-Meet.svg";
import HubSpot from "../../../assets/HubSpot.svg";
import GoogleCalender from "../../../assets/Google-Calender.svg";
import MicroSoft from "../../../assets/Microsoft_teams.svg";
import Calendlychrome from "../../../assets/CalendlyForChrome.svg";
import Stripe from "../../../assets/Stripe.svg"
import Zapier from "../../../assets/Zapier.svg"

import { Box, Button, Chip, Grid, Paper, Typography } from '@mui/material';
import IntegrationAppsCards from './IntegrationAppsCards';

export default function IntegrationData() {
    const IntegrationData = [
      {
        image: ZoomImg,
        title: "Zoom",
        description: "Include Zoom details in your Calendly events.",
      },
      {
        image: SalesForce,
        title: "SalesForce",
        description:
          "Create and update records as meetings are scheduled. Plus, route meetings via real time Salesforce lookup.",
      },
      {
        image: GoogleMeet,
        title: "Google Meet",
        description: "Include Google Meet details in your Calendly events.",
      },

      {
        image: HubSpot,
        title: "HubSpot",
        description:
          "Sync meeting data to your CRM. Add instant, account-matched scheduling to your routing forms.",
      },
      {
        image: GoogleCalender,
        title: "Google Calender",
        description: "Add events to your calendar and prevent double-booking.",
      },
      {
        image: MicroSoft,
        title: "MicroSoft Teams Conferencing",
        description:
          "Include Teams conferencing details in your Calendly events.",
      },
      {
        image: Calendlychrome,
        title: "Calendly for Chrome",
        description: "Access and share availability on any web page.",
      },
      // {
      //   image: SalesForce,
      //   title: "SalesForce",
      //   description:
      //     "Create and update records as meetings are scheduled. Plus, route meetings via real time Salesforce lookup.",
      // },
      {
        image: Stripe,
        title: "Stripe",
        description: "Collect payment before the meeting.",
      },
      {
        image: Zapier,
        title: "Zapier",
        description: "Create no-code automations with the tools you use.",
      },
    ];
  return (
    <Box>
      <Grid container spacing={2} sx={{ paddingX: 0, marginY: 0 }}>
        {IntegrationData.map((integration, index) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
            <IntegrationAppsCards {...integration} />
          </Grid>
        ))}
      </Grid>
      <Box
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <Button
          variant="outlined"
          sx={{
            borderRadius: "30px",
            textTransform: "none",
            width: "180px",
            height: "45px",
            color: "#0A2540",
            borderColor: "#476788",
            fontSize: "12px",
            "&:hover": { backgroundColor: "#E6F0FF" },
          }}
        >
          Show all
        </Button>
      </Box>
      <Box
        display="flex"
        justifyContent="center"
        mt="32px"
        sx={{
          backgroundColor: "#F2F8FF",
          borderRadius: "8px",
          border: "2px solid rgb(209, 209, 209)",
        }}
        height="50px"
      >
        <Typography mt="13px">
          Didn't see the integration you're looking for?{" "}
          <a href="#letsknow">Let us know</a>
        </Typography>
      </Box>
    </Box>
  );
}
