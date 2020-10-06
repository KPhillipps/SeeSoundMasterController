import React from 'react';
import './App.css';
import {AppBar, Toolbar, IconButton, Typography, Button} from '@material-ui/core';
import {Menu} from '@material-ui/icons'


function App() {
  return (
    <div className="App">
      <AppBar position="relative">
    <Toolbar >
      <IconButton edge="start" color="inherit">
        <Menu />
      </IconButton>
      <Typography variant="h6">
        SeeSound
      </Typography>
      <Button color="inherit"></Button>
    </Toolbar>
  </AppBar>  
    </div>
  );
}

export default App;
