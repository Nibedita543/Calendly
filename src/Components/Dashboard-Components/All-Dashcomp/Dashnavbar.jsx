import React from "react";
import { Box, Button, IconButton } from "@mui/material";
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import Typography from "@mui/material/Typography";

export default function DashNavbar() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "65px",
        padding: "12px 0",
        background:
          "linear-gradient(0deg, rgba(250, 250, 250, 0%) 0%, rgb(250, 250, 250) 1%)",
      }}
    >
      <Box />
      <Box
        sx={{
          display: "flex",
          justifyContent: "end",
          alignItems: "center",
          width: "85%",
          height: "50%",
          padding: "12px 0",
          background:
            "linear-gradient(0deg, rgba(250, 250, 250, 0%) 0%, rgba(250, 250, 250, 1) 16%)",
        }}
      >
        <Box
          sx={{
            display: "flex",
            gap: "9px",
            alignItems: "center",
            bgcolor: "white",
          }}
        >
          <IconButton sx={{ width: 34, height: 34, overflow: "hidden" }}>
            <PersonAddAltIcon />
          </IconButton>
          <Box
            sx={{
              display: "flex",
              gap: "1px",
              alignItems: "center",
              padding: "2px 0",
            }}
          >
            <Button
              variant="contained"
              sx={{
                background: "#E7EDF6",
                border: "1px solid transparent",
                borderRadius: "50%",
                width: "34px",
                minWidth: "35px",
                height: "34px",
                minHeight: "3px",
                fontSize: "var(--fontSizeSmall, 15px)",
                color: "black",
                fontWeight: "inherit",
              }}
            >
              N
            </Button>

            <IconButton
              sx={{
                display: "flex",
                alignItems: "center",
                verticalAlign: "top",
                fontSize: "20px",
                flexShrink: 0,
                width: "34px",
                height: "34px",
              }}
            >
              <ArrowDropDownIcon sx={{ fontSize: "35px", color: "#1A237E", pt: 1}} />
            </IconButton>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
