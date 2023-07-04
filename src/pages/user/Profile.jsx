import React, { useState } from 'react'
import Layout from '../../components/Layout/Layout'
import { Box, Button, Container, Grid, TextField, Typography } from '@mui/material'
import UserMenu from '../../components/UserMenu/UserMenu'
import { useAuth } from '../../Context/authContext'
import axios from 'axios'
import { useEffect } from 'react'


const Profile = () => {

    const [auth, setAuth] = useAuth();
    const [formData, setFormData] = useState({
        name: auth.user.name,
        email: auth.user.email,
        address: auth.user.address,
        phoneNumber: auth.user.phoneNumber,
        role: auth.user.role,
    });

    useEffect(() => {
        // Your other code here
    }, []);



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
            const res = await axios.put(`${process.env.REACT_APP_API}/api/v1/auth/update-profile`, {
                name: formData.name,
                email: formData.email,
                password: formData.password,
                address: formData.address,
                phoneNumber: formData.phoneNumber,
                // role: formData.role,
            });
            if(res?.data?.error){
                console.log(res?.data?.error);
                

            }
            else{
                setAuth({...auth,user : res?.data?.updatedUser});
                let ls = localStorage.getItem('auth');
                ls = JSON.parse(ls);
                ls.user = res?.data.updatedUser
                localStorage.setItem('auth',JSON.stringify(ls))
                console.log('success full')
            }
            console.log(res?.data)
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <Layout title={'Profile - Ecommerce'}>
            <Box sx={{ display: 'flex' }}>
                <Box sx={{ flex: '0 0 240px' }}>
                    <UserMenu />
                </Box>
                <Box sx={{ flex: '1', padding: '24px' }}>
                    <Container maxWidth="lg">
                        <Grid container spacing={3}>
                            <Grid item xs={12}>
                                <Typography variant='h3'> Profile </Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <Container maxWidth="sm">
                                    <Box p={3} boxShadow={2}>
                                        <Typography variant="h4" align="center" mb={4}>
                                            Update Profile
                                        </Typography>
                                        <form onSubmit={handleSubmit}>
                                            <Grid container spacing={2}>
                                                <Grid item xs={12}>
                                                    <TextField
                                                        name="name"
                                                        label="Name"
                                                        fullWidth
                                                        // required
                                                        value={formData.name}
                                                        onChange={handleInputChange}
                                                    />
                                                </Grid>
                                                <Grid item xs={12}>
                                                    <TextField
                                                        disabled
                                                        type="email"
                                                        name="email"
                                                        label="Email"
                                                        fullWidth
                                                        // required
                                                        value={formData.email}
                                                        onChange={handleInputChange}
                                                    />
                                                </Grid>
                                                <Grid item xs={12}>
                                                    <TextField
                                                    // hidden
                                                        type="password"
                                                        name="password"
                                                        label="Password"
                                                        fullWidth
                                                        // required
                                                        value={formData.password}
                                                        onChange={handleInputChange}
                                                    />
                                                </Grid>
                                                <Grid item xs={12}>
                                                    <TextField
                                                        name="address"
                                                        label="Address"
                                                        fullWidth
                                                        // required
                                                        value={formData.address}
                                                        onChange={handleInputChange}
                                                    />
                                                </Grid>
                                                <Grid item xs={12}>
                                                    <TextField
                                                        name="phoneNumber"
                                                        label="Phone Number"
                                                        fullWidth
                                                        // required
                                                        value={formData.phoneNumber}
                                                        onChange={handleInputChange}
                                                    />
                                                </Grid>
                                                <Grid item xs={12}>
                                                    <TextField
                                                        name="role"
                                                        label="Role"
                                                        fullWidth
                                                        // required
                                                        value={formData.role}
                                                        onChange={handleInputChange}
                                                    />
                                                </Grid>
                                            </Grid>
                                            <Box mt={3} textAlign="center">
                                                <Button type="submit" variant="contained" color="primary">
                                                    Update
                                                </Button>
                                            </Box>
                                        </form>
                                    </Box>
                                </Container>
                            </Grid>
                        </Grid>
                    </Container>
                </Box>
            </Box>
        </Layout>
    )
}

export default Profile