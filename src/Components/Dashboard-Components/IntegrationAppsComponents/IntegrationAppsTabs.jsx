import { TabContext, TabList, TabPanel } from '@mui/lab';
import { Box, Tab } from '@mui/material';
import React, { useState } from 'react'
import IntegrationAppsDiscover from './IntegrationAppsDiscover';
import IntegrationManageTab from './IntegrationManageTab';
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

export default function IntegrationAppsTabs() {
   const [value, setValue] = useState("1");

   const handleChange = (event, newValue) => {
     setValue(newValue);
   };

   return (
     <Box sx={{ width: "100%", typography: "body1" }}>
       <TabContext value={value}>
         <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
           <TabList onChange={handleChange} aria-label="lab API tabs example">
             <Tab
               label="Discover"
               value="1"
               sx={{
                 textTransform: "none",
                 color: "#476788",
                 "&:hover": { color: "#0A2540" },
               }}
             />
             <Tab
               label="Manage"
               icon={<CheckCircleIcon />} // Add icon here
               iconPosition="end"
               value="2"
               sx={{
                 textTransform: "none",
                 color: "#476788",
                 "&:hover": { color: "#0A2540" },
                  "& .MuiTab-iconWrapper": {
                   fontSize: "16px"},
               }}
             />
           </TabList>
         </Box>
         <TabPanel value="1">
           <IntegrationAppsDiscover />
         </TabPanel>
         <TabPanel value="2">
           <IntegrationManageTab />
         </TabPanel>
       </TabContext>
     </Box>
   );
}
