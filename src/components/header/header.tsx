import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Link from 'next/link'
import Logo from '../../../public/images/logo.png'
import Image from 'next/image';
import Box, { BoxProps } from '@mui/material/Box';
import Button from '@mui/material/Button';
import React from 'react';
import { styled } from '@mui/material/styles';
import { useRouter } from "next/router";
import { Console } from 'console';
import Grid from '@mui/material/Grid';
export default function Header() {
    const router = useRouter();


    const HeaderBar = styled(AppBar)({
        background: 'linear-gradient(to right, #396afc, #2948ff)', /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
        position: 'relative',
      });


      const MenuBar = styled(Box)({


      });


      if (router.pathname === '/historico/salario-liquido') {
        console.log('ta no salario historico')
      } else if (router.pathname === '/') {
        console.log('deu certo')
      } else {
        console.log('deu certo')
      }

      const MenuBarBtn = styled(Button)({
        background: '#FFFFFF',
        border: '1px solid rgb(209,213,219)',
        fontFamily:'Poppins, sans-serif',
        borderRadius: '.5rem',
        boxSizing: 'border-box',
        fontWeight: '600',
        color: '#111827',
        fontSize: '.775rem',
        lineHeight: '1.05rem',
        padding: '.75rem 1rem',
        textAlign: 'center',
        textDecoration: 'none #D1D5DB solid',
        textDecorationThickness: 'auto',
        boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        touchAction: 'manipulation',
    '&:hover, &.Mui-focusVisible': {
        background: 'rgb(249,250,251)',
          },
       
      });

      const MenuBarBtnA = styled(Button)({
        background: '#e2dfe6',
        border: '1px solid rgb(209,213,219)',
        fontFamily:'Poppins, sans-serif',
        borderRadius: '.5rem',
        boxSizing: 'border-box',
        fontWeight: '600',
        color: '#111827',
        fontSize: '.775rem',
        lineHeight: '1.05rem',
        padding: '.75rem 1rem',
        textAlign: 'center',
        textDecoration: 'none #D1D5DB solid',
        textDecorationThickness: 'auto',
        boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        touchAction: 'manipulation',
    '&:hover, &.Mui-focusVisible': {
        background: 'rgb(249,250,251)',
          },
       
      });

      const MenuBarLink = styled(Link)({
        marginLeft: '15px',

      });


    return (
        <HeaderBar>
        <Toolbar>
            <Link href="/">
        <Image alt='' width={200} height={82.33} src={Logo}></Image>
</Link>

          <MenuBar>



{router.pathname === '/' ? 
<MenuBarLink href="/">
<MenuBarBtnA>Calcular</MenuBarBtnA>
</MenuBarLink>
: <MenuBarLink href="/">
<MenuBarBtn>Calcular</MenuBarBtn>
</MenuBarLink>
}


{router.pathname === '/historico/salario-liquido' ? 
<MenuBarLink href="/historico/salario-liquido">
<MenuBarBtnA>Histórico</MenuBarBtnA>
</MenuBarLink>
: <MenuBarLink href="/historico/salario-liquido">
<MenuBarBtn>Histórico</MenuBarBtn>
</MenuBarLink>
}




      </MenuBar>
        </Toolbar>
      </HeaderBar>
    )
}