// WorkflowCard.jsx
import React from "react";
import { Box } from "@mui/material";
import GlobalCard from "../../../Globaly-Components/GlobalCard/GlobalCard.jsx";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import CancelIcon from "@mui/icons-material/Cancel";
import FavoriteIcon from "@mui/icons-material/Favorite";
import EmailIcon from "@mui/icons-material/Email";
import SmsIcon from "@mui/icons-material/Sms";
import { Height } from "@mui/icons-material";

const WorkflowCard = () => {
  const workflows = [
    {
      title: "Email reminder to invitee",
      description:
        "Reduce no-shows — send automated email reminders to invitees",
      icon: (
        <Box position="relative" width={24}>
          <img
            src="	https://assets.calendly.com/assets/frontend/media/icon-reminder-email-01d90ee436d6262a4333.svg"
            alt=""
          />
        </Box>
      ),
    },
    {
      title: "Text cancellation notification to host",
      description: "Keep hosts up-to-date with canceled events",
      icon: (
        <Box position="relative" width={24}>
          <img
            src="	https://assets.calendly.com/assets/frontend/media/icon-cancellation-text-063bc92716fa63329d8b.svg"
            alt=""
          />
        </Box>
      ),
    },
    {
      title: "Send thank you email",
      description: "Build relationships with a quick thanks",
      icon: (
        <Box position="relative" width={24}>
          <img
            src="https://assets.calendly.com/assets/frontend/media/icon-thank-you-email-8dcb7866f89f6456e23d.svg"
            alt=""
          />
        </Box>
      ),
    },
  ];

  return (
    <Box
      display="flex"
      justifyContent={"space-between"}
      gap={3}
      p={2}
      flexWrap="wrap"
      opacity={0.8}
    >
      {workflows.map((workflow, index) => (
        <GlobalCard
          key={index}
          title={workflow.title}
          description={workflow.description}
          icon={workflow.icon}
          buttonText="Add workflow"
          onButtonClick={() => alert(`Added: ${workflow.title}`)}
          opacity={0.8}
          buttonProps={{
            sx: {
              borderColor: "#006bff",
              backgroundColor: "#006bff",
              color: "#ffffff",
              fontWeight: "var(--fontWeightBold, 600)",
              fontSize: "11px",
              width: "40%",
              Height: "35px",
              borderRadius: "40px",
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              "&:hover": {
                backgroundColor: "#0056d2",
                borderColor: "#0056d2",
              },
              ml: 22,
            },
          }}
        />
      ))}
    </Box>
  );
};

export default WorkflowCard;
