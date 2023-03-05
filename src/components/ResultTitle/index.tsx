import { Grid, Typography, IconButton, Button } from '@mui/material'
import React, { useContext } from 'react'
import AutorenewOutlinedIcon from '@mui/icons-material/AutorenewOutlined';
import { Container } from '@mui/system';
import { SalarioContext } from '../../context/SalarioContext';




export default function ResultTitle() {
  const {salario, setSalarioBruto} = useContext(SalarioContext)

  function newCalc() {
    salario.bruto = 0
    setSalarioBruto(salario.bruto)
  }
  return (

<Grid container spacing={3} sx={{
  paddingTop: "4rem",
  paddingBottom: "2rem"
}}>

<Grid item xs={10}>

<Typography sx={{
        fontFamily: "Raleway",
        fontStyle: "normal",
        fontWeight: "700",
        fontSize: "22px",
        letterSpacing: "2px",
        color: "#73E6BA",
        
    }}>
Resultado do Cálculo </Typography>
    <Typography sx={{
        fontFamily: "Raleway",
        fontStyle: "normal",
        fontWeight: "400",
        fontSize: "16px",
        letterSpacing: "0.5px",
        color: "#fff",
        
    }}>
        Os resultados dessa calculadora são apenas simulações e não possui valor legal. 
    </Typography>


</Grid>

<Grid item xs={6} md={2}>

<Button  variant="outlined" startIcon={<AutorenewOutlinedIcon />}  sx={{
        color: "#fff",
        borderColor: '#73E6BA',
        fontFamily: "Raleway",
        marginTop: "10px",
        fontStyle: "normal",

}} onClick={newCalc}>
 Refazer
</Button>


</Grid>

</Grid>

  )
}
