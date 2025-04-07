import React, { useState } from "react";
import { Box, Button, Chip, Paper, Tab } from "@mui/material";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import { IoDownloadOutline, IoFilterOutline } from "react-icons/io5";
import {  ArrowDropDownCircleOutlined } from "@mui/icons-material";
import UpcommingTab from "./UpcommingTab";
import PendingTab from "./PendingTab";
import PastTab from "./PastTab";
import DateRange from "./DateRange";
import { FaCaretDown } from "react-icons/fa";

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
          <UpcommingTab />
        </TabPanel>
        <TabPanel value="2">
          <PendingTab />
        </TabPanel>
        <TabPanel value="3">
          <PastTab />
        </TabPanel>
        <TabPanel value="3">
          <DateRange />
        </TabPanel>
      </TabContext>
    </Paper>
  );
}
