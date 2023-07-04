import React, { useEffect, useState } from 'react';
import { Box, Container, TextField, Typography, Button, Stack } from '@mui/material';
import Layout from '../../components/Layout/Layout';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-hot-toast';

const ResetPassword = () => {
    const { id, token } = useParams();
    const navigate = useNavigate();

    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [passwordChanged, setPasswordChanged] = useState(false); // Track if password has been changed

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleConfirmPasswordChange = (e) => {
        setConfirmPassword(e.target.value);
    };

    const handleResetPassword = async () => {
        try {
            const res = await axios.post(`${process.env.REACT_APP_API}/api/v1/auth/${id}/${token}`, {
                password,
            });

            if (res.data.success) {
                setPassword('');
                setConfirmPassword('');
                toast.success('Password changed');
                setPasswordChanged(true);
                setTimeout(() => {
                    navigate('/login');
                }, 2000); // Redirect to login page after 2 seconds
            } else {
                toast.error('Token expired!');
                setTimeout(() => {
                    navigate('/404'); // Redirect to 404 page if token expires
                }, 2000); // Delay the redirection to allow time for the toast message to appear
            }
        } catch (error) {
            console.log(error);
            // Handle error - display an error toast or navigate to an error page
        }

        console.log('Resetting password:', password);
    };

    useEffect(() => {
        const userValid = async () => {
            try {
                const response = await axios.get(`${process.env.REACT_APP_API}/api/v1/auth/reset-password/${id}/${token}`);
                const data = response.data;
                if (data.success) {
                    console.log('Valid User');
                } else {
                    navigate('/404'); // Redirect to 404 page if the user is not valid
                }
            } catch (error) {
                console.log(error);
            }
        };

        userValid();
    }, [id, token, navigate]);

    return (
        <Layout title={'Reset password - Ecommerce'}>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    minHeight: '85vh',
                }}
            >
                <Container maxWidth="sm">
                    <Box p={3} boxShadow={2}>
                        <Typography variant="h4" align="center" mb={4}>
                            Reset Password
                        </Typography>
                        {passwordChanged ? (
                            <Typography variant="h6" align="center" mb={2}>
                                Password changed successfully!
                            </Typography>
                        ) : null}
                        <Stack spacing={2}>
                            <TextField
                                type="password"
                                label="New Password"
                                fullWidth
                                required
                                value={password}
                                onChange={handlePasswordChange}
                            />
                            <TextField
                                type="password"
                                label="Confirm Password"
                                fullWidth
                                required
                                value={confirmPassword}
                                onChange={handleConfirmPasswordChange}
                            />
                            <Box textAlign="center">
                                <Button
                                    variant="contained"
                                    color="primary"
                                    disabled={password === '' || confirmPassword === '' || password !== confirmPassword}
                                    onClick={handleResetPassword}
                                >
                                    Done
                                </Button>
                            </Box>
                        </Stack>
                    </Box>
                </Container>
            </Box>
        </Layout>
    );
};

export default ResetPassword;
