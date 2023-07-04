
import { AppBar, Box, Toolbar, Typography, IconButton, Divider, Drawer, Container, MenuItem, Menu } from '@mui/material';
import React, { useState } from 'react';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import MenuIcon from '@mui/icons-material/Menu';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import { NavLink } from 'react-router-dom';
import './Header.scss';
import { useAuth } from '../../Context/authContext';
import toast from 'react-hot-toast';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { useNavigate } from 'react-router-dom';
import GlobalSearch from '../GlobalSearch/GlobalSearch';
import useCategory from '../CustomHooks/useCategory';
import CustomMenu from '../Menu/CustomMenu';
import { useCart } from '../../Context/cartContext';

const Header = () => {
  const [cart] = useCart();
  const [auth, setAuth] = useAuth();
  const categories = useCategory();
  const [openDrawer, setOpenDrawer] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const navigate = useNavigate();
  const handleLogout = () => {
    setAuth({
      ...auth,
      user: null,
      token: ''
    });
    localStorage.removeItem('auth');
    toast.success('Logout successful - Visit Again');
    handleMenuClose(); // Close the menu when logging out
    navigate('/login')
  };

  const drawerToggleHandler = () => {
    setOpenDrawer(!openDrawer);
  };

  const drawer = (
    <>
      <Box onClick={drawerToggleHandler} sx={{ textAlign: 'center' }}>
        <Typography width={'35vh'} sx={{ flexGrow: 1 }} component="div" color="black" variant='h3'> Ecommerce </Typography>
        <Divider />
        <ul className='nav-menu-vertical'>
          <li><NavLink to={'/'} > Home </NavLink></li>
          <li><NavLink to={'/contact'} > Contact</NavLink></li>
          <li><NavLink to={'/about'} > About </NavLink></li>
          <li><NavLink to={'/menu'} > Menu </NavLink></li>
        </ul>
      </Box>
    </>
  );

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const isMenuOpen = Boolean(anchorEl);

  const menuId = 'primary-menu';

  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'right',
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
      sx={{
        marginTop: '8px',
        '& .MuiMenu-paper': {
          backgroundColor: '#333',
          color: 'white',
        },
      }}
    >
      <MenuItem
        onClick={handleMenuClose}
        component={NavLink}
        to={`/dashboard/${auth?.user?.role === 3 ? "admin" : "user"}`}
        sx={{
          color: 'white',
          '&:hover': {
            backgroundColor: '#333',
          },
        }}
      >
        Dashboard
      </MenuItem>
      <MenuItem onClick={handleMenuClose}
        component={NavLink}
        to={`/dashboard/${auth?.user?.role !== 3 ? "admin" : "user"}`}
        sx={{
          color: 'white',
          '&:hover': {
            backgroundColor: '#333',
          },
        }} >Profile</MenuItem>
      <MenuItem onClick={handleLogout}>Logout</MenuItem>
    </Menu>
  );

  return (
    <>
      <Container>
        <AppBar sx={{ bgcolor: 'black' }} variant='elevation'>
          <Toolbar>
            <IconButton onClick={drawerToggleHandler} color='inherit' aria-label='open drawer' edge='start' sx={{ mr: 2, display: { md: 'none' } }}>
              <MenuIcon />
            </IconButton>
            <LocalGroceryStoreIcon fontSize='large' sx={{ mr: 2 }} />
            <Typography variant='h4'> E-commerce</Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1, justifyContent: 'center' }}>
              <GlobalSearch className='globalSearch' />
            </Box>
            <Box sx={{ ml: 'auto', display: { xs: 'none', md: 'block' } }}>
              <ul className='nav-links-Horizontal'>
                <li><NavLink to={'/'}><Typography variant='h6'>Home</Typography></NavLink></li>
                <li><CustomMenu categories={categories} /></li>
                {auth.user ? (
                  <li>
                    <div>
                      <Typography variant='h6' onClick={handleMenuOpen} sx={{ cursor: 'pointer' }}>
                        {auth.user.name}
                        <ArrowDropDownIcon fontSize="small" />
                      </Typography>
                    </div>
                  </li>
                ) : (
                  <>
                    <li><NavLink to={'/login'}><Typography variant='h6'>Login</Typography></NavLink></li>
                    <li><NavLink to={'/signup'}><Typography variant='h6'>Signup</Typography></NavLink></li>
                  </>
                )}
                <li><NavLink to={'/cart'}> <IconButton> <ShoppingCartCheckoutIcon fontSize='large' sx={{ color: 'azure' }} /> </IconButton>  {cart?.length} </NavLink></li>
              </ul>
            </Box>
          </Toolbar>
        </AppBar>
        <Box>
          <Drawer variant='temporary' open={openDrawer} onClose={drawerToggleHandler} sx={{ display: { xs: 'block', sm: 'none' } }}>{drawer}</Drawer>
        </Box>
      </Container>
      {renderMenu}
    </>
  );
};

export default Header;
