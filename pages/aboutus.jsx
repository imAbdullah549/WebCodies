import React from "react";
import Head from "next/head";
import Navbar from "../components/navbar";
import DividerBar from "../components/divider";
import Footer from "../components/Footer";
import BottomBar from "../components/BottomBar";
import AboutUsHero from "../components/Hero/AboutUsHero";
import OurTraditions from "../components/OurTraditions/OurTraditions";
import BecomePartner from "../components/BecomePartner";
import ImprovingLevel from "../components/ImprovingLevel";
import AboutUsCommentCaresoule from "../components/aboutUsCommentCaresoule";
import TopBar from "../components/TopBar";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const themeWebcodies = createTheme({
  palette: {
    background: {
      default: "#000000",
    },
    primary: {
      main: "#f5f5f5",
      dark: "#3250bf",
    },
    secondary: {
      main: "#d74a54",
    },
  },
  typography: {
    fontFamily: ["Poppins", "sans-serif"].join(","),
  },
});

export default function AboutUs() {
  return (
    <ThemeProvider theme={themeWebcodies}>
      <div>
        <Head>
          <title>Create Next App</title>
          <meta name="description" content="Generated by create next app" />


        </Head>
        <TopBar />
        <Navbar />
        <DividerBar />
        <AboutUsHero />
        <BecomePartner />
        <OurTraditions />
        <ImprovingLevel />
        <AboutUsCommentCaresoule />
        <Footer />
        <BottomBar />
      </div>
    </ThemeProvider>
  );
}
