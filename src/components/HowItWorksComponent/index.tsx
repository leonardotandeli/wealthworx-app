import React from 'react'
import { Grid, Box, Typography } from "@mui/material";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";

interface HowItWorksComponentProps {
    title: string
    description: string
    children: JSX.Element
}

export default function HowItWorksComponent({title, description, children}: HowItWorksComponentProps) {
  return (
    <Grid item xs={12} md={6} sx={{
        padding: "1rem"

    }}>
      <Box
        sx={{
          background: "#FFFFFF",
          boxShadow: "0px 6px 8px rgba(164, 164, 164, 0.213825)",
          borderRadius: "3px",
          padding: "1.3rem",
        }}
      >
        <Typography
          sx={{
            fontFamily: "Raleway",
            fontStyle: "normal",
            fontWeight: "700",
            fontSize: "17px",
            lineHeight: "22px",
            letterSpacing: "1.1px",
            color: "#004D40",
            display: "flex",
          }}
        >
          {title}
        </Typography>

        <Grid
          xs
          sx={{
            display: "flex",
          }}
        >
          {children}
        </Grid>

        <Grid xs>
          <Typography
            sx={{
              fontFamily: "Raleway",
              fontStyle: "normal",
              fontWeight: "400",
              fontSize: "17px",
              lineHeight: "26px",
              letterSpacing: "0.4px",
              color: "#6B7C93",
              paddingLeft: "8rem",
              marginTop: "-5rem",
            }}
          >
            {description}
          </Typography>
        </Grid>
      </Box>
    </Grid>
  )
}
