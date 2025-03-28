import React from "react";
import {
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  ListItemSecondaryAction,
  Divider,
  Box,
  Typography,
} from "@mui/material";

const GlobalList = ({
  items = [], // List data
  variant = "body1", // Text variant
  color = "text.primary", // Text color
  sx = {}, // Custom styling
  onItemClick = () => {}, // Click event handler
  iconComponent = null, // Icon before each list item
  secondaryIconComponent = null, // Icon after each list item
  showDividers = false, // Show dividers between items
  dense = false, // Compact spacing
  nested = false, // Supports nested lists
  emptyMessage = "No items available", // Message when list is empty
}) => {
  return (
    <Box sx={{ width: "100%", ...sx }}>
      {items.length === 0 ? (
        <Typography
          variant="body2"
          sx={{ color: "gray", textAlign: "center", padding: 2 }}
        >
          {emptyMessage}
        </Typography>
      ) : (
        <List dense={dense}>
          {items.map((item, index) => (
            <React.Fragment key={index}>
              <ListItem
                button
                onClick={() => onItemClick(item)}
                sx={{
                  "&:hover": { backgroundColor: "rgba(0, 0, 0, 0.05)" },
                  paddingY: dense ? 0.5 : 1.5,
                }}
              >
                {iconComponent && <ListItemIcon>{iconComponent}</ListItemIcon>}
                <ListItemText
                  primary={item.label}
                  primaryTypographyProps={{ variant, color }}
                />
                {secondaryIconComponent && (
                  <ListItemSecondaryAction>
                    {secondaryIconComponent}
                  </ListItemSecondaryAction>
                )}
              </ListItem>
              {showDividers && index !== items.length - 1 && <Divider />}
            </React.Fragment>
          ))}
        </List>
      )}
    </Box>
  );
};

export default GlobalList;
