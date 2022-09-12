import React from "react";
import { Box, Container, Button, Typography } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GoogleIcon from "@mui/icons-material/Google";

function BottomBar() {
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
        <Box>
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
