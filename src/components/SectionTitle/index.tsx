import { Box, Typography } from "@mui/material";
import React from "react";

interface SectionTitleProps {
  title: string;
  subtitle: string;
}

export default function SectionTitle({ title, subtitle }: SectionTitleProps) {
  return (
    <Box >
      <Typography
        sx={{
          fontFamily: "Raleway",
          fontStyle: "normal",
          fontWeight: "700",
          fontSize: "22px",
          lineHeight: "33px",
          textAlign: "center",
          letterSpacing: "2px",
          paddingTop: "2.4rem",
          color: "#004D40",
        }}
      >
        {title}
      </Typography>
      <Typography
        sx={{
          fontFamily: "Raleway",
          fontStyle: "normal",
          fontWeight: "300",
          fontSize: "16px",
          lineHeight: "26px",
          textAlign: "center",
          letterSpacing: "0.5px",
          color: "#333333",
          paddingBottom: "2.4rem",
        }}
      >
        {subtitle}
      </Typography>
    </Box>
  );
}
