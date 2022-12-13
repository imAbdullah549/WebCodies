import React, { useEffect } from "react";
import { Container, Box, Typography, Grid } from "@mui/material";
import Image from "next/image";
import mobile from "../../asset/mobile.png";
import experteseImg from "../../asset/experteseImg.png";
import webDevelopment from "../../asset/webDevelopment.png";
import DoneIcon from "@mui/icons-material/Done";
import Heading from "../Heading";
import SubHeading from "../SubHeading";
import useMediaQuery from "@mui/material/useMediaQuery";
import AOS from "aos";
import "aos/dist/aos.css";
function OurExpertise() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  const isXs = useMediaQuery("(max-width:600px)");
  const SecBullitPara = () => {
    return (
      <Grid
        container
        sx={{ marginTop: { xs: "15px", sm: "40px" } }}
        alignItems="center"
      >
        <Grid
          item
          sm={1}
          xs={1.5}
          data-aos="zoom-in-right"
          data-aos-duration="2000"
        >
          <DoneIcon sx={{ color: "primary.dark" }} />
        </Grid>
        <Grid
          item
          sm={11}
          xs={10}
          data-aos="zoom-in-left"
          data-aos-duration="2000"
        >
          <Typography variant="body2" color="text.secondary" gutterBottom>
            Enhanced Features for High-Quality 360 Content
          </Typography>
        </Grid>

        <Grid
          item
          sm={1}
          xs={1.5}
          data-aos="zoom-in-right"
          data-aos-duration="2200"
        >
          <DoneIcon sx={{ color: "primary.dark" }} />
        </Grid>
        <Grid
          item
          sm={11}
          xs={10}
          data-aos="zoom-in-left"
          data-aos-duration="2200"
        >
          <Typography variant="body2" color="text.secondary" gutterBottom>
            Always Stay Connected with 360 Social Live Broadcast
          </Typography>
        </Grid>
        <Grid
          item
          sm={1}
          xs={1.5}
          data-aos="zoom-in-right"
          data-aos-duration="2400"
        >
          <DoneIcon sx={{ color: "primary.dark" }} />
        </Grid>
        <Grid
          item
          sm={11}
          xs={10}
          data-aos="zoom-in-left"
          data-aos-duration="2400"
        >
          <Typography variant="body2" color="text.secondary" gutterBottom>
            Expanded Compatibility for More 360 Experiences
          </Typography>
        </Grid>
      </Grid>
    );
  };
  const FirstBullitPara = () => {
    return (
      <Grid
        container
        sx={{ marginTop: { xs: "15px", sm: "40px" }, overflow: "hidden" }}
        alignItems="center"
      >
        <Grid
          item
          sm={1}
          xs={1.5}
          data-aos="zoom-in-right"
          data-aos-duration="2000"
        >
          <DoneIcon sx={{ color: "primary.dark" }} />
        </Grid>
        <Grid
          item
          sm={11}
          xs={10}
          data-aos="zoom-in-left"
          data-aos-duration="2000"
        >
          <Typography variant="body2" color="text.secondary" gutterBottom>
            Enhanced Features for High-Quality 360 Content
          </Typography>
        </Grid>

        <Grid
          item
          sm={1}
          xs={1.5}
          data-aos="zoom-in-right"
          data-aos-duration="2200"
        >
          <DoneIcon sx={{ color: "primary.dark" }} />
        </Grid>
        <Grid
          item
          sm={11}
          xs={10}
          data-aos="zoom-in-left"
          data-aos-duration="2200"
        >
          <Typography variant="body2" color="text.secondary" gutterBottom>
            Always Stay Connected with 360 Social Live Broadcast
          </Typography>
        </Grid>
        <Grid
          item
          sm={1}
          xs={1.5}
          data-aos="zoom-in-right"
          data-aos-duration="2400"
        >
          <DoneIcon sx={{ color: "primary.dark" }} />
        </Grid>
        <Grid
          item
          sm={11}
          xs={10}
          data-aos="zoom-in-left"
          data-aos-duration="2400"
        >
          <Typography variant="body2" color="text.secondary" gutterBottom>
            Expanded Compatibility for More 360 Experiences
          </Typography>
        </Grid>
      </Grid>
    );
  };
  const RightTopContent = () => {
    return (
      <Grid container justifyContent="space-between">
        <Grid item xs={3} sm={4} data-aos="zoom-in" data-aos-duration="1000">
          <Box sx={{ paddingTop: { xs: "20px", sm: "0px" } }}>
            <Image
              src={experteseImg}
              alt="Expertiese"
              width="432px"
              height="432px"
              quality={100}
            />
          </Box>
        </Grid>
        <Grid item xs={8} sm={7} sx={{ marginTop: "20px" }} data-aos="zoom-in">
          <SubHeading title="IDEATION & EVALUATION" />
          <Typography variant="body2" color="text.secondary" gutterBottom>
            Here at WebCodies, our team is well-versed in numerous coding
            languages such as HTML5, JavaScript, and PHP. Additionally, we
            incorporate Node (develops server-side tools)
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            <FirstBullitPara />
          </Box>
        </Grid>
        <Box sx={{ display: { sm: "none", xs: "block" } }}>
          <FirstBullitPara />
        </Box>
      </Grid>
    );
  };
  const RightButtomContent = () => {
    return (
      <Grid container justifyContent="space-between">
        <Grid
          item
          sm={7}
          xs={8.5}
          sx={{ marginTop: "20px" }}
          data-aos="zoom-in"
          data-aos-duration="1000"
        >
          <SubHeading title="WEB & APP DEVELOPMENT" />
          <Typography variant="body2" color="text.secondary" gutterBottom>
            Here at WebCodies, our team is well-versed in numerous coding
            languages such as HTML5, JavaScript, and PHP. Additionally, we
            incorporate Node (develops server-side tools)
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            <SecBullitPara />
          </Box>
        </Grid>
        <Grid item sm={4} xs={3}>
          <Box
            sx={{ paddingTop: { xs: "20px", sm: "0px" } }}
            data-aos="fade-up"
          >
            <Image
              src={webDevelopment}
              alt="Expertiese"
              width="432px"
              height="432px"
              quality={100}
            />
          </Box>
        </Grid>
        <Box sx={{ display: { sm: "none", sx: "block" } }}>
          <SecBullitPara />
        </Box>
      </Grid>
    );
  };
  const RightContent = () => {
    return (
      <Grid item xs={12} sm={8}>
        <RightTopContent />
        <RightButtomContent />
      </Grid>
    );
  };
  return (
    <Box
      sx={{
        background:
          "linear-gradient(185deg, rgb(255,255,255)18% ,rgb(245,249,250) 22% );",
        paddingTop: "5px",
        paddingBottom: "40px",
        overflow: "hidden",
      }}
    >
      <Container>
        <Heading subtitle="Quickly unleash cross" title="We are experts in" />
        <Grid
          container
          sx={{ marginTop: "20px" }}
          justifyContent="space-between"
        >
          <RightContent />
          <Grid item xs={24} sm={3} data-aos="fade-left">
            <Box
              sx={{ width: "100%", display: "flex", justifyContent: "center" }}
            >
              <Image
                src={mobile}
                alt="Mobile"
                width={isXs ? "200px" : "515px"}
                height={isXs ? "350px" : "907px"}
                quality={100}
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
export default OurExpertise;
