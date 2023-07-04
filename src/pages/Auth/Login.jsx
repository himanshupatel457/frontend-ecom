


import React, { useState } from 'react';
import Layout from '../../components/Layout/Layout';
import { Box, Container, TextField, Typography, Grid, Button } from '@mui/material';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import { useAuth } from '../../Context/authContext';

const Login = () => {
    const location = useLocation();
    const [auth, setAuth] = useAuth();
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });
    const [error, setError] = useState('');

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        //console.log(formData);
        try {
            const res = await axios.post(`${process.env.REACT_APP_API}/api/v1/auth/login`, {
                email: formData.email,
                password: formData.password
            });
            
            if (res.data.success) {
                toast.success(res.data.message);
                setTimeout(() => {
                    setAuth({
                        ...auth,
                        user: res.data.user,
                        token: res.data.token
                    });
                    localStorage.setItem('auth', JSON.stringify(res.data));
                    navigate(location.state || '/');
                }, 1000);
            } else {
                toast.error(res.data.message);
                //console.log(res.data.message);
            }
        } catch (error) {
            //console.log(error);
        }
    };

    return (
        <Layout title={'login - Ecommerce'}>
            <Container sx={{ height: '80vh' }} maxWidth="sm">
                <Box sx={{ marginTop: '20vh' }} p={3} boxShadow={2}>
                    <Typography variant="h4" align="center" mb={4}>
                        User Login
                    </Typography>
                    <form onSubmit={handleSubmit}>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <TextField
                                    type="email"
                                    name="email"
                                    label="Email"
                                    fullWidth
                                    required
                                    value={formData.email}
                                    onChange={handleInputChange}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    type="password"
                                    name="password"
                                    label="Password"
                                    fullWidth
                                    required
                                    value={formData.password}
                                    onChange={handleInputChange}
                                />
                            </Grid>
                        </Grid>
                        <Box mt={3} textAlign="center">
                            <Button type="submit" variant="contained" color="primary">
                                Login
                            </Button>
                        </Box>
                    </form>
                    <Box mt={3} textAlign="center">
                        <Typography>
                            <Link to="/forgot-password">Forgot Password</Link>
                        </Typography>
                        <Typography>
                            <Link to="/signup">Create New Account</Link>
                        </Typography>
                        
                        <Typography>
                            <Link to="/google">Use Google Login</Link>
                        </Typography>
                        
                    </Box>
                </Box>
                <Toaster />
            </Container>
        </Layout>
    );
};

export default Login;











