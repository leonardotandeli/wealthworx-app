import React from "react";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import AccountBalanceOutlinedIcon from "@mui/icons-material/AccountBalanceOutlined";
import HailOutlinedIcon from "@mui/icons-material/HailOutlined";
import ElderlyOutlinedIcon from "@mui/icons-material/ElderlyOutlined";
import PaidOutlinedIcon from "@mui/icons-material/PaidOutlined";
import CurrencyExchangeOutlinedIcon from "@mui/icons-material/CurrencyExchangeOutlined";
import PriceChangeOutlinedIcon from "@mui/icons-material/PriceChangeOutlined";
import Container from "@mui/material/Container";
import { Grid } from "@mui/material";
import HowItWorksComponent from "../HowItWorksComponent";
import SectionTitle from "../SectionTitle";
export default function HowItWorks() {
  return (
    <Container maxWidth="lg">
      <SectionTitle
        title="Como funciona o cálculo?"
        subtitle="Com as informações do salário bruto, descontos e número de dependentes podemos simular o valor do salário líquido."
      />
      <Grid container>
        <HowItWorksComponent
          title="Descontos realizados para chegar ao salário líquido"
          description="O salário líquido é o valor que o trabalhador recebe após os descontos oficiais (INSS e IRPF) serem aplicados no salário bruto."
        >
          <AccountBalanceWalletOutlinedIcon
            sx={{
              fontSize: "7rem",
              paddingTop: "1rem",
              color: "#73E6BA",
            }}
          />
        </HowItWorksComponent>

        <HowItWorksComponent
          title="Contribuição previdenciária (INSS)"
          description="O INSS é um órgão responsável por garantir a proteção social dos trabalhadores e de seus dependentes, por meio de benefícios."
        >
          <ElderlyOutlinedIcon
            sx={{
              fontSize: "7rem",
              paddingTop: "1rem",
              color: "#73E6BA",
            }}
          />
        </HowItWorksComponent>

        <HowItWorksComponent
          title="Fundo de Garantia por Tempo de Serviço (FGTS)"
          description="A contribuição para o FGTS é um valor que aparece discriminado no contracheque do trabalhador, porém, ele não é deduzido do salário bruto."
        >
          <HailOutlinedIcon
            sx={{
              fontSize: "7rem",
              paddingTop: "1rem",
              color: "#73E6BA",
            }}
          />
        </HowItWorksComponent>

        <HowItWorksComponent
          title="Imposto de Renda Retido na Fonte"
          description="IRRF é o imposto que é descontado todo mês da folha de pagamento do trabalhador com base em uma porcentagem definida pelo Governo."
        >
          <AccountBalanceOutlinedIcon
            sx={{
              fontSize: "7rem",
              paddingTop: "1rem",
              color: "#73E6BA",
            }}
          />
        </HowItWorksComponent>

        <HowItWorksComponent
          title="Outros descontos"
          description="Além dos descontos obrigatórios, existem outros descontos que não são obrigatórios para o cálculo do salário líquido, como por exemplo plano de saúde."
        >
          <CurrencyExchangeOutlinedIcon
            sx={{
              fontSize: "7rem",
              paddingTop: "1rem",
              color: "#73E6BA",
            }}
          />
        </HowItWorksComponent>

        <HowItWorksComponent
          title="Adicionais ao Salário Bruto"
          description="Além dos descontos obrigatórios, para obter o valor correto do salário líquido é necessário somar todos os adicionais recebidos, tais como adicional noturno e hora extra,"
        >
          <PriceChangeOutlinedIcon
            sx={{
              fontSize: "7rem",
              paddingTop: "1rem",
              color: "#73E6BA",
            }}
          />
        </HowItWorksComponent>
      </Grid>
    </Container>
  );
}
