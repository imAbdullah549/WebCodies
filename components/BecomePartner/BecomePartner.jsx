import React, { useEffect } from "react";
import { Box, Container, Button, Typography } from "@mui/material";
import TagYear from "../../asset/aboutus/TagYears.jpg";
import Image from "next/image";
import BecomePartnerSlider from "../BecomePartnerSlider";
import CustomButton from "../CustomButton";
import AOS from "aos";
import "aos/dist/aos.css";
import { TypeAnimation } from "react-type-animation";
function BecomePartner() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
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
          marginTop: { xs: "10px", sm: "30px" },
          paddingLeft: { xs: "15px", sm: "50px" },
          paddingRight: { xs: "15px", sm: "50px" },
          display: "flex",
          width: "100%",
          justifyContent: "space-between",
        }}
      >
        <Box display={"flex"} flexDirection={"column"}>
          <Typography
            sx={{
              fontSize: { xs: "30px", sm: "51px" },
              color: "rgb(50, 80, 191)",
              lineHeight: "0.961",
              fontWeight: { xs: 600, sm: 700 },
            }}
            data-aos="fade-down"
          >
            Become a Partner of
          </Typography>
          <Typography
            gutterBottom
            sx={{
              fontSize: { xs: "30px", sm: "51px" },
              color: "rgb(50, 80, 191)",
              lineHeight: "0.961",
              fontWeight: { xs: 600, sm: 700 },
            }}
            data-aos="fade-down"
          >
            Our Company
          </Typography>
          <Typography
            gutterBottom
            sx={{
              fontSize: { xs: "20px", sm: "22px" },
              marginTop: "5px",
              fontFamily: "OpenSans",
              color: "rgb(60, 60, 60)",
              lineHeight: 1.409,
              display: { xs: "none", sm: "block" },
              maxWidth: "445px",
            }}
            component={TypeAnimation}
            sequence={[
              "A wonderful serenity has taken possession of my entire soul, like these sweet mornings ofings of spring which I enjocharm",
              1000,
              "",
            ]}
            speed={40}
            wrapper="h2"
            repeat={Infinity}
          ></Typography>
          <Typography
            gutterBottom
            sx={{
              fontSize: { xs: "20px", sm: "22px" },
              marginTop: "5px",
              fontFamily: "OpenSans",
              color: "rgb(60, 60, 60)",
              lineHeight: 1.409,
              display: { xs: "block", sm: "none" },
            }}
            component={TypeAnimation}
            sequence={[
              "A wonderful serenity has taken possession of my entire soul, like these sweet mornings ofings of spring which I enjocharm",
              1000,
              "",
            ]}
            speed={40}
            wrapper="h2"
            repeat={Infinity}
          ></Typography>
          <Typography
            sx={{
              fontSize: "19px",
              fontFamily: "Poppins",
              color: "rgb(74, 74, 74)",
              fontWeight: "bold",
              marginTop: "5px",
            }}
            data-aos="fade-up"
          >
            Daniel Khan
          </Typography>
          <Typography
            sx={{
              fontSize: "14px",
              fontFamily: "Open Sans",
              color: "rgba(0, 0, 0, 0.6)",
            }}
            data-aos="fade-up"
          >
            CEO, owner
          </Typography>
          <Box
            sx={{ alignSelf: "end", marginTop: { xs: "10px", sm: "0px" } }}
            data-aos="zoom-out"
          >
            <Image
              src={TagYear}
              alt="WC"
              width="200px"
              height="80px"
              quality={100}
            />
          </Box>
        </Box>
        <Box
          sx={{ width: "430px", display: { xs: "none", sm: "block" } }}
          data-aos="fade-left"
        >
          <BecomePartnerSlider />
        </Box>
      </Box>
      <Box
        sx={{
          width: "100%",
          paddingLeft: { xs: "0px", sm: "50px" },
          paddingRight: { xs: "0px", sm: "50px" },
          display: "flex",
          flexWrap: { xs: "wrap", sm: "nowrap" },
          justifyContent: { xs: "center", sm: "flex-start" },
        }}
      >
        <Box
          sx={{
            width: { sm: "33%", xs: "50%" },
            backgroundColor: "rgb(50, 80, 191)",
            height: { xs: "50px", sm: "80px" },
            display: "flex",
            justifyContent: { xs: "flex-Start", sm: "center" },
            alignItems: "center",
            padding: { xs: "5px", sm: "0px" },
          }}
          data-aos="fade-right"
        >
          <Box
            sx={{ display: "flex", flexDirection: { xs: "column", sm: "row" } }}
          >
            <Typography
              sx={{
                fontSize: { xs: "15px", sm: "20px" },
                fontFamily: "Poppins",
                color: " rgb(255, 255, 255)",
              }}
            >
              Phone:
            </Typography>
            <Typography noWrap sx={{ display: { xs: "none", sm: "block" } }}>
              &nbsp;
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: "15px", sm: "20px" },
                fontFamily: "Poppins",
                color: " rgb(255, 255, 255)",
              }}
            >
              +7 526 255 25 26
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            width: { sm: "33%", xs: "50%" },
            backgroundColor: "rgb(132, 149, 254)",
            height: { xs: "50px", sm: "80px" },
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: { xs: "5px", sm: "0px" },
          }}
          data-aos="fade-up"
        >
          <Typography
            sx={{
              fontSize: { xs: "15px", sm: "20px" },
              fontFamily: "Poppins",
              color: " rgb(255, 255, 255)",
            }}
          >
            Email: Conatct@kodifly.com
          </Typography>
        </Box>
        <Box
          sx={{
            display: { xs: "block", sm: "none" },
            marginTop: { xs: "4px", sm: "0px" },
          }}
        >
          <CustomButton title="Conatact Us" />
        </Box>
        <Box
          sx={{
            width: "33%",
            backgroundColor: "rgb(50, 80, 191)",
            height: "80px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            display: { xs: "none", sm: "flex" },
          }}
          data-aos="fade-left"
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
