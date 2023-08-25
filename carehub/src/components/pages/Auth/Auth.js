import React from 'react';
import { TextField, Button, Container, Grid, Typography } from '@mui/material';
import useStyles from './Styles';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';

// import './Auth.css';

const Auth = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here (if needed)
    console.log('Form submitted');
  };
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:3000/api/v1/auth/login', { email, password });
      // Successful login logic (e.g., save token, redirect)
      const { token, user } = response.data;
      localStorage.setItem('token', token);
      localStorage.setItem('userData', JSON.stringify(user));
      navigate('/dashboard');
      alert('Login successful:', response.data.user);
      

    } catch (error) {
      if (error.response) {
        alert(error.response.data.message); // Show error message in alert
      } else {
        alert('An error occurred'); // Fallback error message
      }
    }
  };


  return (
    <div className={classes.pageContainer}>
    <div className={classes.background}></div>
    <Container maxWidth="sm" className={classes.container}>
      <Typography variant="h4" gutterBottom>
        Login
      </Typography>
      <form className={classes.form} onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              label="Email"
              variant="outlined"
              fullWidth
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Password"
              variant="outlined"
              fullWidth
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              required
            />
          </Grid>
          <Grid item xs={12}>
              <Button className={classes.submitButton} variant="contained" color="primary"  type="submit" onClick={handleLogin}>
              Login
              </Button>
              
            </Grid>
              <Link to='/signUp' className='btn-link'>
                <Button className={classes.submitButton} variant="contained" color="primary" type="submit">
                  Sign Up
                </Button></Link>

        </Grid>
      </form>
    </Container>
    </div>
  );
};

export default Auth;
