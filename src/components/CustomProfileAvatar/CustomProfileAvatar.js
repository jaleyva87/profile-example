import { 
    Box,
    Avatar,
    Typography,
    Stack,
} from "@mui/material";
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import { CustomAvatar } from "../common";


function CustomProfileAvatar(props){
    return (
        <Stack direction="column" alignItems="center" >
            {
                props.user?.img.route === ''
                ?
                ( 
                    <Avatar sx={{width: props.user.img.width, height: props.user.img.height, backgroundColor: '#FAFAFA', color: "black"}}> 
                        <AccountCircleOutlinedIcon sx={{ fontSize: props.user.img.width }}/>
                    </Avatar>
                
                )
                :
                (
                    <CustomAvatar user={props.user}/> 
                )  
            }
            <Typography color="text.primary" sx={{ fontSize: 16, textTransform: "uppercase" }}>
              {props.user.name}
            </Typography>
            <Typography color="text.primary" sx={{ fontSize: 12, textTransform: "uppercase" }}>
              {props.user.cedula}
            </Typography>
        </Stack>
    );
}

export default CustomProfileAvatar;