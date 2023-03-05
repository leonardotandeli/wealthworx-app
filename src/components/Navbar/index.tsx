import { Container, Link } from "@mui/material";
import React, { useContext } from "react";
import Logo from "../../../public/images/logo.png";
import { Grid } from "@mui/material";
import Image from "next/image";
import { SalarioContext } from "../../context/SalarioContext";

export default function Navbar() {

const {salario} = useContext(SalarioContext)

  return (
<>
      <Grid container direction="row" alignItems="center" sx={{
                      paddingBottom: ".5rem"
      }}>
        <Grid item xs>
          <Image src={Logo} width={155} height={29} alt="WealthWorx" />
        </Grid>
        <Grid item>
          <Link href="/"
            sx={{
              textDecoration: "none",
              color: "#73E6BA",
              fontSize: "17px",
              fontFamily: "Raleway",
              fontStyle: "normal",
              lineHeight: "22px",
              fontWeight: "900",
              letterSpacing: "0.303571px",

            }}
          >
            Calculadora Salário Líquido
          </Link>
        </Grid>
      </Grid>
      </>
  );
}
