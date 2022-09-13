import React from "react";
import { Container, Typography, Box } from "@mui/material";
import Image from "next/image";
import AboutUsImg from "../../asset/AboutUsImg.jpg";

function AboutUS() {
  return (
    <Container>
      <Box
        sx={{
          width: "100%",
          height: "100%",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            zIndex: -1,
          }}
        >
          <Image
            src={AboutUsImg}
            alt="WC"
            width="1145px"
            height="380px"
            quality={100}
          />
        </div>
        <Box sx={{ display: "flex", alignItems: "center", paddingTop: "70px" }}>
          <Box
            sx={{
              width: "50%",
              height: "100%",
              zIndex: 9,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Box>
              <Typography
                color="secondary"
                sx={{
                  fontSize: "20px",
                  textAlign: "center",
                  lineHeight: 1.28,
                  textAlign: "left",
                  fontWeight: 700,
                }}
              >
                ABOUT US
              </Typography>
              <Typography
                sx={{
                  fontSize: "25px",
                  textAlign: "center",
                  lineHeight: 1.28,
                  textAlign: "left",
                  color: "white",
                }}
              >
                We Are The Best
                <br />
                <span style={{ color: "#3250bf", letterSpacing: "1px" }}>
                  Consulting Company
                </span>
                <br /> Bussiness And Innovation
                <br /> Marketting
              </Typography>
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
            }}
          >
            <Typography
              sx={{
                maxWidth: "420px",
                fontSize: "18px",
                textAlign: "center",
                lineHeight: 1.28,
                textAlign: "left",
                fontWeight: 300,
                color: "white",
              }}
            >
              {`              At WebCodies, our expertise in the advanced cutting-edge code
              technologies, our team's collaborative workflow, and efficiency
              model provides exceptional business solutions in graphics design,
              animations, software development, and mobile applications.`}
            </Typography>
          </Box>
        </Box>
      </Box>
    </Container>
  );
}
export default AboutUS;
