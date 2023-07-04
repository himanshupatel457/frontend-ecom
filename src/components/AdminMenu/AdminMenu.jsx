import React from 'react';
import { NavLink } from 'react-router-dom';
import { Box, Typography, Grid, Button } from '@mui/material';
import { Category, AddBox, ShoppingCart, Person } from '@mui/icons-material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
const AdminMenu = () => {
    return (
        <Box sx={{ marginLeft: '16px' }}>
            <Grid container direction="column" spacing={1}>
                <Grid item>
                    <Button component={NavLink} to="/dashboard/admin/create-category" color="inherit" startIcon={<Category />}>
                        <Typography>Create Category</Typography>
                    </Button>
                </Grid>
                <Grid item>
                    <Button component={NavLink} to="/dashboard/admin/create-product" color="inherit" startIcon={<AddBox />}>
                        <Typography>Create Product</Typography>
                    </Button>
                </Grid>
                <Grid item>
                    <Button component={NavLink} to="/dashboard/admin/products" color="inherit" startIcon={<ShoppingCart />}>
                        <Typography>Products</Typography>
                    </Button>
                </Grid>
                <Grid item>
                    <Button component={NavLink} to="/dashboard/admin/users" color="inherit" startIcon={<Person />}>
                        <Typography>Users</Typography>
                    </Button>
                </Grid>
                <Grid item>
                    <Button component={NavLink} to="/dashboard/admin/allorders" color="inherit" startIcon={<ShoppingCartIcon/>}>
                        <Typography>Orders</Typography>
                    </Button>
                </Grid>
            </Grid>
        </Box>
    );
};

export default AdminMenu;
