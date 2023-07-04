import React from 'react'
import Layout from '../../components/Layout/Layout'
import AdminMenu from '../../components/AdminMenu/AdminMenu'
import { Box, Container, Grid, Typography } from '@mui/material'

const AllUsers = () => {
    return (
        <Layout>
            <Box sx={{ display: 'flex' }}>
                <Box sx={{ flex: '0 0 240px' }}>
                    <AdminMenu />
                </Box>
                <Box sx={{ flex: '1', padding: '24px' }}>
                    <Container maxWidth="lg">
                        <Grid container spacing={3}>
                            <Grid item xs={12}>
                                <Typography variant='h4'> All users </Typography>
                            </Grid>
                        </Grid>
                    </Container>
                </Box>
            </Box>
        </Layout>
    )
}

export default AllUsers