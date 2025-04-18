import { Button } from "@mui/material";
import React from "react";
import { BiPlus } from "react-icons/bi";
import GlobalButton from "../../../Globaly-Components/GlobalButton/GlobalButton";

export default function ToggledCreateButton() {
  return (
    <GlobalButton
      variant="outlined"
      sx={{
        width: "40px",
        height: "40px",
        minWidth: "40px",
        borderRadius: "50%",
        p: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        border: "2px solid #7EA5DC",
        "&:hover": { backgroundColor: "#E6F0FF" },
        mb: 3,
        // mt: 2,
      }}
    >
      <BiPlus size={22} />
    </GlobalButton>
  );
}
