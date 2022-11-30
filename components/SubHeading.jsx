import React from "react";
import { Typography, Box } from "@mui/material";

function SubHeading({ title }) {
  return (
    <Box>
      <Typography
        sx={{
          color: "primary.dark",
          fontSize: { xs: "19px", sm: "25px" },
          fontWeight: { xs: 600, sm: "bold" },
          textAlign: "left",
        }}
      >
        {title}
      </Typography>
    </Box>
  );
}
export default SubHeading;
