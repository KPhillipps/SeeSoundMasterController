import React from 'react';
import {Card, makeStyles, CardContent, Typography, CardActionArea} from '@material-ui/core';
import Image from '@material-ui/icons/Image';


const styles = makeStyles({
    card: {
         border: '2px solid #7C0303',
         alignSelf: 'normal',
         height: '60%',
         backgroundColor: '#1d1d1d',
         color: '#fff'
    }
})

function AppCard(){

    const cardStyle = styles()

    const [anchorEl, setAnchorEl] = React.useState(null)
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
  
      };
    const handleClose = () =>{
        setAnchorEl(null);
    }

    return (<Card className={cardStyle.card}>
        <CardContent onClick={handleClick}>
            <Typography variant="h3">Upload</Typography>
            <Typography variant="body1">Select the images to be uploaded</Typography>
            <CardActionArea><Image fontSize="large"  anchorEl={anchorEl} open={Boolean(anchorEl)}/></CardActionArea>
        </CardContent>
    </Card>)
}

export default AppCard;
