import React from "react";
import {
  Box,
  Typography,
  Button,
  TextField,
  Checkbox,
  FormControlLabel,
  MenuItem,
} from "@mui/material";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import WarningIcon from "@mui/icons-material/Warning";
import RefreshIcon from "@mui/icons-material/Refresh";
import { BiPlus } from "react-icons/bi";

const Settings = () => {
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
          Calendar Settings
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
          Set which calendars we use to check for busy times
        </Typography>
      </Box>

      <Box
        sx={{
          p: 4,
          border: "1px solid #d4e0ed",
          display: "flex",
          flexDirection: "column",
          gap: 1,
          height: "500px",
          borderBottomLeftRadius: "7px",
          borderBottomRightRadius: "7px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            maxWidth: "560px",
            gap: 1,
          }}
        >
          {/* Conflict Calendar Section */}
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography
              sx={{
                color: "rgb(10, 37, 64)",
                fontWeight: "var(--fontWeightBold, 700)",
                fontSize: "var(--fontSizeMedium, 16px)",
                margin: 0,
                lineHeight: 1.4,
              }}
            >
              Calendars to check for conflicts
            </Typography>
            <Button
              sx={{
                ml: 2,
                maxWidth: "100%",
                mb: 3,
                mt: 3,
                borderRadius: "28px",
                padding: "8px 16px",
                fontWeight: 400,
                textTransform: "none",
                border: " 1px solid#476788",
                "&:hover": { backgroundColor: "#e9f0ff" },
                color: "#0a2540",
                bgcolor: "#f5f5f5",
              }}
            >
              <BiPlus size={"18px"} style={{ marginRight: 4 }} />
              Connect calender account
            </Button>
          </Box>
          <Typography
            sx={{
              color: "rgb(10, 37, 64)",
              fontWeight: "var(--fontWeightStandard, 400)",
              fontSize: "var(--fontSizeMedium, 16px)",
              margin: 0,
              lineHeight: 1.4,
            }}
          >
            These calendars will be used to prevent double bookings
          </Typography>
          <Box
            sx={{
              border: "1px solid var(--color-grey-3, #CCCCCC)",
              borderRadius: "8px",
              width: "100%",
              p: 2,
              display: "flex",
              alignItems: "center",
              gap: 3,
            }}
          >
            <Box
              component="img"
              src="https://assets.calendly.com/assets/frontend/media/google-calendar-9d502e45f709b07b91a1.svg"
              alt="Google Calendar"
              sx={{
                gridArea: "logo",
                width: "32px",
                height: "32px",
              }}
            />
            <Box>
              <Typography
                sx={{
                  color: "rgb(10, 37, 64)",
                  fontWeight: "var(--fontWeightStandard, 400)",
                  fontSize: "var(--fontSizeMedium, 16px)",
                  margin: 0,
                  lineHeight: 1.4,
                }}
              >
                Google Calendar
              </Typography>
              <Typography
                sx={{
                  color: "#476788",
                  fontWeight: "var(--fontWeightStandard, 400)",
                  fontSize: "var(--fontSizeMedium, 12px)",
                  margin: 0,
                  lineHeight: 1.4,
                }}
              >
                niharsasini@gmail.com
              </Typography>

              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: "8px",
                  width: "400px",
                  padding: "4px",
                  borderRadius: "5px",
                  backgroundColor: "#fff2f4",
                }}
              >
                <Typography
                  sx={{
                    color: "rgb(10, 37, 64)",
                    fontWeight: "var(--fontWeightStandard, 400)",
                    fontSize: "var(--fontSizeMedium, 15px)",
                    margin: 0,
                    lineHeight: 1.4,
                  }}
                >
                  <WarningIcon />
                  Calender Connetion Error
                </Typography>
                <Button
                  sx={{
                    color: "rgb(0, 96, 230)",
                    fontWeight: "var(--fontWeightStandard, 400)",
                    fontSize: "var(--fontSizeMedium, 15px)",
                    margin: 0,
                    lineHeight: 1.4,
                    textTransform: "none",
                  }}
                >
                  <RefreshIcon />
                  Reconnect
                </Button>
              </Box>
            </Box>
          </Box>

          {/* Calendar to add events */}
          <Typography
            sx={{
              color: "rgb(10, 37, 64)",
              fontWeight: "var(--fontWeightStandard, 700)",
              fontSize: "var(--fontSizeMedium, 16px)",
              margin: 0,
              lineHeight: 1.4,
            }}
          >
            Calendar to add events to
          </Typography>
          <Box
            sx={{
              border: "1px solid var(--color-grey-3, #CCCCCC)",
              borderRadius: "8px",
              width: "100%",
              p: 2,
              display: "flex",
              alignItems: "center",
              gap: 2,
            }}
          >
            <Box
              component="img"
              src="https://assets.calendly.com/assets/frontend/media/google-calendar-9d502e45f709b07b91a1.svg"
              alt="Google Calendar"
              sx={{
                gridArea: "logo",
                width: "32px",
                height: "32px",
              }}
            />
            <Box>
              <Typography
                sx={{
                  color: "rgb(10, 37, 64)",
                  fontWeight: "var(--fontWeightStandard, 400)",
                  fontSize: "var(--fontSizeMedium, 16px)",
                  margin: 0,
                  lineHeight: 1.4,
                }}
              >
                Google Calendar
              </Typography>
              <Typography
                sx={{
                  color: "#476788",
                  fontWeight: "var(--fontWeightStandard, 400)",
                  fontSize: "var(--fontSizeMedium, 12px)",
                  margin: 0,
                  lineHeight: 1.4,
                }}
              >
                niharsasini@gmail.com
              </Typography>
            </Box>
          </Box>

          {/* Sync Settings */}
          <Box>
            <Typography
              sx={{
                color: "rgb(10, 37, 64)",
                fontWeight: "var(--fontWeightStandard, 700)",
                fontSize: "var(--fontSizeMedium, 16px)",
                margin: 0,
                lineHeight: 1.4,
              }}
            >
              Sync settings
            </Typography>
            <FormControlLabel
              sx={{
                color: "rgb(10, 37, 64)",
                fontWeight: "var(--fontWeightStandard, 400)",
                fontSize: "var(--fontSizeMedium, 14px)",
                margin: 0,
                lineHeight: 1.4,
              }}
              control={<Checkbox />}
              label="Include buffers on this calendar"
            />
            <FormControlLabel
              sx={{
                color: "rgb(10, 37, 64)",
                fontWeight: "var(--fontWeightStandard, 400)",
                fontSize: "var(--fontSizeMedium, 14px)",
                margin: 0,
                lineHeight: 1.4,
              }}
              control={<Checkbox />}
              label="Deleting or declining an event in your calendar will also cancel it in Calendly"
            />
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Settings;
