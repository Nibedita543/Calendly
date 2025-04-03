import { Button } from '@mui/material';
import React from 'react'
import { BiPlus } from 'react-icons/bi';

export default function ToggledCreateButton(isCollapsed) {
  return (
    <Button
      variant="outlined"
      sx={{
        width: "40px",
        height: "40px",
        borderRadius: "50%", // Fully round
        minWidth: "40px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        border: "2px solid #7EA5DC",
        "&:hover": { backgroundColor: "#E6F0FF" },
      }}
    >
      <BiPlus size={"16px"} />
    </Button>
  );
}
