import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles'; // Import ThemeProvider and createTheme
import './App.css';
import Navbar from './components/NavbarH'; 
import Home from './components/pages/HomePage/home';
import Auth from './components/pages/Auth/Auth';
import Reports from './components/Reports/Reports'
import Reminder from './components/Reminder/Reminder';
import Dashboard from './components/Dashboard';
import Appointment from './components/Appointment';
import SignUp from './components/pages/Auth/SignUp';

const theme = createTheme(); // Create your theme instance

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
      
        <Routes>
          <Route path='/' element={<Home />} />
          
          <Route path='/Login' element={<Auth />} />
          <Route path='/signUp' element={<SignUp />} />
          <Route path="/reports" element={<Reports/>} />
          <Route path="/Reminder" element={<Reminder/>} />
          <Route path="/dashboard" element={<Dashboard/>} />
          <Route path="/Appointment" element={<Appointment />} />
          <Route path="/logOut" element={<Home />} />

        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
