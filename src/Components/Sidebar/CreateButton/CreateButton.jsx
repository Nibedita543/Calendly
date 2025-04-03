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
        padding: "8px 16px",
        fontWeight: "400",
        textTransform: "none",
        
        border: "2px solid #7EA5DC",
        "&:hover": { backgroundColor: "#E6F0FF" },
      }}
    >
      <BiPlus size={"16px"} />
      {!isCollapsed && "Create"}
    </Button>
  );
}
