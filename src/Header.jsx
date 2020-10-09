import React from 'react';
import {AppBar, Toolbar} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles'
import MainMenu from './Menu'

const headerStyle = makeStyles({
    header: {
        background: '#1d1d1d',
        alignItems: 'center'
    
    },
}) 

function Header (){
    const style = headerStyle();
    return (<AppBar position="relative" className={style.header}>
    <Toolbar>
        <MainMenu />
    </Toolbar>
</AppBar>)}

export default Header;
