import React from 'react';
import Box from '@mui/material/Box';
import { green, orange } from '@mui/material/colors';

import {
  Grid,
  Card,
  CardContent,
  Typography,
  Stack,
} from "@mui/material";

function InProgressAcademicInfo(props){
  const inProgress = props.inProgress;

  return(
    <Grid container item spacing={1} xs={12}>      
      {
          inProgress.map((oneProgress) => {
            return (
              <Grid container item key={oneProgress.id} spacing={1} xs={12} >
                <Grid container item  spacing={2} xs={12}>
                    <Grid item xs={4}>
                      <Box sx={{ color: "text.primary", justifyContent: "left"}}>
                        <Typography sx={{ fontSize: 12}}>
                          Universidad                      
                        </Typography>
                        <Typography sx={{ fontSize: 16, fontWeight: 'bold'}}>
                          { oneProgress.university }                    
                        </Typography>         
                      </Box>                    
                    </Grid>
                    <Grid item xs={4}>
                      <Box sx={{ color: "text.primary", justifyContent: "left"}}>
                        <Typography sx={{ fontSize: 12}}>
                          Carrera                      
                        </Typography>
                        <Typography sx={{ fontSize: 16, fontWeight: 'bold'}}>
                          { oneProgress.career }                    
                        </Typography>         
                      </Box>                    
                    </Grid>
                    <Grid item xs={4}>
                      <Box sx={{ color: "text.primary", justifyContent: "left"}}>
                        <Typography sx={{ fontSize: 12}}>
                          Matrícula                      
                        </Typography>
                        <Typography sx={{ fontSize: 16, fontWeight: 'bold'}}>
                          { oneProgress.enrollment }                    
                        </Typography>         
                      </Box>                    
                    </Grid>
                </Grid>
                <Grid container item  spacing={1} xs={12} m={1}></Grid>
                <Grid container item  spacing={2} xs={12}>
                <Grid item xs={4}>
                      <Box sx={{ color: "text.primary", justifyContent: "left"}}>
                        <Typography sx={{ fontSize: 12}}>
                          Provincia                     
                        </Typography>
                        <Typography sx={{ fontSize: 16, fontWeight: 'bold'}}>
                          { oneProgress.province }                    
                        </Typography>         
                      </Box>                    
                    </Grid>                   
                </Grid>    
                <Grid container item  spacing={1} xs={12} m={1}>
                </Grid>                                                     
              </Grid>
            );        
        })
      }
    </Grid>
    
  );

};

export default InProgressAcademicInfo;