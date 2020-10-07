import React from 'react'
import {Menu, MenuItem, Button, Typography} from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'


const buttonStyle = makeStyles({
    button: {
        color: '#FFF',
        borderColor: '#7C0303',
        borderWidth: '2px'

    }
})

function MainMenu(){
    const [anchorEl, setAnchorEl] = React.useState(null)
    const style = buttonStyle();
    const handleClick = (event) =>{
        setAnchorEl(event.currentTarget);
    }

    const handleClose = () => {
        setAnchorEl(null);
    }
    return (<div>

        <Button variant = 'outlined' className={style.button} onClick={handleClick}>
            <Typography variant= "h6"> SeeSound </Typography>
        </Button>
        <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
      </div>)
}

export default MainMenu;
