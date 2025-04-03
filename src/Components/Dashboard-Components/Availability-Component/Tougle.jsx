import * as React from "react";
import { ToggleButton, ToggleButtonGroup } from "@mui/material";
import ViewListIcon from "@mui/icons-material/ViewList";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";

export default function Touggle() {
  const [view, setView] = React.useState("list");

  const handleViewChange = (event, newView) => {
    if (newView !== null) {
      setView(newView);
    }
  };

  return (
    <ToggleButtonGroup
      value={view}
      exclusive
      onChange={handleViewChange}
      sx={{
        display: "inline-flex",
        gap: "5px",
        padding: "4px",
        borderRadius: "12px",
        backgroundColor: "#f0f3f8",
      }}
    >
      <ToggleButton
        value="list"
        sx={{
          textTransform: "none",
          padding: "6px 12px",
          borderRadius: "8px",
          border: "none",
          "&.Mui-selected": {
            backgroundColor: "white",
            fontWeight: "bold",
            boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
          },
        }}
      >
        <ViewListIcon fontSize="small" sx={{ marginRight: "4px" }} /> List
      </ToggleButton>
      <ToggleButton
        value="calendar"
        sx={{
          textTransform: "none",
          padding: "6px 12px",
          borderRadius: "8px",
          border: "none",
          "&.Mui-selected": {
            backgroundColor: "white",
            fontWeight: "bold",
            boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
          },
        }}
      >
        <CalendarTodayIcon fontSize="small" sx={{ marginRight: "4px" }} />
        Calendar
      </ToggleButton>
    </ToggleButtonGroup>
  );
}
