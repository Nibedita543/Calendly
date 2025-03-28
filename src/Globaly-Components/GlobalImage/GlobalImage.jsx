import React, { useState } from "react";
import { Box } from "@mui/material";

const GlobalImage = ({
  src,
  alt = "Image",
  width = "auto",
  height = "auto",
  objectFit = "cover",
  borderRadius = "0px",
  className = "",
  onClick = () => {},
  sx = {},
  fallbackSrc = "https://via.placeholder.com/150", // Default image if the main one fails
  ...props
}) => {
  const [imgSrc, setImgSrc] = useState(src);

  return (
    <Box
      component="img"
      src={imgSrc}
      alt={alt}
      width={width}
      height={height}
      loading="lazy" // Optimized for performance
      className={className}
      onClick={onClick}
      onError={() => setImgSrc(fallbackSrc)} // Handle broken image
      sx={{
        objectFit,
        borderRadius,
        display: "block",
        maxWidth: "100%",
        transition: "0.3s ease-in-out",
        "&:hover": { opacity: 0.9 }, // Default hover effect
        ...sx, // Allows additional styles dynamically
      }}
      {...props}
    />
  );
};

export default GlobalImage;
