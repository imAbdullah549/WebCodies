import React from "react";
import { Box, Container, Button, Typography } from "@mui/material";
import ImprovingLevelImg from "../../asset/aboutus/ImprovingLevel.jpg";
import Image from "next/image";
import { styled } from "@mui/material/styles";
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
  return (
    <Container
      sx={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Box
        sx={{
          marginTop: "30px",
          marginBottom: "30px",
          display: "flex",
          width: "100%",
          justifyContent: "space-between",
        }}
      >
        <Box display={"flex"} flexDirection={"column"} width={"55%"}>
          <Box>
            <Image
              src={ImprovingLevelImg}
              alt="WC"
              width="700px"
              height="550px"
              quality={100}
            />
          </Box>
        </Box>
        <Box sx={{ width: "45%" }}>
          <Typography
            gutterBottom
            sx={{
              fontSize: "44px",
              color: "rgb(50, 80, 191)",
              lineHeight: 1.2,
              fontWeight: "bold",
              fontFamily: "Poppins",
            }}
          >
            We’re constantly
            <br /> improving any level
          </Typography>
          <Typography
            gutterBottom
            sx={{
              fontSize: "15px",
              color: "rgb(126, 126, 126)",
              lineHeight: 1.6,
              fontFamily: "Open Sans",
            }}
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
            }}
          >
            <Box>
              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Typography
                  gutterBottom
                  sx={{
                    fontSize: "23px",
                    color: "rgb(51, 51, 50)",
                    lineHeight: 1.2,
                    fontWeight: "bold",
                    fontFamily: "Poppins",
                  }}
                >
                  Creativity
                </Typography>
                <Typography
                  gutterBottom
                  sx={{
                    fontSize: "23px",
                    color: "rgb(51, 51, 50)",
                    lineHeight: 1.2,
                    fontWeight: "bold",
                    fontFamily: "Poppins",
                  }}
                >
                  86%
                </Typography>
              </Box>
              <BorderLinearProgress variant="determinate" value={86} />
            </Box>
            <Box>
              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Typography
                  gutterBottom
                  sx={{
                    fontSize: "23px",
                    color: "rgb(51, 51, 50)",
                    lineHeight: 1.2,
                    fontWeight: "bold",
                    fontFamily: "Poppins",
                  }}
                >
                  Team Work
                </Typography>
                <Typography
                  gutterBottom
                  sx={{
                    fontSize: "23px",
                    color: "rgb(51, 51, 50)",
                    lineHeight: 1.2,
                    fontWeight: "bold",
                    fontFamily: "Poppins",
                  }}
                >
                  98%
                </Typography>
              </Box>
              <BorderLinearProgress variant="determinate" value={98} />
            </Box>
            <Box>
              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Typography
                  gutterBottom
                  sx={{
                    fontSize: "23px",
                    color: "rgb(51, 51, 50)",
                    lineHeight: 1.2,
                    fontWeight: "bold",
                    fontFamily: "Poppins",
                  }}
                >
                  Disiging
                </Typography>
                <Typography
                  gutterBottom
                  sx={{
                    fontSize: "23px",
                    color: "rgb(51, 51, 50)",
                    lineHeight: 1.2,
                    fontWeight: "bold",
                    fontFamily: "Poppins",
                  }}
                >
                  92%
                </Typography>
              </Box>
              <BorderLinearProgress variant="determinate" value={92} />
            </Box>
            <Box>
              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Typography
                  gutterBottom
                  sx={{
                    fontSize: "23px",
                    color: "rgb(51, 51, 50)",
                    lineHeight: 1.2,
                    fontWeight: "bold",
                    fontFamily: "Poppins",
                  }}
                >
                  Development
                </Typography>
                <Typography
                  gutterBottom
                  sx={{
                    fontSize: "23px",
                    color: "rgb(51, 51, 50)",
                    lineHeight: 1.2,
                    fontWeight: "bold",
                    fontFamily: "Poppins",
                  }}
                >
                  94%
                </Typography>
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
