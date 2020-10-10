import React from 'react';
import {Card, makeStyles} from '@material-ui/core';

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

    return (<Card className={cardStyle.card}>

    </Card>)

}

export default AppCard;
