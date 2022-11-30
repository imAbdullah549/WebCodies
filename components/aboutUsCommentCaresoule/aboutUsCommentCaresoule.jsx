import React from "react";
import { Container, Box, Avatar, Typography, Card } from "@mui/material";
import Image from "next/image";
import project1Img1 from "../../asset/cauresolImg/project1-1.png";
import project1Img2 from "../../asset/cauresolImg/project1-2.png";
import project1Img3Logo from "../../asset/cauresolImg/project1-3.png";
import owner1 from "../../asset/cauresolImg/owner1.png";
import project2Img1 from "../../asset/cauresolImg/project1-2.png";
import project2Img2 from "../../asset/cauresolImg/project1-2.png";
import project2Img3Logo from "../../asset/cauresolImg/project1-1.png";
import project5 from "../../asset/cauresolImg/project5.png";
import AvatarComments from "../../asset/cauresolImg/AvatarComments.jpg";
import comaSepratedCaresol from "../../asset/aboutus/comaSepratedCaresol.png";
import boxCaresol from "../../asset/aboutus/boxCaresol.png";
import lineCaresol from "../../asset/aboutus/lineCaresol.png";

import ReactDOM from "react-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
function aboutUsCommentCaresoule() {
  const data = [
    {
      logo: project1Img3Logo,
      img1: project1Img1,
      img2: project1Img2,
      title: "My Soccer Traning",
      comments:
        "discrption discrption discrption discrption discrption discrption ",
      rating: 5,
      avatar: owner1,
    },
    {
      logo: project2Img3Logo,
      img1: project2Img1,
      img2: project2Img2,
      title: "My Soccer Traning",
      comments:
        "discrption discrption discrption discrption discrption discrption ",
      rating: 4.5,
      avatar: owner1,
    },
  ];

  return (
    <Container
      sx={{
        marginTop: { xs: "0px", sm: "20px" },
        marginBottom: { xs: "20px", sm: "0px" },
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Box sx={{ width: { xs: "100%", sm: "950px" } }}>
        <Carousel showThumbs={false}>
          <Box
            sx={{
              paddingTop: { xs: "25px", sm: "40px" },
              paddingBottom: { xs: "25px", sm: "40px" },
              marginTop: "10px",
              display: "flex",
              flexDirection: " row",
              alignItems: "flex-end",
              justifyContent: "space-evenly",
              backgroundColor: "rgb(248, 248, 248)",
            }}
          >
            <Box>
              <Image
                src={lineCaresol}
                alt="WC"
                width="100px"
                height="150px"
                quality={100}
              />
            </Box>
            <div
              style={{
                position: "absolute",
              }}
            >
              <Image
                src={comaSepratedCaresol}
                alt="WC"
                width="200px"
                height="150px"
                quality={100}
              />
            </div>
            <Box
              sx={{
                width: "620px",
                height: { xs: "100%", sm: "220px" },
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
              }}
            >
              <Box sx={{ display: "flex", alignItems: "flex-start" }}>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <Avatar
                    alt="Remy Sharp"
                    src={AvatarComments}
                    sx={{ width: 56, height: 56 }}
                  />
                  <Typography
                    sx={{
                      marginTop: "10px",
                      fontSize: { xs: "16px", sm: "18px" },
                      textAlign: "center",
                      fontWeight: { xs: 600, sm: "bold" },
                      lineHeight: 1,
                      color: "rgb(48, 48, 48)",
                    }}
                  >
                    Malujt Looeo
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "14px",
                      textAlign: "center",
                      lineHeight: 1,
                      color: "rgb(196, 196, 196)",
                      marginTop: { xs: "1px", sm: "0px" },
                    }}
                  >
                    Peerio Technologies
                  </Typography>
                </Box>
              </Box>
              <Box>
                <Typography
                  sx={{
                    marginTop: "15px",
                    fontSize: { xs: "15px", sm: "17px" },
                    textAlign: "center",
                    lineHeight: 1,
                    color: "rgb(48, 48, 48)",
                  }}
                >
                  {`Ash's tactics & books have helped me a lot in my understanding
                  on how social media advertising works.I can say that he is one
                  of the best development professionals i have dealt with so
                  far. His experience is great & he is such a great & pleasant
                  person to work with as he understands what you are`}
                </Typography>
              </Box>
            </Box>
            <div style={{}}>
              <Image
                src={boxCaresol}
                alt="WC"
                width="100px"
                height="100px"
                quality={100}
              />
            </div>
          </Box>

          <div>
            <Image
              src={project1Img2}
              alt="Expertiese"
              width="332px"
              height="232px"
              quality={100}
            />

            <p className="legend">Legend 2</p>
          </div>
          <div>
            <Image
              src={project1Img3Logo}
              alt="Expertiese"
              width="332px"
              height="232px"
              quality={100}
            />
            <p className="legend">Legend 3</p>
          </div>
        </Carousel>
      </Box>
    </Container>
  );
}
export default aboutUsCommentCaresoule;
