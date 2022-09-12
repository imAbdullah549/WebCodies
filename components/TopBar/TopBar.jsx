import React from "react";
import { Box, Container, Button, Typography } from "@mui/material";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
function TopBar() {
  return (
    <Box sx={{ backgroundColor: "primary.dark", width: "100%" }}>
      <Container
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Box display={"flex"} paddingTop={"3px"} paddingBottom={"3px"}>
          <LocationOnOutlinedIcon
            sx={{
              fontSize: "20px",
              color: "white",
              marginRight: "5px",
            }}
          />
          <Typography
            color="rgb(255, 255, 255)"
            sx={{
              fontSize: "15px",
            }}
          >
            Rancho Cucamonga, CA 91730, USA
          </Typography>
        </Box>
        <Box display={"flex"}>
          <LocalPhoneOutlinedIcon
            sx={{
              fontSize: "20px",
              color: "white",
              marginRight: "5px",
            }}
          />
          <Typography
            color="rgb(255, 255, 255)"
            sx={{
              marginRight: "15px",
              fontSize: "15px",
            }}
          >
            1-323-419-1919
          </Typography>
          <Box
            sx={{
              marginRight: "15px",
              hight: "95%",
              width: "1px",
              backgroundColor: "rgb(129, 148, 218)",
            }}
          ></Box>
          <AccessTimeOutlinedIcon
            sx={{
              fontSize: "20px",
              color: "white",
              marginRight: "5px",
            }}
          />
          <Typography
            color="rgb(255, 255, 255)"
            sx={{
              marginRight: "15px",
              fontSize: "15px",
            }}
          >
            Mon - Sat: 8:00 am to 7:00 pm
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
export default TopBar;
