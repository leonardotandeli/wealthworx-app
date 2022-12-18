
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
import * as React from 'react';
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
interface SalarioProps {
    salario: ISalario
  }

  
  const theme = createTheme();

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
    


  const Salario = ({ salario }: SalarioProps) => {
  
    return (

<StyledTableRow>
<StyledTableCell scope="row">{salario?.profissao}</StyledTableCell>
<StyledTableCell scope="row">{salario?.salarioBruto.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</StyledTableCell>
<StyledTableCell scope="row">{salario?.totalDescontos.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</StyledTableCell>
<StyledTableCell scope="row">{salario?.salarioLiquido.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</StyledTableCell>
</StyledTableRow>


    )
  }
  
  export default Salario