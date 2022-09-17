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

function FinishedAcademicInfo(props){
  const finished = props.finished;

  return(
    <Grid container item spacing={1} xs={12}>      
      {
          finished.map((finishedStudy) => {
            return (
              <Grid container item key={finishedStudy.id} spacing={1} xs={12} >
                <Grid container item  spacing={2} xs={12}>
                    <Grid item xs={4}>
                      <Box sx={{ color: "text.primary", justifyContent: "left"}}>
                        <Typography sx={{ fontSize: 12}}>
                          Universidad                      
                        </Typography>
                        <Typography sx={{ fontSize: 16, fontWeight: 'bold'}}>
                          { finishedStudy.university }                    
                        </Typography>         
                      </Box>                    
                    </Grid>
                    <Grid item xs={4}>
                      <Box sx={{ color: "text.primary", justifyContent: "left"}}>
                        <Typography sx={{ fontSize: 12}}>
                          Carrera                      
                        </Typography>
                        <Typography sx={{ fontSize: 16, fontWeight: 'bold'}}>
                          { finishedStudy.career }                    
                        </Typography>         
                      </Box>                    
                    </Grid>
                    <Grid item xs={4}>
                      <Box sx={{ color: "text.primary", justifyContent: "left"}}>
                        <Typography sx={{ fontSize: 12}}>
                          Provincia                      
                        </Typography>
                        <Typography sx={{ fontSize: 16, fontWeight: 'bold'}}>
                          { finishedStudy.province }                    
                        </Typography>         
                      </Box>                    
                    </Grid>
                </Grid>
                <Grid container item  spacing={1} xs={12} m={1}></Grid>
                <Grid container item  spacing={2} xs={12}>
                <Grid item xs={4}>
                      <Box sx={{ color: "text.primary", justifyContent: "left"}}>
                        <Typography sx={{ fontSize: 12}}>
                          Tiempo de estudio                      
                        </Typography>
                        <Typography sx={{ fontSize: 16, fontWeight: 'bold'}}>
                          { finishedStudy.studyTime }                    
                        </Typography>         
                      </Box>                    
                    </Grid>
                    <Grid item xs={4}>
                      <Box sx={{ color: "text.primary", justifyContent: "left"}}>
                        <Typography sx={{ fontSize: 12}}>
                          Matrícula                      
                        </Typography>
                        <Typography sx={{ fontSize: 16, fontWeight: 'bold'}}>
                          { finishedStudy.enrollment }                    
                        </Typography>         
                      </Box>                    
                    </Grid>
                    <Grid item xs={4}>
                      <Box sx={{ color: "text.primary", justifyContent: "left"}}>
                        <Typography sx={{ fontSize: 12}}>
                          Mención de honor                      
                        </Typography>
                        <Typography sx={{ fontSize: 16, fontWeight: 'bold'}}>
                          { finishedStudy.mention }                    
                        </Typography>         
                      </Box>                    
                    </Grid>
                </Grid>    
                <Grid container item  spacing={1} xs={12} m={1}>
                </Grid>
                <Grid item container spacing={1} xs={12}>
                  <Grid item xs={4}>
                    <Box sx={{ color: "text.primary", justifyContent: "left"}}>
                      <Typography sx={{ fontSize: 12}}>
                        Graduado(a)                    
                      </Typography>
                      <Typography sx={{ fontSize: 16, fontWeight: 'bold'}}>
                        { finishedStudy.graduated }                    
                      </Typography>         
                    </Box>                    
                  </Grid>
                </Grid>                                          
              </Grid>
            );        
        })
      }
    </Grid>
    
  );

};

export default FinishedAcademicInfo;