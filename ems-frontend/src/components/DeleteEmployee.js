import * as React from 'react';
import { useState } from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';

export default function DeleteEmployee() {
  const [employeeId, setEmployeeId] = useState('');
  const [message, setMessage] = useState(null);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setEmployeeId(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); 
    setError(null);
    setMessage(null); 

    try {
      const response = await fetch(`http://localhost:8080/employee/delete/${employeeId}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error('Failed to delete employee');
      }

      setMessage(`Employee with ID ${employeeId} has been deleted.`);
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
        Delete Employee
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
          <Button type="submit" variant="contained" color="error">
            Delete
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

      {message && (
        <Typography color="success" align="center" sx={{ mt: 2 }}>
          {message}
        </Typography>
      )}
    </Paper>
  );
}