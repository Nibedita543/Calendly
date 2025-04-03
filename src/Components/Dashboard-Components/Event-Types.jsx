import React from "react";
import { Box, Typography } from "@mui/material";

import BoxContent from "./EventTypes-Components/ContentBox.jsx";

function EventType() {
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        bgcolor: "#f5f5f5",
      }}
    >
      <BoxContent />
    </Box>
  );
}

export default EventType;
