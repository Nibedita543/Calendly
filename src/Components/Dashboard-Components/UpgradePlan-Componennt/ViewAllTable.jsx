import React from "react";
import {
  Box,
  Tabs,
  Tab,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Tooltip,
  IconButton,
} from "@mui/material";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const features = [
  { label: "Meeting polls", info: true, plans: [true, true, true, true] },
  { label: "One-on-ones", info: true, plans: ["Only 1", true, true, true] },
  { label: "Group event types", info: true, plans: [false, true, true, true] },
  {
    label: "Collective event types",
    info: true,
    plans: [false, true, true, true],
  },
  {
    label: "Round robin event types",
    info: true,
    plans: [false, true, true, true],
  },
  {
    label: "Email notifications for bookings and cancellations",
    info: true,
    plans: [true, true, true, true],
  },
  {
    label: "Email notifications for reminders and follow-ups",
    info: true,
    plans: [false, true, true, true],
  },
  {
    label: "Customize workflows for all forms of notifications",
    info: true,
    plans: [false, true, true, true],
  },
  {
    label: "View Contact profiles and scheduling activity",
    info: false,
    plans: [true, true, true, true],
  },
];

const planHeaders = [
  { name: "FREE", price: "$0" },
  { name: "STANDARD", price: "$10" },
  { name: "TEAMS", price: "$16" },
  { name: "ENTERPRISE", price: "Starts at $15k" },
];
export default function ViewAllTable() {
  return (
    <Table
      sx={{
        border: "1px solid #ccc",
        borderCollapse: "collapse", // ensures borders look unified
      }}
    >
      <TableHead>
        <TableRow>
          <TableCell
            sx={{
              fontWeight: "bold",
              border: "1px solid #ccc",
            }}
          >
            Core features
          </TableCell>
          {planHeaders.map((plan, idx) => (
            <TableCell
              key={idx}
              align="center"
              sx={{ border: "1px solid #ccc" }}
            >
              <Typography variant="subtitle2" fontWeight="bold">
                {plan.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {plan.price}
              </Typography>
              {plan.name !== "FREE" && (
                <Typography
                  variant="body2"
                  sx={{ color: "#0b57d0", fontWeight: 500 }}
                >
                  Select &gt;
                </Typography>
              )}
            </TableCell>
          ))}
        </TableRow>
      </TableHead>
      <TableBody>
        {features.map((feature, idx) => (
          <TableRow
            key={idx}
            sx={{
              backgroundColor:
                idx % 2 === 1 ? "rgba(0, 0, 0, 0.02)" : "inherit",
            }}
          >
            <TableCell sx={{ border: "1px solid #ccc" }}>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <span>{feature.label}</span>
                {feature.info && (
                  <Tooltip title="More info" arrow>
                    <IconButton size="small" sx={{ ml: 1 }}>
                      <InfoOutlinedIcon fontSize="small" />
                    </IconButton>
                  </Tooltip>
                )}
              </Box>
            </TableCell>

            {feature.plans.map((plan, i) => (
              <TableCell
                key={i}
                align="center"
                sx={{ border: "1px solid #ccc" }}
              >
                {plan === true ? (
                  <CheckCircleIcon sx={{ color: "#0b57d0" }} />
                ) : plan === false ? (
                  ""
                ) : (
                  <Typography variant="body2">{plan}</Typography>
                )}
              </TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
