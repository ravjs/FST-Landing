import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';



export default function MyNavbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{ background: '#2E3B55' }}>
        <Toolbar>
           <Button color="inherit"  xl={{flexGrow:2}} href="/">Home</Button>
          <Button color="inherit" href="/admin">About</Button>
          <Button color="inherit" href="/login">Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
