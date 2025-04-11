import React from "react";
import {
  Box,
  Card,
  Typography,
  Button,
  IconButton,
  TextField,
  Checkbox,
} from "@mui/material";
import SettingsIcon from "@mui/icons-material/Settings";
import LaunchIcon from "@mui/icons-material/Launch";
import Header from "../../Main-Components/Header.jsx";
import { VscQuestion } from "react-icons/vsc";
import { Link } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
import { BiPlus } from "react-icons/bi";

const ContentBody = () => {
  return (
    <Box sx={{ backgroundColor: "#f5f5f5", height: "100vh", width: "94%" }}>
      <Header title={"Contacts"} />
      <Box
        display="flex"
        alignContent="space-between"
        py="32px"
        gap="50px"
        pt={"45px"}
      >
        <Box>
          <Typography
            sx={{
              color: "rgb(10, 37, 64)",
              fontSize: "var(--fontSizeHeadline3, 24px)",
              margin: 0,
              fontWeight: "var(--fontWeightBold, 700)",
              lineHeight: "var(--lineHeightStandard, 1.4)",
              mt: "16px",
            }}
          >
            Strengthen your meeting relationships
          </Typography>
          <Typography
            
            sx={{
              color: "#476788",
              fontWeight: "var(--fontWeightStandard, 400)",
              fontSize: "var(--fontSizeMedium, 16px)",
              margin: 0,
              lineHeight: 1.4,
              mt:"16px"
            }}
          >
            Contacts are automatically generated and make it easy to see who
            you're meeting with, review notes and scheduling history, and book
            follow-up engagements.
          </Typography>
          <Link
            to="#"
            style={{
              display: "flex",
              alignItems: "center",
              marginTop: "16px",
              color: "#0069FF",
              gap: "6px",
              textDecoration: "none",
            }}
          >
            <VscQuestion size={"20px"} />
            <Typography
              variant="body2"
              color="primary"
              fontSize="16px"
              sx={{
                "&:hover": { textDecoration: "underline", color: "#0069FF" },
              }}
            >
              Learn more
            </Typography>
            <IoIosArrowForward size={"20px"} />
          </Link>
          <Button
            variant="contained"
            sx={{
              mt: "16px",
              backgroundColor: "#0069FF",
              minHeight: "44px",
              padding: "8px 16px",
              boxSizing: "border-box",
              borderRadius: "40px",
              textTransform: "none",
              "&:hover": { backgroundColor: "#004EBA" },
              display: "flex",
              alignItems: "center",
              gap: "8px",
            }}
          >
            <BiPlus /> Book Your First Meeting
          </Button>
        </Box>
        <Box m={"8px"}>
          <img
            src="https://assets.calendly.com/assets/frontend/media/contacts_side-35bb2c639f45b590736f.svg"
            alt="Meeting illustration"
          />
        </Box>
      </Box>
    </Box>
  );
};

export default ContentBody;
