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
import { ISalario } from "../../interfaces/ISalario";
import { useContext } from "react";
import { SalarioContext } from "../../context/SalarioContext";
import SectionTitle from "../SectionTitle";

export default function ResultTable() {
  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      background:"#F3F5F9",
      color: "#004D40",
      fontWeight: "800"
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 17,
      color: "#333333",
    },
  }));

  const StyledTableRow = styled(TableRow)(({ theme }) => ({

    // hide last border
    "&:last-child td, &:last-child th": {
      border: 0,
    },
  }));


  const { salarioBruto, setSalarioBruto, outrosDescontos, setOutrosDescontos, dependentes, setDependentes, profissao, setProfissao, salario, setSalario} = useContext(SalarioContext)


  console.log(salario);
  
  return (




    <Container maxWidth="lg" sx={{


                              marginBottom: "4rem",
      }}>
        
              {salario.bruto > 0 &&


      <TableContainer sx={{
        boxShadow: 1
      }} component={Paper}>
            <SectionTitle/>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow sx={{

                      fontFamily: "Raleway'",
                      fontStyle: "normal",
                      fontWeight: "600",
                      fontSize: "20px",
                      lineHeight: "52px",
                      letterSpacing: "0.06px",
            }}>
              <StyledTableCell>Eventos</StyledTableCell>
              <StyledTableCell>Alíquota Aplicada</StyledTableCell>
              <StyledTableCell>Proventos</StyledTableCell>
              <StyledTableCell>Descontos</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <StyledTableRow>
              <StyledTableCell scope="row"><strong>Salário Bruto</strong></StyledTableCell>
              <StyledTableCell scope="row">-</StyledTableCell>
              <StyledTableCell scope="row">{salario.bruto.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</StyledTableCell>
              <StyledTableCell scope="row">-</StyledTableCell>
            </StyledTableRow>

            <StyledTableRow>
              <StyledTableCell component="th" scope="row">
              <strong>   Outros Descontos</strong>
              </StyledTableCell>
              <StyledTableCell scope="row">-</StyledTableCell>
              <StyledTableCell scope="row">-</StyledTableCell>
              <StyledTableCell scope="row">{salario.outrosDescontos.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</StyledTableCell>
            </StyledTableRow>

            <StyledTableRow>
              <StyledTableCell component="th" scope="row">
              <strong>   INSS</strong>
              </StyledTableCell>
              <StyledTableCell scope="row">{salario.aliquotaRealInss.toFixed(2)}%</StyledTableCell>
              <StyledTableCell scope="row">-</StyledTableCell>
              <StyledTableCell scope="row">{salario.valorDescontoInss.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</StyledTableCell>
            </StyledTableRow>

            <StyledTableRow>
              <StyledTableCell component="th" scope="row">
              <strong> IRRF</strong>
              </StyledTableCell>
              <StyledTableCell scope="row">{salario.aliquotaRealIrpf.toFixed(2)}%</StyledTableCell>
              <StyledTableCell scope="row">-</StyledTableCell>
              <StyledTableCell scope="row">{salario.valorDescontoIrpf.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</StyledTableCell>
            </StyledTableRow>
            <StyledTableRow>
              <StyledTableCell component="th" scope="row">
              <strong>    Totais</strong>
              </StyledTableCell>
              <StyledTableCell scope="row"></StyledTableCell>
              <StyledTableCell scope="row">{salario.bruto.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})}</StyledTableCell>
              <StyledTableCell scope="row">{salario.totalDesconto.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})}</StyledTableCell>
            </StyledTableRow>
            <StyledTableRow>
              <StyledTableCell component="th" scope="row">
                <strong>Valor Líquido</strong>
              </StyledTableCell>
              <StyledTableCell scope="row"><strong>{salario.liquido.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})}</strong></StyledTableCell>
              <StyledTableCell scope="row"></StyledTableCell>
              <StyledTableCell scope="row"></StyledTableCell>

            </StyledTableRow>
          </TableBody>
        </Table>
      </TableContainer>
    }
    </Container>
  );
}
