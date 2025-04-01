import { Box, Button, Drawer } from "@mui/material";
import React from "react";
import LeftCollapse from "../../assets/left-collapse-icon.svg"
import { BiPlus } from "react-icons/bi";

export default function Sidebar() {
  return (
    <Drawer
      open={true}
      variant="persistent"
      sx={{
        width: 300,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: {
          width: 260,
          boxSizing: "border-box",
          padding: 2,
        },
      }}
    >
      <Box
        display={"flex"}
        alignItems={"center"}
        justifyContent={"space-between"}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 2 }}>
          <img
            src="https://assets.calendly.com/assets/frontend/media/calendly-33a0809afc4c21162dd7.svg"
            style={{ width: "28px", height: "28px" }}
          />
          <img
            src="https://assets.calendly.com/assets/frontend/media/calendly-wordmark-0da6c58d9a06b08c975f.svg"
            style={{ marginTop: "6px" }}
          />
        </Box>
        <img src={LeftCollapse} style={{ marginBottom: "10px" }} />
      </Box>
      <Button
        variant="outlined"
        sx={{
          maxWidth: "100%",
          mb: 2,
          mt: 2,
          borderRadius: "30px",
          fontWeight: 400,
          textTransform: "none",
          height: "45px",
          border: "1px solid blue",
          "&:hover": { backgroundColor: "#E6F0FF" },
        }}
      >
        <BiPlus size={"16px"} />
        Create
      </Button>
    </Drawer>
  );
}
