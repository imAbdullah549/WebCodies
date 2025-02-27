import React, { useEffect } from "react";
import { Box, Container, Button, Typography } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GoogleIcon from "@mui/icons-material/Google";
import AOS from "aos";
import "aos/dist/aos.css";

function BottomBar() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <Box
      sx={{
        backgroundColor: "primary.dark",
        width: "100%",
      }}
    >
      <Container
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexDirection: { xs: "column", sm: "row" },
        }}
      >
        <Box
          display={"flex"}
          sx={{
            paddingTop: { xs: "8px", sm: "3px" },
            paddingBottom: { xs: "8px", sm: "3px" },
            columnGap: { xs: "10px", sm: "0px" },
          }}
        >
          <Button
            variant="contained"
            style={{ borderRadius: 3, background: "#3250bf" }}
          >
            <FacebookIcon
              sx={{
                fontSize: "20px",
                color: "white",
              }}
            />
          </Button>
          <Button
            variant="contained"
            style={{ borderRadius: 3, background: "#3250bf" }}
          >
            <TwitterIcon
              sx={{
                fontSize: "20px",
                color: "white",
              }}
            />
          </Button>
          <Button
            variant="contained"
            style={{ borderRadius: 3, background: "#3250bf" }}
          >
            <LinkedInIcon
              sx={{
                fontSize: "20px",
                color: "white",
              }}
            />
          </Button>
          <Button
            variant="contained"
            style={{ borderRadius: 3, background: "#3250bf" }}
          >
            <GoogleIcon
              sx={{
                fontSize: "20px",
                color: "white",
              }}
            />
          </Button>
        </Box>
        <Box sx={{ marginBottom: { xs: "7px", sm: "0px" } }}>
          <Typography
            color="rgb(146, 146, 146)"
            sx={{
              fontSize: "16px",
              lineHeight: 1.2,
            }}
          >
            © 2020 All rights Reserved by Webcodies
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
export default BottomBar;
