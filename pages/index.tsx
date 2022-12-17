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
import ISalario from '../src/interfaces/ISalario';
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
import Logo from '../public/images/logo.png'
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Image from 'next/image';
import Header from '../src/components/header/header';
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
      background: 'linear-gradient(to right, #396afc, #2948ff)', /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
      fontFamily:'Poppins, sans-serif',
      fontSize: '.775rem',
      fontWeight: '600',
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
  

 


export default function Salario() {

  const [hide, setHide] = React.useState(false);
  const handleClick = () => {
    setHide(prev => !prev)
   
    }

  const [salario, setSalario] = React.useState<ISalario>()
    const [values, setValues] = React.useState<State>({
        amount: '',
        descontos: '',
        dependentes: '',
        profissao: '',
      });

      const handleChange =
      (prop: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
        setValues({ ...values, [prop]: event.target.value });
      };

if (values.amount === '') {
  values.amount = '0' 
}

if (values.descontos === '') {
  values.descontos = '0'
}

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />


      <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
        <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
          <Typography component="h1" variant="h4" align="center">
            Calculadora Salário Liquido
          </Typography>

          <Divider sx={{ mb:4}} />
          <FormControl fullWidth sx={{ m: 1, width: '56ch'}}>



            
          <InputLabel id="salarioB" htmlFor="outlined-adornment-amount">Salário Bruto</InputLabel>
          <OutlinedInput

            id="outlined-adornment-amount"
            value={values.amount}
            onChange={handleChange('amount')}
            startAdornment={<InputAdornment position="start">R$</InputAdornment>}
            label="Amount"

          />
        </FormControl>


        <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '56ch' },
      }}


      noValidate
      autoComplete="off"
    >
     <TextField id="outlined-basic"  value={values.profissao}  onChange={handleChange('profissao')} label="Profissão" variant="outlined" />
</Box>
<Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '27ch' },
      }}


      noValidate
      autoComplete="off"
    >


      <TextField id="outlined-basic"  value={values.descontos}  onChange={handleChange('descontos')} label="Descontos" variant="outlined" />
      <TextField id="outlined-basic" value={values.dependentes} onChange={handleChange('dependentes')} label="Número de Dependentes" variant="outlined" />
      
    </Box>

    <Divider sx={{ mb:2}} />


        <Button onClick={(i) => {

            if (hide != true) {
              handleClick()
            }
  
            
            axios.post('https://api-calc-salario.herokuapp.com/salario', {
              salarioBruto: values.amount,
              outrosDescontos: values.descontos,
              dependentes: values.dependentes,
              profissao: values.profissao
            })
            .then(function (response) {
              setSalario(response.data)
          
              console.log(response.data.salarioLiquido);
            })
            .catch(function (error) {
              console.error(error);
            });
          


          }} variant="outlined">Calcular Salário Liquido</Button>
  







        </Paper>
 
      </Container>




      { hide && (
      <Container maxWidth="lg">
      <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell  >Eventos</StyledTableCell>
            <StyledTableCell >Alíquota Real</StyledTableCell>
            <StyledTableCell>Proventos</StyledTableCell>
            <StyledTableCell >Descontos</StyledTableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>

<StyledTableRow>
<StyledTableCell scope="row">Salário Bruto</StyledTableCell>
<StyledTableCell scope="row">-</StyledTableCell>
<StyledTableCell scope="row">R$ {values.amount}</StyledTableCell>
<StyledTableCell scope="row">-</StyledTableCell>
</StyledTableRow>


<StyledTableRow>
<StyledTableCell component="th" scope="row">Outros Descontos</StyledTableCell>
<StyledTableCell scope="row">-</StyledTableCell>
<StyledTableCell scope="row">-</StyledTableCell>
<StyledTableCell scope="row">R$ {values.descontos}</StyledTableCell>
</StyledTableRow>


<StyledTableRow>
<StyledTableCell component="th" scope="row">INSS</StyledTableCell>
<StyledTableCell scope="row">{salario?.aliquotaINSS}%</StyledTableCell>
<StyledTableCell scope="row">-</StyledTableCell>
<StyledTableCell scope="row">{salario?.descontoINSS.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</StyledTableCell>
</StyledTableRow>


<StyledTableRow>
<StyledTableCell component="th" scope="row">IRRF</StyledTableCell>
<StyledTableCell scope="row">{salario?.aliquotaIRPF}%</StyledTableCell>
<StyledTableCell scope="row">-</StyledTableCell>
<StyledTableCell scope="row">{salario?.descontoIRPF.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</StyledTableCell>
</StyledTableRow>
<StyledTableRow>
<StyledTableCell component="th" scope="row">Totais</StyledTableCell>
<StyledTableCell scope="row">-</StyledTableCell>
<StyledTableCell scope="row">{salario?.salarioBruto.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</StyledTableCell>
<StyledTableCell scope="row">{salario?.totalDescontos.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</StyledTableCell>
</StyledTableRow>
<StyledTableRow>
<StyledTableCell component="th" scope="row">Valor Líquido</StyledTableCell>
<StyledTableCell scope="row">{salario?.salarioLiquido.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</StyledTableCell>
</StyledTableRow>


       
        </TableBody>
      </Table>
    </TableContainer>
    </Container>
)}





      <Copyright />

    </ThemeProvider>
  );
}