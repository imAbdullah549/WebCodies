import React from "react";
import { Box, Container, Button, Typography } from "@mui/material";
import TagYear from "../../asset/aboutus/TagYears.jpg";
import Image from "next/image";
import BecomePartnerSlider from "../BecomePartnerSlider";
function BecomePartner() {
  return (
    <Container
      sx={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Box
        sx={{
          marginTop: "30px",
          paddingLeft: "50px",
          paddingRight: "50px",
          display: "flex",
          width: "100%",
          justifyContent: "space-between",
        }}
      >
        <Box display={"flex"} flexDirection={"column"}>
          <Typography
            gutterBottom
            sx={{
              fontSize: "51px",
              color: "rgb(50, 80, 191)",
              lineHeight: "0.961",
              fontWeight: 700,
            }}
          >
            Become a Partner of <br />
            Our Company
          </Typography>
          <Typography
            gutterBottom
            sx={{
              fontSize: "22px",
              marginTop: "5px",
              fontFamily: "OpenSans",
              color: "rgb(60, 60, 60)",
              lineHeight: 1.409,
            }}
          >
            “A wonderful serenity has taken possession of my <br />
            entire soul, like these sweet mornings ofings of <br />
            spring which I enjocharm”
          </Typography>
          <Typography
            sx={{
              fontSize: "19px",
              fontFamily: "Poppins",
              color: "rgb(74, 74, 74)",
              fontWeight: "bold",
              marginTop: "5px",
            }}
          >
            Daniel Khan
          </Typography>
          <Typography
            sx={{
              fontSize: "14px",
              fontFamily: "Open Sans",
              color: "rgba(0, 0, 0, 0.6)",
            }}
          >
            CEO, owner
          </Typography>
          <Box sx={{ alignSelf: "end" }}>
            <Image
              src={TagYear}
              alt="WC"
              width="200px"
              height="80px"
              quality={100}
            />
          </Box>
        </Box>
        <Box sx={{ width: "430px" }}>
          <BecomePartnerSlider />
        </Box>
      </Box>
      <Box
        sx={{
          width: "100%",
          paddingLeft: "50px",
          paddingRight: "50px",
          display: "flex",
        }}
      >
        <Box
          sx={{
            width: "33%",
            backgroundColor: "rgb(50, 80, 191)",
            height: "80px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography
            sx={{
              fontSize: "20px",
              fontFamily: "Poppins",
              color: " rgb(255, 255, 255)",
            }}
          >
            Phone: +7 526 255 25 26
          </Typography>
        </Box>
        <Box
          sx={{
            width: "33%",
            backgroundColor: "rgb(132, 149, 254)",
            height: "80px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography
            sx={{
              fontSize: "20px",
              fontFamily: "Poppins",
              color: " rgb(255, 255, 255)",
            }}
          >
            Email: Conatct@kodifly.com
          </Typography>
        </Box>
        <Box
          sx={{
            width: "33%",
            backgroundColor: "rgb(50, 80, 191)",
            height: "80px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Button variant="contained" color="secondary">
            <Typography
              sx={{
                fontSize: "16px",
                textAlign: "center",
                lineHeight: "1.5",
              }}
            >
              Conatact Us
            </Typography>
          </Button>
        </Box>
      </Box>
    </Container>
  );
}
export default BecomePartner;
