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
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
function BecomePartnerSlider() {
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
    <Box sx={{ height: "470px" }}>
      <Carousel showStatus={false} showThumbs={false} showArrows={false}>
        <Box>
          <Box>
            <Image
              src={project5}
              alt="Expertiese"
              width="410px"
              height="460px"
              quality={100}
            />
          </Box>
        </Box>

        <Box>
          <Image
            src={project1Img3Logo}
            alt="Expertiese"
            width="300px"
            height="420px"
            quality={100}
          />
        </Box>
      </Carousel>
    </Box>
  );
}
export default BecomePartnerSlider;
