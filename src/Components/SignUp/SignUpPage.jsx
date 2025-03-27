import React from 'react'
import '../SignUp/SignUp'
import '../SignUp/SignUpRIght'
import { Container, Grid } from '@mui/material';
import Signup from '../SignUp/SignUp';
import SignUpRIght from '../SignUp/SignUpRIght';

export default function SignUpPage() {
  return (
    <Container maxWidth="lg">
      <Grid
        container
        spacing={4}
        justifyContent="center"
        alignItems="center"
        sx={{ minHeight: "100vh" }} // Full height
      >
        {/* Left Side: Signup Form */}
        <Grid item xs={12} sm={6}>
          <Signup />
        </Grid>

        {/* Right Side: Additional Info */}
        <Grid item xs={12} sm={6}>
          <SignUpRIght />
        </Grid>
      </Grid>
    </Container>
  );
}
