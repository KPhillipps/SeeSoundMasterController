import React from 'react';
import {Container, Typography, makeStyles}  from '@material-ui/core';


const style = makeStyles({
  typography: {
    backgroundColor: '#1d1d1d', 
    height: '100vh', 
    color: "#FFF",
    borderLeftColor: '#7C0303',
    borderRightColor: '#7C0303',
    border: 'solid 2px',
    borderBottomColor: '#1d1d1d',
    borderTopColor: '#1d1d1d'
  },
  container: {
    background: '#7C0303'
  }

})

function AppContainer(){
    const containerStyle = style();
    return (
        <Container maxWidth="bg"  className={containerStyle.container}>
          <Typography component="div" className={containerStyle.typography}/>
        </Container>

    )
}

export default AppContainer;

