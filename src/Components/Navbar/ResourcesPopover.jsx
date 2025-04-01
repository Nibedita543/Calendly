import React, { useState } from "react";
import { Popover, Typography, Grid, Button } from "@mui/material";
import { FaAngleDown } from "react-icons/fa";

import "./Resource.css";

const resourcesData = [
  {
    title: "LEARN",
    items: [
      {
        name: "Customer Stories",
        description:
          "See how teams around the world are upping their game with Calendly.",
      },
      {
        name: "Resource Center",
        description:
          "Explore e-books, webinars, customer stories, tutorials, and more.",
      },
      {
        name: "Integrations",
        description:
          "Seamless connections to your favorite calendars, tools, and apps.",
      },
    ],
  },
  {
    title: "ABOUT",
    items: [
      {
        name: "About",
        description:
          "Discover our mission, commitment to our customers, and leadership team.",
      },
      {
        name: "Blog",
        description:
          "Learn about the latest Calendly product and company news.",
      },
      {
        name: "Help Center",
        description:
          "Learn how to use Calendly to get maximum value for your organization.",
      },
    ],
  },
  {
    title: "CONNECT",
    items: [
      {
        name: "Community",
        description:
          "Ask questions, find answers, and learn from other scheduling enthusiasts.",
      },
      {
        name: "Developers",
        description:
          "Explore our documentation to create powered apps with Calendly.",
      },
      {
        name: "Contact Us",
        description: "Get in touch and let us know how we can help.",
      },
    ],
  },
];

const ResourcesPopover = () => {
  const [popoverAnchorEl, setPopoverAnchorEl] = useState(null);
  const handlePopoverOpen = (event) => setPopoverAnchorEl(event.currentTarget);
  const handlePopoverClose = () => setPopoverAnchorEl(null);
  const popoverOpen = Boolean(popoverAnchorEl);
  return (
    <div
      className="menu-item"
      onMouseEnter={handlePopoverOpen}
      onMouseLeave={handlePopoverClose}
    >
      <Typography className="menu-link">
        Resources <FaAngleDown className="dropdown-icon" />
      </Typography>
      <Popover
        id="resources-popover"
        sx={{
          pointerEvents: "auto",
          "& .MuiPaper-root": {
            display: "flex",
            justifyContent: "center",
            width: "auto",
            maxWidth: "1400px",
            overflow: "hidden",
            backgroundColor: "rgb(255, 255, 255)",
            boxShadow:
              "rgba(71, 103, 136, 0.04) 0px 4px 5px 0px, rgba(71, 103, 136, 0.03) 0px 4px 10px 0px, rgba(71, 103, 136, 0.05) 0px 10px 20px 0px",
            borderRadius: "0px 0px 8px 8px",
            padding: "20px",
            mt: "23px",
            mr:"90px"
          },
        }}
        open={popoverOpen}
        anchorEl={popoverAnchorEl}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        transformOrigin={{ vertical: "top", horizontal: "center" }}
        onClose={handlePopoverClose}
        disableRestoreFocus
      >
        <Grid container spacing={4}>
          {resourcesData.map((section, index) => (
            <Grid
              item
              xs={3}
              key={index}
              sx={{
                borderRight:
                  index !== resourcesData.length - 1
                    ? "1px solid #e0e0e0"
                    : "none",
                paddingRight: 3,
              }}
            >
              <Typography
                variant="subtitle2"
                className="section-title"
                sx={{ mb: 4 }}
              >
                {section.title}
              </Typography>
              {section.items.map((item, idx) => (
                <div key={idx} className="resource-item">
                  <Typography variant="body1" className="resource-name">
                    {item.name}
                  </Typography>
                  <Typography
                    variant="body2"
                    className="resource-desc"
                    sx={{ color: "rgb(100, 100, 100)" }}
                  >
                    {item.description}
                  </Typography>
                </div>
              ))}
            </Grid>
          ))}
          <Grid
            item
            xs={3}
            className="promo-section"
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "24px",
              width: "fit-content",
              padding: "32px",
              backgroundColor: "rgb(244, 248, 255)",
              borderLeft: "1px solid rgb(212, 224, 237)",
              textAlign: "center",
              borderRadius: "8px",
            }}
          >
            <img
              src="https://images.ctfassets.net/k0lk9kiuza3o/1E5c2WISlq38gR8yrUmxVb/fb06130b9b4a3d67fa98853961217b51/2024_State_of_Meetings_report__1_.png?q=85&fm=webp"
              alt="Report"
              className="promo-image"
              style={{
                width: "100%",
                borderRadius: "8px",
              }}
            />
            <Typography variant="h6" className="promo-title">
              The State of Meetings 2024
            </Typography>
            <Typography
              variant="body2"
              className="promo-desc"
              sx={{ color: "gray" }}
            >
              Calendly’s 2024 report explores the evolving nature of meetings.
              Discover insights on productivity, engagement, and efficiency
              across roles, industries, and regions.
            </Typography>
            <Button variant="contained" className="promo-btn">
              Read the report →
            </Button>
          </Grid>
        </Grid>
      </Popover>
    </div>
  );
};

export default ResourcesPopover;
