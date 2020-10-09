import React from 'react'
import {Menu, MenuItem, Button, Typography} from '@material-ui/core'
import { makeStyles, withStyles } from '@material-ui/styles'


const buttonStyle = makeStyles({
    button: {
        color: '#FFF',
        borderColor: '#7C0303',
        borderWidth: '2px'

    }
})

const StyledMenu = withStyles({
        paper: {
        border: '2px solid #7C0303',
        background: '#1d1d1d',
        color: '#FFF'
        },
    })((props)=>(
        <Menu
            getContentAnchorEl={null}
            anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
            }}
            transformOrigin={{
            vertical: 'top',
            horizontal: 'center',
            }
            
        }
            {...props}
      />
));

function MainMenu(){
    const [anchorEl, setAnchorEl] = React.useState(null)
    const style = buttonStyle();
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
  
      };
    const handleClose = () =>{
        setAnchorEl(null);
    }

    return (<div>

         
        <Button variant = 'outlined' className={style.button} onClick={handleClick}>
            <Typography variant= "h6"> SeeSound </Typography>
        </Button>
    <StyledMenu
        id="customized-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem>
            Select Image
        </MenuItem>
        <MenuItem>
         Upload Image
        </MenuItem>
        <MenuItem>
         Some other option
        </MenuItem>
      </StyledMenu>

      </div>)
}

export default MainMenu;
