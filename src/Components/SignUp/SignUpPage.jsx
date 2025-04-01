import React from "react";
import "../SignUp/SignUp";
import "../SignUp/SignUpRIght";
import { Container } from "@mui/material";
import Grid from "@mui/material/Grid2";
import Signup from "../SignUp/SignUp";
import SignUpRIght from "../SignUp/SignUpRIght";

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
