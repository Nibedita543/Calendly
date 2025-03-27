import React from "react";
import {
  Container,
  Grid,
  Typography,
  Paper,
  Chip,
  Link,
  Box,
} from "@mui/material";
import { MdArrowOutward } from "react-icons/md";

export default function Footer() {
    const footerData = [
      {
        title: "Features",
        links: [
          "Scheduling automation",
          "Customizable availability",
          "Mobile apps",
          "Browser extensions",
          "Meeting routing",
          "Event Types",
          "Email & website embeds",
          "Reminders & follow-ups",
          "Meeting polls",
          "Analytics",
          "Admin management",
        ],
      },
      {
        title: "Integrations",
        links: [
          "Google ecosystem",
          "Microsoft ecosystem",
          "Calendars",
          "Video conferencing",
          "Payments",
          "Sales & CRM",
          "Recruiting & ATS",
          "Email messaging",
          "Embed Calendly",
          "Analytics",
          "API & connectors",
          "Security & compliance",
        ],
      },
      {
        title: "Calendly",
        links: [
          "Pricing",
          "Product overview",
          "Solutions",
          "For individuals",
          "For small businesses",
          "For enterprise",
          "Compare",
          "Security",
          "Sign up for free",
          "Talk to sales",
          "Get a demo",
        ],
      },
      {
        title: "Resources",
        links: [
          "Help center",
          "Resource center",
          "Blog",
          "Customer stories",
          "Calendly community",
          "Developer tools",
        ],
      },
      {
        title: "Company",
        links: [
          "About us",
          "Leadership",
          "Newsroom",
          "Become a partner",
          "Contact us",
        ],
        careers: { text: "Careers", badge: "We're hiring!" }, // Special case for Careers with a badge
      },
    ];
  return (
    <Container>
      <Grid container spacing={3} alignItems="center">
        <Grid item xs={12} md={6}>
          <Typography
            variant="h3"
            gutterBottom
            fontWeight={"600"}
            color="#0B3558"
          >
            Easy <span style={{ color: "#006BFF" }}>ahead</span>
            <span
              style={{
                verticalAlign: "top",
                fontSize: "0.8rem",
                fontWeight: "500",
              }}
            >
              TM
            </span>
          </Typography>
          <Typography
            gutterBottom
            variant="body1"
            color="#477197"
            textAlign={"left"}
            fontWeight={"400"}
          >
            We take the work out of connecting with others so you can accomplish
            more.{" "}
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper
            elevation={3}
            sx={{
              padding: "20px",
              height: "150px",
              borderRadius: "24px",
              transition: "all 0.5s ease",
              "&:hover .arrow": {
                transform: "translateY(-10px)",
              },
            }}
          >
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
            >
              <Chip
                label="FEATURED"
                sx={{
                  backgroundColor: "#E6F0FF",
                  color: "#004EBA",
                  fontSize: "11px",
                  height: "24px",
                  width: "83px",
                  margin: "16px",
                }}
              />

              <Box className="arrow" sx={{ transition: "transform 0.3s ease" }}>
                <MdArrowOutward size={25} />
              </Box>
            </Box>
            <Typography variant="h5" gutterBottom sx={{ fontWeight: "600" }}>
              2024 Report:The State of Meeting
            </Typography>
            <Typography
              gutterBottom
              variant="body1"
              color="#477197"
              textAlign={"left"}
              fontWeight={"400"}
            >
              See the latest data meeting culture and productivity
            </Typography>
          </Paper>
        </Grid>
      </Grid>
      <Grid></Grid>
      <Box sx={{ py: 5 }}>
        <Grid container spacing={4} justifyContent="space-between">
          {footerData.map((section, index) => (
            <Grid item xs={12} sm={6} md={2.4} key={index}>
              <Typography gutterBottom color="#0B3558" fontWeight="600">
                {" "}
                {section.title}
              </Typography>
              {section.links.map((text, linkIndex) => (
                <Link
                  key={linkIndex}
                  href="#"
                  underline="none"
                  color="#0B3558"
                  fontWeight="400"
                  display="block"
                  lineHeight="30px"
                  
                  sx={{"&hover":{textDecoration:"underline"},}}
                >
                  {text}
                </Link>
              ))}
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
}
