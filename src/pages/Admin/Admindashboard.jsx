import React from 'react';
import Layout from '../../components/Layout/Layout';
import { Container, Grid, Box, Typography } from '@mui/material';
import AdminMenu from '../../components/AdminMenu/AdminMenu';
import { useAuth } from '../../Context/authContext';


const AdminDashboard = () => {

    const [auth ] = useAuth();






    return (
        <Layout title={'Admin - Ecommerce'}>
            <Box sx={{ display: 'flex' }}>
                <Box sx={{ flex: '0 0 240px' }}>
                    <AdminMenu />
                </Box>
                <Box sx={{ flex: '1', padding: '24px' }}>
                    <Container maxWidth="lg">
                        <Grid container spacing={3}>
                            <Grid item xs={12}>
                                <Typography variant='h4'> {auth?.user?.name} </Typography>
                                <Typography variant='h5'> {auth?.user?.email} </Typography>
                                <Typography variant='h5'> {auth?.user?.phoneNumber} </Typography>
                            </Grid>
                        </Grid>
                    </Container>
                </Box>
            </Box>
        </Layout>
    );
};

export default AdminDashboard;
