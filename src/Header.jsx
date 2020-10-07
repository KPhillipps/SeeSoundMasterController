import React from 'react';
import {AppBar, Toolbar} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles'
import MainMenu from './Menu'

const headerStyle = makeStyles({
    header: {
        background: 'linear-gradient(45deg,#141E30  35%, #243B55 95%)'
    }
}) 

function Header (){
    const style = headerStyle();
    return (<AppBar position="relative" className={style.header}>
    <Toolbar >
        <MainMenu />
    </Toolbar>
</AppBar>)}

export default Header;
