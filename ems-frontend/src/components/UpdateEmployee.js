import * as React from 'react';
import { useState } from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';

export default function UpdateEmployee() {
  const [employeeId, setEmployeeId] = useState('');
  const [employeeData, setEmployeeData] = useState(null);
  const [error, setError] = useState(null);
  const [message, setMessage] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmployeeData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleFetchEmployee = async (e) => {
    e.preventDefault(); 
    setError(null);
    setMessage(null); 

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

  const handleSubmit = async (e) => {
    e.preventDefault(); 
    setError(null); 
    setMessage(null); 

    try {
      const response = await fetch(`http://localhost:8080/employee/update/${employeeId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(employeeData),
      });

      if (!response.ok) {
        throw new Error('Failed to update employee');
      }

      setMessage(`Employee with ID ${employeeId} has been updated.`);
    } catch (err) {
      setError(err.message); 
    }
  };

  return (
    <Paper
      elevation={3}
      sx={{ p: 4, mt: 2, maxWidth: '600px', mx: 'auto' }}
    >
      <Typography variant="h5" align="center" gutterBottom>
        Update Employee
      </Typography>

      <Divider sx={{ my: 2 }} />

      <form onSubmit={handleFetchEmployee}>
        <TextField
          label="Employee ID"
          value={employeeId}
          onChange={(e) => setEmployeeId(e.target.value)}
          fullWidth
          variant="outlined"
          required
        />
        <Box sx={{ mt: 2, textAlign: 'center' }}>
          <Button type="submit" variant="contained" color="primary">
            Search
          </Button>
          <Button
            variant="outlined"
            color="secondary"
            href="/" 
            sx={{ ml: 2 }} 
          >
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
        <>
          <Divider sx={{ my: 2 }} />
          <form onSubmit={handleSubmit}>
            <Box sx={{ mt: 2 }}>
              {Object.keys(employeeData).map((key) => (
                <TextField
                  key={key}
                  name={key}
                  label={key.charAt(0).toUpperCase() + key.slice(1)}
                  value={employeeData[key]}
                  onChange={handleChange}
                  fullWidth
                  variant="outlined"
                  sx={{ mb: 2 }}
                />
              ))}
              <Box sx={{ textAlign: 'center', mt: 2 }}>
                <Button type="submit" variant="contained" color="success">
                  Search
                </Button>
                <Button
                  variant="outlined"
                  color="secondary"
                  href="/" 
                  sx={{ ml: 2 }} 
                >
                  Cancel
                </Button>
              </Box>
            </Box>
          </form>
          {message && (
            <Typography color="success" align="center" sx={{ mt: 2 }}>
              {message}
            </Typography>
          )}
        </>
      )}
    </Paper>
  );
}
