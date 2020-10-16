import React, {useState} from 'react';
import {Card, makeStyles, CardContent, Typography} from '@material-ui/core';
import {Image, } from '@material-ui/icons';


const styles = makeStyles({
    card: {
         border: '2px solid #7C0303',
         alignSelf: 'normal',
         height: '60%',
         backgroundColor: '#1d1d1d',
         color: '#fff'
    }, input: {
        opacity: 0,
        position: 'absolute',
        height: 100,
        width: 100

      
    },
    image: {
        color: '#7C0303',
        height: 100,
        width: 100
    },
    image2: {
        position: 'relative bottom'
    }
})


function FileUpload() {

    const inputStyle = styles()

    const [file, setFile] = useState("")
    function handleUpload(event) {
        setFile(event.target.files[0]);
    }

    return (<div>
        <input type="file" onChange={handleUpload} className={inputStyle.input}/>
            <Image className={inputStyle.image}/>
            {file && <img className={inputStyle.image2} src={URL.createObjectURL(file)}/>}
    </div>)
}


function AppCard(){

    const cardStyle = styles()


    return (<Card className={cardStyle.card}>
        <CardContent>
            <Typography variant="h3">Upload</Typography>
            <Typography variant="body1">Select the images to be uploaded</Typography>
            <FileUpload/>
        </CardContent>
    </Card>)
}

export default AppCard;
