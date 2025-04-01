import React, { useState } from "react";
import "../LanguageDropDown/LanguageDropDown.css";
import { IconButton } from "@mui/material";
import GlobalIcon from "../../Globaly-Components/GlobalIcon/GlobalIcon";
import GlobalButton from "../../Globaly-Components/GlobalButton/GlobalButton";
import { MdDone } from "react-icons/md";
import { FaAngleDown } from "react-icons/fa";

export default function LanguageDropDown({
  selectedLanguage,
  onLanguageChange,
  languages,
}) {
  const [showDropdown, setShowDropdown] = useState(false);
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
      <IconButton
        className="icon"
        sx={{
          backgroundColor: "transparent",
          paddingLeft: "5px",
        }}
      >
        <GlobalIcon name="Language" size="23px" />
      </IconButton>
      <div className="language-dropdown">
        <GlobalButton
          variant="text"
          size="small"
          sx={{
            color: "rgb(71, 103, 136)",
            fontWeight: "700",
            display: "flex",
            alignItems: "center",
            textTransform: "none",
          }}
          onClick={() => setShowDropdown(!showDropdown)}
        >
          English <FaAngleDown className="dropdown-icon" />
        </GlobalButton>

        {showDropdown && (
          <div className="dropdown-menu">
            {["English", "Español", "Français", "Deutsch", "Portugues"].map(
              (language) => (
                <GlobalButton
                  key={language}
                  variant="text"
                  fullWidth
                  sx={{
                    justifyContent: "space-between", // Text left, checkmark right
                    color: "rgb(71, 103, 136)",
                    fontWeight: "600",
                    padding: "16px",
                    height: "64px",
                    backgroundColor:
                      language.trim() === "English"
                        ? "rgb(240, 243, 248)"
                        : "transparent",
                    "&:hover": { backgroundColor: "rgb(240, 243, 248)" }, // Hover effect
                  }}
                  onClick={() => console.log(`Selected: ${language}`)}
                >
                  <span style={{color:"black"}}>{language}</span>
                  {language.trim() === "English" && (
                    <MdDone size="20px" color="black" />
                  )}
                </GlobalButton>
              )
            )}
          </div>
        )}
      </div>
    </div>
  );
}
