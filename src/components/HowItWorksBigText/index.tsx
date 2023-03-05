import React from "react";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import f1 from "public/images/f1.png";
import f2 from "public/images/f2.png";
import { Grid, ImageListItem } from "@mui/material";
import { Container } from "@mui/system";
export default function HowItWorksBigText() {
  return (
    <Container maxWidth="lg">
      <Grid
        container
        sx={{
          marginTop: "1rem",
          padding: "1.2rem",
        }}
      >
        <Grid item xs>
          <Typography
            sx={{
              fontFamily: "Raleway",
              fontStyle: "normal",
              fontWeight: "700",
              fontSize: "22px",
              lineHeight: "33px",
              color: "#004D40",
              leterSpacing: "2px",
              paddingBottom: "1rem",
            }}
          >
            Qual a diferença entre salário bruto e salário líquido?
          </Typography>

          <Typography
            sx={{
              fontFamily: "Raleway",
              fontStyle: "normal",
              fontWeight: "400",
              fontSize: "17px",
              lineHeight: "26px",
              letterSpacing: "0.5px",
              color: "#6B7C93",
              padding: "1rem",
            }}
          >
            O salário bruto representa o valor base estipulado em contrato ou
            registrado na carteira de trabalho do trabalhador, sem qualquer
            desconto ou adicional. Esse valor pode ser alterado anualmente, de
            acordo com a categoria profissional ou mediante acordos com o
            empregador.
          </Typography>
          <Typography
            sx={{
              fontFamily: "Raleway",
              fontStyle: "normal",
              fontWeight: "400",
              fontSize: "17px",
              lineHeight: "26px",
              letterSpacing: "0.5px",
              color: "#6B7C93",
              padding: "1rem",
            }}
          >
            Por outro lado, o salário líquido é o valor efetivamente recebido
            pelo trabalhador após a dedução dos impostos e outras contribuições
            obrigatórias previstas por lei. Dentre esses descontos, destacam-se
            o Imposto de Renda Retido na Fonte (IRRF) e a contribuição para o
            Instituto Nacional do Seguro Social (INSS), que são descontados
            diretamente da folha de pagamento.
          </Typography>
        </Grid>

        <Grid item>
          <Image src={f1} width={300} height={300} alt="WealthWorx" />
        </Grid>
      </Grid>
    </Container>
  );
}
