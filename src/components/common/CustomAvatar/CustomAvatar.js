import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';

function CustomAvatar(props){
    
    return (
        <Stack direction="row" spacing={2}>
            <Avatar 
                alt={ props.user.firstName + ' ' + props.user.lastName } 
                src={ props.user.img.route }
                sx={{ width: props.user.img.width, height: props.user.img.height}}
                />
        </Stack>
    );
}

export default CustomAvatar;