import React from 'react';
import {Container, makeStyles}  from '@material-ui/core';
import AppCard from './Card'

const style = makeStyles({
  container: {
    backgroundColor: '#1d1d1d', 
    height: '100vh', 
    color: "#FFF",
    border: 'solid 10px #1d1d1d',
  },
})

function AppContainer(){
    const containerStyle = style();
    return (
        <Container maxWidth="xl"  className={containerStyle.container}>
          <AppCard component="div"/>
        </Container>
    )
}

export default AppContainer;

