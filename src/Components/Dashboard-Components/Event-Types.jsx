import React from "react";
import { Box, Typography } from "@mui/material";
import DashNavbar from "./All-Dashcomp/Dashnavbar.jsx"; 
import BoxContent from "./All-Dashcomp/ContentBox.jsx";

function EventType() {
  return (
    <Box>
      <DashNavbar />
      <Box sx={{ width: "100%", display: "flex", alignItems: "center",justifyContent: "center" ,bgcolor: "#f5f5f5"}}>
        <BoxContent />
      </Box>
    </Box>
  );
}

export default EventType;
