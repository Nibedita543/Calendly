import { Box, Card, CardContent, Typography } from '@mui/material';
import React from 'react'

export default function IntegrationAppsCards({image, title, description}) {
  return (
    <Card
      sx={{
        maxWidth: 250,
        borderRadius: 4,
        height: "80%",
        p: 1,
        display: "flex",
        flexDirection: "column",
        border: "2px solid #F2F2F2",
        boxShadow: "none",
        justifyContent: "flex-start",
        "&:hover": { boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)" },
      }}
    >
      <CardContent>
        {/* Image */}
        <Box sx={{ display: "flex", justifyContent: "left", mb: 0 }}>
          <img
            src={image} // Local image file
            alt={title}
            width={50}
            height={50}
          />
        </Box>

        {/* Title */}
        <Typography fontSize="14px" mt="8px" fontWeight="bold">
          {title}
        </Typography>

        {/* Description */}
        <Typography variant="body2" mt="8px" color="textSecondary" >
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
}
