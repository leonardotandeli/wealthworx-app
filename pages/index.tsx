import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import Paper from "@mui/material/Paper";
import Divider from "@mui/material/Divider";
import Link from "next/link";
import Typography from "@mui/material/Typography";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import Button from "@mui/material/Button";
import axios from "axios";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Box, { BoxProps } from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Logo from "../public/images/logo.png";
import Alert from "@mui/material/Alert";
import Grid from "@mui/material/Grid";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Image from "next/image";
import Header from "../src/components/Header";
import ResultTable from "../src/components/ResultTable";
import SectionTitle from "../src/components/SectionTitle";
import { SalarioContext, SalarioContextProvider } from "../src/context/SalarioContext";
import HowItWorks from "../src/components/HowItWorks";
import HowItWorksBigText from "../src/components/HowItWorksBigText";
import FooterInfo from "../src/components/FooterInfo";
import Footer from "../src/components/Footer";


const theme = createTheme();



export default function Salario() {

  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <SalarioContextProvider>
          <Header />

      
<ResultTable />



        </SalarioContextProvider>

        <SectionTitle/>


      <HowItWorks/>

      </ThemeProvider>
    </React.Fragment>
  );
}
