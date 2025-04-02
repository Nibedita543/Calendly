import { Divider, Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import { SidebarData } from "../SidebarData";
import { IoIosHelpCircleOutline, IoMdArrowDropdown } from "react-icons/io";
import { useLocation, useNavigate } from "react-router-dom";

export default function SideBarMenu({ isCollapsed, toggleCollapse }) {
  const [activeItem, setActiveItem] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <Grid container spacing={2} direction="column">
      {SidebarData.map((item, index) => (
        <React.Fragment key={item.id}>
          <Grid
            item
            key={item.id}
            onClick={() => navigate(item?.link || "#")}
            sx={{
              ml: 1,
              p: 2,
              display: "flex",
              alignItems: "center",
              borderRadius: "8px",
              height: "50px",
              gap: 1,
              padding: 1,
              cursor: "pointer",
              color: location.pathname === item?.link ? "#0060e6" : "#111",
              backgroundColor:
                location.pathname === item?.link ||
                item.title === "Upgrade plan"
                  ? "#F2F8FF"
                  : "transparent",
              border:
                item.title === "Upgrade plan"
                  ? "1px solid #81B5FF"
                  : "transparent",

              "&:hover": { backgroundColor: "#F2F8FF" },
            }}
          >
            {item.icon}
            {!isCollapsed && (
              <Typography
                sx={{ fontWeight: 600 }}
                fontSize="14px"
                // color="rgb(10, 37, 64)"
              >
                {item.title}
              </Typography>
            )}
          </Grid>

          {index === 2 && (
            <Divider
              sx={{
                my: 1,
              }}
            />
          )}
        </React.Fragment>
      ))}
      <Grid
        item
        sx={{
          ml: 1,
          p: 2,
          display: "flex",
          alignItems: "center",
          borderRadius: "8px",
          height: "50px",
          gap: 1,
          padding: 1,
          cursor: "pointer",
          border: "transparent",
          backgroundColor: "transparent",
          "&:hover": { backgroundColor: "#F2F8FF" },
        }}
      >
        <IoIosHelpCircleOutline style={{ fontSize: "20px" }} />
        {!isCollapsed && (
          <Typography
            sx={{ fontWeight: 600 }}
            fontSize="14px"
            display={"flex"}
            alignContent={"center"}
            color="rgb(10, 37, 64)"
          >
            Help <IoMdArrowDropdown fontSize="20px" />
          </Typography>
        )}
      </Grid>
    </Grid>
  );
}
