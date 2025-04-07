import { useState } from "react";
import Header from "../Dashboard-Components/Availability-Component/Header.jsx";
import Content from "./Availability-Component/Schedules.jsx";
import { Outlet, useNavigate } from "react-router-dom";
import { BiPlus } from "react-icons/bi";
import {
  Box,
  Tabs,
  Tab,
  Button,
  Typography,
  Switch,
  IconButton,
} from "@mui/material";
import { NAVIGATION_ROUTES } from "../../constants/NavigationRoutes.js";

const AvailabilityLayout = () => {
  const [value, setValue] = useState(NAVIGATION_ROUTES.AVAILABILITY_SCHEDULES);
  const navigate = useNavigate();

  const handleChange = (event, newValue) => {
    setValue(newValue);
    navigate(newValue);
  };
  return (
    <section style={{ padding: "20px" }}>
      <Header />
      <Box sx={{ width: "100%", p: 3 }}>
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
            label="Schedules"
            value={NAVIGATION_ROUTES.AVAILABILITY_SCHEDULES}
          />
          <Tab
            label="Holidays"
            value={NAVIGATION_ROUTES.AVAILABILITY_HOLIDAYS}
          />
          <Tab
            label="Calendar settings"
            value={NAVIGATION_ROUTES.AVAILABILITY_SETTINGS}
          />
        </Tabs>
      </Box>
      <Outlet />
    </section>
  );
};

export default AvailabilityLayout;
