import React from 'react'
import { Box, Button, FormControl, Grid, IconButton, Input, InputAdornment, InputBase, OutlinedInput, Typography } from '@mui/material'


export default function InputText(props: any) {
  return (
    <InputBase placeholder={props.placeHolder} type={props.type} value={props.value == 0 ? "": props.value} onChange={(event) => {
      if (props.type == "number") {
        if (event.target.value < "0") {
          event.target.value = "0"
        }
      }
      
      props.set(event.target.value)
    
    
    }} sx={{
        background: "#FFFFFF",
        boxShadow: "0px 0px 10px rgba(71, 71, 71, 0.1)",
        borderRadius: "4px",
        
    }}
    startAdornment={<InputAdornment position="start"><strong>{props.Adornment}</strong></InputAdornment>}/>
  )
}
