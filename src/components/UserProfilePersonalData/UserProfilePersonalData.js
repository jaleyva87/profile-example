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

function UserProfilePersonalData(props){


  //Data
  const initialValues = {
    cedula: props.user.cedula,
    firstName: props.user.name,
    lastName: props.user.name,
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
                        <Grid container item spacing={2} xs={12}>
                            <Grid item xs={4}>
                              <Typography color="text.primary" sx={{ fontSize: 12, justifyContent: "left", fontWeight: 'bold'}}>
                                Cédula
                              </Typography>
                              <FormControl fullWidth variant="outlined">
                                <Select
                                  variant="filled" 
                                  labelId="demo-simple-select-outlined-label"
                                  id="demo-simple-select-outlined"
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  value={values.cedula}
                                  name="cedula"
                                  size="small" >
                                  <MenuItem value={values.cedula}>{values.cedula}</MenuItem>
                                </Select>                                 
                              </FormControl>
                            </Grid>
                            <Grid item xs={4}>
                              <Typography color="text.primary" sx={{ fontSize: 12, justifyContent: "left", fontWeight: 'bold'}}>
                                Nombres
                              </Typography>
                              <Field
                                variant="filled"
                                fullWidth
                                name="name"
                                value={values.firstName}
                                component={TextField}
                                size="small"
                              />
                            </Grid>
                            <Grid item xs={4}>
                              <Typography color="text.primary" sx={{ fontSize: 12, justifyContent: "left", fontWeight: 'bold'}}>
                                Apellidos
                              </Typography>
                              <Field
                                variant="filled"
                                fullWidth
                                name="lastname"
                                value={values.lastName}
                                component={TextField}
                                size="small"
                              />
                            </Grid>
                        </Grid>
                        <Grid container item spacing={1} xs={12} m={1}></Grid>
                        <Grid container item spacing={2} xs={12}>
                            <Grid item xs={4}>
                              <Typography color="text.primary" sx={{ fontSize: 12, justifyContent: "left", fontWeight: 'bold'}}>
                                Fecha de nacimiento
                              </Typography>
                              <DatePicker 
                                variant="filled"
                                fullWidth
                                selected={startDate}
                                name='birthday'
                                onChange={(date) => {
                                   setFieldValue('birthday', setStartDate(Date.parse(date)));
                                  }}
                                  renderInput={(params) => <TextField variant="filled" fullWidth {...params} />}
                                />
                            </Grid>  
                            <Grid item xs={4}>
                              <Typography color="text.primary" sx={{ fontSize: 12, justifyContent: "left", fontWeight: 'bold'}}>
                                Género
                              </Typography>
                              <Field
                                variant="filled"
                                fullWidth
                                name="gender"
                                size="small" 
                                value={values.gender}
                                component={TextField}
                              />
                            </Grid>  
                            <Grid item xs={4}>
                              <Typography color="text.primary" sx={{ fontSize: 12, justifyContent: "left", fontWeight: 'bold'}}>
                                  Correo electrónico
                              </Typography>
                              <Field
                                variant="filled"
                                fullWidth
                                name="email"
                                value={values.email}
                                component={TextField}
                                size="small" 
                              />
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
                        <Grid container item  spacing={2} xs={12}>
                            <Grid item xs={4}>
                              <Typography color="text.primary" sx={{ fontSize: 12, justifyContent: "left", fontWeight: 'bold'}}>
                                 Provincia *
                              </Typography>
                              <Field
                                variant="filled"
                                fullWidth
                                name="province"
                                value={values.province}
                                component={TextField}
                                size="small" 
                              />
                            </Grid>
                            <Grid item xs={4}>
                              <Typography color="text.primary" sx={{ fontSize: 12, justifyContent: "left", fontWeight: 'bold'}}>
                                  Sector*
                              </Typography>
                              <Field
                                variant="filled"
                                fullWidth
                                name="sector"
                                value={values.sector}
                                component={TextField}
                                size="small" 
                              />
                            </Grid>
                            <Grid item xs={4}>
                              <Typography color="text.primary" sx={{ fontSize: 12, justifyContent: "left", fontWeight: 'bold'}}>
                                  Dirección*
                              </Typography>
                              <Field
                                variant="filled"
                                fullWidth
                                name="address"
                                value={values.address}
                                component={TextField}
                                size="small" 
                              />
                            </Grid>
                        </Grid>
                        <Grid item container spacing={1} xs={12}>
                          <Grid item xs={4}>
                            <Box>
                              <Typography color="text.primary" sx={{ fontSize: 12, justifyContent: "left", fontWeight: 'bold'}}>
                                Móvil
                              </Typography>
                              <Field
                                variant="filled"
                                fullWidth
                                name="movil"
                                value={values.movil}
                                component={TextField}
                                size="small" 
                              />
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
                        <Grid item container spacing={2} xs={12}>
                            <Grid item xs={4}>
                              <Typography color="text.primary" sx={{ fontSize: 12, justifyContent: "left", fontWeight: 'bold'}}>
                                  Contraseña*
                              </Typography>
                              <Field
                                variant="filled"
                                fullWidth
                                name="password"
                                type="password"
                                value={values.password}
                                component={TextField}
                                size="small" 
                              />
                            </Grid>
                            <Grid item xs={4}>
                              <Typography color="text.primary" sx={{ fontSize: 12, justifyContent: "left", fontWeight: 'bold'}}>
                                  Confirmar contraseña*
                              </Typography>
                              <Field
                                variant="filled"
                                fullWidth
                                name="confpassword"
                                type="password"
                                value={values.password}
                                component={TextField}
                                size="small" 
                              />
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