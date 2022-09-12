import React, { useState } from "react";
import { Container, Typography, Box } from "@mui/material";
import Image from "next/image";
import homeStatesImg from "../../asset/homeStatesImg.jpg";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

function HomeStates() {
  const [viewPortEntered, setViewPortEntered] = useState(false);
  const setViewPortVisibility = (isVisible) => {
    if (viewPortEntered) {
      return;
    }

    setViewPortEntered(isVisible);
  };

  return (
    <Container>
      <Box
        style={{
          position: "absolute",
          zIndex: -1,
        }}
      >
        <Image
          src={homeStatesImg}
          alt="WC"
          width="1152px"
          height="200px"
          quality={100}
        />
      </Box>
      <Box
        sx={{
          width: "100%",
          height: "200px",
          zIndex: 9,
          display: "flex",
        }}
      >
        <Box
          sx={{
            width: "30%",
            height: "100%",
            zIndex: 9,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            borderRight: "2px solid",
            borderColor: " beige",
          }}
        >
          <Typography variant="h3" align={"center"}>
            <Box fontWeight={600}>
              <VisibilitySensor
                onChange={(isVisible) => setViewPortVisibility(isVisible)}
                delayedCall
              >
                <CountUp
                  duration={2}
                  end={viewPortEntered ? 320 : 0}
                  start={0}
                  suffix={"+"}
                />
              </VisibilitySensor>
            </Box>
          </Typography>
          <Typography
            sx={{
              fontSize: "21px",
              textAlign: "center",
            }}
          >
            Powerful Options
          </Typography>
        </Box>
        <Box
          sx={{
            width: "20%",
            height: "100%",
            zIndex: 9,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            borderRight: "2px solid",
            borderColor: " beige",
          }}
        >
          <Typography variant="h3" align={"center"}>
            <Box fontWeight={600}>
              <VisibilitySensor
                onChange={(isVisible) => setViewPortVisibility(isVisible)}
                delayedCall
              >
                <CountUp
                  duration={2}
                  end={viewPortEntered ? 127 : 0}
                  start={0}
                  suffix={"+"}
                />
              </VisibilitySensor>
            </Box>
          </Typography>
          <Typography
            sx={{
              fontSize: "21px",
              textAlign: "center",
            }}
          >
            Satisfied Clients
          </Typography>
        </Box>

        <Box
          sx={{
            width: "20%",
            height: "100%",
            zIndex: 9,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            borderRight: "2px solid",
            borderColor: " beige",
          }}
        >
          <Typography variant="h3" align={"center"}>
            <Box fontWeight={600}>
              <VisibilitySensor
                onChange={(isVisible) => setViewPortVisibility(isVisible)}
                delayedCall
              >
                <CountUp
                  duration={2}
                  end={viewPortEntered ? 40 : 0}
                  start={0}
                  suffix={"+"}
                />
              </VisibilitySensor>
            </Box>
          </Typography>
          <Typography
            sx={{
              fontSize: "21px",
              textAlign: "center",
            }}
          >
            Best Projects
          </Typography>
        </Box>
        <Box
          sx={{
            width: "30%",
            height: "100%",
            zIndex: 9,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Typography variant="h3" align={"center"}>
            <Box fontWeight={600}>
              <VisibilitySensor
                onChange={(isVisible) => setViewPortVisibility(isVisible)}
                delayedCall
              >
                <CountUp
                  duration={2}
                  end={viewPortEntered ? 143 : 0}
                  start={0}
                  suffix={"+"}
                />
              </VisibilitySensor>
            </Box>
          </Typography>
          <Typography
            sx={{
              fontSize: "21px",
              textAlign: "center",
            }}
          >
            Team Members
          </Typography>
        </Box>
      </Box>
    </Container>
  );
}
export default HomeStates;
