
import CustomAvatar from '../common/CustomAvatar';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import {
    Avatar,
    Button,
    Typography,
  } from '@mui/material';

function CustomMenuBar(props){

    return (
        <Button variant="outlined" 
            startIcon=
            { 
              props.user?.img.route === ''
              ?
              (
                <Avatar sx={{ width: 24, height: 24, backgroundColor: '#FAFAFA', color: "black"}}> 
                  <AccountCircleIcon/>
                </Avatar>
              
              )
              :
              (
                <CustomAvatar user={props.user}/> 
              )  
            }    
            endIcon={<KeyboardArrowDownIcon />}
            style={{ border:0, textTransform: "none" }}                    
        >
        { props.user.name }
        </Button>
    );
}

export default CustomMenuBar;