import React from "react";
import { Container, Box } from "@mui/material";
import Signup from "../../Components/SignUp-Components/SignUp";
import SignUpRIght from "../../Components/SignUp-Components/SignUpRIght";

export default function SignUpPage() {
  return (
    <Container
      mdisableGutters
      maxWidth={false}
      sx={{
        maxWidth: "100%", // or whatever width you want
        mx: "auto", // centers the container
        px: { xs: 2, md: 4 }, // optional: horizontal padding
        height: "100%",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: {
            xs: "column", // <600px
            sm: "column", // 600px–900px
            md: "column", // 900px–1200px
            lg: "row", // ≥1200px: switch to row
          },
          width: "87%",
          maxWidth: "1600px",
          height: "650px",
          mx: "auto",
          justifyContent: "center",
          gap: 2,
        }}
      >
        <Box sx={{ flex: 1 }}>
          <Signup />
        </Box>

        <Box sx={{ flex: 1, mt: { xs: 4, md: "50px" } }}>
          <SignUpRIght />
        </Box>
      </Box>
    </Container>
  );
}
