import React from "react";
import { Typography, Box } from "@mui/material";

function Heading({ subtitle, title }) {
  return (
    <Box
      sx={{
        marginTop: { xs: "35px", sm: "50px" },
        marginBottom: { xs: "35px", sm: "50px" },
      }}
    >
      <Typography
        sx={{
          fontSize: { xs: "14px", sm: "15px" },
          textAlign: "center",
          lineHeight: 2.5,
        }}
      >
        {subtitle}
      </Typography>
      <Typography
        sx={{
          color: "primary.dark",
          fontSize: { xs: "30px", sm: "35px" },
          textAlign: "center",
          fontWeight: "bold",
          textTransform: "uppercase",
          lineHeight: 1,
        }}
      >
        {title}
      </Typography>
    </Box>
  );
}
export default Heading;
