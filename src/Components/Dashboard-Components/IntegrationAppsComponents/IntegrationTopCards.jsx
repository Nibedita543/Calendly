import { Box, Typography } from '@mui/material'
import React from 'react'
import card1 from '../../../assets/card1.jpg'
import card2 from "../../../assets/card2.jpg";


export default function IntegrationTopCards() {
  return (
    <Box>
      <Typography
        variant="h6"
        display="flex"
        justifyContent="flex-start"
        fontWeight="bold"
      >
        Featured
      </Typography>
      <Box display="flex" justifyContent="center" gap={"16px"} ml={"0px"}>
        <Box
          display="flex"
          justifyContent="center"
          gap={"20px"}
          sx={{
            backgroundImage: `url(${card1})`, 
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            width: 550, 
            height: 150, 
            borderRadius: 3,
            p: 2,
            color: "white",
          }}
        >
          <img
            src="https://assets.calendly.com/assets/frontend/media/chrome-icon-4d7b386f7193e9a89aab.svg"
            alt="chrome"
            height={"80px"}
            width={"80px"}
            style={{ marginTop: "40px" }}
          />
          <Typography sx={{ marginTop: "49px", fontWeight: "bold" }}>
            Calendly for Chrome
            <Typography>
              {" "}
              One-click access to Calendly anywhere to web
            </Typography>
          </Typography>
        </Box>
        <Box
          display="flex"
          justifyContent="center"
          gap={"20px"}
          sx={{
            backgroundImage: `url(${card2})`, 
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            width: 550, 
            height: 150, 
            borderRadius: 3,
            p: 2,
            color: "white",
          }}
        >
          <img
            src="https://assets.calendly.com/assets/frontend/media/ms-teams-icon-ba32316210502dcc1fee.svg"
            alt="chrome"
            height={"80px"}
            width={"80px"}
            style={{ marginTop: "40px" }}
          />
          <Typography sx={{ marginTop: "49px", fontWeight: "bold" }}>
            Microsoft Team chat
            <Typography>
              {" "}
              Get Personal Notifications for your Calendly Events
            </Typography>
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
