import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { useContext } from "react";
import { SalarioContext } from "../../context/SalarioContext";
import ResultTitle from "../ResultTitle";

export default function ResultTable() {
  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      background: "#F3F5F9",
      color: "#004D40",
      fontWeight: "800",
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 17,
      color: "#333333",
    },
  }));

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    "&:last-child td, &:last-child th": {
      border: 0,
    },
  }));

  const { salario } = useContext(SalarioContext);

  console.log(salario);

  return (
    <>
      <ResultTitle />

      <TableContainer
        sx={{
          paddingBottom: "4rem",
        }}
      >
        <Table aria-label="customized table">
          <TableHead>
            <TableRow
              sx={{
                fontFamily: "Raleway'",
                fontStyle: "normal",
                fontWeight: "600",
                fontSize: "20px",
                lineHeight: "52px",
                letterSpacing: "0.06px",
              }}
            >
              <StyledTableCell>Eventos</StyledTableCell>
              <StyledTableCell>Alíquota Aplicada</StyledTableCell>
              <StyledTableCell>Proventos</StyledTableCell>
              <StyledTableCell>Descontos</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody
            sx={{
              backgroundColor: "#fff",
            }}
          >
            <StyledTableRow>
              <StyledTableCell scope="row">
                <strong>Salário Bruto</strong>
              </StyledTableCell>
              <StyledTableCell scope="row">-</StyledTableCell>
              <StyledTableCell scope="row">
                {salario.bruto.toLocaleString("pt-br", {
                  style: "currency",
                  currency: "BRL",
                })}
              </StyledTableCell>
              <StyledTableCell scope="row">-</StyledTableCell>
            </StyledTableRow>

            <StyledTableRow>
              <StyledTableCell component="th" scope="row">
                <strong> Outros Descontos</strong>
              </StyledTableCell>
              <StyledTableCell scope="row">-</StyledTableCell>
              <StyledTableCell scope="row">-</StyledTableCell>
              <StyledTableCell scope="row">
                {salario.outrosDescontos.toLocaleString("pt-br", {
                  style: "currency",
                  currency: "BRL",
                })}
              </StyledTableCell>
            </StyledTableRow>

            <StyledTableRow>
              <StyledTableCell component="th" scope="row">
                <strong> INSS</strong>
              </StyledTableCell>
              <StyledTableCell scope="row">
                {salario.aliquotaRealInss.toFixed(2)}%
              </StyledTableCell>
              <StyledTableCell scope="row">-</StyledTableCell>
              <StyledTableCell scope="row">
                {salario.valorDescontoInss.toLocaleString("pt-br", {
                  style: "currency",
                  currency: "BRL",
                })}
              </StyledTableCell>
            </StyledTableRow>

            <StyledTableRow>
              <StyledTableCell component="th" scope="row">
                <strong> IRRF</strong>
              </StyledTableCell>
              <StyledTableCell scope="row">
                {salario.aliquotaRealIrpf.toFixed(2)}%
              </StyledTableCell>
              <StyledTableCell scope="row">-</StyledTableCell>
              <StyledTableCell scope="row">
                {salario.valorDescontoIrpf.toLocaleString("pt-br", {
                  style: "currency",
                  currency: "BRL",
                })}
              </StyledTableCell>
            </StyledTableRow>
            <StyledTableRow>
              <StyledTableCell component="th" scope="row">
                <strong> Totais</strong>
              </StyledTableCell>
              <StyledTableCell scope="row"></StyledTableCell>
              <StyledTableCell scope="row">
                {salario.bruto.toLocaleString("pt-br", {
                  style: "currency",
                  currency: "BRL",
                })}
              </StyledTableCell>
              <StyledTableCell scope="row">
                {salario.totalDesconto.toLocaleString("pt-br", {
                  style: "currency",
                  currency: "BRL",
                })}
              </StyledTableCell>
            </StyledTableRow>
            <StyledTableRow>
              <StyledTableCell component="th" scope="row">
                <strong>Valor Líquido</strong>
              </StyledTableCell>
              <StyledTableCell scope="row">
                <strong>
                  {salario.liquido.toLocaleString("pt-br", {
                    style: "currency",
                    currency: "BRL",
                  })}
                </strong>
              </StyledTableCell>
              <StyledTableCell scope="row"></StyledTableCell>
              <StyledTableCell scope="row"></StyledTableCell>
            </StyledTableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
