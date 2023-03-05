import {
  Box,
  Button,
  FormControl,
  Grid,
  IconButton,
  Input,
  InputAdornment,
  InputBase,
  OutlinedInput,
  Typography,
} from "@mui/material";
import BadgeIcon from "@mui/icons-material/Badge";
import EscalatorWarningIcon from "@mui/icons-material/EscalatorWarning";

import React, { useState, useContext, useEffect } from "react";
import InputText from "../InputText";
import { CALC_SALARIO_LIQUIDO } from "../../services/salarioLiquido";
import { ISalario } from "../../interfaces/ISalario";
import { SalarioContext } from "../../context/SalarioContext";

export default function FormHeader() {
  const {
    salarioBruto,
    setSalarioBruto,
    outrosDescontos,
    setOutrosDescontos,
    dependentes,
    setDependentes,
    profissao,
    setProfissao,
    salario,
    setSalario,
  } = useContext(SalarioContext);

  async function postData(url = "", data = {}) {
    const response = await fetch(url, {
      method: "POST",
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
      },
      redirect: "follow",
      referrerPolicy: "no-referrer",
      body: JSON.stringify(data),
    });
    return response.json();
  }

  const onSubmit = () => {
    if (salarioBruto !== 0) {
      postData(process.env.APPURL ?? "http://localhost:3000/api/v1/salario", {
        bruto: salarioBruto,
        outrosDescontos: outrosDescontos,
        totalDependentes: dependentes,
      }).then((data: ISalario) => {
        setSalario(data);
      });
    }
  };

  return (

    <Box
      sx={{
        boxShadow: 1,
        borderRadius: "4px",
        backgroundColor: "#fff",
      }}
    >
      <Typography
        sx={{
          textAlign: "center",
          fontFamily: "Raleway",
          borderRadius: "4px",
          padding: "8px",
          background: "#F3F5F9",
          height: "66px",
          fontStyle: "normal",
          fontWeight: "600",
          fontSize: "20px",
          lineHeight: "52px",
          letterSpacing: "0.06px",
          color: "#004D40",
        }}
      >
        Calcular Salário Líquido
      </Typography>

      <Grid
        container columnSpacing={2}
        sx={{
          padding: "45px",
          textAlign: "center",
        }}
      >
        
        <Grid 
          item
          xs={12}
          md={6}
          lg={6}
          sx={{
            paddingBottom: "35px",
    
            borderColor: "#fff",
          }}
        >
          <InputText
            placeHolder="Salário Bruto"
            type="numberr"
            value={salarioBruto}
            set={setSalarioBruto}
            currency={true}
            Adornment="R$"
          />
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          lg={6}
          sx={{
            paddingBottom: "35px",
    
            borderColor: "#fff",
          }}
        >
          <InputText
            placeHolder="Descontos"
            type="number"
            value={outrosDescontos}
            set={setOutrosDescontos}
            Adornment="R$"
          />
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          lg={6}
          sx={{
            paddingBottom: "35px",
    
            borderColor: "#fff",
          }}
        >
          <InputText
            placeHolder="Dependentes"
            type="number"
            value={dependentes}
            set={setDependentes}
            Adornment={
              <EscalatorWarningIcon
                sx={{
                  marginTop: "1rem",
                }}
              />
            }
          />
        </Grid>
        <Grid
          item
          xs={12}

          md={6}
          lg={6}
          sx={{
            paddingBottom: "35px",
    
            borderColor: "#fff",
          }}
        >
          <InputText
            placeHolder="Profissão"
            type="text"
            value={profissao}
            set={setProfissao}
            Adornment={
              <BadgeIcon
                sx={{
                  marginTop: "1rem",
                }}
              />
            }
          />
        </Grid>

        <Grid
          item
          xs={12}
          md={12}
          sx={{


            borderColor: "#fff",
          }}
        >
          <Button
            onClick={onSubmit}
            sx={{
              background: "#73E6BA",
              boxShadow: "0px 0px 10px rgba(71, 71, 71, 0.1)",
              fontFamily: "Raleway",
              fontStyle: "normal",
              fontWeight: "700",
              textTransform: "none",
              fontSize: "16px",
              lineHeight: "20px",
              letterSpacing: "0.395294px",
              color: "#004D40",
              width: "100%",
              marginTop: "10px",
              padding: "14px",
            }}
          >
            Calcular
          </Button>
     
        </Grid>
        <Grid
          item
          xs={12}
   
          md={12}
          
          sx={{

            borderColor: "#fff",
          }}
        >
          <Typography
            sx={{
              paddingTop: "30px",
              fontFamily: "Raleway",
              fontStyle: "normal",
              fontWeight: "600",
              fontSize: "14px",
              lineHeight: "25px",
              textAlign: "center",
              letterSpacing: "0.06px",
              color: "#CCCCCC",
            }}
          >
            O campo profissão é opcional. 
            Caso seja preenchido, o cálculo será exibido em nossa página de
            salários.
          </Typography>
        </Grid>
      </Grid>
    </Box>

  );
}
