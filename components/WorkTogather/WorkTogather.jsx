import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import background from "../../asset/aboutus/contantusBackground.png";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import ListItemText from "@mui/material/ListItemText";
import CardMedia from "@mui/material/CardMedia";
import { useTheme } from "@mui/material/styles";
import { Container } from "@mui/material";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItem from "@mui/material/ListItem";
import Avatar from "@mui/material/Avatar";
import PhoneIcon from "@mui/icons-material/Phone";
const WorkTogather = () => {
  const theme = useTheme();
  const mock = [
    {
      label: "Phone",
      value: "+39 659-657-0133",
      discription:
        "Our customer care is open from Mon-Fri, 10:00 am to 6:00 pm",
      icon: (
        <svg
          width={40}
          height={40}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
        </svg>
      ),
    },
    {
      label: "Email",
      value: "hi@maccarianagency.com",
      discription:
        "Our customer care is open from Mon-Fri, 10:00 am to 6:00 pm",
      icon: (
        <svg
          width={45}
          height={45}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
          <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
        </svg>
      ),
    },
  ];

  const Contact = () => {
    return (
      <Box>
        <Box
          display={"flex"}
          flexDirection={{ xs: "column", md: "row" }}
          justifyContent={"space-between"}
          marginBottom={4}
        >
          <div
            style={{
              position: "absolute",
              zIndex: -1,
            }}
          >
            <Image
              src={background}
              alt="WC"
              width="250px"
              height="200px"
              quality={100}
            />
          </div>
          <Box
            sx={{ marginTop: "20px" }}
            display={"flex"}
            flexDirection={{ xs: "column", md: "row" }}
            justifyContent={"space-between"}
            width="100%"
          >
            {mock.map((item, i) => (
              <Card

                key={index}
                sx={{ padding: "23px", display: "flex", flexDirection: "row" }}
              >
                <Box
                  marginRight={2}
                  sx={{ paddingTop: "8px", color: "#d74a54" }}
                >
                  {item.icon}
                </Box>
                <Box sx={{ display: "flex", flexDirection: "column" }}>
                  <ListItemText primary={item.label} secondary={item.value} />
                  <Typography
                    sx={{
                      fontSize: "12px",
                      textAlign: "center",
                      lineHeight: 1.16,
                      color: "rgb(85, 85, 85)",
                      fontFamily: "Poppins",
                    }}
                  >
                    {item.discription}
                  </Typography>
                </Box>
              </Card>
            ))}
          </Box>
        </Box>
      </Box>
    );
  };

  const Heading = () => {
    return (
      <Box sx={{ marginTop: "50px" }}>
        <Typography
          sx={{
            fontSize: "15px",
            textAlign: "center",
            lineHeight: 2.5,
          }}
        >
          New stunning projects for our amazing clients.
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

          {`Let's Work Together`}

        </Typography>
      </Box>
    );
  };
  return (
    <Container sx={{ marginBottom: "90px" }}>
      <Box marginBottom={4}>
        <Heading />
      </Box>
      <Box position={"relative"} bgcolor={"alternate.main"}>
        <Container>
          <Contact />
        </Container>
        <Box></Box>
      </Box>
    </Container>
  );
};

export default WorkTogather;
