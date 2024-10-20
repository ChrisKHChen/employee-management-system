import * as React from 'react';
import { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Button from '@mui/material/Button';

export default function GetAllEmployees() {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const response = await fetch('http://localhost:8080/employee/get'); // Update to your endpoint
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setEmployees(data);
      } catch (error) {
        console.error("Error fetching employees:", error);
      }
    };

    fetchEmployees();
  }, []);

  return (
    <Paper
      elevation={3} 
      sx={{ p: 4, mt: 2, maxWidth: '1200px', mx: 'auto' }} 
    >
      <Typography variant="h5" align="center" gutterBottom>
        All Employees
      </Typography>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell sx={{ width: '150px' }}>First Name</TableCell>
              <TableCell sx={{ width: '150px' }}>Middle Name</TableCell>
              <TableCell sx={{ width: '150px' }}>Last Name</TableCell>
              <TableCell sx={{ width: '100px' }}>Gender</TableCell>
              <TableCell sx={{ width: '150px' }}>Date of Birth</TableCell>
              <TableCell sx={{ width: '200px' }}>Email</TableCell>
              <TableCell sx={{ width: '150px' }}>Phone Number</TableCell>
              <TableCell sx={{ width: '150px' }}>Country</TableCell>
              <TableCell sx={{ width: '150px' }}>Position</TableCell>
              <TableCell sx={{ width: '150px' }}>Department</TableCell>
              <TableCell sx={{ width: '150px' }}>Hire Date</TableCell>
              <TableCell sx={{ width: '150px' }}>Contract End Date</TableCell>
              <TableCell sx={{ width: '150px' }}>Salary</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {employees.map((employee) => (
              <TableRow key={employee.id}>
                <TableCell>{employee.firstName}</TableCell>
                <TableCell>{employee.middleName}</TableCell>
                <TableCell>{employee.lastName}</TableCell>
                <TableCell>{employee.gender}</TableCell>
                <TableCell>{new Date(employee.dateOfBirth).toLocaleDateString()}</TableCell>
                <TableCell>{employee.email}</TableCell>
                <TableCell>{employee.phoneNumber}</TableCell>
                <TableCell>{employee.country}</TableCell>
                <TableCell>{employee.position}</TableCell>
                <TableCell>{employee.department}</TableCell>
                <TableCell>{new Date(employee.hireDate).toLocaleDateString()}</TableCell>
                <TableCell>{employee.contractEndDate ? new Date(employee.contractEndDate).toLocaleDateString() : '-'}</TableCell>
                <TableCell>${employee.salary}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Box sx={{ mt: 3, textAlign: 'center' }}>
        <Button variant="contained" color="primary" href="/">
          Back to Home
        </Button>
      </Box>
    </Paper>
  );
}
