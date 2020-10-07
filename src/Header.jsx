import React from 'react';
import {AppBar, Toolbar, Typography, Button} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles'

const headerStyle = makeStyles({
    header: {
        background: 'linear-gradient(45deg,#141E30  35%, #243B55 95%)'
    },
    button: {
        color: '#FFF',
        borderColor: '#7C0303',
        borderWidth: '2px'

    }
}) 

function Header (){
    const style = headerStyle();
    return (<AppBar position="relative" className={style.header}>
    <Toolbar >
        <Button  variant = 'outlined' className={style.button}>
  <Typography variant="h6">SeeSound</Typography>
        </Button>
    </Toolbar>
</AppBar>)}

export default Header;
