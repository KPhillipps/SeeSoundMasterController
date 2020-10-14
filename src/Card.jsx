import React from 'react';
import {Card, makeStyles, CardContent, Typography, CardActionArea, IconButton} from '@material-ui/core';
import {Image} from '@material-ui/icons';


const styles = makeStyles({
    card: {
         border: '2px solid #7C0303',
         alignSelf: 'normal',
         height: '60%',
         backgroundColor: '#1d1d1d',
         color: '#fff'
    }, input: {
        display: 'none',
        fontSize: 'large'
    },
    image: {
        color: '#7C0303'
    }
})

function AppCard(){

    const cardStyle = styles()
    let pictures = [];

    const onFileChange = (event) => {
        React.useState(pictures.push({selectedFile: event.target.files[0]}))
    }


    return (<Card className={cardStyle.card}>
        <CardContent>
            <Typography variant="h3">Upload</Typography>
            <Typography variant="body1">Select the images to be uploaded</Typography>
            <CardActionArea>
                <input className={cardStyle.input} id="icon-button-file" type="file" onChange={onFileChange}/>
                <label htmlFor="icon-button-file">
                    <Image className={cardStyle.image} fontSize='large'/>
                </label>
            </CardActionArea>
        </CardContent>
    </Card>)
}

export default AppCard;
