import React from "react";
import GlobalButton from "../../Globaly-Components/GlobalButton/GlobalButton.jsx";
import GlobalIcon from "../../Globaly-Components/GlobalIcon/GlobalIcon.jsx"; // make sure path is correct

export default function CreateButton({ toggleCollpase }) {
  return (
    <GlobalButton
      onClick={toggleCollpase}
      variant="outlined"
      color="primary"
      sx={{
        height: "50px",
        maxWidth: "100%",
        borderRadius: "28px",
        padding: "8px 16px",
        fontWeight: "400",
        border: "2px solid #7EA5DC",
        "&:hover": { backgroundColor: "#E6F0FF" },
        mb: 5,
        mt: 2,
      }}
    >
      <span style={{ display: "flex", alignItems: "center", gap: "8px" }}>
        <GlobalIcon name="Add" size="16px" />
        Create
      </span>
    </GlobalButton>
  );
}
