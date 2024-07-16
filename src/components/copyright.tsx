import * as React from 'react';
import Typography from '@mui/material/Typography';
import MuiLink from '@mui/material/Link';

export default function Copyright() {
  return (
    <p className='mb-20 font-extralight'>
      {"Copyright ©"}
        Nick Fraser
        {" "}
      {new Date().getFullYear()}.
    </p>
  );
}