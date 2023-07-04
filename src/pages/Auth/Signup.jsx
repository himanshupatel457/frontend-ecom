import toast, { Toaster } from 'react-hot-toast';
import React, { useState } from 'react';
// import SuccessSnackbar from '../../components/SnackBar/SuccessSnackbar';
import {
    Box,
    Button,
    Container,
    Grid,
    TextField,
    Typography,
} from '@mui/material';
import Layout from '../../components/Layout/Layout';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
// import FailureSnackbar from '../../components/SnackBar/FailureSnackbar';

const SignUp = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        address: '',
        phoneNumber: '',
        role: '',
    });

    const navigate = useNavigate();



    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(formData);

        try {
            const res = await axios.post(`${process.env.REACT_APP_API}/api/v1/auth/signUp`, {
                name: formData.name,
                email: formData.email,
                password: formData.password,
                address: formData.address,
                phoneNumber: formData.phoneNumber,
                role: 1,
            });

            if (res && res.data.success) {
                console.log(res.data && res.data.message);
                toast.success(res.data.message);
                setTimeout(() => {
                    navigate('/login');
                }, 1000);
            }
            else {
                toast.error(res.data.message);
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <Layout title={'Signup - Ecommerce'}>
            <Container sx={{ height: '80vh' }} maxWidth="sm">
                <Box sx={{ marginTop: '20vh' }} p={3} boxShadow={2}>
                    <Typography variant="h4" align="center" mb={4}>
                        Sign Up
                    </Typography>
                    <form onSubmit={handleSubmit}>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <TextField
                                    name="name"
                                    label="Name"
                                    fullWidth
                                    required
                                    value={formData.name}
                                    onChange={handleInputChange}
                                />
                            </Grid>
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
                            <Grid item xs={12}>
                                <TextField
                                    name="address"
                                    label="Address"
                                    fullWidth
                                    required
                                    value={formData.address}
                                    onChange={handleInputChange}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    name="phoneNumber"
                                    label="Phone Number"
                                    fullWidth
                                    required
                                    value={formData.phoneNumber}
                                    onChange={handleInputChange}
                                />
                            </Grid>
                            {/* <Grid item xs={12}>
                                <TextField
                                    name="role"
                                    label="Role"
                                    fullWidth
                                    // required
                                    value={formData.role}
                                    onChange={handleInputChange}
                                />
                            </Grid> */}
                        </Grid>
                        <Box mt={3} textAlign="center">
                            <Button type="submit" variant="contained" color="primary">
                                Sign Up
                            </Button>
                        </Box>
                    </form>
                </Box>
            </Container>
            <Toaster />
        </Layout>
    );
};

export default SignUp;
