import React from "react";
import { Box } from "@mui/material";
import RoutingBody from "./RoutingBody-component/RoutingBody";


function Routing() {
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
    <RoutingBody/>
    </Box>
  );
}

export default Routing;
