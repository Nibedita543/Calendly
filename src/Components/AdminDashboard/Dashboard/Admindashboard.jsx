import { Box, Button, Chip, Typography } from '@mui/material'
import React from 'react'
import { AiOutlineDollarCircle } from 'react-icons/ai'

export default function Admindashboard() {
  return (
    <Box>
      <Box
        display="flex"
        justifyContent="space-between"
        sx={{
          backgroundColor: "#F2F8FF",
          padding: "24px",
          marginBottom: "16px",
          borderRadius: "8px",
          border: "2px solid #0069FF",
        }}
      >
        <Box display={"flex"}>
          <AiOutlineDollarCircle
            style={{ color: "#0069FF", fontSize: "20px" }}
          />
          <Typography mx={1}>
            Upgrade to the Standard plan to access this feature and other
            advanced scheduling tools
          </Typography>
        </Box>
        <Box>
          <Button sx={{ borderRadius: "8px", backgroundColor: "#0069FF",color:"#fff" }}>
            mkcsdn
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
