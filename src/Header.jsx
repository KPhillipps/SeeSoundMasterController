import React from 'react';
import {AppBar, Toolbar, IconButton, Typography, Button} from '@material-ui/core';
import {Menu} from '@material-ui/icons'
import { makeStyles } from '@material-ui/core/styles'

const headerStyle = makeStyles({
    header: {
        background: 'linear-gradient(45deg,#141E30  35%, #243B55 95%)'
    }
}) 

function Header (){
    const style = headerStyle();
    return (<AppBar position="relative" className={style.header}>
<Toolbar >
  <IconButton edge="start" color="inherit">
    <Menu />
  </IconButton>
  <Typography variant="h6">
    SeeSound
  </Typography>
  <Button color="inherit"></Button>
</Toolbar>
</AppBar>)}

export default Header;
