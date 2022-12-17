import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import Paper from '@mui/material/Paper';
import Divider from '@mui/material/Divider';
import Link from 'next/link'
import Typography from '@mui/material/Typography';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import Button from '@mui/material/Button';
import axios from 'axios';

import { createTheme, ThemeProvider } from '@mui/material/styles';
import ISalario from '../../../src/interfaces/ISalario';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Box, { BoxProps } from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';

import Select, { SelectChangeEvent } from '@mui/material/Select';
import { skipPartiallyEmittedExpressions } from 'typescript';
import Salario from '../../../src/components/salario/salario';

function Item(props: BoxProps) {
  const { sx, ...other } = props;
  return (
    <Box
      sx={{
        p: 1,
        m: 1,
        bgcolor: theme.palette.common.white,
        color: (theme) => (theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800'),
        border: '1px solid',
        borderColor: (theme) =>
          theme.palette.mode === 'dark' ? 'grey.800' : 'grey.300',
        borderRadius: 2,
        fontSize: '0.875rem',
        fontWeight: '700',
        ...sx,
      }}
      {...other}
    />
  );
}

function Copyright() {
  return (
    <Typography  sx={{ m: 4 }} variant="body2" color="text.secondary" align="center">
      {'Copyright ©'}
    
     {' '}
      {new Date().getFullYear()}
      {'.'}  <Link color="inherit" href="https://github.com/leonardotandeli">
        Desenvolvido por Leonardo Tandeli </Link>
    </Typography>
  );
}

const theme = createTheme();
interface State {
    amount: string;
    descontos: string;
    dependentes: string;
    profissao: string;
  }

  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));
  
  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));
  

 


export default function HistoricoSalario() {

 const [salarios, setSalarios] = React.useState<ISalario[]>([])
//  const salarios: ISalario[]


  React.useEffect(() => {
    //obter salarios

    axios.get('https://api-calc-salario.herokuapp.com/salario',)
    .then(response => {
      setSalarios(response.data)

    })
  }, [])


  return (





    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar

        color="default"
        elevation={0}
        sx={{
          position: 'relative',
          borderBottom: (t) => `1px solid ${t.palette.divider}`,
        }}
      >
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
            Histórico de Salários Cálculados  
          </Typography> 

          <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          p: 1,
          m: 1,
          bgcolor: '#f5f5f5',
          borderRadius: 1,
        }}
      >
        <Link href="/"><Item>Calcular Salário</Item></Link>
        <Link href="/historico/salario-liquido"><Item>Histórico de Cálculos</Item></Link>

      </Box>
        </Toolbar>
      </AppBar>


<h1>teste lista</h1>








      <Container maxWidth="lg">
      <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Profissão</StyledTableCell>
            <StyledTableCell>Salário Bruto</StyledTableCell>
            <StyledTableCell>Descontos</StyledTableCell>
            <StyledTableCell>Salário Líquido</StyledTableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>

        {salarios?.map(item => <Salario salario={item} key={item.id} />)}


       
        </TableBody>
      </Table>
    </TableContainer>
    </Container>






      <Copyright />

    </ThemeProvider>
  );
}