import React from "react";
import GlobalButton from "../../Globaly-Components/GlobalButton/GlobalButton.jsx";
import GlobalIcon from "../../Globaly-Components/GlobalIcon/GlobalIcon.jsx"; // make sure path is correct

export default function CreateButton({ isCollapsed, toggleCollpase }) {
  return (
    <GlobalButton
      onClick={toggleCollpase}
      variant="outlined"
      color="primary"
      title={
        <span style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <GlobalIcon name="Add" size="16px" />
          {!isCollapsed && "Create"}
        </span>
      }
      sx={{
        maxWidth: "100%",
        mb: 3,
        mt: 3,
        borderRadius: "28px",
        padding: "8px 16px",
        fontWeight: "400",
        border: "2px solid #7EA5DC",
        "&:hover": { backgroundColor: "#E6F0FF" },
      }}
    />
  );
}
