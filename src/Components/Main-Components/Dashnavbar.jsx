import React from "react";
import { Box, Button, IconButton } from "@mui/material";
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import Typography from "@mui/material/Typography";
import { yellow } from "@mui/material/colors";

export default function DashNavbar() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "60px",
        padding: "12px 0",
        background:
          "linear-gradient(0deg, rgba(250, 250, 250, 0%) 0%, rgba(250, 250, 250, 100%) 16%)",
      }}
    >
      <Box />
      <Box
        sx={{
          display: "flex",
          justifyContent: "end",
          alignItems: "center",
          width: "95%",
          height: "30%",
          padding: "12px 0",
          background:
            "linear-gradient(0deg, rgba(250, 250, 250, 0%) 0%, rgba(250, 250, 250, 100%) 16%)",
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
          <IconButton
            sx={{
              position: "relative",
              display: "inline-flex",
              verticalAlign: "middle",
              justifyContent: "center",
              alignItems: "center",
              width: "40px",
              height: "40px",
              padding: "4px",
              borderRadius: "4px",
              backgroundColor: "transparent",
              color: "#0a2540",
              transition: "all 0.3s",
            }}
          >
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
                border: "2px solid transparent",
                borderRadius: "50%",
                display: "inline-flex",
                verticalAlign: "middle",
                justifyContent: "center",
                alignItems: "center",
                overflow: "hidden",
                background: "#e7edf6",
                width: "36px",
                minWidth: "37px",
                height: "36px",
                fontSize: "var(--fontSizeSmall, 14px)",
                color: "#1A237E",
                fontWeight: "400",
                lineHeight: "20px",
                textTransform: "uppercase",
                padding: "0 2px",
              }}
            >
              N
            </Button>

            <IconButton
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                verticalAlign: "top",
                fontSize: "20px",
                flexShrink: 0,
                width: "34px",
                height: "34px",
              }}
            >
              <ArrowDropDownIcon
                sx={{ fontSize: "35px", color: "#1A237E", pt: 1 }}
              />
            </IconButton>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
