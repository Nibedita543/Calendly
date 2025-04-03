import { useState } from "react";
import { Box, Typography, Button, IconButton } from "@mui/material";
import ControlPointIcon from "@mui/icons-material/ControlPoint";
import DeleteIcon from "@mui/icons-material/Close";
import EventIcon from "@mui/icons-material/Event";
import { BiPlus } from "react-icons/bi";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

export default function Holidays() {
  const [holidayHours, setHolidayHours] = useState({
    "New Year": "Unavailable",
    Christmas: "Unavailable",
    Thanksgiving: "9:00am - 3:00pm",
    "Independence Day": "Unavailable",
  });

  return (
    <>
      <Box sx={{ mt: 3, p: 2, border: "1px solid #ddd", borderRadius: 2 }}>
        
       
      </Box>
      <Box
        sx={{
          p: 4,
          border: "1px solid #ddd",
          borderRadius: 2,
          display: "flex",
        }}
      >
        
      </Box>
    </>
  );
}
