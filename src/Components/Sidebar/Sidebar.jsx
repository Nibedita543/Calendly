import { Drawer } from "@mui/material";
import React, { useState } from "react";
import LogoofCalendly from "./LogoofCalendly/LogoofCalendly";
import CreateButton from "./CreateButton/CreateButton";
import SideBarMenu from "./SideBarMenu/SideBarMenu";

export default function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleCollpase = () => setIsCollapsed((prev) => !prev);

  return (
    <Drawer
      open={true}
      variant="persistent"
      sx={{
        width: "auto",
        overflowY:"auto",
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: {
          width: isCollapsed ? "auto" : 270,
          boxSizing: "border-box",
          padding: 2,
        },
      }}
    >
      <LogoofCalendly isCollapsed={isCollapsed} handleToggle={toggleCollpase} />
      {!isCollapsed && <CreateButton />}
      <SideBarMenu isCollapsed={isCollapsed} toggleCollapse={toggleCollpase} />
    </Drawer>
  );
}
