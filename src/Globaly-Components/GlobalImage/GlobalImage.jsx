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
  fallbackSrc = "https://via.placeholder.com/150",
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
      loading="lazy"
      className={className}
      onClick={onClick}
      onError={() => setImgSrc(fallbackSrc)}
      sx={{
        objectFit,
        borderRadius,
        display: "block",
        maxWidth: "100%",
        transition: "0.3s ease-in-out",
        "&:hover": { opacity: 0.9 },
        ...sx,
      }}
      {...props}
    />
  );
};

export default GlobalImage;
