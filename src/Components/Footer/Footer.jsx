import React from "react";
import {
  Container,
  Grid,
  Typography,
  Paper,
  Chip,
  Link,
  Box,
  Button,
  Stack,
  Divider,
} from "@mui/material";
import { MdArrowOutward } from "react-icons/md";
import LanguageDropDown from "../LanguageDropDown/LanguageDropDown";
import {
  footerbtns,
  FooterData,
  footerIcons,
  footerlinks,
} from "../../constants/FooterData";

export default function Footer() {
  // const [showDropdown, setShowDropdown] = useState(false);

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
      <Box sx={{ py: 5 }}>
        <Grid container spacing={4} justifyContent="space-between">
          {FooterData.map((section, index) => (
            <Grid item xs={12} sm={6} md={2.4} key={index}>
              <Typography gutterBottom color="#0B3558" fontWeight="600">
                {" "}
                {section.title}
              </Typography>
              {section.links.map((text, linkIndex) => {
                return (
                  <>
                    {text === "Career" ? (
                      <Box display="flex" alignItems="center" mt={1}>
                        <Link
                          href="#"
                          underline="none"
                          color="#0B3558"
                          fontWeight="400"
                          sx={{ "&:hover": { textDecoration: "underline" } }}
                        >
                          {section.careers.text}
                        </Link>
                        <Chip
                          label={section.careers.badge}
                          sx={{
                            ml: 1,
                            backgroundColor: "#E6F0FF",
                            color: "#0B3558",
                            fontSize: "11px",
                            height: "20px",
                          }}
                        />
                      </Box>
                    ) : (
                      <Link
                        key={linkIndex}
                        href="#"
                        underline="none"
                        color="#0B3558"
                        fontWeight="400"
                        display="block"
                        lineHeight="30px"
                        sx={{ "&:hover": { textDecoration: "underline" } }}
                      >
                        {text}
                      </Link>
                    )}
                  </>
                );
              })}
            </Grid>
          ))}
        </Grid>
        <Typography gutterBottom variant="h6" fontWeight="600" mt="50px">
          Downloads
        </Typography>
        <Box display="flex" justifyContent="space-between">
          <Box
            display="flex"
            flexWrap="wrap"
            gap={2}
            mt={3}
            sx={{ maxWidth: "600px" }}
          >
            {footerbtns.map((footerbtns, index) => (
              <Button
                key={index}
                sx={{
                  backgroundColor: footerbtns.bgColor,
                  color: "#0B3558",
                  textTransform: "none",
                  borderRadius: "8px",
                  fontWeight: 500,
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                  padding: "5px 10px",
                  "&:hover": { backgroundColor: "#E6F0FF", color: "#476788" },
                }}
                // startIcon={footerbtns.icon}
                startIcon={
                  <div>
                    <img
                      src={footerbtns.icon}
                      alt=""
                      style={{
                        width: "auto",
                        height: "20px",
                      }}
                    />
                  </div>
                }
              >
                {footerbtns.label}
              </Button>
            ))}
          </Box>
          <Box display="flex" gap={3} sx={{ fontSize: "24px" }}>
            {footerIcons.map((item, index) => (
              <a
                key={index}
                href={item.link}
                target="_blank"
                rel="none"
                style={{
                  display: "flex",
                  alignItems: "end",
                }}
              >
                <Box
                  sx={{
                    color: "#0B3558",
                    height: "24px",
                    width: "24px",
                    "&:hover": { color: "#476788" },
                  }}
                >
                  {item.icons}
                </Box>
              </a>
            ))}
          </Box>
        </Box>
        <Divider sx={{ py: 2 }}></Divider>
        <Grid container spacing={3}>
          <Grid item xs>
            <LanguageDropDown />
          </Grid>
          <Grid item xs={6} display="flex " gap={3}>
            {footerlinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                style={{
                  textDecoration: "none",
                  display: "flex",
                  alignItems: "center",
                  gap: "5px",
                  color: "#0B3558",
                  cursor: "pointer",
                }}
              >
                {link.img && <img src={link.img} alt="logo" width={30} />}
                {link.text}
              </a>
            ))}
          </Grid>
          <Grid item xs>
            <Typography mt={2} sx={{ color: "#0B3558", fontSize: "14px" }}>
              Copyright Calendly 2025
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}
