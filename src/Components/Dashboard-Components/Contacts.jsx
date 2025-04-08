import { Box, Button, Typography } from '@mui/material'
import React from 'react'

import { VscQuestion } from 'react-icons/vsc';
import { Link } from 'react-router-dom';
import { IoIosArrowForward } from 'react-icons/io';
import { BiPlus } from 'react-icons/bi';
import Header from '../Main-Components/Header';

export default function Contacts() {
  return (
    <Box>
      <Header title={"Contacts"} />
   
      <Box display="flex" alignContent="space-between" py="32px" gap="50px">
        <Box>
          <Typography mt="16px" sx={{ fontSize: "22px", fontWeight: "600" }}>
            Strengthen your meeting relationships
          </Typography>
          <Typography mt="16px" color="#476788">
            Contacts are automatically generated and make it easy to see who
            you're meeting with, review notes and scheduling history, and book
            follow-up engagements.
          </Typography>
          <Link
            href="#"
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
                "&:hover": { textDecoration: "unerline", color: "#0069FF" },
              }}
            >
              Learn more
            </Typography>
            <IoIosArrowForward size={"20px"} />
          </Link>
          <Button
            variant="contained"
            sx={{
                mt:"16px",
              backgroundColor: "#0069FF",
              minHeight:"44px",
              padding:"8px 16px",
              boxSizing:"border-box",
              borderRadius: "40px",
              textTransform:"none",
              "&:hover": { backgroundColor: "#004EBA" },
            }}
          >
            <BiPlus /> Book Your First Meeting
          </Button>
        </Box>
        <Box m={"8px"}>
          <img src="https://assets.calendly.com/assets/frontend/media/contacts_side-35bb2c639f45b590736f.svg" />
        </Box>
      </Box>
    </Box>
  );
}
