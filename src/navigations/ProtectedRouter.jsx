import React from "react";
import { Navigate, Outlet, Route, Routes } from "react-router-dom";
import Sidebar from "../Components/Sidebar/Sidebar";
import DashNavbar from "../Components/Main-Components/Dashnavbar.jsx";
import Dashboard from "../Pages/DASHBOARD/Dashboard";
import { Box } from "@mui/material";
import Meeting from "../../src/Components/Dashboard-Components/Meeting";
import Contacts from "../Components/Dashboard-Components/Contacts";
import { NAVIGATION_ROUTES } from "../constants/NavigationRoutes.js";
import AvailabilityLayout from "../Components/Dashboard-Components/Availability.jsx";
import Schedules from "../Components/Dashboard-Components/Availability-Component/Schedules.jsx";
import Holidays from "../Components/Dashboard-Components/Availability-Component/Holidays.jsx";
import Settings from "../Components/Dashboard-Components/Availability-Component/Settings.jsx";
import Workflow from "../Components/Dashboard-Components/Workflow.jsx";
import Routing from "../Components/Dashboard-Components/Routing.jsx";
import IntegrationApp from "../Components/Dashboard-Components/IntegrationApp.jsx";
import Analytics from "../Components/Dashboard-Components/Analytics.jsx";
import RoutingBody from "../Components/Dashboard-Components/RoutingBody-component/RoutingBody.jsx";
import EventsBody from "../Components/Dashboard-Components/Analytics-Components/EventsBody.jsx";
import RoutingAnalytics from "../Components/Dashboard-Components/Analytics-Components/RoutingAnalytics.jsx";

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

        <Box sx={{}}>
          <Routes>
            <Route
              path={"/"}
              element={<Navigate to={NAVIGATION_ROUTES.EVENT_TYPES} />}
            />
            <Route
              path={NAVIGATION_ROUTES.EVENT_TYPES}
              element={<Dashboard />}
            />
            <Route path={NAVIGATION_ROUTES.MEETING} element={<Meeting />} />
            <Route path={NAVIGATION_ROUTES.CONTACTS} element={<Contacts />} />
            <Route
              path={NAVIGATION_ROUTES.INTEGRATION_AND_APPS}
              element={<IntegrationApp />}
            />

            <Route path="/" element={<AvailabilityLayout />}>
              <Route path={"availability/schedules"} element={<Schedules />} />
              <Route
                path={"availability/holidays"}
                element={
                  <>
                    <Holidays />
                  </>
                }
              />
              <Route
                path={"availability/settings"}
                element={
                  <>
                    <Settings />
                  </>
                }
              />
            </Route>
            <Route path={NAVIGATION_ROUTES.WORKFLOW} element={<Workflow />} />
            <Route path={NAVIGATION_ROUTES.ROUTING} element={<Routing />} />
            <Route path="/analytics" element={<Analytics />}>
              <Route path="events" element={<EventsBody />} />
              <Route path="routing" element={<RoutingAnalytics />} />
            </Route>
          </Routes>
        </Box>
      </Box>
    </Box>
  );
}
