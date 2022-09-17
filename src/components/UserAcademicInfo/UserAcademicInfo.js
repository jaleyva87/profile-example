import React from 'react';
import Box from '@mui/material/Box';
import CircleIcon from '@mui/icons-material/Circle';
import { green, orange } from '@mui/material/colors';

import {
  Grid,
  Card,
  CardContent,
  Typography,
  Stack,
} from "@mui/material";
import FinishedAcademicInfo from './FinishedAcademicInfo';
import InProgressAcademicInfo from './InProgressAcademicInfo';

function UserAcademicInfo(props){
  const { inProgress, finished } = props.user;

  return (
    //<Grid container item spacing={1} xs={12}>
    <Box flexGrow={1}>
      <Typography color="text.primary" sx={{ fontSize: 12, justifyContent: "left", fontWeight: 'bold'}}>
        INFORMACIÓN ACADÉMICA
      </Typography>     
        <Card>
        <CardContent>
          <Grid container item spacing={1} xs={12}>
            <Grid container item spacing={2} xs={12}>
              <Grid  container item  xs={12}>
                <CircleIcon sx={{ color: orange[900]}}/>      
                  <Typography color="#0D47A1" sx={{ fontSize: 12, fontWeight: 'bold'}}>
                      EN PROCESO
                  </Typography>
              </Grid>
              <InProgressAcademicInfo inProgress={inProgress}/>
            </Grid>       
            <Grid container item spacing={2} xs={12}>
              <Grid  container item  xs={12}>
                <CircleIcon sx={{ color: green[900]}}/>      
                  <Typography color="#0D47A1" sx={{ fontSize: 12, fontWeight: 'bold'}}>
                      CULMINADO
                  </Typography>
              </Grid>
              <FinishedAcademicInfo finished={finished}/>
            </Grid>        
          </Grid>
        </CardContent>                     
      </Card>
    </Box>
  );
}

export default UserAcademicInfo;