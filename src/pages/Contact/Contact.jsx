import React from 'react'
import { Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import EmailIcon from '@mui/icons-material/Email';
import FaxIcon from '@mui/icons-material/Fax';
import Layout from '../../components/Layout/Layout';
import contactIcon from '../../asset/contact.png'
import './Contact.scss'

const Contact = () => {
    return (
        <Layout title={'Contact Us - Ecommerce'}>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', minHeight: '82vh' }}>
                <Box>
                    <img  src={contactIcon} alt='this is contact'/>
                </Box>
                <Box sx={{ textAlign: 'justify', mx: 4, p: 5 }}>
                    <Typography sx={{ textAlign: 'center', p: 5, }} variant='h3' > Feel Free to Contact & give feedback</Typography>
                    <Typography>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed faucibus, quam at semper eleifend, turpis urna dictum nisl, nec pellentesque nunc felis nec nunc. Ut in
                        nisl vitae erat bibendum venenatis. Integer aliquet, massa nec lobortis finibus, metus lacus congue neque, id fringi
                        lla sapien justo ac odio. Phasellus eleifend sapien sed malesuada ullamcorper. Suspendisse ullamcorper consectetur eros, id varius nibh
                        . Sed auctor turpis id purus gravida, a fringilla nulla ins dsdfsdfgsdfgterdum. </Typography>
                </Box>
                <Box sx={{ width: '45vh', p: 2 }}>
                    <TableContainer>
                        <Table size='sm' aria-label='contact-label'>
                            <TableHead>
                                <TableRow>
                                    <TableCell align='center' sx={{ bgcolor: 'black', color: 'white' }}> Contact Details </TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                <TableRow>
                                    <TableCell align='center' sx={{ bgcolor: 'azure', color: 'Black' }}>
                                        <SupportAgentIcon /> 87654345678-tollfree
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell align='center' sx={{ bgcolor: 'azure', color: 'Black' }}>
                                        <EmailIcon /> somebody@gmail.com
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell align='center' sx={{ bgcolor: 'azure', color: 'Black' }}>
                                        <FaxIcon /> 98678235-IS Standard
                                    </TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Box>
            </Box>
        </Layout>
    )
}

export default Contact