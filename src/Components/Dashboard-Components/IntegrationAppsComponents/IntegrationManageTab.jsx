import { Box, Typography } from '@mui/material'
import React from 'react'
import CheckCircleIcon from "@mui/icons-material/CheckCircle";


export default function IntegrationManageTab() {
    const data = [
      {
        image:
          "https://assets.calendly.com/assets/frontend/media/google-calendar-9d502e45f709b07b91a1.svg",
        title: "Google Calender",
        status: "Connected",
      },
      {
        image:
          "https://assets.calendly.com/assets/frontend/media/google-meet-74ebbfcacec52008a972.svg",
          title:"Google meet",
          status:"connected"
      },
    ];
  return (
    <Box display="flex" gap={2}>
      {data.map((item, index) => (
        <Box
          key={index}
          display="flex"
          justifyContent={"flex-start"}
          gap={3}
          p={2}
          border="1px solid #F2F2F2"
          borderRadius={2}
          width={"550px"}
          sx={{ "&:hover": { boxShadow: "0px 2px 4px rgba(0,0,0,0.1)" } }}
        >
          <img src={item.image} alt={item.title} width={50} height={50} />
          <Box>
            <Typography fontWeight="bold">
              {item.title} <CheckCircleIcon fontSize='8px'/>
            </Typography>
            <Typography variant="body2" color="textSecondary">
              {item.status}
            </Typography>
          </Box>
        </Box>
      ))}
    </Box>
  );
}
