

import React from 'react';

import { Box, Typography, Button } from '@material-ui/core';
import { NavLink } from 'react-router-dom';

export default function NotFound() {
  return (

        <Box textAlign="center" >
            <Typography variant='h1'>Page not Found 404</Typography>
            <NavLink to="/">
                <Button color="primary" variant='contained' size='large'>
                    Go Back to Hompage
                </Button>
            </NavLink>
        </Box>

    )
}
