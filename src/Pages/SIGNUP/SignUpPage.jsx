import React from "react";
import "../../Components/SignUp-Components/SignUp";
import "../../Components/SignUp-Components/SignUpRIght";
import { Container } from "@mui/material";
import Grid from "@mui/material/Grid2";
import Signup from "../../Components/SignUp-Components/SignUp";
import SignUpRIght from "../../Components/SignUp-Components/SignUpRIght";

export default function SignUpPage() {
  return (
    <Container maxWidth="lg">
      <Grid container spacing={2} columns={12} justifyContent={"center"}>
        <Grid size={6}>
          <Signup />
        </Grid>

        <Grid size={6} mt="50px">
          <SignUpRIght />
        </Grid>
      </Grid>
    </Container>
  );
}
