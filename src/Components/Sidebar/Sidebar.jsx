import { Drawer, IconButton } from "@mui/material";
import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import LogoofCalendly from "./LogoofCalendly/LogoofCalendly";
import CreateButton from "../Main-Components/CreateButton.jsx";
import SideBarMenu from "./SideBarMenu/SideBarMenu";
import ToggledCreateButton from "./CreateButton/ToggledCreateButton";

export default function Sidebar({ isCollapsed, setIsCollapsed }) {
  const toggleCollapse = () => setIsCollapsed((prev) => !prev);

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
      {isCollapsed ? <ToggledCreateButton /> : <CreateButton />}
      <SideBarMenu isCollapsed={isCollapsed} />
    </Drawer>
  );
}
