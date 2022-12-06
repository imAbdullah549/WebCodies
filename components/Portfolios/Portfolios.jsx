import React from "react";
import Box from "@mui/material/Box";
import { useTheme } from "@mui/material/styles";
import { Container, Typography } from "@mui/material";
import Result from "../Result";

const Portfolios = () => {
  const theme = useTheme();
  return (
    <Container>
      <Typography
        gutterBottom
        sx={{
          color: "rgb(50, 80, 191)",
          fontSize: { xs: "30px", sm: " 35px" },
          fontWeight: "bold",
          lineHeight: 0.96,
          maxWidth: "450px",
        }}
      >
        It’s proudly for us to build interior design
      </Typography>
      <Typography
        gutterBottom
        sx={{
          fontSize: "15px",
          lineHeight: 1.3,
          color: "rgb(36, 36, 36)",
          maxWidth: "530px",
        }}
      >
        I produce elegant solutions with a human-centered design approach, Feel
        free to get in touch with me via email.
      </Typography>
      <Box sx={{ marginTop: "25px", marginBottom: "25px" }}>
        <Result />
      </Box>
    </Container>
  );
};

export default Portfolios;
