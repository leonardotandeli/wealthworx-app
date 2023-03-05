import React from 'react'
import Typography from '@mui/material/Typography'
import { Grid, Link } from '@mui/material'
import { Container } from '@mui/system'

export default function Footer() {
  return (
    <Container maxWidth="lg" sx={{
      padding: "1rem"
    }}>
  <Grid container   direction="row"
  justifyContent="flex-start"
  alignItems="center">
<Grid item xs={6}>
<Typography> © 2023 - Todos os direitos reservados.</Typography>
</Grid>

  </Grid>
  </Container>


  )
}
