import React from "react";
import { Box, Typography } from "@mui/material";
import ContactBody from "./Contact-Component/ContactBody.jsx";


const Contacts = () => {
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        bgcolor: "#f5f5f5",
      }}
    >
      <ContactBody />
    </Box>
  );
};

export default Contacts;
