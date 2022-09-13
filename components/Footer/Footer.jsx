import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material/styles";
import { Container } from "@mui/material";
import Image from "next/image";
import Logo from "../../asset/Logo.png";
import MapSection from "../map/Map";
const Footer = () => {
  const theme = useTheme();
  const { mode } = theme.palette;

  const location = {
    address: "1600 Amphitheatre Parkway, Mountain View, californi.",
    lat: 37.42216,
    lng: -122.08427,
  }; // our location object from earlier

  const Aboutus = () => {
    return (
      <Box
        height={"100%"}
        justifyContent={" space-between"}
        marginTop={1}
        marginRight={2}
        display={"flex"}
        flexDirection={"column"}
      >
        <Link
          underline="none"
          component="a"
          href="/aboutus"
          color="text.primary"
          variant={"subtitle2"}
        >
          <Typography
            color="white"
            sx={{
              fontSize: "18px",
              textAlign: "center",
              lineHeight: 1.33,
              textAlign: "left",
              fontWeight: "bold",
            }}
          >
            ABOUT US
          </Typography>
        </Link>
        <Typography
          color="white"
          sx={{
            fontSize: "13px",
            fontFamily: "Open Sans",
            color: "rgba(255, 255, 255, 0.6)",
            lineHeight: 1.692,
            width: "260px",
            height: "80px",
          }}
        >
          Many businesses, large and small, have a huge source of great ideas
          that can help them improve, innovate, and grow, and yet so many of
          these companies.
        </Typography>
        <Typography
          color="white"
          sx={{
            fontSize: "13px",
            textAlign: "center",
            lineHeight: 1.15,
            textAlign: "left",
            fontWeight: "bold",
          }}
        >
          London, UK 441
        </Typography>
        <Typography
          color="white"
          sx={{
            fontSize: "13px",
            textAlign: "center",
            lineHeight: 1.15,
            textAlign: "left",
            fontWeight: "bold",
          }}
        >
          Phone: +7 526 255 25 26
        </Typography>
        <Typography
          color="white"
          sx={{
            fontSize: "13px",
            textAlign: "center",
            lineHeight: 1.15,
            textAlign: "left",
            fontWeight: "bold",
          }}
        >
          Email: info@example.com
        </Typography>
      </Box>
    );
  };

  const AllYouNeed = () => {
    return (
      <Box
        height={"100%"}
        justifyContent={" space-between"}
        marginTop={1}
        marginRight={2}
        display={"flex"}
        flexDirection={"column"}
      >
        <Typography
          color="white"
          sx={{
            fontSize: "18px",
            textAlign: "center",
            lineHeight: 1.33,
            textAlign: "left",
            fontWeight: "bold",
          }}
        >
          All your needs
        </Typography>

        <Typography
          color="white"
          sx={{
            fontSize: "13px",
            textAlign: "center",
            lineHeight: 1.18,
            textAlign: "left",
          }}
        >
          Life at webcodies
        </Typography>
        <Typography
          color="white"
          sx={{
            fontSize: "13px",
            textAlign: "center",
            lineHeight: 1.18,
            textAlign: "left",
          }}
        >
          Careers
        </Typography>
        <Typography
          color="white"
          sx={{
            fontSize: "13px",
            textAlign: "center",
            lineHeight: 1.18,
            textAlign: "left",
          }}
        >
          Portfolio
        </Typography>
        <Typography
          color="white"
          sx={{
            fontSize: "13px",
            textAlign: "center",
            lineHeight: 1.18,
            textAlign: "left",
          }}
        >
          Blog
        </Typography>
        <Typography
          color="white"
          sx={{
            fontSize: "13px",
            textAlign: "center",
            lineHeight: 1.18,
            textAlign: "left",
          }}
        >
          Contact Us
        </Typography>
      </Box>
    );
  };
  const OurLocations = () => {
    return (
      <Box
        height={"100%"}
        justifyContent={" space-between"}
        marginTop={1}
        marginRight={2}
        display={"flex"}
        flexDirection={"column"}
      >
        <Typography
          color="white"
          sx={{
            fontSize: "18px",
            textAlign: "center",
            lineHeight: 1.33,
            textAlign: "left",
            fontWeight: "bold",
          }}
        >
          Our Locations
        </Typography>
        <MapSection location={location} zoomLevel={17} />
      </Box>
    );
  };
  return (
    <Box
      sx={{
        background: "rgb(25, 25, 25)",
        paddingTop: "60px",
        paddingBottom: "60px",
      }}
    >
      <Container>
        <Box
          display={"flex"}
          alignItems={"center"}
          width={1}
          flexDirection={{ xs: "column", sm: "row" }}
          columnGap={" 80px"}
        >
          <Box
            display={"flex"}
            component="a"
            href="/"
            title="WebCodies"
            width={"110px"}
          >
            <Image
              src={Logo}
              alt="WC"
              width="140px"
              height="90px"
              quality={100}
            />
          </Box>
          <Box
            display="flex"
            flexWrap={"wrap"}
            alignItems={"center"}
            height={"230px"}
            width={"100%"}
            justifyContent={"space-evenly"}
          >
            <Aboutus />
            <AllYouNeed />
            <OurLocations />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
