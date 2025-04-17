import { AppBar, IconButton } from "@mui/material";
import React, { useState } from "react";
import GlobalIcon from "../../Globaly-Components/GlobalIcon/GlobalIcon";
import GlobalButton from "../../Globaly-Components/GlobalButton/GlobalButton";
import { FaAngleDown } from "react-icons/fa";
import { MdDone } from "react-icons/md";

export default function TopNavbar() {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <>
      <AppBar
        position="static"
        className="navbar-top-container"
        sx={{
          "& .navbar-top": {
            display: "flex",
            alignItems: "center",
            width: {
              xs: "100%", // <=600px
              sm: "100%", // <=960px
              md: "100%", // <=1200px
              lg: "85%", // >1200px
            },

            justifyContent: {
              xs: "space-between", // for screens <=768px
              md: "flex-end", // for larger screens
            },
          },
        }}
      >
        <div className="navbar-top">
          <div className="language-dropdown">
            <IconButton
              className="icon"
              sx={{
                backgroundColor: "transparent",
              }}
            >
              <GlobalIcon name="Language" size="23px" />
            </IconButton>
            <GlobalButton
              variant="text"
              size="small"
              sx={{
                color: "rgb(71, 103, 136)",
                fontWeight: "700",
                display: "flex",
                alignItems: "center",
                fontSize: "13px",
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
                      <span>{language}</span>
                      {language.trim() === "English" && (
                        <MdDone size="20px" color="black" />
                      )}
                    </GlobalButton>
                  )
                )}
              </div>
            )}
          </div>
          <GlobalButton
            variant="text"
            size="medium"
            sx={{
              color: "rgb(71, 103, 136)",
              fontWeight: "700",
              fontSize: "13px",
              paddingLeft: "0px",
              textTransform: "none",
              "&:hover": { color: "rgb(0, 107, 255)" },
            }}
          >
            Talk to sales
          </GlobalButton>
        </div>
      </AppBar>
    </>
  );
}
