// GlobalCard.jsx
import React from "react";
import { Card, Box, Typography, Button } from "@mui/material";

const GlobalCard = ({
  icon, // Pass any JSX element (can be stacked too)
  title,
  description,
  buttonText,
  onButtonClick,
  sx = {},
  cardProps = {},
  buttonProps = {},
}) => {
  return (
    <Card
      elevation={0}
      sx={{
        borderRadius: 2,
        padding: 2.5,
        width: 280,
        minHeight: 200,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        ...sx,
      }}
      {...cardProps}
    >
      <Box display="flex" flexDirection="column" gap={1}>
        {icon && <Box>{icon}</Box>}

        {title && (
          <Typography variant="subtitle1" fontWeight={600}>
            {title}
          </Typography>
        )}

        {description && (
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        )}
      </Box>

      {buttonText && (
        <Button
          variant="contained"
          size="small"
          onClick={onButtonClick}
          sx={{ alignSelf: "flex-start", mt: 2 }}
          {...buttonProps}
        >
          {buttonText}
        </Button>
      )}
    </Card>
  );
};

export default GlobalCard;
