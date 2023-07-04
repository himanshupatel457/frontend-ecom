import React from 'react';
import Layout from '../../components/Layout/Layout';
import { Container, Grid, Box, Typography } from '@mui/material';
import { useAuth } from '../../Context/authContext';
import UserMenu from '../../components/UserMenu/UserMenu';


const Dashboard = () => {

    const [auth] = useAuth();

    return (
        <Layout title={'dashboard - Ecommerce'}>
            <Box height={'80vh '} sx={{ display: 'flex' }}>
                <Box sx={{ flex: '0 0 240px' }}>
                    <UserMenu />
                </Box>
                <Box sx={{ flex: '1', padding: '24px' }}>
                    <Container maxWidth="lg">
                        <Grid container spacing={3}>
                            <Grid item xs={12}>
                                <Typography variant='h5'> {auth?.user?.name} </Typography>
                                <Typography variant='h5'> {auth?.user?.email}  </Typography>
                                <Typography variant='h5'> {auth?.user?.address}  </Typography>
                            </Grid>
                        </Grid>
                    </Container>
                </Box>
            </Box>
        </Layout>
    )
}

export default Dashboard




