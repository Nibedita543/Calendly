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
import { BiPlus } from "react-icons/bi";
import LaunchIcon from "@mui/icons-material/Launch";
import Header from "../../Main-Components/Header.jsx";

const MuiUiClone = () => {
  return (
    <Box sx={{ backgroundColor: "#f5f5f5", height: "100vh", width: "94%" }}>
      <Header title={"Event types"} />
      <Card
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          mb: 4,
          mt: 6,
          backgroundColor: "#f5f5f5",
          borderBottom: "0.5px solid #d4e0ed",
        }}
      >
        <Box
          sx={{
            width: 44,
            height: 44,
            borderRadius: "50%",
            backgroundColor: "#e7edf6",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 17,
            border: "none",
            fontWeight: "var(--fontWeightStandard, 400)",
            fontFamily: '"Proxima Nova", sans-serif',
            lineHeight: 1.5,
            color: "#0a2540",
            ml: 2,
          }}
        >
          N
        </Box>
        <Box sx={{ ml: 4, flexGrow: 1 }}>
          <Typography
            sx={{
              margin: 0,
              lineHeight: 1.4,
              fontSize: "var(--fontSizeSmall, 13px)",
              fontWeight: "var(--fontWeightStandard, 400)",
              color: "rgb(10, 37, 64)",
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
                fontSize: "var(--fontSizeSmall, 14px)",
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
            mr: 2,
            borderRadius: "28px",
            padding: "6px 14px",
            fontWeight: 300,
            textTransform: "none",
            border: " 0.8px solid#476788",
            "&:hover": { backgroundColor: "#e9f0ff" },
            bgcolor: "#f5f5f5",
            color: "#0a2540",
            fontSize: "var(--fontSizeSmall, 13.5px)",
            lineHeight: "20px",
          }}
        >
          <BiPlus size={"18px"} style={{ marginRight: 4 }} />
          New Event Type
        </Button>
        <SettingsIcon
          sx={{
            width: "20px",
            height: "20px",
            position: "relative",
            display: "inline-flex",
            verticalAlign: "middle",
            justifyContent: "center",
            alignItems: "center",
            padding: "4px",
            borderRadius: "4px",
            backgroundColor: "transparent",
            color: "#0a2540",
            transition: "all 0.3s",
          }}
        />
      </Card>

      <Card
        sx={{
          display: "flex",
          flexDirection: "column",
          boxSizing: "border-box",
          height: "240px",
          width: "400px",
          minHeight: "226px",
          border: "1px solid var(--color-grey-3, #CCCCCC)",
          borderRadius: "4px",
          backgroundColor: "var(--color-bg-white-l-1, rgba(255, 255, 255, 1))",
          boxShadow: "0 1px 6px 0 rgb(0 0 0 / 10%)",
        }}
      >
        <Box
          sx={{
            height: "6px",
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
          <Checkbox
            sx={{
              position: "relative",
              flexShrink: 0,
              width: "16px",
              height: "16px",
              borderRadius: "13.333%",
              backgroundColor:
                "var(--colorBackgroundStandard, var(--coreColorNeutral0))",
              WebkitUserSelect: "none",
              MozUserSelect: "none",
              userSelect: "none",
              padding: "0.5px",
              boxShadow: "inset 0 0 0 1px #a6bbd1",
              ml: 2,
            }}
          />
          <IconButton>
            <SettingsIcon sx={{ mr: 2 }} />
          </IconButton>
        </Box>
        <Box
          sx={{
            p: 2,
            borderRadius: "2px",
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
                fontSize: "23px",
                lineHeight: 1.4,
              }}
            >
              30 Minute Meeting
            </Typography>
          </Box>
          <Typography
            sx={{
              margin: 0,
              lineHeight: 1.4,
              fontSize: "var(--fontSizeMedium, 15px)",
              fontWeight: "var(--fontWeightStandard, 400)",
              color: "#476788",
            }}
          >
            30 min, One-on-One
          </Typography>
          <Typography
            color="#004eba"
            sx={{
              textDecoration: "underline",
              color: "#004eba",
              backgroundColor: "transparent",
              cursor: "pointer",
              WebkitTextDecoration: "underline",
              marginTop: "10px",
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
