import React, { useState } from 'react';
import { Typography, Menu, MenuItem } from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { NavLink } from 'react-router-dom';

const CustomMenu = ({ categories }) => {
    const [anchorEl, setAnchorEl] = useState(null);

    const handleMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    const isMenuOpen = Boolean(anchorEl);

    return (
        <>
            <div>
                <Typography variant='h6' onClick={handleMenuOpen} sx={{ cursor: 'pointer' }}>
                    Categories
                    <ArrowDropDownIcon fontSize="small" />
                </Typography>
            </div>
            <Menu
                anchorEl={anchorEl}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right',
                }}
                id="categories-menu"
                keepMounted
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                open={isMenuOpen}
                onClose={handleMenuClose}
            >
                {categories.map((category) => (
                    <MenuItem key={category._id} onClick={handleMenuClose} component={NavLink} to={`/category/${category.slug}`}>
                        {category.name}
                    </MenuItem>
                ))}
            </Menu>
        </>
    );
};

export default CustomMenu;
