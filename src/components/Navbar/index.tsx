import { Container, Link } from "@mui/material";
import React from "react";
import Logo from "../../../public/images/logo.png";
import { Grid } from "@mui/material";
import Image from "next/image";

export default function Navbar() {
  return (
    <Container  maxWidth="lg">
      <Grid container direction="row" alignItems="center">
        <Grid item xs>
          <Image src={Logo} width={155} height={29} alt="WealthWorx" />
        </Grid>
        <Grid item>
          <Link
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

          </Link>
        </Grid>
      </Grid>
    </Container>
  );
}
