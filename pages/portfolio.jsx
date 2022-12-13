import React from "react";
import Head from "next/head";
import Navbar from "../components/navbar";
import DividerBar from "../components/divider";
import PortfolioHero from "../components/Hero/PortfolioHero";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Portfolios from "../components/Portfolios";
import Footer from "../components/Footer";
import BottomBar from "../components/BottomBar";
import TopBar from "../components/TopBar";
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

function portfolio() {
  return (
    <ThemeProvider theme={themeWebcodies}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <TopBar />
      <Navbar />
      <DividerBar />
      <PortfolioHero />
      <Portfolios />
      <Footer />
      <BottomBar />
    </ThemeProvider>
  );
}

export default portfolio;
