import React from "react";
import Image from "next/image";
import WCbackground from "../../asset/heroBackground.jpg";
import contactUsHero from "../../asset/aboutus/contactUsHero.png";
import Box from "@mui/material/Box";
import CustomButton from "../CustomButton";
import { Typography } from "@mui/material";
import { Container } from "@mui/material";
function ContactUsHero() {
  return (
    <Box
      sx={{
        width: "100%",
        height: "540px",
        paddingTop: "20px",
        paddingBottom: "20px",
        position: "relative",
      }}
    >
      <Container sx={{ display: "flex", alignItems: "center" }}>
        <div
          style={{
            position: "absolute",
            zIndex: -1,
          }}
        >
          <Image
            src={WCbackground}
            alt="WC"
            width="1131px"
            height="500px"
            quality={100}
          />
        </div>
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
              fontSize: "52px",
              color: "primary.dark",
              lineHeight: "1.2",
              textAlign: "center",
              marginTop: "8px",
              fontWeight: 700,
              letterSpacing: "1px",
            }}
          >
            Doing business
            <br />
            with us is easy.
          </Typography>
          <Typography
            sx={{
              fontSize: "17px",
              textAlign: "center",
              marginTop: "12px",
              fontFamily: "Poppins",
              color: "rgb(116, 116, 116)",
            }}
          >
            Home / Contact
          </Typography>
          <Box sx={{ marginTop: "20px", marginBottom: "20px" }}></Box>
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
          }}
        >
          <Image
            src={contactUsHero}
            alt="WC"
            width="760px"
            height="600px"
            quality={100}
          />
        </Box>
      </Container>
    </Box>
  );
}
export default ContactUsHero;
