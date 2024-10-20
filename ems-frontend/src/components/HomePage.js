// src/components/HomePage.js
import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <Box sx={{ textAlign: 'center', mt: 5 }}>
      <Typography variant="h4" gutterBottom>
      </Typography>
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}>
        <Button 
          variant="contained" 
          color="primary" 
          component={Link} 
          to="/add-employee" 
          sx={{ width: '300px' }} // Set a fixed width for all buttons
        >
          Add Employee
        </Button>
        <Button 
          variant="contained" 
          color="primary" 
          component={Link} 
          to="/get-employee-by-id" 
          sx={{ width: '300px' }} // Set a fixed width for all buttons
        >
          Get Employee by ID
        </Button>
        <Button 
          variant="contained" 
          color="primary" 
          component={Link} 
          to="/get-all-employees" 
          sx={{ width: '300px' }} // Set a fixed width for all buttons
        >
          Get All Employees
        </Button>
        <Button 
          variant="contained" 
          color="primary" 
          component={Link} 
          to="/update-employee" 
          sx={{ width: '300px' }} // Set a fixed width for all buttons
        >
          Update Employee
        </Button>
        <Button 
          variant="contained" 
          color="primary" 
          component={Link} 
          to="/delete-employee" 
          sx={{ width: '300px' }} // Set a fixed width for all buttons
        >
          Delete Employee
        </Button>
      </Box>
    </Box>
  );
};

export default HomePage;
