import React from "react";
import { Box, Tabs, Tab, Typography } from "@mui/material";

const TabTables = () => {
  const [tabValue, setTabValue] = React.useState(0);

  return (
    <Box sx={{ width: "100%", maxWidth: 1000, mx: "auto", p: 4 }}>
      <Typography
        variant="h5"
        align="center"
        gutterBottom
        sx={{
          fontSize: "var(--fontSizeHeadline2, 28px)",
          margin: 0,
          fontWeight: "var(--fontWeightBold, 700)",
          lineHeight: "var(--lineHeightStandard, 1.4)",
          color: "rgb(10, 37, 64)",
        }}
      >
        Compare features by category
      </Typography>

      <Tabs
        value={tabValue}
        onChange={(e, newVal) => setTabValue(newVal)}
        centered
        sx={{ mb: 4, textTransform: "none" }}
      >
        <Tab label="View All" />
        <Tab label="Core features" />
        <Tab label="Customizations" />
        <Tab label="Team tools" />
        <Tab label="Integrations" />
        <Tab label="Security and control" />
        <Tab label="Support" />
      </Tabs>
    </Box>
  );
};

export default TabTables;
