import { Button } from "@mui/material";
import React from "react";
import { BiPlus } from "react-icons/bi";

export default function CreateButton({ isCollapsed, toggleCollpase }) {
  return (
    <Button
      variant="outlined"
      sx={{
        maxWidth: "100%",
        mb: 3,
        mt: 3,
        borderRadius: "28px",
        padding: isCollapsed ? "6px" : "8px 16px",
        fontWeight: "400",
        textTransform: "none",
        height: isCollapsed ? "40px" : "500px",
        width: isCollapsed ? "50px" : "100%",
        minWidth: isCollapsed ? "50px" : "auto",
        border: "2px solid #7EA5DC",
        "&:hover": { backgroundColor: "#E6F0FF" },
      }}
    >
      <BiPlus size={"16px"} />
      {!isCollapsed && "Create"}
    </Button>
  );
}
