import React, { useState } from "react";
import {
  Box,
  Button,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Popover,
  Typography,
  Grid,
  Divider,
  ListItemIcon,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { FaAngleDown } from "react-icons/fa";
import { Menu, Close, ChevronRight } from "@mui/icons-material";
import ResourcesPopover from "./ResourcesPopover.jsx";
import CustomDrawer from "../Main-Components/Drawer.jsx"; // ✅ Renamed import

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
    { label: "Solutions", onClick: handleClick, hasArrow: true },
    { label: "Enterprise", onClick: () => {} },
    { label: "Pricing", onClick: () => {} },
  ];

  return (
    <>
      {/* Desktop Menu */}
      {!isMobile && (
        <Box sx={{ display: "flex", alignItems: "center", gap: 3 }}>
          {menuItems.map((item, index) => (
            <Button
              key={index}
              onClick={item.onClick}
              aria-describedby={item.hasArrow ? id : undefined}
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
              {item.hasArrow && (
                <FaAngleDown style={{ color: "rgb(71, 103, 136)" }} />
              )}
            </Button>
          ))}
          <ResourcesPopover />
        </Box>
      )}

      {/* Right side: Get started + menu icon */}
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Button
          variant="contained"
          size="large"
          sx={{
            color: "#fff",
            border: "1px solid rgb(0, 107, 255)",
            backgroundColor: "rgb(0, 107, 255)",
            fontWeight: 600,
            borderRadius: "8px",
            textTransform: "none",
            px: { xs: "8px", sm: "10px", md: "19px" },
            py: { xs: "8px", sm: "8px", md: "10px" },
            fontSize: { xs: "0.75rem", sm: "0.81rem", md: "0.875rem" },
            lineHeight: { xs: 1.2, sm: 1.3, md: 1.4 },
            height: { xs: "31px", sm: "40px", md: "44px" },
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

      {/* Popover: Solutions */}
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

      {/* ✅ Mobile Drawer */}
      <CustomDrawer
        drawerOpen={drawerOpen}
        toggleDrawer={toggleDrawer}
        menuItems={menuItems}
          
      />
    </>
  );
}
