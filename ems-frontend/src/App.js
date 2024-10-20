import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AppBar from './components/AppBar';
import HomePage from './components/HomePage'; 
import EmployeeForm from './components/EmployeeForm';
import GetEmployeeById from './components/GetEmployeeById';
import GetAllEmployees from './components/GetAllEmployees';
import UpdateEmployee from './components/UpdateEmployee';
import DeleteEmployee from './components/DeleteEmployee';

const App = () => {
  return (
    <Router>
      <AppBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/add-employee" element={<EmployeeForm />} />
        <Route path="/get-employee-by-id" element={<GetEmployeeById />} />
        <Route path="/get-all-employees" element={<GetAllEmployees />} />
        <Route path="/update-employee" element={<UpdateEmployee />} />
        <Route path="/delete-employee" element={<DeleteEmployee />} />
      </Routes>
    </Router>
  );
};

export default App;