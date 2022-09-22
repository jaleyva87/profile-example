import React, {useState, forwardRef} from 'react';
import Box from '@mui/material/Box';

import { Formik, Form, Field } from 'formik';
import {
  Grid,
  Card,
  CardContent,
  MenuItem,
  Select,
  CardActions,
  Button,
  FormControl,
  Typography,
  Stack,
} from "@mui/material";

//import * as Yup from "yup"
import { TextField } from "formik-mui"
import DatePicker from "react-datepicker";
import RoomOutlinedIcon  from '@mui/icons-material/RoomOutlined';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import { blue } from '@mui/material/colors';

import "react-datepicker/dist/react-datepicker.css";
import "./styles.css";

import CustomField from './CustomField';

function UserProfilePersonalData(props){

  //Data
  const initialValues = {
    cedula: props.user.cedula,
    firstName: props.user.firstName,
    lastName: props.user.lastName,
    birthday: props.user.birthday,
    gender: props.user.gender,
    email: props.user.email,
    province: props.user.province,
    sector: props.user.sector,
    address: props.user.address,
    movil: props.user.movil,
    password: props.user.password,
  }
  
  const [startDate, setStartDate] = useState(Date.parse(initialValues.birthday));

  const onSubmit = (values) => {
    console.log(values)
  };

    return (
      <Box >
        <Typography color="text.primary" sx={{ fontSize: 12, justifyContent: "left", fontWeight: 'bold'}}>
          DATOS PERSONALES
        </Typography>
            <Card>
            <Formik
              initialValues={initialValues}
              onSubmit={onSubmit}>
              {({ dirty, isValid, values, handleChange, handleBlur, setFieldValue }) => {
                return (
                  <Form>
                    <CardContent>
                      <Grid container item spacing={1} xs={12}>
                        <Grid container item spacing={3} xs={12}>
                            <Grid item xs={4}>
                              <Typography color="text.primary" sx={{ fontSize: 12, justifyContent: "left", fontWeight: 'bold'}}>
                                Cédula
                              </Typography>
                              <FormControl fullWidth>
                                <Select
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  value={values.cedula}
                                  name="cedula"
                                  size='small'
                                  sx={{ fontSize: 'absolute',
                                        borderRadius: 1.25,
                                        backgroundColor: '#f0f0f0',
                                        border: '2 solid #f0f0f0', 
                                      }}
                                  >
                                  <MenuItem value={values.cedula}>{values.cedula}</MenuItem>
                                </Select>                                 
                              </FormControl>
                            </Grid>
                            <Grid item xs={4}>
                              <Typography color="text.primary" sx={{ fontSize: 12, justifyContent: "left", fontWeight: 'bold'}}>
                                Nombres
                              </Typography>
                              <CustomField name={"firstName"} value={values.firstName}/>
                            </Grid>
                            <Grid item xs={4}>
                              <Typography color="text.primary" sx={{ fontSize: 12, justifyContent: "left", fontWeight: 'bold'}}>
                                Apellidos
                              </Typography>
                              <CustomField name={"lastName"} value={values.lastName}/>
                            </Grid>
                        </Grid>
                        <Grid container item spacing={1} xs={12} m={1}></Grid>
                        <Grid container item spacing={3} xs={12}>
                            <Grid item xs={4}>
                              <Typography color="text.primary" sx={{ fontSize: 12, justifyContent: "left", fontWeight: 'bold'}}>
                                Fecha de nacimiento
                              </Typography>
                                <DatePicker
                                  selected={startDate}
                                  name='birthday'
                                  onChange={(date) => {
                                    setFieldValue('birthday', setStartDate(Date.parse(date)));
                                  }}
                                  renderInput={(params) => <TextField {...params} />}
                                />
                            </Grid>  
                            <Grid item xs={4}>
                              <Typography color="text.primary" sx={{ fontSize: 12, justifyContent: "left", fontWeight: 'bold'}}>
                                Género
                              </Typography>
                              <CustomField name={"gender"} value={values.gender}/>
                            </Grid>  
                            <Grid item xs={4}>
                              <Typography color="text.primary" sx={{ fontSize: 12, justifyContent: "left", fontWeight: 'bold'}}>
                                  Correo electrónico
                              </Typography>
                              <CustomField name={"email"} value={values.email}/>
                            </Grid>
                        </Grid>
                        <Grid container item  spacing={1} xs={12} m={1}>
                        </Grid>
                        <Grid item container spacing={1} xs={12}>
                          <Grid item xs={4}>
                            <Stack direction="row">
                              <RoomOutlinedIcon sx={{ color: blue[900]}}/>      
                              <Typography color="#0D47A1" sx={{fontSize: 12, fontWeight: 'bold'}}>
                                DIRECCIÓN DE RESIDENCIA
                              </Typography>
                            </Stack>  
                          </Grid>
                        </Grid>    
                        <Grid container item  spacing={3} xs={12}>
                            <Grid item xs={4}>
                              <Typography color="text.primary" sx={{ fontSize: 12, justifyContent: "left", fontWeight: 'bold'}}>
                                 Provincia *
                              </Typography>
                              <CustomField name={"province"} value={values.province}/>
                            </Grid>
                            <Grid item xs={4}>
                              <Typography color="text.primary" sx={{ fontSize: 12, justifyContent: "left", fontWeight: 'bold'}}>
                                  Sector*
                              </Typography>
                              <CustomField name={"sector"} value={values.sector}/>
                            </Grid>
                            <Grid item xs={4}>
                              <Typography color="text.primary" sx={{ fontSize: 12, justifyContent: "left", fontWeight: 'bold'}}>
                                  Dirección*
                              </Typography>
                              <CustomField name={"address"} value={values.address}/>
                            </Grid>
                        </Grid>
                        <Grid item container spacing={3} xs={12}>
                          <Grid item xs={4}>
                            <Box>
                              <Typography color="text.primary" sx={{ fontSize: 12, justifyContent: "left", fontWeight: 'bold'}}>
                                Móvil
                              </Typography>
                              <CustomField name={"movil"} value={values.movil}/>
                            </Box>
                          </Grid>
                        </Grid>   
                        <Grid container item  spacing={1} xs={12} m={1}>
                        </Grid>
                        <Grid container item  spacing={1} xs={12}>
                          <Stack direction="row" spacing={1}>
                              <VisibilityOutlinedIcon sx={{ color: blue[900]}}/>      
                              <Typography color="#0D47A1" sx={{ m: -1, fontSize: 12, justifyContent: "left", fontWeight: 'bold'}}>
                                CONTRASEÑA
                              </Typography>
                          </Stack>
                        </Grid>   
                        <Grid item container spacing={3} xs={12}>
                            <Grid item xs={4}>
                              <Typography color="text.primary" sx={{ fontSize: 12, justifyContent: "left", fontWeight: 'bold'}}>
                                  Contraseña*
                              </Typography>
                              <CustomField name={"password"} type="password" value={values.password}/>
                            </Grid>
                            <Grid item xs={4}>
                              <Typography color="text.primary" sx={{ fontSize: 12, justifyContent: "left", fontWeight: 'bold'}}>
                                  Confirmar contraseña*
                              </Typography>
                              <CustomField name={"confpassword"} type="password" value={values.password}/>
                            </Grid>
                        </Grid>
                      </Grid>
                      </CardContent>
                      <CardActions>
                        <Grid container item spacing={1} xs={12} m={1}>
                          <Button
                            variant="contained"
                            color="primary"
                            type="Submit"
                            >
                            GUARDAR CAMBIOS
                          </Button>
                        </Grid>
                      </CardActions>
                    </Form>
                  )
                }}
              </Formik>
            </Card>
      </Box>  
    );
}

export default UserProfilePersonalData;