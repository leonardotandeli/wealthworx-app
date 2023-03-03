import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import FormHeader from "../FormHeader";

export default function PageTitle() {
  return (
    <Container
      maxWidth="lg"
      sx={{

          display: "flex",
          flexDirection: "row",

        paddingTop: "4rem",
      }}
    >
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
       
      >
        <Grid item xs={12} sm={12} md={12} lg={7}>
          <Typography
            sx={{
              fontFamily: "Raleway",
              margin: "1rem",
              fontStyle: "Black",
              fontWeight: "900",
              fontSize: "50px",
              lineHeight: "52px",
              letterSpacing: "0.06px",
              color: "#FFFFFF",
            }}
          >
            Calculadora <br />
            Salário Líquido
          </Typography>
          <Typography
            sx={{
              fontFamily: "Raleway",
              margin: "2rem",
              fontStyle: "Medium",
              fontWeight: "500",
              fontSize: "18px",
              lineHeight: "28px",
              letterSpacing: "0.42px",
              color: "#FFFFFF",
            }}
          >
            Para calcular o salário líquido, é necessário inserir o valor do
            salário bruto. Esse valor será utilizado como base para o cálculo
            dos percentuais de descontos que serão aplicados.
          </Typography>
        </Grid>
        <Grid item xs={12} sm={12} md={8} lg={5}>
     <FormHeader/>
</Grid>
      </Grid>
    </Container>
  );
}
