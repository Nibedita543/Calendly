import { Drawer, IconButton, Typography } from "@mui/material";
import React from "react";
import leftchevron from '../../assets/leftcheveron.svg'
import LogoofCalendly from "./LogoofCalendly/LogoofCalendly";
import CreateButton from "../Main-Components/CreateButton.jsx";
import SideBarMenu from "./SideBarMenu/SideBarMenu";
import ToggledCreateButton from "./CreateButton/ToggledCreateButton";
import { Link, useLocation } from "react-router-dom";
import { NAVIGATION_ROUTES } from "../../constants/NavigationRoutes.js";

export default function Sidebar({ isCollapsed, setIsCollapsed }) {
  const toggleCollapse = () => setIsCollapsed((prev) => !prev);
  const location = useLocation();

  return (
    <Drawer
      open
      variant="permanent"
      sx={{
        width: isCollapsed ? "64px" : "270px",
        flexShrink: 0,
        whiteSpace: "nowrap",
        transition: "width 0.3s ease-in-out",
        [`& .MuiDrawer-paper`]: {
          width: isCollapsed ? "64px" : "270px",
          boxSizing: "border-box",
          padding: 2,
          overflowX: "hidden",
        },
      }}
    >
      {/* <IconButton onClick={toggleCollapse} sx={{ mb: 2 }}>
        <MenuIcon />
      </IconButton> */}
      <LogoofCalendly isCollapsed={isCollapsed} handleToggle={toggleCollapse} />
      {location.pathname.split("/")[1] !== "admin" ? (
        isCollapsed ? (
          <ToggledCreateButton />
        ) : (
          <CreateButton />
        )
      ) : (
        <>
          <Link
            to={NAVIGATION_ROUTES.EVENT_TYPES}
            style={{
              textDecoration: "none",
              fontSize: "18px",
              padding: "8px 12px 12px 4px",
              color: "#0069FF",
              fontWeight: "600",
              display: "flex",
              alignItems: "center",
              gap:"5px"
            }}
          >
            <img
              src={leftchevron}
              style={{ height: "16px", width: "16px", color: "#0069FF" }}
            />
            Back to home
          </Link>
          <Typography
            gutterBottom
            fontSize={18}
            fontWeight="bold"
            padding="8px 16px 24px 16px"
            mb={2}
          >
            Admin Center
          </Typography>
        </>
      )}
      <SideBarMenu isCollapsed={isCollapsed} />
    </Drawer>
  );
}
