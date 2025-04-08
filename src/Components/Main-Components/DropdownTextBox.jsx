import {
  Box,
  InputAdornment,
  Menu,
  MenuItem,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { GoChevronDown } from "react-icons/go";
import { LiaSearchSolid } from "react-icons/lia";
import { Link } from "react-router-dom";

export default function DropdownTextBox() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box display="flex" alignItems="center" gap="" width="100%">
      <TextField
        style={{ marginTop: "30px", width: "20%" }}
        variant="outlined"
        placeholder="My Calendly"
        onClick={handleClick}
        sx={{
          cursor: "pointer",
          "& .MuiInputBase-input::placeholder": {
            color: "#0A2540",
            fontSize: "14px",
            opacity: 1,
          },
        }}
        InputProps={{
          readOnly: true,
          endAdornment: (
            <InputAdornment
              position="end"
              sx={{ marginRight: "8px" }}
              style={{
                transition: "transform 0.3s ease",
                transform: open ? "rotate(180deg)" : "rotate(0deg)",
              }}
            >
              <GoChevronDown size={20} color="#0A2540" />
            </InputAdornment>
          ),
        }}
      />
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          sx: { padding: 2, width: "250px", borderRadius: "8px" },
        }}
      >
        <TextField
          variant="standard"
          placeholder="Filter"
          fullWidth
          sx={{ marginBottom: 2 }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <LiaSearchSolid size={"22px"} />
              </InputAdornment>
            ),
          }}
        />
        <MenuItem
          onClick={handleClose}
          sx={{ whiteSpace: "normal", wordBreak: "break-word" }}
        >
          Works together with a Calendly organization
        </MenuItem>
        <MenuItem
          onClick={handleClose}
          sx={{ whiteSpace: "normal", wordBreak: "break-word" }}
        >
          When you add users to your Calendly organization you can create Team
          Pages,Team Event Types, and much more.
        </MenuItem>
        <MenuItem
          onClick={handleClose}
          sx={{ whiteSpace: "normal", wordBreak: "break-word" }}
        >
          <Link to="/admin">Visit your Users page to learn more</Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Link to="/admin">Add seats</Link>
        </MenuItem>
      </Menu>
    </Box>
  );
}
