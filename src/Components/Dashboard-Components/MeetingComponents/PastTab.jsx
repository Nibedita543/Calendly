import React from "react";
import { Box, Typography } from "@mui/material";

export default function PastTab() {
  return (
    <Box sx={{ textAlign: "center", mt: 4 }}>
            <img
              src="https://assets.calendly.com/assets/frontend/media/no-events-2ed89b6c6379caebda4e.svg"
              style={{ height: "120px", width: "120px" }}
            />
            <Typography variant="h6" fontWeight="bold" color="#476788">
              No Past Events
            </Typography>
    </Box>
  );
}
