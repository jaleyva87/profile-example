import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import {
  CustomAppBar,
  CustomBreadCrumbs,
  CustomProfileAvatar,
  UserProfilePersonalData,
  UserAcademicInfo,
} from '../../components';

import {
  Card
} from '@mui/material';

function UserProfileScreen() {

  const user = {
    firstName: 'Jhone',
    lastName: 'Doe',
    cedula: '001-0000000-1',
    img: {
      route: '',
      width: 24,
      height: 24,
    },
    birthday: '02/01/2003',
    gender: 'Masculino',
    email: 'correo@ejemplo.com',
    province: 'Santo Domingo',
    sector: 'Santo Domingo Guzmán',
    address: '27 de febrero #180',
    movil: '809-220-1111',
    password: 'password',
    inProgress: [
      {
        id: 1,
        university: 'APEC - Universidad',
        career: 'Educación',
        enrollment: '2016-894126416',
        province: 'Santo Domingo',
      },       
    ],
    finished: [
      {
        id: 1,
        university: 'UASD - Universidad',
        career: 'Contabilidad',
        province: 'Santo Domingo',
        studyTime: '2016-2020',
        enrollment: '2016-894126416',
        mention: 'Bueno',
        graduated: '28/08/2020',
      },
      
    ],
  }
  
  const modifiedUser = {
    ...user,
    img: {
      route: user.img.route,
      width: 54,
      height: 54,
    }
  }
  
  return (
    <Box sx={{ flexGrow: 1 }} m={1} pt={1}>
      <Card variant="outlined" sx={{borderRadius: 0, backgroundColor: '#F5F5F5'}}>
        <Grid container spacing={1}>
              <Grid container item spacing={1} xs={12}>
                <CustomAppBar user={user}/>
              </Grid>
              <Grid container item spacing={1} ml={8} mt={1}>
                  <CustomBreadCrumbs/>
              </Grid>
              <Grid container item spacing={1} justifyContent="center">
                  <CustomProfileAvatar user={modifiedUser}/>
              </Grid>
              <Grid container item justifyContent="center" spacing={1} xs={12} mr={8} ml={8} mt={2}>
                <UserProfilePersonalData user={user}/>
              </Grid>
              <Grid container item justifyContent="center" spacing={1} xs={12} mr={8} ml={8} mt={2} mb={2}>
                <UserAcademicInfo user={user}/>
              </Grid>
        </Grid>
      </Card>
    </Box>
  );
}

export default UserProfileScreen;
