import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import FormHeader from "../FormHeader";

interface PageTitleProps {
  title: string;
  description: string;
}

export default function PageTitle({ title, description }: PageTitleProps) {
  return (
    <Container
      maxWidth="lg"
      sx={{
        display: "flex",
        flexDirection: "row",
        paddingTop: "3rem",
      }}
    >
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        sx={{
          marginBottom: "4rem",
        }}
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
            {title}
          </Typography>
          <Typography
            sx={{
              fontFamily: "Raleway",
              margin: "1rem",
              fontStyle: "Medium",
              fontWeight: "500",
              fontSize: "18px",
              lineHeight: "28px",
              letterSpacing: "0.42px",
              color: "#FFFFFF",
            }}
          >
            {description}
          </Typography>
        </Grid>
        <Grid item xs={12} sm={12} md={8} lg={5}>
          <FormHeader />
        </Grid>
      </Grid>
    </Container>
  );
}
