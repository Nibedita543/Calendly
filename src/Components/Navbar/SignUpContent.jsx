import { Button } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

export default function SignUpContent() {
  const navigate = useNavigate();
  return (
    <>
      <Button
        onClick={() => navigate("/login")}
        variant="contained"
        disableElevation
        sx={{
          cursor: "pointer",
          transition:
            "0.2s linear, background-position 1ms, background-size 1ms",
          color: "rgb(25, 72, 112)",
          border: "1px solid rgb(248, 249, 251)",
          backgroundColor: "rgb(248, 249, 251)",
          padding: "10px 16px",
          fontSize: "0.870rem",
          lineHeight: 1.4,
          position: "relative",
          height: "fit-content",
          flexDirection: "row",
          display: "inline-flex",
          opacity: 1,
          alignItems: "center",
          justifyContent: "center",
          gap: "8px",
          borderRadius: "8px",
          textAlign: "center",

          fontWeight: 600,
          textTransform: "none",
          "&:hover": {
            backgroundColor: "#e5e7eb",
            boxShadow: "none",
          },
        }}
      >
        Log In
      </Button>
    </>
  );
}
