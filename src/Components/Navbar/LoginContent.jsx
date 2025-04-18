import React, { useState } from "react";
import {
  Box,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Popover,
  Typography,
  Grid,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { FaAngleDown } from "react-icons/fa";
import { Menu, Close } from "@mui/icons-material";
import ResourcesPopover from "./ResourcesPopover.jsx";
export default function LoginContent() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const handleClick = (event) => setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);
  const toggleDrawer = () => setDrawerOpen(!drawerOpen);
  const open = Boolean(anchorEl);
  const id = open ? "solutions-popover" : undefined;
  const menuItems = [
    { label: "Product", onClick: () => {} },
    { label: "Solutions", onClick: handleClick, hasDropdown: true },
    { label: "Enterprise", onClick: () => {} },
    { label: "Pricing", onClick: () => {} },
  ];
  return (
    <
      // Box
      // sx={{ display: "flex", alignItems: "center", marginLeft: "auto", gap: 2 }}
    >
      {/* Center nav items - shown only on md+ */}
      {!isMobile && (
        <Box sx={{ display: "flex", alignItems: "center", gap: 3 }}>
          {menuItems.map((item, index) => (
            <Button
              key={index}
              onClick={item.onClick}
              aria-describedby={item.hasDropdown ? id : undefined}
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "4px",
                fontSize: "0.9rem",
                fontWeight: 700,
                color: "rgb(11, 53, 88)",
                textTransform: "none",
                "&:hover": {
                  color: "rgb(0, 107, 255)",
                },
              }}
            >
              {item.label}
              {item.hasDropdown && (
                <FaAngleDown style={{ color: "rgb(71, 103, 136)" }} />
              )}
            </Button>
          ))}
          <ResourcesPopover />
        </Box>
      )}

      {/* Right side: Get started + menu icon */}
      <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
        <Button
          variant="contained"
          size="large"
          sx={{
            backgroundColor: "rgb(0, 107, 255)",
            color: "white",
            fontWeight: 600,
            textTransform: "none",
            borderRadius: "8px",
            px: 2,
            "&:hover": {
              backgroundColor: "rgb(0, 78, 186)",
            },
          }}
        >
          Get started
        </Button>

        {isMobile && (
          <IconButton onClick={toggleDrawer}>
            <Menu sx={{ fontSize: 28, color: "rgb(11, 53, 88)" }} />
          </IconButton>
        )}
      </Box>
      {/* Solutions Popover (desktop only) */}
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        transformOrigin={{ vertical: "top", horizontal: "center" }}
        sx={{ mt: 3 }}
      >
        <Box
          sx={{
            width: "1000px",
            backgroundColor: "white",
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
            borderRadius: "10px",
            p: 3,
          }}
        >
          <Grid container spacing={4}>
            {/* BY ROLE */}
            <Grid item xs={4} sx={{ borderRight: "1px solid #e0e0e0" }}>
              <Typography
                variant="subtitle2"
                sx={{
                  fontSize: "1rem",
                  lineHeight: 1.2,
                  fontWeight: 600,
                  letterSpacing: "1.25px",
                  color: "rgb(166, 187, 209)",
                  pl: 2,
                  pb: 1,
                }}
              >
                BY ROLE
              </Typography>
              <List>
                {[
                  "Sales",
                  "Marketing",
                  "Customer Success",
                  "Recruiting",
                  "Revenue Operations",
                  "Information Technology",
                  "All Teams",
                ].map((text) => (
                  <ListItem button key={text}>
                    <ListItemText
                      primary={text}
                      primaryTypographyProps={{
                        fontSize: 19,
                        fontWeight: 500,
                        color: "rgb(11, 53, 88)",
                        sx: {
                          "&:hover": {
                            color: "rgb(0, 107, 255)",
                            cursor: "pointer",
                          },
                        },
                      }}
                    />
                  </ListItem>
                ))}
              </List>
            </Grid>

            {/* BY INDUSTRY */}
            <Grid item xs={4}>
              <Typography
                variant="subtitle2"
                sx={{
                  fontSize: "1rem",
                  lineHeight: 1.2,
                  fontWeight: 600,
                  letterSpacing: "1.25px",
                  color: "rgb(166, 187, 209)",
                  pl: 2,
                  pb: 1,
                }}
              >
                BY INDUSTRY
              </Typography>
              <List>
                {[
                  "Technology",
                  "Financial Services",
                  "Professional Services",
                  "Education",
                ].map((text) => (
                  <ListItem button key={text}>
                    <ListItemText
                      primary={text}
                      primaryTypographyProps={{
                        fontSize: 19,
                        fontWeight: 500,
                        color: "rgb(11, 53, 88)",
                        sx: {
                          "&:hover": {
                            color: "rgb(0, 107, 255)",
                            cursor: "pointer",
                          },
                        },
                      }}
                    />
                  </ListItem>
                ))}
              </List>
            </Grid>

            {/* BY SIZE */}
            <Grid item xs={4}>
              <Typography
                variant="subtitle2"
                sx={{
                  fontSize: "1rem",
                  lineHeight: 1.2,
                  fontWeight: 600,
                  letterSpacing: "1.25px",
                  color: "rgb(166, 187, 209)",
                  pl: 2,
                  pb: 1,
                }}
              >
                BY SIZE
              </Typography>
              <List>
                {["Enterprise", "Small & Medium Businesses", "Individuals"].map(
                  (text) => (
                    <ListItem button key={text}>
                      <ListItemText
                        primary={text}
                        primaryTypographyProps={{
                          fontSize: 19,
                          fontWeight: 500,
                          color: "rgb(11, 53, 88)",
                          sx: {
                            "&:hover": {
                              color: "rgb(0, 107, 255)",
                              cursor: "pointer",
                            },
                          },
                        }}
                      />
                    </ListItem>
                  )
                )}
              </List>
            </Grid>
          </Grid>
        </Box>
      </Popover>
      {/* Drawer for mobile nav */}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={toggleDrawer}
        PaperProps={{
          sx: {
            width: "100%",
            backgroundColor: "#fff",
            p: 3,
          },
        }}
      >
        <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
          <IconButton onClick={toggleDrawer}>
            <Close />
          </IconButton>
        </Box>
        <List>
          {menuItems.map((item, index) => (
            <ListItem button key={index} onClick={item.onClick}>
              <ListItemText
                primary={item.label}
                primaryTypographyProps={{
                  fontSize: 20,
                  fontWeight: 600,
                  color: "rgb(11, 53, 88)",
                }}
              />
            </ListItem>
          ))}
        </List>
        <ResourcesPopover />
      </Drawer>
    </>
  );
}
