import { Box, Typography, Tooltip, Switch } from "@mui/material";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import React from "react";
import Header from "../Main-Components/Header";
import DropdownTextBox from "../Main-Components/DropdownTextBox";
import MeetingTabs from "./MeetingComponents/MeetingTabs";

export default function Meeting() {
  return (
    <Box >
      <Header title={"Meeting"} />
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          px: 2,
          py: 1,
          backgroundColor: "#fafafa",
        }}
      >
        <Box sx={{}}>
          <DropdownTextBox />
          <Box sx={{ display: "flex", alignItems: "center", ml: 1, gap: 0.5 }}>
            <Typography sx={{ fontSize: "14px" }}>Show buffers</Typography>
            <Tooltip title="Toggle buffer visibility">
              <InfoOutlinedIcon fontSize="small" sx={{ color: "#5f6368" }} />
            </Tooltip>
            <Switch size="small" defaultChecked />
          </Box>
        </Box>

        {/* Right Side: Displaying 0 - 0 of 0 Events */}
        <Typography
          variant="body2"
          sx={{ fontSize: "14px", color: "rgb(95, 99, 104)" }}
        >
          Displaying 0 – 0 of 0 Events
        </Typography>
      </Box>

      <MeetingTabs />
    </Box>
  );
}
