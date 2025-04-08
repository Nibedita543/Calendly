import React from "react";
import { Box, Typography } from "@mui/material";

function NoDataMessage({ title = "No Data Found", imageUrl, subtitle }) {
  return (
    <Box sx={{ textAlign: "center", mt: 4 }}>
      <Box
        component="img"
        src={
          imageUrl ||
          "https://assets.calendly.com/assets/frontend/media/no-events-2ed89b6c6379caebda4e.svg"
        }
        alt="No data"
        sx={{ height: 120, width: 120 }}
      />
      <Typography
        variant="h6"
        sx={{ fontWeight: "bold", color: "#476788", mt: 2 }}
      >
        {title}
      </Typography>
      {subtitle && (
        <Typography variant="body2" sx={{ color: "text.secondary", mt: 1 }}>
          {subtitle}
        </Typography>
      )}
    </Box>
  );
}

export default NoDataMessage;
