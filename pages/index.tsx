import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Header from "../src/components/Header";
import SectionTitle from "../src/components/SectionTitle";
import { SalarioContextProvider } from "../src/context/SalarioContext";
import HowItWorks from "../src/components/HowItWorks";
import HowItWorksBigText from "../src/components/HowItWorksBigText";
import FooterInfo from "../src/components/FooterInfo";
import Footer from "../src/components/Footer";
import SEO from "../src/components/SEO";

const theme = createTheme({
  palette: {
    primary: {
      light: "#73E6BA",
      main: "#004D40",
      dark: "#333333",
    },
  },
});

export default function Salario() {
  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <SEO />
        <CssBaseline />
        <SalarioContextProvider>
          <Header />
        </SalarioContextProvider>
        <HowItWorks />
        <HowItWorksBigText />
        <FooterInfo />
        <Footer />
      </ThemeProvider>
    </React.Fragment>
  );
}
