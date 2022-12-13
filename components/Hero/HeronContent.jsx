import React, { useEffect } from "react";
import Image from "next/image";
import WCbackground from "../../asset/heroBackground.jpg";
import HeroRightImg from "../../asset/HeroRight.png";
import Box from "@mui/material/Box";
import CustomButton from "../CustomButton";
import { Typography } from "@mui/material";
import { Container } from "@mui/material";

import AOS from "aos";
import "aos/dist/aos.css";
function HeronContent() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <Box
      sx={{
        width: "100%",
        height: { xs: "auto", sm: "540px" },
        paddingTop: "20px",
        paddingBottom: "20px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Container
        sx={{
          display: "flex",
          alignItems: "center",
          flexDirection: { xs: "column", sm: "row" },
        }}
      >
        <Box
          sx={{
            position: "absolute",
            zIndex: -1,
            padding: { xs: "0px 12px 0px 12px", sm: "0" },
          }}
        >
          <Image
            src={WCbackground}
            alt="WC"
            width="1131px"
            height="500px"
            quality={100}
          />
        </Box>
        <Box
          sx={{
            width: { xs: "100%", sm: "50%" },
            height: "100%",
            zIndex: 9,
            display: "flex",
            flexDirection: "column",
            alignItems: " center",
          }}
        >
          <Typography
            sx={{
              fontSize: { xs: "20px", sm: "21px" },
              textAlign: "center",
              marginTop: { xs: "10px", sm: "20px" },
            }}
            data-aos="fade-right"
          >
            Welcome to Webcodies
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: "38px", sm: "59px" },
              color: "primary.dark",
              lineHeight: "0.9",
              textAlign: "center",
              marginTop: "8px",
              fontWeight: 700,
              letterSpacing: "1px",
              maxWidth: "525px",
            }}
            data-aos="fade-up"
          >
            Grow your Business with us.
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: "15px", sm: "17px" },
              textAlign: "center",
              marginTop: "12px",
            }}
            data-aos="fade-left"
          >
            We provides always our best services for you
          </Typography>
          <Box
            sx={{
              marginTop: "20px",
              marginBottom: "20px",
              display: { xs: "none", sm: "block" },
            }}
          >
            <CustomButton title="ALL  PROJECTS" />
          </Box>
        </Box>
        <Box
          sx={{
            width: "50%",
            height: "100%",
            zIndex: 9,
            display: "flex",
            flexDirection: "column",
            alignItems: " center",
            objectFit: "cover",
            display: { xs: "none", sm: "block" },
          }}
          data-aos="fade-left"
        >
          <Image
            src={HeroRightImg}
            alt="WC"
            width="741px"
            height="703px"
            quality={100}
          />
        </Box>
        <Box
          sx={{
            marginTop: "20px",
            marginBottom: "20px",
            display: { xs: "block", sm: "none" },
          }}
        >
          <CustomButton title="ALL  PROJECTS" />
        </Box>
      </Container>
    </Box>
  );
}
export default HeronContent;
