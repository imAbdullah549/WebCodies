import React from "react";
import { Container, Box, Typography, Grid } from "@mui/material";
import Image from "next/image";
import mobile from "../../asset/mobile.png";
import experteseImg from "../../asset/experteseImg.png";
import webDevelopment from "../../asset/webDevelopment.png";
import DoneIcon from "@mui/icons-material/Done";
function OurExpertise() {
  const Heading = () => {
    return (
      <Box sx={{ marginTop: "50px" }}>
        <Typography
          sx={{
            fontSize: "15px",
            textAlign: "center",
            lineHeight: 2.5,
          }}
        >
          Quickly unleash cross
        </Typography>
        <Typography
          sx={{
            color: "primary.dark",
            fontSize: "35px",
            textAlign: "center",
            fontWeight: "bold",
            textTransform: "uppercase",
            lineHeight: 1,
          }}
        >
          We are experts in
        </Typography>
      </Box>
    );
  };
  const RightTopContent = () => {
    return (
      <Grid container justifyContent="space-between">
        <Grid item xs={4}>
          <Image
            src={experteseImg}
            alt="Expertiese"
            width="432px"
            height="432px"
            quality={100}
          />
        </Grid>
        <Grid item xs={7} sx={{ marginTop: "20px" }}>
          <Typography
            sx={{
              color: "primary.dark",
              fontSize: "25px",
              fontWeight: "bold",
              textAlign: "left",
            }}
          >
            IDEATION & EVALUATION
          </Typography>
          <Typography variant="body2" color="text.secondary" gutterBottom>
            Here at WebCodies, our team is well-versed in numerous coding
            languages such as HTML5, JavaScript, and PHP. Additionally, we
            incorporate Node (develops server-side tools)
          </Typography>
          <Grid container sx={{ marginTop: "40px" }} alignItems="center">
            <Grid item xs={1}>
              <DoneIcon sx={{ color: "primary.dark" }} />
            </Grid>
            <Grid item xs={11}>
              <Typography variant="body2" color="text.secondary" gutterBottom>
                Enhanced Features for High-Quality 360 Content
              </Typography>
            </Grid>

            <Grid item xs={1}>
              <DoneIcon sx={{ color: "primary.dark" }} />
            </Grid>
            <Grid item xs={11}>
              <Typography variant="body2" color="text.secondary" gutterBottom>
                Always Stay Connected with 360 Social Live Broadcast
              </Typography>
            </Grid>
            <Grid item xs={1}>
              <DoneIcon sx={{ color: "primary.dark" }} />
            </Grid>
            <Grid item xs={11}>
              <Typography variant="body2" color="text.secondary" gutterBottom>
                Expanded Compatibility for More 360 Experiences
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    );
  };
  const RightButtomContent = () => {
    return (
      <Grid container justifyContent="space-between">
        <Grid item xs={7} sx={{ marginTop: "20px" }}>
          <Typography
            sx={{
              color: "primary.dark",
              fontSize: "25px",
              fontWeight: "bold",
              textAlign: "left",
            }}
          >
            WEB & MOBILE DEVELOPMENT
          </Typography>
          <Typography variant="body2" color="text.secondary" gutterBottom>
            Here at WebCodies, our team is well-versed in numerous coding
            languages such as HTML5, JavaScript, and PHP. Additionally, we
            incorporate Node (develops server-side tools)
          </Typography>
          <Grid container sx={{ marginTop: "40px" }} alignItems="center">
            <Grid item xs={1}>
              <DoneIcon sx={{ color: "primary.dark" }} />
            </Grid>
            <Grid item xs={11}>
              <Typography variant="body2" color="text.secondary" gutterBottom>
                Enhanced Features for High-Quality 360 Content
              </Typography>
            </Grid>

            <Grid item xs={1}>
              <DoneIcon sx={{ color: "primary.dark" }} />
            </Grid>
            <Grid item xs={11}>
              <Typography variant="body2" color="text.secondary" gutterBottom>
                Always Stay Connected with 360 Social Live Broadcast
              </Typography>
            </Grid>
            <Grid item xs={1}>
              <DoneIcon sx={{ color: "primary.dark" }} />
            </Grid>
            <Grid item xs={11}>
              <Typography variant="body2" color="text.secondary" gutterBottom>
                Expanded Compatibility for More 360 Experiences
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={4}>
          <Image
            src={webDevelopment}
            alt="Expertiese"
            width="432px"
            height="432px"
            quality={100}
          />
        </Grid>
      </Grid>
    );
  };
  const RightContent = () => {
    return (
      <Grid item xs={8}>
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
      }}
    >
      <Container>
        <Heading />
        <Grid
          container
          sx={{ marginTop: "20px" }}
          justifyContent="space-between"
        >
          <RightContent />
          <Grid item xs={3}>
            <Image
              src={mobile}
              alt="Mobile"
              width="515px"
              height="907px"
              quality={100}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
export default OurExpertise;
