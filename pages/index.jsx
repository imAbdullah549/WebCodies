import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import TopBar from "../components/TopBar";
import Navbar from "../components/navbar";
import DividerBar from "../components/divider";
import HeronContent from "../components/Hero/HeronContent";
import AboutUS from "../components/AboutUs/AboutUS";
import ViewService from "../components/ViewService/ViewService";
import OurTraditions from "../components/OurTraditions/OurTraditions";
import OurExpertise from "../components/OurExpertise/OurExpertise";
import CommentCaresoule from "../components/CommentCaresoule/CommentCaresoule";
import SolutionForm from "../components/SolutionForm/SolutionForm";
import HomeStates from "../components/HomeStates";
import OurTeam from "../components/OurTeam";
import Footer from "../components/Footer";
import BottomBar from "../components/BottomBar";
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

export default function Home() {
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
        <HeronContent />
        <AboutUS />
        <ViewService />
        <OurTraditions />
        <OurExpertise />
        <CommentCaresoule />
        <SolutionForm />
        <HomeStates />
        <OurTeam />
        <Footer />
        <BottomBar />
      </div>
    </ThemeProvider>
  );
}
