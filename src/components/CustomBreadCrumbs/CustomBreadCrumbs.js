import * as React from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

function handleClick(event) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}

function CustomBreadCrumbs() {
  const breadcrumbs = [
    <Link underline="hover" key="1" color="inherit" href="/" onClick={handleClick}>
      SOLICITUD
    </Link>,
    <Typography key="2" color="text.primary" sx={{ fontSize: 12 }}>
      PERFIL
    </Typography>,
  ];

  return (
    <Stack spacing={1} >
      <Breadcrumbs separator="›" aria-label="breadcrumb" sx={{ fontSize: 12 }}>
        {breadcrumbs}
      </Breadcrumbs>
    </Stack>
  );
}

export default CustomBreadCrumbs;