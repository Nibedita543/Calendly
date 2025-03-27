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

  const handlePopoverOpen = (event) => {
    setPopoverAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setPopoverAnchorEl(null);
  };

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
            width: "1500px",
            padding: "20px",
            borderRadius: "10px",
            mt: 3,
            mr: 25,
          },
        }}
        open={popoverOpen}
        anchorEl={popoverAnchorEl}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        transformOrigin={{ vertical: "top", horizontal: "center" }}
        onClose={handlePopoverClose}
        disableRestoreFocus
      >
        <Grid container spacing={4} className="popover-content">
          {resourcesData.map((section, index) => (
            <Grid item xs={4} key={index}>
              <Typography variant="subtitle2" className="section-title">
                {section.title}
              </Typography>
              {section.items.map((item, idx) => (
                <div key={idx} className={`resource-item `}>
                  <Typography variant="body1" className="resource-name">
                    {item.name}
                  </Typography>
                  <Typography variant="body2" className="resource-desc">
                    {item.description}
                  </Typography>
                </div>
              ))}
            </Grid>
          ))}
          <Grid item xs={4} className="promo-section">
            <img
              src="https://images.ctfassets.net/k0lk9kiuza3o/1E5c2WIS…024_State_of_Meetings_report__1_.png?q=85&fm=webp"
              alt="Report"
              className="promo-image"
            />
            <Typography variant="h6" className="promo-title">
              The State of Meetings 2024
            </Typography>
            <Typography variant="body2" className="promo-desc">
              Calendy’s 2024 report explores the evolving nature of meetings.
              Discover insights on productivity, engagement and efficiency
              across roles, industries, regions, and other demographics, and
              uncover strategies for improving meetings for everyone.
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
