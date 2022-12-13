import React, { useEffect } from "react";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Form } from "./components";
import { Container, Box, Typography, Grid } from "@mui/material";
import Image from "next/image";
import LaptopImg from "../../asset/laptop.png";
import AOS from "aos";
import "aos/dist/aos.css";

const SolutionForm = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up("md"), {
    defaultMatches: true,
  });

  return (
    <Container>
      <Box sx={{ marginTop: "32px", overflow: "hidden" }}>
        <Grid container>
          <Grid item xs={12} md={6} data-aos="fade-right">
            <Form />
          </Grid>

          <Grid item container xs={12} md={6} alignItems={"center"}>
            <Box
              sx={{ display: { xs: "none", sm: "block" } }}
              data-aos="fade-left"
            >
              <Image
                src={LaptopImg}
                alt="WC"
                width="886px"
                height="793px"
                quality={100}
              />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default SolutionForm;
