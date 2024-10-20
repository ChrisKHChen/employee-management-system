import * as React from 'react';
import { useState } from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';

export default function GetEmployeeById() {
  const [employeeId, setEmployeeId] = useState('');
  const [employeeData, setEmployeeData] = useState(null);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setEmployeeId(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); 
    setError(null); 

    try {
      const response = await fetch(`http://localhost:8080/employee/get/${employeeId}`);

      if (!response.ok) {
        throw new Error('Employee not found');
      }

      const data = await response.json();
      setEmployeeData(data); 
    } catch (err) {
      setError(err.message); 
      setEmployeeData(null); 
    }
  };

  return (
    <Paper
      elevation={3}
      sx={{ p: 4, mt: 2, maxWidth: '600px', mx: 'auto' }}
    >
      <Typography variant="h5" align="center" gutterBottom>
        Get Employee by ID
      </Typography>

      <Divider sx={{ my: 2 }} />

      <form onSubmit={handleSubmit}>
        <TextField
          label="Employee ID"
          value={employeeId}
          onChange={handleChange}
          fullWidth
          variant="outlined"
          required
        />
        <Box sx={{ mt: 2, display: 'flex', justifyContent: 'center', gap: 2 }}>
          <Button type="submit" variant="contained" color="primary">
            Search
          </Button>
          <Button variant="outlined" color="secondary" href="/">
            Cancel
          </Button>
        </Box>
      </form>

      {error && (
        <Typography color="error" align="center" sx={{ mt: 2 }}>
          {error}
        </Typography>
      )}

      {employeeData && (
        <Box sx={{ mt: 4 }}>
          <Typography variant="h6" gutterBottom>
            Employee Details
          </Typography>
          <Divider sx={{ mb: 2 }} />
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr>
                <th style={{ border: '1px solid black', padding: '8px' }}>Field</th>
                <th style={{ border: '1px solid black', padding: '8px' }}>Value</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{ border: '1px solid black', padding: '8px' }}>First Name</td>
                <td style={{ border: '1px solid black', padding: '8px' }}>{employeeData.firstName}</td>
              </tr>
              <tr>
                <td style={{ border: '1px solid black', padding: '8px' }}>Middle Name</td>
                <td style={{ border: '1px solid black', padding: '8px' }}>{employeeData.middleName}</td>
              </tr>
              <tr>
                <td style={{ border: '1px solid black', padding: '8px' }}>Last Name</td>
                <td style={{ border: '1px solid black', padding: '8px' }}>{employeeData.lastName}</td>
              </tr>
              <tr>
                <td style={{ border: '1px solid black', padding: '8px' }}>Gender</td>
                <td style={{ border: '1px solid black', padding: '8px' }}>{employeeData.gender}</td>
              </tr>
              <tr>
                <td style={{ border: '1px solid black', padding: '8px' }}>Date of Birth</td>
                <td style={{ border: '1px solid black', padding: '8px' }}>{employeeData.dateOfBirth}</td>
              </tr>
              <tr>
                <td style={{ border: '1px solid black', padding: '8px' }}>Email</td>
                <td style={{ border: '1px solid black', padding: '8px' }}>{employeeData.email}</td>
              </tr>
              <tr>
                <td style={{ border: '1px solid black', padding: '8px' }}>Phone Number</td>
                <td style={{ border: '1px solid black', padding: '8px' }}>{employeeData.phoneNumber}</td>
              </tr>
              <tr>
                <td style={{ border: '1px solid black', padding: '8px' }}>Country</td>
                <td style={{ border: '1px solid black', padding: '8px' }}>{employeeData.country}</td>
              </tr>
              <tr>
                <td style={{ border: '1px solid black', padding: '8px' }}>Position</td>
                <td style={{ border: '1px solid black', padding: '8px' }}>{employeeData.position}</td>
              </tr>
              <tr>
                <td style={{ border: '1px solid black', padding: '8px' }}>Department</td>
                <td style={{ border: '1px solid black', padding: '8px' }}>{employeeData.department}</td>
              </tr>
              <tr>
                <td style={{ border: '1px solid black', padding: '8px' }}>Hire Date</td>
                <td style={{ border: '1px solid black', padding: '8px' }}>{employeeData.hireDate}</td>
              </tr>
              <tr>
                <td style={{ border: '1px solid black', padding: '8px' }}>Contract End Date</td>
                <td style={{ border: '1px solid black', padding: '8px' }}>{employeeData.contractEndDate}</td>
              </tr>
              <tr>
                <td style={{ border: '1px solid black', padding: '8px' }}>Salary</td>
                <td style={{ border: '1px solid black', padding: '8px' }}>${employeeData.salary}</td>
              </tr>
            </tbody>
          </table>
        </Box>
      )}
    </Paper>
  );
}
