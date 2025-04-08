import { useState } from "react";
import Header from "../Main-Components/Header.jsx";
import { Outlet, useNavigate } from "react-router-dom";
import { BiPlus } from "react-icons/bi";
import { Box, Tabs, Tab } from "@mui/material";
import { NAVIGATION_ROUTES } from "../../constants/NavigationRoutes.js";

const AnalyticsLayout = () => {
  const [value, setValue] = useState(NAVIGATION_ROUTES.AVAILABILITY_SCHEDULES);
  const navigate = useNavigate();

  const handleChange = (event, newValue) => {
    setValue(newValue);
    navigate(newValue);
  };

  return (
    <section style={{ padding: "10px", paddingLeft: "25px" }}>
      <Header title={"Analytics"} />
      <Box sx={{ width: "100%", height: "100%" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="Schedule Tabs"
          sx={{
            "& .MuiTab-root": {
              color: "#476788",
              textTransform: "none",
              fontSize: "var(--fontSizeMedium, 14px)",
            },
            textTransform: "none",
          }}
        >
          <Tab
            label="Events"
            value={NAVIGATION_ROUTES.ANALYTICS_EVENTS}
          />
          <Tab
            label="Routing"
            value={NAVIGATION_ROUTES.ANALYTICS_ROUTING}
          />
        </Tabs>
      </Box>
      <Outlet />
    </section>
  );
};

export default AnalyticsLayout;
