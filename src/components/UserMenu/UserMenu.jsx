import React from 'react';
import { NavLink } from 'react-router-dom';
import { List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { AccountCircle, ShoppingBasket } from '@mui/icons-material';


const UserMenu = () => {
    return (
        <>
            <List component="nav">
                <ListItem component={NavLink} to="/dashboard/user/profile">
                    <ListItemIcon>
                        <AccountCircle />
                    </ListItemIcon>
                    <ListItemText primary="Profile" />
                </ListItem>
                <ListItem component={NavLink} to="/dashboard/user/orders">
                    <ListItemIcon>
                        <ShoppingBasket />
                    </ListItemIcon>
                    <ListItemText primary="Orders" />
                </ListItem>
            </List>
        </>
    )
}

export default UserMenu;
