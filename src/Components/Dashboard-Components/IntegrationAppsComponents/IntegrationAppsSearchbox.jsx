import { Box, Button, InputAdornment, Menu, MenuItem, TextField } from '@mui/material'
import React from 'react'
import { IoChevronDownOutline, IoFilterSharp, IoSearchOutline } from 'react-icons/io5';

export default function IntegrationAppsSearchbox() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };
  return (
    <Box display="flex" justifyContent="space-between">
      <Box>
        <TextField
          variant="outlined"
          placeholder="Find integrations,apps, and more"
          size="small"
          sx={{
            width: "450px",
            height: "30px",
            marginTop: "32px",
            borderColor: "#A6BBD1",
            "& .MuiOutlinedInput-root": {
              borderRadius: "8px",
              color: "black",
            },
            "& fieldset": { borderColor: "#A6BBD1" },
            "&:hover fieldset": {
              borderColor: "transparent",
            },
            "&.Mui-focused fieldset": {
              borderColor: "#006BFF",
            },
            "& .MuiInputBase-input::placeholder": {
              color: "#476788",
              opacity: "1",
            },
          }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <IoSearchOutline color="#476788" opacity="1" />
              </InputAdornment>
            ),
          }}
        />
      </Box>
      <Box display="flex" textAlign="center">
        <Button
          variant="outlined"
          onClick={handleClick}
          endIcon={
            <IoChevronDownOutline
              color="#0069FF"
              style={{
                transform: open ? "rotate(180deg)" : "rotate(0deg)",
                transition: "transform 0.3s ease",
              }}
            />
          }
          startIcon={<IoFilterSharp />}
          sx={{
            textTransform: "none", // Keep normal case text
            borderRadius: "8px",
            padding: "6px 16px",
            marginTop: "32px",
            color: "#333",
            borderColor: "#A6BBD1",
            backgroundColor: "#F9FBFD",
            "&:hover": {
              backgroundColor: "#EAF1FB",
              borderColor: "#6C8EBF",
            },
          }}
        >
          All Integrations & Apps
        </Button>
        <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
          <MenuItem onClick={handleClose}>Option 1</MenuItem>
          <MenuItem onClick={handleClose}>Option 2</MenuItem>
          <MenuItem onClick={handleClose}>Option 3</MenuItem>
        </Menu>
      </Box>
    </Box>
  );
}
