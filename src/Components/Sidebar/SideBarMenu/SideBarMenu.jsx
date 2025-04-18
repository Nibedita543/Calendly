import { Button, Divider, Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import { SidebarData } from "../SidebarData";
import { IoIosHelpCircleOutline, IoMdArrowDropdown } from "react-icons/io";
import { useLocation, useNavigate } from "react-router-dom";
import { AdminSidebardata } from "../AdminSidebardata";
import HelpDropdown from "./HelpDropdown";

export default function SideBarMenu({ isCollapsed, toggleCollapse }) {
  const [activeItem, setActiveItem] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

 const [helpAnchorEl, setHelpAnchorEl] = useState(null);
 const isHelpOpen = Boolean(helpAnchorEl);

 const handleHelpClick = (event) => {
   setHelpAnchorEl(event.currentTarget);
 };

 const handleHelpClose = () => {
   setHelpAnchorEl(null);
 };


  return (
    <Grid container spacing={2} direction="column">
      <>
        {location.pathname.split("/")[1] === "admin" ? (
          <>
            {AdminSidebardata.map((item, index) => (
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
                    gap: 2,
                    my: 0.5,
                    padding: 1,
                    cursor: "pointer",
                    color:
                      location.pathname === item?.link ? "#0060e6" : "#111",
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
                      fontSize="15px"
                      // color="rgb(10, 37, 64)"
                    >
                      {item.title}
                    </Typography>
                  )}

                  {index === 0 && !isCollapsed && (
                    <Button
                      m={1}
                      fontSize={10}
                      sx={{
                        marginLeft: "auto",
                        textTransform: "none",
                        fontWeight: "600",
                        color: "#fff",
                        backgroundColor: "#0B3558",
                        height: "25px",
                        padding: 0,
                      }}
                      fontWeight={600}
                    >
                      New
                    </Button>
                  )}
                </Grid>

                {index === 0 && !isCollapsed ? (
                  <Typography
                    m={1}
                    fontSize={13}
                    fontWeight={600}
                    sx={{ padding: "8px 24px 8px 16px", color: "#476788" }}
                  >
                    Organization Settings
                  </Typography>
                ) : index === 5 ? (
                  <Typography
                    m={1}
                    fontSize={13}
                    fontWeight={600}
                    sx={{ padding: "8px 24px 8px 16px", color: "#476788" }}
                  >
                    Scheduling Settings
                  </Typography>
                ) : null}
              </React.Fragment>
            ))}
          </>
        ) : (
          <>
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
                    gap: 2,
                    padding: 1,
                    my: 0.5,
                    cursor: "pointer",
                    color:
                      location.pathname === item?.link ? "#0060e6" : "#111",
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
                      fontSize="15px"
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
          </>
        )}
        <Grid
          onClick={handleHelpClick}
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
        <HelpDropdown
          anchorEl={helpAnchorEl}
          open={isHelpOpen}
          onClose={handleHelpClose}
        />
      </>
    </Grid>
  );
}
