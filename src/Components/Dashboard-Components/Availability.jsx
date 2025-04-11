import { useState } from "react";
import Header from "../Main-Components/Header.jsx";
import { Outlet, useNavigate } from "react-router-dom";
import { BiPlus } from "react-icons/bi";
import {
  Box,
  Tabs,
  Tab,
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
    <section style={{ paddingLeft: "25px", paddingRight: "25px" }}>
      <Header title={"Availability"} />
      <Box sx={{ width: "94%", height: "100%" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="Schedule Tabs"
          sx={{
            "& .MuiTab-root": {
              color: "#476788",
              textTransform: "none",
              fontSize: "var(--fontSizeMedium, 14px)",
              fontFamily: `"Proxima Nova", sans-serif`,
              lineHeight: 1.5,
              wordBreak: "break-word",
              overflowWrap: "break-word",
              WebkitFontSmoothing: "antialiased",
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
