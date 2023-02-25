import { Box, Button, FormControl, Grid, IconButton, Input, InputAdornment, InputBase, OutlinedInput, Typography } from '@mui/material'

import React from 'react'

export default function FormHeader() {
  return (
    <Box 
    sx={{
      width: 463,
      height: 415,
      borderRadius: "4px",
      backgroundColor: "#fff",
    }}
  >
    <Typography  sx={{
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
    }}>Calcular Salário Líquido</Typography>

    <FormControl sx={{
    }}>

        <Grid container sx={{
          padding: "40px",

        }}>
    <Grid item xs={6} sx={{
          paddingBottom: "35px",
          paddingRight: "10px",
          borderColor: "#fff"
        }}>



    <InputBase placeholder='Salário Bruto' sx={{
        background: "#FFFFFF",
        boxShadow: "0px 0px 10px rgba(71, 71, 71, 0.1)",
        borderRadius: "4px",

    }}
    startAdornment={<InputAdornment position="start"><strong>R$</strong></InputAdornment>}/>
    
    </Grid>
    <Grid item xs={6}>
    <InputBase placeholder='Descontos' sx={{
        background: "#FFFFFF",
        boxShadow: "0px 0px 10px rgba(71, 71, 71, 0.1)",
        borderRadius: "4px",

    }}
    startAdornment={<InputAdornment position="start"><strong>R$</strong></InputAdornment>}/>
    
    </Grid>

    <Grid item xs={6}  sx={{
          paddingBottom: "35px",
          paddingRight: "10px",

        }}>
    <InputBase placeholder='Dependentes' sx={{
        background: "#FFFFFF",
        boxShadow: "0px 0px 10px rgba(71, 71, 71, 0.1)",
        borderRadius: "4px",

    }}
    startAdornment={<InputAdornment position="start"><strong>R$</strong></InputAdornment>}/>
    </Grid>

    <Grid item xs={6}>
    <InputBase placeholder='Profissão' sx={{
        background: "#FFFFFF",
        boxShadow: "0px 0px 10px rgba(71, 71, 71, 0.1)",
        borderRadius: "4px",

    }}
    startAdornment={<InputAdornment position="start"><strong>R$</strong></InputAdornment>}/>
    
    </Grid>

<Button sx={{
    background: "#73E6BA",
    boxShadow: "0px 0px 10px rgba(71, 71, 71, 0.1)",
    fontFamily: "Raleway",
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: "16px",
    lineHeight: "20px",
    letterSpacing: "0.395294px",
    color: "#004D40",
    width: "100%",
    padding: "14px"
}}
>Calcular</Button>


<Typography sx={{
    paddingTop: "35px",
    fontFamily: "Raleway",
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: "11px",
    lineHeight: "24px",
    textAlign: "center",
    letterSpacing: "0.06px",
    color: "#CCCCCC",
    
}}

>O campo profissão é opcional, e caso seja preenchido, as informações do cálculo poderão ser utilizadas em nossas pesquisas salariais.</Typography>

        </Grid>



    </FormControl>

  </Box>
  )
}
