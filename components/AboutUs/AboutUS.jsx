import React from "react";
import { Container, Typography, Box } from "@mui/material";
import Image from "next/image";
import AboutUsImg from "../../asset/AboutUsImg.jpg";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
function AboutUS() {
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
        <Box
          sx={{
            position: "absolute",
            zIndex: -1,
          }}
        >
          <Image
            src={AboutUsImg}
            alt="WC"
            width="1145px"
            height={isXs ? "1630px" : "380px"}
            quality={100}
            objectFit="cover"
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: { xs: "flex-start", sm: "center" },
            paddingTop: { xs: "25px", sm: "70px" },
            flexDirection: { xs: "column", sm: "row" },
            padding: { xs: "25px 25px 0px 25px", sm: "70px 0px 0px 0px" },
          }}
        >
          <Box
            sx={{
              width: { xs: "80%", sm: "50%" },
              height: "100%",
              zIndex: 9,
              display: "flex",
              flexDirection: "column",
              alignItems: { xs: "start", sm: "center" },
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
              </Typography>
              <Typography
                sx={{
                  fontSize: { xs: "21px", sm: "25px" },
                  textAlign: "center",
                  lineHeight: 1.28,
                  textAlign: "left",
                  color: "#3250bf",
                  letterSpacing: "1px",
                }}
              >
                Consulting Company
              </Typography>
              <Typography
                sx={{
                  fontSize: { xs: "21px", sm: "25px" },
                  textAlign: "center",
                  lineHeight: 1.28,
                  textAlign: "left",
                  color: "white",
                  letterSpacing: "1px",
                }}
              >
                Bussiness And Innovation
              </Typography>
              <Typography
                sx={{
                  fontSize: { xs: "21px", sm: "25px" },
                  textAlign: "center",
                  lineHeight: 1.28,
                  textAlign: "left",
                  color: "white",
                  letterSpacing: "1px",
                }}
              >
                Marketting
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
