import React, { useEffect, useState } from "react";
import { Container, Box, Typography, Grid } from "@mui/material";
import TraditionCards from "./TraditionCards";
import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";
import SettingsIcon from "@mui/icons-material/Settings";
import LightbulbIcon from "@mui/icons-material/Lightbulb";
import ImportantDevicesIcon from "@mui/icons-material/ImportantDevices";
import DeveloperModeIcon from "@mui/icons-material/DeveloperMode";
import DetailsIcon from "@mui/icons-material/Details";
import Heading from "../Heading";
import AOS from "aos";
import "aos/dist/aos.css";
const TraditionCardsData = [
  {
    icon: (
      <AccessAlarmIcon sx={{ fontSize: "50px", color: "secondary.main" }} />
    ),
    heading: "On time delivery",
    content:
      "Eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae",
    delay: "300",
  },
  {
    icon: <SettingsIcon sx={{ fontSize: "50px", color: "secondary.main" }} />,
    heading: "Testing for our perfection",
    content:
      "Eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae",
    delay: "320",
  },
  {
    icon: <LightbulbIcon sx={{ fontSize: "50px", color: "secondary.main" }} />,
    heading: "Discussion of the idea",
    content:
      "Eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae",
    delay: "340",
  },
  {
    icon: (
      <ImportantDevicesIcon
        sx={{ fontSize: "50px", color: "secondary.main" }}
      />
    ),
    heading: "Modern style",
    content:
      "Eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae",
    delay: "360",
  },
  {
    icon: (
      <DeveloperModeIcon sx={{ fontSize: "50px", color: "secondary.main" }} />
    ),
    heading: "Web development",
    content:
      "Eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae",
    delay: "380",
  },
  {
    icon: <DetailsIcon sx={{ fontSize: "50px", color: "secondary.main" }} />,
    heading: "Elaboration of the core",
    content:
      "Eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae",
    delay: "400",
  },
];

function OurTraditions() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <Container>
      <Heading subtitle={"Quickly unleash cross"} title={"Our Traditions"} />
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Grid container sx={{ maxWidth: "1100px" }}>
          {TraditionCardsData.map((item, index) => {
            return (
              <Grid
                item
                xs={12}
                sm={4}
                key={index}
                data-aos="fade-zoom-in"
                data-aos-easing="ease-in-back"
                data-aos-delay={index * 100}
                data-aos-offset={100}
                data-aos-duration={600}
              >
                <TraditionCards
                  icon={item.icon}
                  heading={item.heading}
                  content={item.content}
                />
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </Container>
  );
}
export default OurTraditions;
