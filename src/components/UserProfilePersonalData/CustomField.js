import * as React from 'react';
import { styled } from '@mui/system';
import { Field } from 'formik';
import { TextField } from "formik-mui"

const FieldStyled = styled(Field)(({ theme }) => ({
  fontSize: 'absolute',
  borderRadius: 4.25,
  backgroundColor: '#f0f0f0',
  border: '2 solid #f0f0f0',
  width: '100%',
}));

export default function CustomField(props) {
  const { name, type="text", size="small", value, component=TextField } = props;   
  return ( 
          <FieldStyled 
              name={name}
              type={type}
              size={size}
              value={value}     
              component={component}
          />
          );
}