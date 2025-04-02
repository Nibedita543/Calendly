import React from "react";
import LeftCollapse from "../../../assets/left-collapse-icon.svg";
import { Box, Tooltip } from "@mui/material";

export default function LogoofCalendly({ handleToggle, isCollapsed }) {
  return (
    <Box
      display={"flex"}
      alignItems={"center"}
      justifyContent={"space-between"}
    >
      <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 2 }}>
        <img
          src="https://assets.calendly.com/assets/frontend/media/calendly-33a0809afc4c21162dd7.svg"
          style={{ width: "28px", height: "28px" }}
        />
        {!isCollapsed && (
          <img
            src="https://assets.calendly.com/assets/frontend/media/calendly-wordmark-0da6c58d9a06b08c975f.svg"
            style={{ marginTop: "6px" }}
          />
        )}
      </Box>
      <Tooltip title={isCollapsed ? "" : "Collapse Navigation"} arrow>
        <Box component="img"
          src={LeftCollapse}
          sx={{
            marginBottom: "10px",
            transform: isCollapsed ? "rotate(180deg)" : "rotate(0deg)", 
            transition: "transform 0.3s ease",
            "&:hover": { backgroundColor: "#DBF1FF" },
          }}
          onClick={handleToggle}
        />
      </Tooltip>
    </Box>
  );
}
