import {
  Container,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
  Typography,
} from "@mui/material";
import React from "react";
import "./SignUpRIght.css";

export default function SignUpRIght() {
  const sentences = [
    "Ability to book meetings as a team with clients and more",
    " Unlimited event types (30-min video call, 15-min phone call)",
    "Remove Calendly branding",
    "Ability to charge for meetings with PayPal and Stripe",
  ];

  const imageurls = [
    "https://images.ctfassets.net/k0lk9kiuza3o/bOnLOncE…30cfff0a87e8dce2bced46e/dropbox-customer-logo.svg",
    "https://images.ctfassets.net/k0lk9kiuza3o/6aSAknGk…686e4a2b6e99348e1899fc/ancestry-customer-logo.svg"
  ];

  return (
    <Container maxWidth="sm">
      <Typography gutterBottom id="signupright-heading">
        Create your free account
      </Typography>
      <Typography gutterBottom id="signupright-text">
        Easily schedule with clients and recruits with a free Calendly account.
        First-time signups get a free 14-day trial of our Teams plan!
      </Typography>
      <Typography gutterBottom id="signupright-text1">
        This Teams trial includes upgrades like:
      </Typography>
      <List>
        {sentences.map((text, index) => (
          <ListItem key={index}>
            <img
              src="https://images.ctfassets.net/k0lk9kiuza3o/3xAhNA94ZNW8SgygWcbKAU/b5eb278284b7528a6f1a125479c9ceef/Check.svg"
              alt="right-check"
              style={{ marginRight: "8px" }}
            />
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Grid container spacing={2}>
        {imageurls.map((src, index) => (
          <Grid item xs={6} sm={3} key={index}>
            <Paper elevation={3}>
              <img
                src={src}
                alt={`Image ${index + 1}`}
                style={{ width: "100%" }}
              />
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
