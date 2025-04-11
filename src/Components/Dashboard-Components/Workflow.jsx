import React from "react";
import { Box, Typography } from "@mui/material";
import WorkflowBody from "./Workflow-Component/Workflow-Body";





function WorkFlow() {
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
    <WorkflowBody/>
  
    </Box>
  );
}

export default WorkFlow;
