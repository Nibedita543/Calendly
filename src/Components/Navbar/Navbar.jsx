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
} from "@mui/material";
import LanguageIcon from "@mui/icons-material/Language";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { FaAngleDown } from "react-icons/fa";
import "./Navbar.css";

const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
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
          <IconButton className="icon">
            <LanguageIcon />
          </IconButton>
          <div className="language-dropdown">
            <button
              className="dropdown-btn"
              onClick={() => setShowDropdown(!showDropdown)}
            >
              English <FaAngleDown className="dropdown-icon" />
            </button>
            {showDropdown && (
              <div className="dropdown-menu">
                <button className="dropdown-item">English</button>
                <button className="dropdown-item">Español</button>
                <button className="dropdown-item">Français</button>
                <button className="dropdown-item">Deutsch</button>
              </div>
            )}
          </div>
          <Button className="menu-item">Talk to sales</Button>
        </div>
      </AppBar>

      <AppBar position="static" className="navbar">
        <Toolbar className="navbar-toolbar">
          <img
            src="https://marketing-assets.calendly.com/media/logo.svg"
            alt="Calendly Logo"
            className="logo"
          />
          <div className="menu desktop-menu">
            <Button className="menu-item">Product</Button>
            <Button
              className="menu-item"
              aria-describedby={id}
              onClick={handleClick}
            >
              Solutions <FaAngleDown className="dropdown-icon" />
            </Button>
            <Button className="menu-item">Enterprise</Button>
            <Button className="menu-item">Pricing</Button>
            <Button className="menu-item">Resources</Button>
          </div>
          <div className="right-side">
            <Button variant="contained" className="get-started">
              <span className="get-started-text">Get Started</span>
            </Button>
            <IconButton
              className="menu-icon"
              onClick={() => setMobileOpen(true)}
            >
              <MenuIcon />
            </IconButton>
          </div>
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
        sx={{ mt: 4 }}
      >
        <div className="solutions-dropdown">
          <Grid container spacing={3} className="dropdown-content">
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
        </div>
      </Popover>
    </div>
  );
};

export default Navbar;
