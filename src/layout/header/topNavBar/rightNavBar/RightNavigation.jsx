import { Box, IconButton } from "@mui/material";
import React from "react";
import LightModeIcon from "@mui/icons-material/LightMode";
import { useTheme } from "../../../../providers/ThemeProvider";
import DarkModeIcon from "@mui/icons-material/DarkMode";

export default function RightNavigation() {
  const { isDark, toggleDark } = useTheme();
  return (
    <Box sx={{ display: { xs: "none", md: "inline-flex" } }}>
      <IconButton sx={{ marginLeft: 1 }} onClick={toggleDark}>
        {isDark ? <LightModeIcon /> : <DarkModeIcon />}
      </IconButton>
    </Box>
  );
}
