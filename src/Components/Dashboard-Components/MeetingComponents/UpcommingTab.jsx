import { Box, Button, Typography } from '@mui/material';
import React from 'react'

export default function UpcommingTab() {
  return (
    <Box sx={{ textAlign: "center", mt: 4 }}>
      <img
        src="https://assets.calendly.com/assets/frontend/media/no-events-2ed89b6c6379caebda4e.svg"
        style={{ height: "120px", width: "120px" }}
      />
      <Typography variant="h6" fontWeight="bold" color="#476788">
        No Events Yet
      </Typography>
      <Typography variant="body2" color="#476788">
        Share Event Type links to schedule events.
      </Typography>
      <Button
        variant="contained"
        sx={{
          mt: 2,
          backgroundColor: "#007bff",
          borderRadius: "16px",
          "&:hover": { backgroundColor: "#004EBA" },
        }}
      >
        View Event Types
      </Button>
    </Box>
  );
}
