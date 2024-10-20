import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom'; 

export default function EmployeeForm() {
  const navigate = useNavigate(); 
  const [formData, setFormData] = React.useState({
    firstName: '',
    middleName: '',
    lastName: '',
    gender: '',
    dateOfBirth: '',
    email: '',
    phoneNumber: '',
    country: '',
    position: '',
    department: '',
    hireDate: '',
    contractEndDate: '',
    salary: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:8080/employee/add', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData), 
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json(); 

      console.log("New Employee Added:", data); 
      alert("New Employee Added!"); 

      setFormData({
        firstName: '',
        middleName: '',
        lastName: '',
        gender: '',
        dateOfBirth: '',
        email: '',
        phoneNumber: '',
        country: '',
        position: '',
        department: '',
        hireDate: '',
        contractEndDate: '',
        salary: '',
      });
    } catch (error) {
      console.error("Error adding employee:", error); 
      alert("Failed to add employee. Please try again.");
    }
  };

  return (
    <Paper
      elevation={3} 
      sx={{ p: 4, mt: 2, maxWidth: '800px', mx: 'auto' }}
    >
      <Typography variant="h5" align="center" gutterBottom>
        Add Employee
      </Typography>

      <Divider sx={{ my: 2 }} />

      <form onSubmit={handleSubmit}>
        {/* Personal Information Section */}
        <Typography variant="h6" gutterBottom>
          Personal Information
        </Typography>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <TextField
                label="First Name"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                fullWidth
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Last Name"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                fullWidth
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Middle Name"
                name="middleName"
                value={formData.middleName}
                onChange={handleChange}
                fullWidth
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Gender"
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                fullWidth
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Date of Birth"
                name="dateOfBirth"
                type="date"
                value={formData.dateOfBirth}
                onChange={handleChange}
                fullWidth
                InputLabelProps={{ shrink: true }}
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                fullWidth
                variant="outlined"
              />
            </Grid>
          </Grid>
        </Box>

        <Divider sx={{ my: 3 }} />

        {/* Contact Information Section */}
        <Typography variant="h6" gutterBottom>
          Contact Information
        </Typography>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Phone Number"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                fullWidth
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Country"
                name="country"
                value={formData.country}
                onChange={handleChange}
                fullWidth
                variant="outlined"
              />
            </Grid>
          </Grid>
        </Box>

        <Divider sx={{ my: 3 }} />

        {/* Job Details Section */}
        <Typography variant="h6" gutterBottom>
          Job Details
        </Typography>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Position"
                name="position"
                value={formData.position}
                onChange={handleChange}
                fullWidth
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Department"
                name="department"
                value={formData.department}
                onChange={handleChange}
                fullWidth
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Hire Date"
                name="hireDate"
                type="date"
                value={formData.hireDate}
                onChange={handleChange}
                fullWidth
                InputLabelProps={{ shrink: true }}
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Contract End Date"
                name="contractEndDate"
                type="date"
                value={formData.contractEndDate}
                onChange={handleChange}
                fullWidth
                InputLabelProps={{ shrink: true }}
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth variant="outlined">
                <InputLabel htmlFor="salary">Salary</InputLabel>
                <OutlinedInput
                  id="salary"
                  name="salary"
                  value={formData.salary}
                  onChange={handleChange}
                  startAdornment={<InputAdornment position="start">$</InputAdornment>}
                  label="Salary"
                  type="number"
                />
              </FormControl>
            </Grid>
          </Grid>
        </Box>

        <Box sx={{ mt: 3, textAlign: 'center' }}>
          <Button type="submit" variant="contained" color="primary" sx={{ mr: 2 }}>
            Save Employee
          </Button>
          <Button variant="outlined" onClick={() => navigate('/')}>
            Cancel
          </Button>
        </Box>
      </form>
    </Paper>
  );
}
