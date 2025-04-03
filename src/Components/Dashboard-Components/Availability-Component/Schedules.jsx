import { useState } from "react";
import {
  Box,
  Tabs,
  Tab,
  Button,
  Typography,
  Switch,
  IconButton,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import ControlPointIcon from "@mui/icons-material/ControlPoint";
import DeleteIcon from "@mui/icons-material/Close";
import Touggle from "./Tougle.jsx";
import EventIcon from "@mui/icons-material/Event";
import { BiPlus } from "react-icons/bi";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { NAVIGATION_ROUTES } from "../../../constants/NavigationRoutes.js";
import { useNavigate, useNavigation } from "react-router-dom";

export default function Content() {
  const [weeklyHours, setWeeklyHours] = useState({
    S: "Unavailable",
    M: "Unavailable",
    T: "Unavailable",
    W: "Unavailable",
    T2: "Unavailable",
    F: "9:00am - 5:00pm",
    S2: "Unavailable",
  });

  return (
    <>
      <Box sx={{ mt: 3, p: 2, border: "1px solid #ddd", borderRadius: 2 }}>
        <Typography
          variant="h6"
          sx={{
            color: "#476788",
            height: "17px",
            fontSize: "var(--fontSizeXSmall, 12px)",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            fontWeight: "var(--fontWeightBold, 700)",
            lineHeight: "var(--lineHeightStandard, 1.4)",
          }}
        >
          Schedule
        </Typography>
        <Typography
          variant="subtitle1"
          color="primary"
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          sx={{
            display: "flex",
            gap: "4px",
            alignItems: "center",
            color: "var(--primary-color, rgb(0, 105, 255))",
            fontWeight: 700,
            fontSize: "19px",
            textAlign: "left",
          }}
        >
          Working hours (default)
          <Touggle />
        </Typography>

        <Typography variant="body2">Active on: 1 event type</Typography>
      </Box>
      <Box
        sx={{
          p: 4,
          border: "1px solid #ddd",
          borderRadius: 2,
          display: "flex",
        }}
      >
        <Box sx={{ width: "50%" }}>
          <Typography
            variant="subtitle1"
            sx={{
              color: "#0a2540",
              fontWeight: "var(--fontWeightBold, 700)",
            }}
          >
            Weekly hours
          </Typography>

          <Typography
            variant="body2"
            sx={{
              color: "#476788",
              fontWeight: "var(--fontWeightStandard, 400)",
              fontSize: "var(--fontSizeSmall, 12px)",
            }}
          >
            Set when you are typically available for meetings
          </Typography>

          {Object.entries(weeklyHours).map(([day, time]) => (
            <Box
              key={day}
              sx={{
                display: "flex",
                alignItems: "center",

                mt: 1,
              }}
            >
              <Typography
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "17px",
                  height: "17px",
                  margin: "8px 8px 8px 0",
                  padding: "6px",
                  borderRadius: "50%",
                  background: "#004796",
                  color:
                    "var(--text-color-secondary-4, rgba(255, 255, 255, 1))",
                  fontWeight: "var(--fontWeightBold, 700)",
                  fontSize: "var(--fontSizeXSmall, 12px)",
                  lineHeight: "14px",
                  textTransform: "uppercase",
                }}
              >
                {day === "T2" ? "Th" : day === "S2" ? "Su" : day}
              </Typography>

              <Typography
                sx={{
                  color: "rgb(35 38 43)",
                  fontSize: "var(--fontSizeSmall, 13.5px)",
                }}
              >
                {time}
              </Typography>

              {time !== "Unavailable" && (
                <IconButton
                  sx={{
                    position: "relative",
                    display: "inline-flex",
                    verticalAlign: "middle",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "44px",
                    height: "44px",
                    padding: "4px",
                    borderRadius: "4px",
                    backgroundColor: "transparent",
                    color:
                      "var(--colorTextStandard, var(--coreColorNeutral900))",
                    transition: "all 0.3s",
                  }}
                >
                  <DeleteIcon fontSize="small" />
                </IconButton>
              )}
              <IconButton
                sx={{
                  position: "relative",
                  display: "inline-flex",
                  verticalAlign: "middle",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "44px",
                  height: "44px",
                  padding: "4px",
                  borderRadius: "4px",
                  backgroundColor: "transparent",
                  color: "var(--colorTextStandard, var(--coreColorNeutral900))",
                  transition: "all 0.3s",
                }}
              >
                <ControlPointIcon fontSize="small" />
              </IconButton>
            </Box>
          ))}
          <Typography
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "5px",
              color: "#004eba", // Text color
              fontSize: "var(--fontSizeXSmall, 12px)",
              paddingTop: "10px",
              fontWeight: "var(--fontWeightStandard, 400)",
            }}
          >
            Eastern Time-US & Canada
            <KeyboardArrowDownIcon
              sx={{
                fontWeight: "var(--fontWeightStandard, 300)",
                fontSize: "var(--fontSizeXSmall, 17px)",
              }}
            />
          </Typography>
        </Box>
        <Box
          sx={{
            width: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            paddingBottom: "410px",
          }}
        >
          {/* Left Section with Two Typography Elements */}
          <Box sx={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            <Typography
              variant="subtitle1"
              sx={{
                display: "flex",
                alignItems: "center",
                color: "#0a2540",
                fontWeight: "var(--fontWeightBold, 700)",
              }}
            >
              <EventIcon
                sx={{
                  fontWeight: "var(--fontWeightStandard, 200)",
                  fontSize: "var(--fontSizeSmall, 20px)",
                }}
              />
              Date-specific hours
            </Typography>

            <Typography
              variant="body2"
              sx={{
                display: "flex",
                alignItems: "center",
                color: "#476788",
                fontWeight: "var(--fontWeightStandard, 400)",
                fontSize: "var(--fontSizeSmall, 13px)",
              }}
            >
              Adjust hours for specific days
            </Typography>
          </Box>

          {/* Right Section with Button */}
          <Button
            sx={{
              ml: 2,
              maxWidth: "100%",
              mb: 3,
              mt: 3,
              borderRadius: "28px",
              padding: "5px 12px",
              fontWeight: 400,
              textTransform: "none",
              border: " 1px solid#476788",
              "&:hover": { backgroundColor: "#e9f0ff" },
              color: "#0a2540",
              bgcolor: "#f5f5f5",
            }}
          >
            <BiPlus size={"18px"} style={{ marginRight: 4 }} />
            Hours
          </Button>
        </Box>
      </Box>
    </>
  );
}
