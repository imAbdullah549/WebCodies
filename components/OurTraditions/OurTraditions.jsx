import React from "react";
import { Container, Box, Typography, Grid } from "@mui/material";
import TraditionCards from "./TraditionCards";
import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";
import SettingsIcon from "@mui/icons-material/Settings";
import LightbulbIcon from "@mui/icons-material/Lightbulb";
import ImportantDevicesIcon from "@mui/icons-material/ImportantDevices";
import DeveloperModeIcon from "@mui/icons-material/DeveloperMode";
import DetailsIcon from "@mui/icons-material/Details";
const TraditionCardsData = [
  {
    icon: (
      <AccessAlarmIcon sx={{ fontSize: "50px", color: "secondary.main" }} />
    ),
    heading: "On time delivery",
    content:
      "Eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae",
  },
  {
    icon: <SettingsIcon sx={{ fontSize: "50px", color: "secondary.main" }} />,
    heading: "Testing for our perfection",
    content:
      "Eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae",
  },
  {
    icon: <LightbulbIcon sx={{ fontSize: "50px", color: "secondary.main" }} />,
    heading: "Discussion of the idea",
    content:
      "Eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae",
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
  },
  {
    icon: (
      <DeveloperModeIcon sx={{ fontSize: "50px", color: "secondary.main" }} />
    ),
    heading: "Web development",
    content:
      "Eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae",
  },
  {
    icon: <DetailsIcon sx={{ fontSize: "50px", color: "secondary.main" }} />,
    heading: "Elaboration of the core",
    content:
      "Eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae",
  },
];

function OurTraditions() {
  return (
    <Container>
      <Box sx={{ marginTop: "50px" }}>
        <Typography
          sx={{
            fontSize: "15px",
            textAlign: "center",
            lineHeight: 2.5,
          }}
        >
          Quickly unleash cross
        </Typography>
        <Typography
          sx={{
            color: "primary.dark",
            fontSize: "35px",
            textAlign: "center",
            fontWeight: "bold",
            textTransform: "uppercase",
            lineHeight: 1,
          }}
        >
          Our Traditions
        </Typography>
      </Box>
      <Box
        sx={{ display: "flex", justifyContent: "center", paddingTop: "15px" }}
      >
        <Grid container sx={{ maxWidth: "1100px" }}>
          {TraditionCardsData.map((item, index) => {
            return (

              <Grid item xs={4} key={index}>
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
