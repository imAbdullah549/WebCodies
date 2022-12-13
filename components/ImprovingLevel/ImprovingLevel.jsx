import React, { useState, useEffect } from "react";
import { Box, Container, Button, Typography } from "@mui/material";
import ImprovingLevelImg from "../../asset/aboutus/improvingLevel.jpg";
import { useTheme } from "@mui/material/styles";
import Image from "next/image";
import { styled } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";
import AOS from "aos";
import "aos/dist/aos.css";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";
const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor:
      theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.mode === "light" ? "#d74a54" : "#308fe8",
  },
}));
function ImprovingLevel() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  const theme = useTheme();
  const isXs = useMediaQuery("(max-width:600px)");
  const [viewPortEntered, setViewPortEntered] = useState(false);
  const setViewPortVisibility = (isVisible) => {
    if (viewPortEntered) {
      return;
    }

    setViewPortEntered(isVisible);
  };
  return (
    <Container
      sx={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          marginTop: { xs: "15px", sm: "30px" },
          marginBottom: { xs: "15px", sm: "30px" },
          display: "flex",
          width: "100%",
          justifyContent: "space-between",
        }}
      >
        <Box
          display={"flex"}
          flexDirection={"column"}
          sx={{
            width: { xs: "90%", sm: "55%" },
            position: { xs: "absolute", sm: "relative" },
            zIndex: { xs: -1, sm: 0 },
            opacity: { xs: 0.2, sm: 1 },
          }}
        >
          <Box
            sx={{ marginTop: { xs: "60px", sm: "0px" } }}
            data-aos="fade-right"
          >
            <Image
              src={ImprovingLevelImg}
              alt="WC"
              width="700px"
              height={isXs ? "750px" : "550px"}
              quality={100}
            />
          </Box>
        </Box>
        <Box
          sx={{
            width: { xs: "100%", sm: "45%" },
            zIndex: { xs: 9, sm: 0 },
            height: { xs: "100%", sm: "auto" },
          }}
        >
          <Typography
            gutterBottom
            sx={{
              fontSize: { xs: "30px", sm: "44px" },
              color: "rgb(50, 80, 191)",
              lineHeight: 1.2,
              fontWeight: "bold",
              fontFamily: "Poppins",
              maxWidth: "445px",
            }}
            data-aos="fade-down"
          >
            We’re constantly improving any level
          </Typography>
          <Typography
            gutterBottom
            sx={{
              fontSize: "15px",
              color: { sx: "rgb(126, 126, 126)" },
              lineHeight: 1.6,
              fontFamily: "Open Sans",
              background: { xs: "rgb(255 255 255 / 50%)", sm: "none" },
            }}
            data-aos="fade-left"
          >
            {`Mauris porta risus metus, vitae sollicitudin augue eleifend at.
            Nullam nec ex nec velit cursus varius. Mauris a dolor massa. Nam
            dolor purus, consequat luctus tellus in, luctus fermentum libero.
            Class aptent taciti sociosqu turpis in mauris porttitor lacinia.`}
          </Typography>
          <Box
            sx={{
              display: "flex",
              width: "100%",
              height: "55%",
              flexDirection: "column",
              justifyContent: "space-around",
              rowGap: { xs: "10px", sm: "0px" },
            }}
          >
            <Box data-aos="fade-up" data-aos-duration="2000">
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <Typography
                  gutterBottom
                  sx={{
                    fontSize: { xs: "20", sm: "23px" },
                    color: "rgb(51, 51, 50)",
                    lineHeight: 1.2,
                    fontWeight: { xs: "600", sm: "bold" },
                    fontFamily: "Poppins",
                  }}
                >
                  Creativity
                </Typography>
                <VisibilitySensor
                  onChange={(isVisible) => setViewPortVisibility(isVisible)}
                  delayedCall
                >
                  <Typography
                    gutterBottom
                    sx={{
                      fontSize: { xs: "20", sm: "23px" },
                      color: "rgb(51, 51, 50)",
                      lineHeight: 1.2,
                      fontWeight: { xs: "600", sm: "bold" },
                      fontFamily: "Poppins",
                    }}
                    component={CountUp}
                    duration={4}
                    end={viewPortEntered ? 86 : 0}
                    start={0}
                    suffix={"%"}
                  ></Typography>
                </VisibilitySensor>
              </Box>
              <BorderLinearProgress variant="determinate" value={86} />
            </Box>
            <Box data-aos="fade-up" data-aos-duration="2000">
              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Typography
                  gutterBottom
                  sx={{
                    fontSize: { xs: "20", sm: "23px" },
                    color: "rgb(51, 51, 50)",
                    lineHeight: 1.2,
                    fontWeight: { xs: "600", sm: "bold" },
                    fontFamily: "Poppins",
                  }}
                >
                  Team Work
                </Typography>
                <VisibilitySensor
                  onChange={(isVisible) => setViewPortVisibility(isVisible)}
                  delayedCall
                >
                  <Typography
                    gutterBottom
                    sx={{
                      fontSize: { xs: "20", sm: "23px" },
                      color: "rgb(51, 51, 50)",
                      lineHeight: 1.2,
                      fontWeight: { xs: "600", sm: "bold" },
                      fontFamily: "Poppins",
                    }}
                    component={CountUp}
                    duration={4}
                    end={viewPortEntered ? 98 : 0}
                    start={0}
                    suffix={"%"}
                  ></Typography>
                </VisibilitySensor>
              </Box>
              <BorderLinearProgress variant="determinate" value={98} />
            </Box>
            <Box data-aos="fade-up" data-aos-duration="2200">
              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Typography
                  gutterBottom
                  sx={{
                    fontSize: { xs: "20", sm: "23px" },
                    color: "rgb(51, 51, 50)",
                    lineHeight: 1.2,
                    fontWeight: "bold",
                    fontFamily: "Poppins",
                  }}
                >
                  Disiging
                </Typography>
                <VisibilitySensor
                  onChange={(isVisible) => setViewPortVisibility(isVisible)}
                  delayedCall
                >
                  <Typography
                    gutterBottom
                    sx={{
                      fontSize: { xs: "20", sm: "23px" },
                      color: "rgb(51, 51, 50)",
                      lineHeight: 1.2,
                      fontWeight: { xs: "600", sm: "bold" },
                      fontFamily: "Poppins",
                    }}
                    component={CountUp}
                    duration={4}
                    end={viewPortEntered ? 92 : 0}
                    start={0}
                    suffix={"%"}
                  ></Typography>
                </VisibilitySensor>
              </Box>
              <BorderLinearProgress variant="determinate" value={92} />
            </Box>
            <Box data-aos="fade-up" data-aos-duration="2400">
              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Typography
                  gutterBottom
                  sx={{
                    fontSize: { xs: "20", sm: "23px" },
                    color: "rgb(51, 51, 50)",
                    lineHeight: 1.2,
                    fontWeight: { xs: "600", sm: "bold" },
                    fontFamily: "Poppins",
                  }}
                >
                  Development
                </Typography>
                <VisibilitySensor
                  onChange={(isVisible) => setViewPortVisibility(isVisible)}
                  delayedCall
                >
                  <Typography
                    gutterBottom
                    sx={{
                      fontSize: { xs: "20", sm: "23px" },
                      color: "rgb(51, 51, 50)",
                      lineHeight: 1.2,
                      fontWeight: { xs: "600", sm: "bold" },
                      fontFamily: "Poppins",
                    }}
                    component={CountUp}
                    duration={4}
                    end={viewPortEntered ? 94 : 0}
                    start={0}
                    suffix={"%"}
                  ></Typography>
                </VisibilitySensor>
              </Box>
              <BorderLinearProgress variant="determinate" value={94} />
            </Box>
          </Box>
        </Box>
      </Box>
    </Container>
  );
}
export default ImprovingLevel;
