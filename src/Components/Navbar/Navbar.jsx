import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Popover,
  Typography,
  Grid,
  Container,
} from "@mui/material";
import { MdDone } from "react-icons/md";
import { FaAngleDown } from "react-icons/fa";
import GlobalButton from "../../Globaly-Components/GlobalButton/GlobalButton.jsx";
import GlobalImage from "../../Globaly-Components/GlobalImage/GlobalImage.jsx";
import GlobalList from "../../Globaly-Components/GlobalLists/GlobalList.jsx";
import GlobalIcon from "../../Globaly-Components/GlobalIcon/GlobalIcon.jsx";
import ResourcesPopover from "./ResourcesPopover.jsx";
import "./Navbar.css";
const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const open = Boolean(anchorEl);
  const id = open ? "solutions-popover" : undefined;
  return (
    <div className="navbar-container">
      <AppBar position="static" className="navbar-top-container">
        <div className="navbar-top">
          <IconButton
            className="icon"
            sx={{
              backgroundColor: "transparent",
              paddingLeft: "5px",
            }}
          >
            <GlobalIcon name="Language" size="23px" />
          </IconButton>
          <div className="language-dropdown">
            <GlobalButton
              variant="text"
              size="small"
              sx={{
                color: "rgb(71, 103, 136)",
                fontWeight: "700",
                display: "flex",
                alignItems: "center",
                textTransform: "none",
              }}
              onClick={() => setShowDropdown(!showDropdown)}
            >
              English <FaAngleDown className="dropdown-icon" />
            </GlobalButton>

            {showDropdown && (
              <div className="dropdown-menu">
                {["English", "Español", "Français", "Deutsch", "Portugues"].map(
                  (language) => (
                    <GlobalButton
                      key={language}
                      variant="text"
                      fullWidth
                      sx={{
                        justifyContent: "space-between", // Text left, checkmark right
                        color: "rgb(71, 103, 136)",
                        fontWeight: "600",
                        padding: "16px",
                        height: "64px",
                        backgroundColor:
                          language.trim() === "English"
                            ? "rgb(240, 243, 248)"
                            : "transparent",
                        "&:hover": { backgroundColor: "rgb(240, 243, 248)" }, // Hover effect
                      }}
                      onClick={() => console.log(`Selected: ${language}`)}
                    >
                      <span>{language}</span>
                      {language.trim() === "English" && (
                        <MdDone size="20px" color="black" />
                      )}
                    </GlobalButton>
                  )
                )}
              </div>
            )}
          </div>
          <GlobalButton
            variant="text"
            size="medium"
            sx={{
              color: "rgb(71, 103, 136)",
              fontWeight: "700",
              textTransform: "none",
              "&:hover": { color: "rgb(0, 107, 255)" },
            }}
          >
            Talk to sales
          </GlobalButton>
        </div>
      </AppBar>

      <AppBar position="static" className="navbar">
        <Toolbar className="navbar-toolbar">
          <GlobalImage
            src="https://marketing-assets.calendly.com/media/logo.svg"
            alt="Calendly Logo"
            width="200px"
            height="95px"
            objectFit="contain"
            className="logo"
            sx={{
              cursor: "pointer",
              transition: "0.3s",
            }}
            fallbackSrc="https://via.placeholder.com/120x40"
          />
          <div className="menu desktop-menu">
            {[
              { label: "Product", onClick: () => {} },
              { label: "Solutions", onClick: handleClick, hasDropdown: true },
              { label: "Enterprise", onClick: () => {} },
              { label: "Pricing", onClick: () => {} },
            ].map((item, index) => (
              <GlobalButton
                key={index}
                variant="text"
                size="medium"
                sx={{
                  color: "rgb(11, 53, 88)",
                  fontWeight: "700",
                  textTransform: "none",
                  display: "flex",
                  alignItems: "center",
                  "&:hover": { color: "rgb(0, 107, 255)" },
                }}
                aria-describedby={item.hasDropdown ? id : undefined}
                onClick={item.onClick}
              >
                {item.label}{" "}
                {item.hasDropdown && <FaAngleDown className="dropdown-icon" />}
              </GlobalButton>
            ))}
            <ResourcesPopover />
          </div>
          <GlobalButton
            variant="contained"
            size="large"
            sx={{
              backgroundColor: "rgb(0, 107, 255)",
              color: "white",
              fontWeight: "600",
              padding: "10px 16px",
              "&:hover": { backgroundColor: "rgb(0, 78, 186)" },
            }}
          >
            Get Started
          </GlobalButton>
        </Toolbar>
      </AppBar>
      {/* Solutions Dropdown Popover */}
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        transformOrigin={{ vertical: "top", horizontal: "center" }}
        sx={{ mt: 3 }}
      >
        <Grid className="solutions-dropdown">
          <Grid container spacing={4} className="dropdown-content">
            <Grid item xs={4} className="one">
              <Typography variant="subtitle2">BY ROLE</Typography>
              <List>
                <ListItem button>
                  <ListItemText primary="Sales" />
                </ListItem>
                <ListItem button>
                  <ListItemText primary="Marketing" />
                </ListItem>
                <ListItem button>
                  <ListItemText primary="Customer Success" />
                </ListItem>
                <ListItem button>
                  <ListItemText primary="Recruiting" />
                </ListItem>
                <ListItem button>
                  <ListItemText primary="Revenue Operations" />
                </ListItem>
                <ListItem button>
                  <ListItemText primary="Information Technology" />
                </ListItem>
                <ListItem button>
                  <ListItemText primary="All Teams" />
                </ListItem>
              </List>
            </Grid>
            <Grid item xs={4}>
              <Typography variant="subtitle2">BY INDUSTRY</Typography>
              <List>
                <ListItem button>
                  <ListItemText primary="Technology" />
                </ListItem>
                <ListItem button>
                  <ListItemText primary="Financial Services" />
                </ListItem>
                <ListItem button>
                  <ListItemText primary="Professional Services" />
                </ListItem>
                <ListItem button>
                  <ListItemText primary="Education" />
                </ListItem>
              </List>
            </Grid>
            <Grid item xs={4}>
              <Typography variant="subtitle2">BY SIZE</Typography>
              <List>
                <ListItem button>
                  <ListItemText primary="Enterprise" />
                </ListItem>
                <ListItem button>
                  <ListItemText primary="Small & Medium Businesses" />
                </ListItem>
                <ListItem button>
                  <ListItemText primary="Individuals" />
                </ListItem>
              </List>
            </Grid>
          </Grid>
        </Grid>
      </Popover>
    </div>
  );
};
export default Navbar;
