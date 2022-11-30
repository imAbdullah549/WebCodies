import React from "react";
import { Container, Typography, Box } from "@mui/material";
import Image from "next/image";
import AboutUsImg from "../../asset/AboutUsImg.jpg";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
function AboutUS() {
  const theme = useTheme();
  const isXs = useMediaQuery("(max-width:600px)");

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
            height={isXs ? "1380px" : "380px"}
            quality={100}
            objectFit="cover"
          />
        </div>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            paddingTop: { xs: "30px", sm: "70px" },
            flexDirection: { xs: "column", sm: "row" },
          }}
        >
          <Box
            sx={{
              width: { xs: "80%", sm: "50%" },
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
                  fontSize: { xs: "17px", sm: "20px" },
                  textAlign: "center",
                  lineHeight: 1.28,
                  textAlign: "left",
                  fontWeight: { xs: 500, sm: 700 },
                }}
              >
                ABOUT US
              </Typography>
              <Typography
                sx={{
                  fontSize: { xs: "21px", sm: "25px" },
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
              width: { xs: "90%", sm: "50%" },
              height: "100%",
              zIndex: 9,
              display: "flex",
              flexDirection: "column",
              alignItems: " center",
              paddingTop: { xs: "30px", sm: "0px" },
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
                color: { xs: "gray", sm: "white" },
              }}
            >
              {`At WebCodies, our expertise in the advanced cutting-edge code
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
