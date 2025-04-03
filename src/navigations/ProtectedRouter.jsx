import React from "react";
import { Route, Routes } from "react-router-dom";
import Sidebar from "../Components/Sidebar/Sidebar";
import DashNavbar from "../Components/Dashboard-Components/All-Dashcomp/Dashnavbar";
import Dashboard from "../Pages/DASHBOARD/Dashboard";
import { Box } from "@mui/material";
import Meeting from "../../src/Components/Dashboard-Components/Meeting";
import Contacts from "../Components/Dashboard-Components/Contacts";

export default function ProtectedRouter() {
  const [isCollapsed, setIsCollapsed] = React.useState(false);

  return (
    <Box sx={{ display: "flex", height: "100vh" }}>
      {/* Sidebar */}
      <Sidebar isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />

      {/* Main Content */}
      <Box
        sx={{
          flexGrow: 1,
          // ml: isCollapsed ? "64px" : "270px",
          transition: "margin 0.3s ease-in-out",
          width: "100%",
        }}
      >
        <DashNavbar />

        <Box sx={{ p: 3 }}>
          <Routes>
            <Route path="/event-types" element={<Dashboard />} />
            <Route path="/meeting" element={<Meeting />} />
            <Route path="/contacts" element={<Contacts/>}/>
          </Routes>
        </Box>
      </Box>
    </Box>
  );
}
