import React from 'react'
import { Box, Typography } from '@mui/material';
import './Footer.scss';
import { Link } from 'react-router-dom';







const Footer = () => {
  return (
    <>
      <Box className = 'main-footer'>
        <Typography>All rights reserved &copy; </Typography>
        <Box className='footer-container'>
          <ul className='footer-list'>
            <li><Link to={'/policy'}>Policy</Link></li> |
            <li><Link to={'/about'}>About</Link></li> |
            <li><Link to={'/contact'}>Contact</Link></li> |
            <li><Link>Delivery</Link></li> |
            <li><Link>Support</Link></li> |
            <li><Link>Become a Seller</Link></li> |
            <li><Link>Data Policies</Link></li>
          </ul>
        </Box>
      </Box>
    </>
  )
}

export default Footer;