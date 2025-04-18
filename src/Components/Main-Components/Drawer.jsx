import React from "react";
import {
  Drawer,
  Box,
  IconButton,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Divider,
  Button,
} from "@mui/material";
import { Close, ChevronRight } from "@mui/icons-material";

const CustomDrawer = ({ drawerOpen, toggleDrawer, menuItems }) => {
  return (
    <Drawer
      anchor="right"
      open={drawerOpen}
      onClose={toggleDrawer}
      PaperProps={{
        sx: {
          width: "100%",
          backgroundColor: "#fff",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          p: 0,
        },
      }}
    >
      {/* Close Button */}
      <Box sx={{ display: "flex", justifyContent: "flex-end", p: 2 }}>
        <IconButton onClick={toggleDrawer}>
          <Close />
        </IconButton>
      </Box>

      {/* Menu Items */}
      <Box sx={{ flexGrow: 1, overflowY: "auto" }}>
        <List disablePadding>
          {menuItems.map((item, index) => (
            <Box key={index}>
              <ListItem button onClick={item.onClick} sx={{ px: 3, py: 2 }}>
                <ListItemText
                  primary={item.label}
                  primaryTypographyProps={{
                    fontSize: 18,
                    fontWeight: 600,
                    color: "rgb(11, 53, 88)",
                  }}
                />
                {item.hasArrow && (
                  <ListItemIcon sx={{ minWidth: 0 }}>
                    <ChevronRight sx={{ color: "rgb(11, 53, 88)" }} />
                  </ListItemIcon>
                )}
              </ListItem>
              <Divider sx={{ mx: 3 }} />
            </Box>
          ))}
        </List>
      </Box>

      {/* CTA Button */}
      <Box sx={{ p: 2 }}>
        <Button
          variant="contained"
          fullWidth
          sx={{
            backgroundColor: "#006eff",
            fontWeight: 600,
            fontSize: 16,
            borderRadius: "8px",
            textTransform: "none",
            py: 1.5,
            "&:hover": {
              backgroundColor: "#005be6",
            },
          }}
        >
          Get started
        </Button>
      </Box>
    </Drawer>
  );
};

export default CustomDrawer;
