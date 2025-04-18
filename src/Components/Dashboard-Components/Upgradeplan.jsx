import React, { useState } from "react";
import {
  Box,
  Typography,
  ToggleButtonGroup,
  ToggleButton,
  IconButton,
  Card,
  CardContent,
  Button,
  Grid,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import TabTables from "./UpgradePlan-Componennt/TabTables";

const Upgradeplan = () => {
  const [billing, setBilling] = useState("yearly");

  const handleBillingChange = (event, newBilling) => {
    if (newBilling !== null) {
      setBilling(newBilling);
    }
  };

  const plans = [
    {
      title: "Standard",
      price: "$10",
      unit: "/SEAT/MO",
      description:
        "Eliminate the back-and-forth between you and your customers with automated and personalized scheduling experiences.",
      buttonText: "Select",
    },
    {
      title: "Teams",
      price: "$16",
      unit: "/SEAT/MO",
      description:
        "Collaborate effectively with team members and drive business results with smart automations, reporting, and advanced scheduling options.",
      buttonText: "Select",
      popular: true,
    },
    {
      title: "Enterprise",
      price: "STARTS AT $15k",
      unit: "PER YEAR",
      description:
        "Standardize the scheduling experience for your organization and access enterprise-level security, admin control, and personalized support.",
      buttonText: "Contact sales",
    },
  ];

  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        bgcolor: "white",
        p: 2,
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          width: "70%",
        }}
      >
        <IconButton
          sx={{
            width: "44px",
            height: "44px",
            borderRadius: "4px",
            backgroundColor: "transparent",
            color: "var(--colorTextStandard, var(--coreColorNeutral900))",
            transition: "all 0.3s",
            border: "none",
            font: "inherit",
            textAlign: "center",
            textDecoration: "none",
            cursor: "pointer",
          }}
        >
          <CloseIcon />
        </IconButton>
      </Box>
      <Box
        sx={{
          width: "70%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 4,
        }}
      >
        <Typography
          variant="h6"
          fontWeight="bold"
          sx={{
            margin: 0,
            fontWeight: "var(--fontWeightBold, 700)",
            lineHeight: "var(--lineHeightStandard, 1.4)",
            fontSize: "var(--fontSizeHeadline2, 28px)",
            color: "rgb(10, 37, 64)",
          }}
        >
          Choose a plan that fits
        </Typography>

        <Box
          sx={{
            position: "relative",
            display: "inline-flex",
            gap: "2px",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "2px",
            borderRadius: "12px",
            backgroundColor: "#f0f3f8",
          }}
        >
          <ToggleButtonGroup
            value={billing}
            exclusive
            onChange={handleBillingChange}
          >
            <ToggleButton
              value="yearly"
              sx={{
                padding: "8px 16px",
                borderRadius: "8px",
                color: "#0a2540",
                fontWeight: 700,
                fontSize: "16px",
                lineHeight: "20px",
                backgroundColor: "#ffffff",
                boxShadow: "0 1px 6px rgb(0 0 0 / 25%)",
                textTransform: "none",
              }}
            >
              Bill yearly (save up to 20%)
            </ToggleButton>
            <ToggleButton
              value="monthly"
              sx={{
                padding: "8px 16px",
                borderRadius: "8px",
                color: "var(--colorTextStandard, var(--coreColorNeutral900))",
                fontWeight: 400,
                fontSize: "16px",
                lineHeight: "20px",
                textTransform: "none",
              }}
            >
              Bill monthly
            </ToggleButton>
          </ToggleButtonGroup>
        </Box>
      </Box>
      {/* Pricing Plans */}
      <Box sx={{ width: "70%" }}>
        <Grid container spacing={3}>
          {plans.map((plan) => (
            <Grid item xs={12} md={4} key={plan.title}>
              <Card
                sx={{
                  overflow: "visible",

                  height: "100%",
                  width: "100%", // Set to 100% to ensure it stretches within the grid cell
                  border: plan.popular ? "1px solid #0056FF" : "1px solid #ccc",
                  position: "relative",
                  boxShadow: 2,
                  borderRadius: 2,
                  borderTopLeftRadius: plan.popular ? 0 : 8,
                  borderTopRightRadius: plan.popular ? 0 : 8,
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                {plan.popular && (
                  <Box
                    sx={{
                      position: "absolute",
                      top: -19,
                      left: -1,
                      right: -1,
                      py: 0.5,
                      backgroundColor: "#004796",
                      color: "white",
                      textAlign: "center",
                      fontWeight: "var(--fontWeightBold, 700)",
                      fontSize: "var(--fontSizeXSmall, 12px)",
                      border: "1.5px solid  #0056FF",
                      zIndex: 100000,
                      borderTopLeftRadius: 8,
                      borderTopRightRadius: 8,
                    }}
                  >
                    MOST POPULAR
                  </Box>
                )}
                <CardContent
                  sx={{
                    // pt: plan.popular ? 6 : 2,
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                  }}
                >
                  <div>
                    <Typography
                      variant="h6"
                      fontWeight="bold"
                      gutterBottom
                      sx={{
                        fontSize: "var(--fontSizeHeadline3, 24px)",
                        color: "rgb(10, 37, 64)",
                        margin: 0,
                        fontWeight: "var(--fontWeightBold, 700)",
                        lineHeight: "var(--lineHeightStandard, 1.4)",
                      }}
                    >
                      {plan.title}
                    </Typography>
                    <Typography
                      variant="h4"
                      fontWeight="bold"
                      sx={{
                        fontSize: "20px",
                        margin: 0,
                        fontWeight: "var(--fontWeightBold, 700)",
                        lineHeight: "var(--lineHeightStandard, 1.4)",
                      }}
                    >
                      {plan.price}{" "}
                      <Typography
                        component="span"
                        variant="body2"
                        fontWeight="bold"
                      >
                        {plan.unit}
                      </Typography>
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      mt={2}
                      mb={4}
                      sx={{
                        fontSize: "var(--fontSizeXSmall, 12px)",
                      }}
                    >
                      {plan.description}
                    </Typography>
                  </div>
                  <Button
                    variant="contained"
                    fullWidth
                    sx={{
                      backgroundColor: "#006bff",
                      "&:hover": {
                        backgroundColor: "#0046D6",
                      },
                      textTransform: "none",
                      borderColor: "#006bff",
                      borderRadius: "9999px",
                      marginTop: "auto",
                      color: "#ffffff",
                      fontWeight: "var(--fontWeightBold, 700)",
                      display: "block",
                    }}
                  >
                    {plan.buttonText}
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
      <TabTables />
    </Box>
  );
};

export default Upgradeplan;
