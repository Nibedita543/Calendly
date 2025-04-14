import React from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import { Box } from "@mui/material";

// Layout Components
import Sidebar from "../Components/Sidebar/Sidebar";
import DashNavbar from "../Components/Main-Components/Dashnavbar.jsx";

// Pages
import Dashboard from "../Pages/DASHBOARD/Dashboard";
import Meeting from "../Components/Dashboard-Components/Meeting";
import Contacts from "../Components/Dashboard-Components/Contacts";
import AvailabilityLayout from "../Components/Dashboard-Components/Availability.jsx";
import Schedules from "../Components/Dashboard-Components/Availability-Component/Schedules.jsx";
import Holidays from "../Components/Dashboard-Components/Availability-Component/Holidays.jsx";
import Settings from "../Components/Dashboard-Components/Availability-Component/Settings.jsx";
import Workflow from "../Components/Dashboard-Components/Workflow.jsx";
import Routing from "../Components/Dashboard-Components/Routing.jsx";
import IntegrationApp from "../Components/Dashboard-Components/IntegrationApp.jsx";
import Analytics from "../Components/Dashboard-Components/Analytics.jsx";
import EventsBody from "../Components/Dashboard-Components/Analytics-Components/EventsBody.jsx";
import RoutingAnalytics from "../Components/Dashboard-Components/Analytics-Components/RoutingAnalytics.jsx";
import Upgradeplan from "../Components/Dashboard-Components/Upgradeplan.jsx";

// Routes Constants
import { NAVIGATION_ROUTES } from "../constants/NavigationRoutes.js";

export default function ProtectedRouter() {
  const [isCollapsed, setIsCollapsed] = React.useState(false);
  const location = useLocation();

  const isUpgradePage = location.pathname === NAVIGATION_ROUTES.UPGRADE_PLAN;

  if (isUpgradePage) {
    return (
      <Routes>
        <Route
          path={NAVIGATION_ROUTES.UPGRADE_PLAN}
          element={<Upgradeplan />}
        />
        <Route
          path="*"
          element={<Navigate to={NAVIGATION_ROUTES.UPGRADE_PLAN} />}
        />
      </Routes>
    );
  }

  return (
    <Box sx={{ display: "flex", height: "100vh" }}>
      {/* Sidebar */}
      <Sidebar isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />

      {/* Main Content */}
      <Box
        sx={{
          flexGrow: 1,
          transition: "margin 0.3s ease-in-out",
          width: "100%",
        }}
      >
        <DashNavbar />

        <Box>
          <Routes>
            <Route
              path="/"
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

            {/* Availability Section */}
            <Route path="availability" element={<AvailabilityLayout />}>
              <Route path="schedules" element={<Schedules />} />
              <Route path="holidays" element={<Holidays />} />
              <Route path="settings" element={<Settings />} />
            </Route>

            <Route path={NAVIGATION_ROUTES.WORKFLOW} element={<Workflow />} />
            <Route path={NAVIGATION_ROUTES.ROUTING} element={<Routing />} />

            {/* Analytics with nested routes */}
            <Route path={NAVIGATION_ROUTES.ANALYTICS} element={<Analytics />}>
              <Route path="events" element={<EventsBody />} />
              <Route path="routing" element={<RoutingAnalytics />} />
            </Route>

            <Route
              path="*"
              element={<Navigate to={NAVIGATION_ROUTES.EVENT_TYPES} />}
            />
          </Routes>
        </Box>
      </Box>
    </Box>
  );
}
