import React from 'react';
import {Container, Typography, makeStyles}  from '@material-ui/core';


const style = makeStyles({
  container: {
    backgroundColor: '#1d1d1d', height: '100vh', color: "#FFF"
  }
})

function AppContainer(){
    const containerStyle = style();
    return (
        <Container maxWidth={false}  >
          <Typography component="div" className={containerStyle.container}/>
        </Container>

    )
}

export default AppContainer;

{/* */}
