import React from "react";
import {
  Box,
  Typography,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
  IconButton,
  Paper,
  Divider,
  Stack,
} from "@mui/material";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import DropdownMenu from "../../../Globaly-Components/DropdownMenu.jsx";
const RoutingCard = () => {
  return (
    <Box sx={{ p: 4, bgcolor: "#f9f9f9", minHeight: "100vh", opacity: 0.4 }}>
      <Box display={"flex"} gap={1}>
        <DropdownMenu buttonLabel="All Time"  />
        <DropdownMenu buttonLabel="Form: Demo intake form" />
      </Box>

      {/* Routing Funnel */}
      <Paper elevation={1} sx={{ p: 3, borderRadius: 2, mt: 7 }}>
        <Typography
          variant="subtitle1"
          fontWeight="bold"
          color="text.secondary"
        >
          Routing funnel
        </Typography>

        <Box
          mt={3}
          display="flex"
          justifyContent="space-between"
          alignItems="flex-start"
        >
          <Box>
            <Typography color="text.secondary">1. Form submitted</Typography>
            <Typography variant="body2" color="text.disabled">
              0
            </Typography>
          </Box>

          <Box>
            <Typography color="text.secondary">2. Event booked</Typography>
            <Typography variant="body2" color="text.disabled">
              0
            </Typography>
          </Box>
        </Box>

        {/* Funnel Chart Placeholder */}
        <Box
          mt={6}
          height={150}
          bgcolor="#fff"
          borderRadius={2}
          border="1px solid #eee"
        />

        {/* Footer Legend */}
        <Box mt={3} display="flex" gap={3} alignItems="center">
          <Typography variant="caption" color="text.secondary">
            <span style={{ borderBottom: "2px solid #aaa", marginRight: 4 }} />{" "}
            Completed
          </Typography>
          <Typography variant="caption" color="text.secondary">
            <span style={{ borderBottom: "2px solid #ccc", marginRight: 4 }} />{" "}
            Dropped off
          </Typography>
          <Typography variant="caption" color="text.secondary">
            <span style={{ borderBottom: "2px solid #eee", marginRight: 4 }} />{" "}
            Not routed to an Event Type
          </Typography>
        </Box>
      </Paper>
    </Box>
  );
};

export default RoutingCard;
