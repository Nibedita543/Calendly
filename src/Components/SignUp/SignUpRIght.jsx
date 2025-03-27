import {
  Container,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
  Typography,
} from "@mui/material";
import Grid from "@mui/material/Grid2";
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
    "https://images.ctfassets.net/k0lk9kiuza3o/bOnLOncEyDdb8izczJggp/b98f4d8da30cfff0a87e8dce2bced46e/dropbox-customer-logo.svg",
    "https://images.ctfassets.net/k0lk9kiuza3o/6aSAknGku3oEB7jL7xEjLs/7004d26e48686e4a2b6e99348e1899fc/ancestry-customer-logo.svg",
    "https://images.ctfassets.net/k0lk9kiuza3o/4AUQ47IN6ZBtXtWXt65L3D/24dae32ff49baaf8feecf9471804420d/zendesk-customer-logo.svg",
    "https://images.ctfassets.net/k0lk9kiuza3o/k5u1aoWgLdVtFfc4tsyg3/cae65a31428205e2b46b229963d3b41e/Gong-logo.svg",
    "https://images.ctfassets.net/k0lk9kiuza3o/6PFPRWMRMxRXthyXYcDRiR/ee7cc3f3ca0ed78752db06ce662a95f8/compass-customer-logo.svg",
    "https://images.ctfassets.net/k0lk9kiuza3o/Y595RQBDR1fW5blQZfd9l/b9f3e2557c598b1ea51bb4e55f507833/lyft-customer-logo.svg",
    "https://images.ctfassets.net/k0lk9kiuza3o/42drnxHfXrNOGKnVE9iA3r/a7f1bea3f67ca614e359eb6de12d8ba1/loreal-customer-logo.svg",
    "https://images.ctfassets.net/k0lk9kiuza3o/56cjEhKMIFlRPdVUSQqMYD/a33ef976df35d4e240246d5e08bcb610/crocs-customer-logo.svg",
  ];

  return (
    <Container maxWidth="md">
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
      <Grid container spacing={5} columns={12} justifyContent={"center"}>
        {imageurls?.map((src, index) => (
          <Grid
            key={index}
            size={{
              xs: 12,
              sm: 6,
              md: 3,
            }}
          >
            <img
              key={index}
              src={src}
              alt={`Image ${index + 1}`}
              style={{
                width: "auto",
                objectFit: "contain",
                filter: "invert(0.5)",
                height: "25px",
              }}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
