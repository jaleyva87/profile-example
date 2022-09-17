import AppBar from '@mui/material/AppBar';
import Stack from '@mui/material/Stack';
import {
    Toolbar,
    Box,
    Grid,
  } from '@mui/material';
import CustomMenuBar from '../CustomMenuBar';
import logo from '../../assets/images/logocompany.png'
import AdbIcon from '@mui/icons-material/Adb';

function CustomAppBar(props) {

  return (
      <Grid container item spacing={1} xs={12}>
        <AppBar position="static">
          <Toolbar variant="dense" style={{ backgroundColor: '#FAFAFA'}} >
            <Grid item xs={2}>
              <img src={logo} sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} alt="logo" />
            </Grid>
            <Grid item xs={8}>
            </Grid>
            <Grid item xs={2}>
              <Box style={{ float: 'right' }} >
                <CustomMenuBar user={props.user}/>
              </Box>
            </Grid>
          </Toolbar>
        </AppBar> 
      </Grid>
  );
}

export default CustomAppBar;
