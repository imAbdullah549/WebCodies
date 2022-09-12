import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import ListItemText from "@mui/material/ListItemText";
import CardMedia from "@mui/material/CardMedia";
import { Container } from "@mui/material";
const OurTeam = () => {
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
          Meet Out Team
        </Typography>
      </Box>
    );
  };
  return (
    <Container>
      <Box marginBottom={4}>
        <Heading />
      </Box>
      <Grid container spacing={2}>
        {[
          {
            name: "Chary Smith",
            title: "SEO at Comoti",
            avatar: "https://assets.maccarianagency.com/avatars/img3.jpg",
          },
          {
            name: "Clara Bertoletti",
            title: "Junior Designer",
            avatar: "https://assets.maccarianagency.com/avatars/img4.jpg",
          },
          {
            name: "Jhon Anderson",
            title: "Senior Frontend Developer",
            avatar: "https://assets.maccarianagency.com/avatars/img5.jpg",
          },
          {
            name: "Chary Smith",
            title: "SEO at Comoti",
            avatar: "https://assets.maccarianagency.com/avatars/img6.jpg",
          },
        ].map((item, i) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={3}
            key={i}
            data-aos={"fade-up"}
            data-aos-delay={i * 100}
            data-aos-offset={100}
            data-aos-duration={600}
          >
            <Card
              sx={{
                boxShadow: 0,
                background: "transparent",
                backgroundImage: "none",
              }}
            >
              <Box
                component={CardMedia}
                borderRadius={2}
                width={1}
                height={1}
                minHeight={320}
                image={item.avatar}
              />
              <Box
                component={CardContent}
                bgcolor={"transparent"}
                marginTop={-5}
              >
                <Box component={Card} borderRadius={2}>
                  <CardContent>
                    <ListItemText primary={item.name} secondary={item.title} />
                  </CardContent>
                </Box>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default OurTeam;
