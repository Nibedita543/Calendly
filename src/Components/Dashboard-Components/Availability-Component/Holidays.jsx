import { useState } from "react";
import { Box, Typography, Button, IconButton, Switch } from "@mui/material";
import ControlPointIcon from "@mui/icons-material/ControlPoint";
import DeleteIcon from "@mui/icons-material/Close";
import EventIcon from "@mui/icons-material/Event";
import { BiPlus } from "react-icons/bi";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import EditIcon from "@mui/icons-material/Edit";
export default function Holidays() {
  const [holidayHours, setHolidayHours] = useState({
    "New Year": "Unavailable",
    Christmas: "Unavailable",
    Thanksgiving: "9:00am - 3:00pm",
    "Independence Day": "Unavailable",
  });

  return (
    <>
      <Box
        sx={{
          mt: 3,
          p: 2,
          border: "1px solid #d4e0ed",
          padding: "35px",
          borderTopLeftRadius: "7px",
          borderTopRightRadius: "7px",
        }}
      >
        <Typography
          variant="h6"
          sx={{
            fontSize: "var(--fontSizeHeadline3, 24px)",
            margin: 0,
            fontWeight: "var(--fontWeightBold, 700)",
            lineHeight: "var(--lineHeightStandard, 1.4)",
            color: "#0A2540",
          }}
        >
          Holiday schedule
        </Typography>
        <Typography
          variant="body2"
          sx={{
            color: "#476788",
            fontWeight: "var(--fontWeightStandard, 400)",
            fontSize: "var(--fontSizeMedium, 14px)",
            margin: 0,
            lineHeight: 1.6,
            mt: 1,
            wordSpacing: "0.15rem",
          }}
        >
          Calendly automatically blocks your availability for national holidays
          across all your Event Types based on your country.
        </Typography>
      </Box>

      <Box
        sx={{
          p: 4,
          border: "1px solid #d4e0ed",
          display: "flex",
          alignItems: "flex-start",
          height: "400px",
          borderBottomLeftRadius: "7px",
          borderBottomRightRadius: "7px",
        }}
      >
        {/* Left section */}
        <Box width={"50%"}>
          <Typography
            variant="body2"
            sx={{
              color: "#476788",
              fontWeight: "var(--fontWeightStandard, 400)",
              fontSize: "var(--fontSizeXSmall, 12px)",
              margin: 0,
              lineHeight: 1.4,
            }}
          >
            Holiday schedule
          </Typography>

          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              gap: "4px",
              alignItems: "center",
            }}
          >
            <Typography
              variant="h6"
              sx={{
                color: "rgb(10, 37, 64)",
                fontWeight: "var(--fontWeightBold, 700)",
                fontSize: "var(--fontSizeLarge, 18px)",
                margin: 0,
                lineHeight: 1.4,
              }}
            >
              Other
            </Typography>
            <IconButton
              size="small"
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
              <EditIcon fontSize="small" />
            </IconButton>
          </Box>

          <Typography
            variant="body2"
            sx={{
              color: "rgb(10, 37, 64)",
              fontWeight: "var(--fontWeightStandard, 400)",
              fontSize: "var(--fontSizeMedium, 15px)",
              marginTop: "15px",
              lineHeight: 1.4,
              wordSpacing: "0.15rem",
            }}
          >
            Holidays for other countries are not yet supported.
          </Typography>
        </Box>

        {/* Right section */}
        <Switch size="small" />
      </Box>
    </>
  );
}
