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

  const Aboutus = () => {
    return (
      <Box
        height={"100%"}
        justifyContent={"space-between"}
        marginRight={2}
        display={"flex"}
        flexDirection={"column"}
        sx={{ marginTop: { xs: 3, sm: 1 } }}
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
              fontWeight: { xs: 500, sm: "bold" },
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
            lineHeight: { sx: 1.1, sm: 1.692 },
            width: "260px",
            height: { sx: "100%", sm: "80px" },
          }}
        >
          Many businesses, large and small, have a huge source of great ideas
          that can help them improve, innovate, and grow, and yet so many of
          these companies.
        </Typography>
        <Typography
          sx={{
            color: "rgba(255, 255, 255, 0.9)",
            marginTop: { xs: "5px", sm: "0px" },
            fontSize: "13px",
            textAlign: "center",
            lineHeight: 1.15,
            textAlign: "left",
            fontWeight: { xs: 400, sm: "bold" },
          }}
        >
          London, UK 441
        </Typography>
        <Typography
          sx={{
            color: "rgba(255, 255, 255, 0.9)",
            marginTop: { xs: "5px", sm: "0px" },
            fontSize: "13px",
            textAlign: "center",
            lineHeight: 1.15,
            textAlign: "left",
            fontWeight: { xs: 400, sm: "bold" },
          }}
        >
          Phone: +7 526 255 25 26
        </Typography>
        <Typography
          sx={{
            color: "rgba(255, 255, 255, 0.9)",
            marginTop: { xs: "5px", sm: "0px" },
            fontSize: "13px",
            textAlign: "center",
            lineHeight: 1.15,
            textAlign: "left",
            fontWeight: { xs: 400, sm: "bold" },
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
        marginRight={2}
        display={"flex"}
        flexDirection={"column"}
        sx={{ marginTop: { xs: 3, sm: 1 } }}
      >
        <Typography
          color="white"
          sx={{
            fontSize: "18px",
            textAlign: "center",
            lineHeight: 1.33,
            textAlign: "left",
            fontWeight: { xs: 500, sm: "bold" },
          }}
        >
          All your needs
        </Typography>

        <Typography
          sx={{
            marginTop: { xs: "3px", sm: "0px" },
            fontSize: "13px",
            textAlign: "center",
            lineHeight: 1.18,
            textAlign: "left",
            color: "rgba(255, 255, 255, 0.9)",
          }}
        >
          Life at webcodies
        </Typography>
        <Typography
          color="white"
          sx={{
            marginTop: { xs: "5px", sm: "0px" },
            fontSize: "13px",
            textAlign: "center",
            lineHeight: 1.18,
            textAlign: "left",
            color: "rgba(255, 255, 255, 0.9)",
          }}
        >
          Careers
        </Typography>
        <Typography
          sx={{
            marginTop: { xs: "5px", sm: "0px" },
            fontSize: "13px",
            textAlign: "center",
            lineHeight: 1.18,
            textAlign: "left",
            color: "rgba(255, 255, 255, 0.9)",
          }}
        >
          Portfolio
        </Typography>
        <Typography
          sx={{
            marginTop: { xs: "5px", sm: "0px" },
            fontSize: "13px",
            textAlign: "center",
            lineHeight: 1.18,
            textAlign: "left",
            color: "rgba(255, 255, 255, 0.9)",
          }}
        >
          Blog
        </Typography>
        <Typography
          sx={{
            marginTop: { xs: "5px", sm: "0px" },
            fontSize: "13px",
            textAlign: "center",
            lineHeight: 1.18,
            textAlign: "left",
            color: "rgba(255, 255, 255, 0.9)",
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
        display={"flex"}
        flexDirection={"column"}
        sx={{
          marginTop: { xs: 3, sm: 1 },
          marginRight: { xs: 0, sm: 2 },
          width: { xs: "100%", sm: "auto" },
        }}
      >
        <Typography
          color="white"
          sx={{
            fontSize: "18px",
            textAlign: "center",
            lineHeight: 1.33,
            textAlign: "left",
            fontWeight: { xs: 500, sm: "bold" },
          }}
        >
          Our Locations
        </Typography>

        <Box
          sx={{
            marginTop: { xs: 3, sm: 1 },
            overflow: "hidden",
            left: "0%",
            width: "100%",
            height: "100%",
          }}
        >
          <iframe
            width="100%"
            height="100%"
            frameBorder="0"
            title="map"
            marginHeight={0}
            marginWidth={0}
            scrolling="no"
            src="https://maps.google.com/maps?width=100%&height=100%&hl=en&q=Milan&ie=UTF8&t=&z=14&iwloc=B&output=embed"
            style={{
              minHeight: 300,
              filter:
                theme.palette.mode === "dark"
                  ? "grayscale(0.5) opacity(0.7)"
                  : "none",
            }}
          />
        </Box>
      </Box>
    );
  };
  return (
    <Box
      sx={{
        background: "rgb(25, 25, 25)",
        paddingTop: { xs: "40px", sm: "60px" },
        paddingBottom: { xs: "40px", sm: "60px" },
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
            width={"100%"}
            sx={{
              height: { xs: "100%", sm: "230px" },
              justifyContent: { xs: "flex-start", sm: "space-evenly" },
            }}
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
