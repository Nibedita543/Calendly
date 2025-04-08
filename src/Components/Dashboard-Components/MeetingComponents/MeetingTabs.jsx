import React, { useState } from "react";
import { Box, Button, Chip, Paper, Tab } from "@mui/material";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import { IoDownloadOutline, IoFilterOutline } from "react-icons/io5";
import {  ArrowDropDownCircleOutlined } from "@mui/icons-material";
import { FaCaretDown } from "react-icons/fa";
import NoDataMessage from "../../Main-Components/NoDataMessage";

export default function MeetingTabs() {
  const [value, setValue] = useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Paper
      sx={{
        width: "100%",
        typography: "body1",
        marginTop: "20px",
        borderRadius: "8px",
      }}
    >
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider", mt: "3" }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="Upcomming" value="1" sx={{ color: "#666666" }} />
            <Tab label="Pending" value="2" />
            <Tab label="Past" value="3" />
            <Tab
              label={
                <Box sx={{ display: "flex", alignItems: "center", gap: 0.4 }}>
                  Date Range <FaCaretDown style={{ marginBottom: "8px" }} />
                </Box>
              }
              value="4"
            />
          </TabList>
        </Box>
        <TabPanel value="1">
          <NoDataMessage title="No Upcoming Events" />
        </TabPanel>

        <TabPanel value="2">
          <NoDataMessage title="No Pending Events" />
        </TabPanel>

        <TabPanel value="3">
          <NoDataMessage title="No Past Events" />
        </TabPanel>

        <TabPanel value="4">
          <NoDataMessage title="No Events in Date Range" />
        </TabPanel>
      </TabContext>
    </Paper>
  );
}
