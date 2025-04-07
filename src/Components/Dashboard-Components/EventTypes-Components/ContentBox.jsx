import React from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  Button,
  IconButton,
  TextField,
  Checkbox,
} from "@mui/material";
import SettingsIcon from "@mui/icons-material/Settings";
import LinkIcon from "@mui/icons-material/Link";
import { BiPlus } from "react-icons/bi";
import LaunchIcon from "@mui/icons-material/Launch";

const MuiUiClone = () => {
  return (
    <Box sx={{ backgroundColor: "#f5f5f5", height: "100vh", width: "95%" }}>
      <Typography
        variant="h5"
        fontWeight="bold"
        gutterBottom
        sx={{
          color: "#0A2540",
          fontSize: "var(--fontSizeHeadline2, 28px)",
          margin: 0,
          fontWeight: "var(--fontWeightBold, 700)",
          lineHeight: "var(--lineHeightStandard, 1.4)",
        }}
      >
        Event types
      </Typography>

      <Card
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          p: 2,
          mb: 4,
          mt: 4,
          backgroundColor: "#f5f5f5",
        }}
      >
        <Box
          sx={{
            width: 50,
            height: 50,
            borderRadius: "50%",
            backgroundColor: "#e7edf6",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 19,
            border: "none",
          }}
        >
          N
        </Box>
        <Box sx={{ ml: 4, flexGrow: 1 }}>
          <Typography
            sx={{
              color: "currentcolor",
              fontWeight: "var(--fontWeightStandard, 400)",
              fontSize: "var(--fontSizeSmall, 15px)",
            }}
          >
            Nihar Sasini
          </Typography>
          <TextField
            fullWidth
            variant="standard"
            value="https://calendly.com/niharsasini"
            InputProps={{
              disableUnderline: true,
              sx: {
                position: "relative",
                display: "inline-block",
                alignItems: "flex-start",
                color: "#004eba",
                textAlign: "left",
                overflow: "hidden",
                maxWidth: 340,
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
                fontSize: "var(--fontSizeSmall, 18px)",
              },
            }}
          />
        </Box>
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
          New Event Type
        </Button>
      </Card>

      <Card
        sx={{
          display: "flex",
          flexDirection: "column",
          boxSizing: "border-box",
          height: "250px",
          width: "440px",
          minHeight: "226px",
          border: "1px solid var(--color-grey-3, #CCCCCC)",
          borderRadius: "4px",
          backgroundColor: "var(--color-bg-white-l-1, rgba(255, 255, 255, 1))",
          boxShadow: "0 1px 6px 0 rgb(0 0 0 / 10%)",
        }}
      >
        <Box
          sx={{
            height: "7px",
            marginTop: "-1px",
            marginRight: "-1px",
            marginLeft: "-1px",
            borderTopLeftRadius: "4px",
            borderTopRightRadius: "4px",
            backgroundColor: "rgb(130, 71, 245)",
          }}
        />

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
          }}
        >
          <Checkbox sx={{ ml: 0.8 }} />
          <IconButton>
            <SettingsIcon />
          </IconButton>
        </Box>
        <Box
          sx={{
            p: 2,
            borderRadius: 2,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography
              variant="h6"
              sx={{
                fontWeight: "var(--fontWeightStandard, 500)",
                fontSize: "28px",
                lineHeight: 1.4,
              }}
            >
              30 Minute Meeting
            </Typography>
          </Box>
          <Typography
            sx={{
              color: "#476788",
              fontWeight: "var(--fontWeightStandard, 530)",
              fontSize: "17px",
            }}
          >
            30 min, One-on-One
          </Typography>
          <Typography
            color="#004eba"
            sx={{
              cursor: "pointer",
              mt: 1,
              fontWeight: "var(--fontWeightStandard, 400)",
              fontSize: "19px",
            }}
          >
            View booking page
          </Typography>
        </Box>
        <Box
          sx={{
            zIndex: "auto",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderTop: "1px solid #d4e0ed",
            height: "50px",
            mt: 1,
          }}
        >
          <Button
            sx={{
              display: "flex",
              alignItems: "center",
              color: "var(--primary-color, rgb(0, 105, 255))",
              fontSize: "var(--fontSizeSmall, 14px)",
              ml: "40px",
              mt: "10px",
            }}
            startIcon={<LaunchIcon />}
          >
            Copy link
          </Button>
          <Button
            variant="outlined"
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderColor: "#004eba",
              color: "#004eba",
              height: "36px",
              width: "100px",
              padding: "4px 12px",
              borderRadius: "20px",
              mr: "40px",
              mt: "10px",
              textTransform: "none",
              fontSize: "16px",
            }}
          >
            Share
          </Button>
        </Box>
      </Card>
    </Box>
  );
};

export default MuiUiClone;
