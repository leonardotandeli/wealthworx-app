import React from "react";
import Container from "@mui/material/Container";
import Navbar from "../Navbar";
import { Link } from "@mui/material";
import Image from "next/image";
import Logo from "../../../public/images/logo.png";
import { Box, Grid } from "@mui/material";
import Typography from "@mui/material/Typography";
import PageTitle from "../PageTitle";

export default function Header() {
  return (
    <Container
      maxWidth={false}
      sx={{
        height: "675px",
        background: "linear-gradient(135deg, #004D40 0%, #000624 100%)",
        paddingTop: "1.9rem",
      }}
    >
      <Navbar />

      <PageTitle />
    </Container>
  );
}
