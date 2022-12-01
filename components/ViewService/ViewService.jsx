import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { Typography } from "@mui/material";
import Image from "next/image";
import ViewService1 from "../../asset/ViewService1.jpg";
import ViewService2 from "../../asset/ViewService2.jpg";
import ViewService3 from "../../asset/ViewService3.jpg";

function ViewService() {
  return (
    <Box
      sx={{
        paddingTop: "15px",
        marginTop: { xs: "20px", sm: "0px" },
      }}
    >
      <Grid container justifyContent="center" spacing={{ xs: 2, sm: 0 }}>
        <Grid item xs={9} sm={2.5}>
          <Card>
            <CardMedia>
              <Image
                src={ViewService1}
                alt="WC"
                width="466px"
                height="311px"
                quality={100}
              />
            </CardMedia>
            <CardContent>
              <Typography
                gutterBottom
                sx={{
                  fontSize: "22px",
                  textAlign: "left",
                  lineHeight: 1.2,
                  textAlign: "left",
                  fontWeight: 700,
                }}
              >
                Easy customization
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Eaque ipsa quae ab illo inventore veritatis et quasi architecto
                beatae vitae dicta sunt explicabo.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={9} sm={2.5}>
          <Card>
            <CardMedia>
              <Image
                src={ViewService2}
                alt="WC"
                width="466px"
                height="311px"
                quality={100}
              />
            </CardMedia>
            <CardContent style={{ backgroundColor: "#3250bf" }}>
              <Typography
                gutterBottom
                sx={{
                  color: "white",
                  fontSize: "22px",
                  textAlign: "left",
                  lineHeight: 1.2,
                  textAlign: "left",
                  fontWeight: 700,
                }}
              >
                Get the benefits
              </Typography>
              <Typography variant="body2" color="white">
                Eaque ipsa quae ab illo inventore veritatis et quasi architecto
                beatae vitae dicta sunt explicabo.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={9} sm={2.5}>
          <Card>
            <CardMedia>
              <Image
                src={ViewService3}
                alt="WC"
                width="466px"
                height="311px"
                quality={100}
              />
            </CardMedia>
            <CardContent>
              <Typography
                gutterBottom
                sx={{
                  fontSize: "22px",
                  textAlign: "left",
                  lineHeight: 1.2,
                  textAlign: "left",
                  fontWeight: 700,
                }}
              >
                One click installation
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Eaque ipsa quae ab illo inventore veritatis et quasi architecto
                beatae vitae dicta sunt explicabo.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}

export default ViewService;
