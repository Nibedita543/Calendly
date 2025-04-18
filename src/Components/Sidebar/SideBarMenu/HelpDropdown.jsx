import React from "react";
import { Menu, MenuItem, ListItemIcon } from "@mui/material";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import FeedbackOutlinedIcon from "@mui/icons-material/FeedbackOutlined";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";

export default function HelpDropdown({ anchorEl, open, onClose }) {
  return (
    <Menu
      anchorEl={anchorEl}
      id="help-menu"
      open={open}
      onClose={onClose}
      onClick={onClose}
      PaperProps={{
        elevation: 2,
        sx: {
          mt: 1,
          minWidth: 160, // was 200
          borderRadius: 1.5, // slightly smaller corners
          overflow: "visible",
          paddingY: 0.5, // optional: reduce top/bottom padding
        },
      }}
    >
      <MenuItem
        sx={{ fontSize: "13px", minHeight: "36px" }} // smaller font and height
        component="a"
        href="https://help.calendly.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <ListItemIcon>
          <OpenInNewIcon fontSize="small" color="#0A2540" />
        </ListItemIcon>
        Help center
      </MenuItem>

      <MenuItem
        component="a"
        href="https://community.calendly.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <ListItemIcon>
          <OpenInNewIcon fontSize="small" color="#0A2540" />
        </ListItemIcon>
        Calendly Community
      </MenuItem>

      <MenuItem
        component="a"
        href="https://release-notes.calendly.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <ListItemIcon>
          <OpenInNewIcon fontSize="small" color="#0A2540" />
        </ListItemIcon>
        What's new
      </MenuItem>

      <MenuItem
        component="a"
        href="https://help.calendly.com/hc/en-us/articles/360020626113-Getting-Started"
        target="_blank"
        rel="noopener noreferrer"
      >
        <ListItemIcon>
          <BookmarkBorderIcon fontSize="small" color="#0A2540" />
        </ListItemIcon>
        Get started guide
      </MenuItem>

      <MenuItem component="a" href="mailto:feedback@calendly.com">
        <ListItemIcon>
          <FeedbackOutlinedIcon fontSize="small" color="#0A2540" />
        </ListItemIcon>
        Give feedback
      </MenuItem>
    </Menu>
  );
}
