import React from "react";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Form } from "./components";
import { Container, Box, Typography, Grid } from "@mui/material";
import Image from "next/image";
import LaptopImg from "../../asset/laptop.png";

const SolutionForm = () => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up("md"), {
    defaultMatches: true,
  });

  return (
    <Container>
      <Box>
        <Grid container>
          <Grid item xs={12} md={6}>
            <Form />
          </Grid>
          <Grid item container xs={12} md={6} alignItems={"center"}>
            <Image
              src={LaptopImg}
              alt="WC"
              width="886px"
              height="793px"
              quality={100}
            />
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default SolutionForm;
