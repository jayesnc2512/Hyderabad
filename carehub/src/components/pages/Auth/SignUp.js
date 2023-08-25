import React from 'react';
import { TextField, Button, Container, Grid, Typography } from '@mui/material';
import useStyles from './Styles';
import  { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import './Auth.css';

const SignUp = () => {
    const classes = useStyles();
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission here (if needed)
        console.log('Form submitted');
    };
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');


    const handleSignup = async () => {
        try {
            const response = await axios.post('http://localhost:3000/api/v1/auth/register', { name, password, email, phone });
            // Successful signup logic (e.g., show success message, redirect)
            navigate('/login');
            alert('Signup successful, Please login to Continue', response.data.user);
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
                    SignUp
                </Typography>
                <form className={classes.form} onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <TextField
                                label="Name"
                                variant="outlined"
                                fullWidth
                                required
                                value={name}
                                onChange={(e) => setName(e.target.value)} 
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                label="Email"
                                variant="outlined"
                                fullWidth
                                type="email"
                                required
                                value={email} onChange={(e) => setEmail(e.target.value)} />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                label="Password"
                                variant="outlined"
                                fullWidth
                                type="password"
                                required
                                value={password} onChange={(e) => setPassword(e.target.value)}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                label="Phone No."
                                variant="outlined"
                                fullWidth
                                type="phone"
                                required
                                value={phone} onChange={(e) => setPhone(e.target.value)}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Link to='/' aria-current="page">
                            <Button className={classes.submitButton} variant="contained" color="primary" type="submit" onClick={handleSignup}>
                                SignUp
                                </Button>
                                </Link>
                        </Grid>
                    </Grid>
                </form>
            </Container>
        </div>
    );
};

export default SignUp;
