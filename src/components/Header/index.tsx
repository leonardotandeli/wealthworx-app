import React, { useContext } from "react";
import Container from "@mui/material/Container";
import Navbar from "../Navbar";
import PageTitle from "../PageTitle";
import ResultTable from "../ResultTable";
import { SalarioContext } from "../../context/SalarioContext";


export default function Header() {
  const { salario } = useContext(SalarioContext);

  return (
    <Container
      maxWidth={false}
      sx={{
        background: "linear-gradient(135deg, #004D40 0%, #000624 100%)",
        paddingTop: "2rem",
      }}
    >
      <Container maxWidth="lg">
        <Navbar />

        {salario.bruto <= 0 && (
          <PageTitle
            title="Calculadora Salário Líquido"
            description="Para calcular o salário líquido, é necessário inserir o valor do salário bruto. Esse valor será utilizado como base para o cálculo dos percentuais de descontos que serão aplicados."
          />
        )}
        {salario.bruto > 0 && <ResultTable />}
      </Container>
    </Container>
  );
}
