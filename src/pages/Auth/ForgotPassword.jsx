import React, { useState } from 'react';
import Layout from '../../components/Layout/Layout';
import { Box, Container, TextField, Typography, Grid, Button } from '@mui/material';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';

const ForgotPassword = () => {
    const [email, setEmail] = useState('');
    

    const handleInputChange = (e) => {
        setEmail(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(email);
        try {
            // Send email with reset password instructions
            const res = await axios.post(`${process.env.REACT_APP_API}/api/v1/auth/forgot-password`, {
                email: email
            });


            if (res && res.data.success) {
                toast.success(res.data.message);
                setEmail('');
            } else {
                toast.error(res.data.message);
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <Layout title={'Forgot Password - Ecommerce'}>
            <Container sx={{ height: '80vh' }} maxWidth="sm">
                <Box sx={{ marginTop: '20vh' }} p={3} boxShadow={2}>
                    <Typography variant="h4" align="center" mb={4}>
                        Forgot Password
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
                                    value={email}
                                    onChange={handleInputChange}
                                />
                            </Grid>
                        </Grid>
                        <Box mt={3} textAlign="center">
                            <Button type="submit" variant="contained" color="primary">
                                Send Email
                            </Button>
                        </Box>
                    </form>
                </Box>
                <Toaster />
            </Container>
        </Layout>
    );
};

export default ForgotPassword;
