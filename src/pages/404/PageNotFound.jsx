import React from 'react'
import Layout from '../../components/Layout/Layout'
import { Box, Button, Typography } from '@mui/material'
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import './PageNotFound.scss'
import { useNavigate } from 'react-router-dom';

const Page404 = () => {
    const navigate = useNavigate();

    const goBackHandler =()=>{
        navigate('/');
    }



    return (
        <Layout title={'404 - Ecommerce'}>
            <Box className='center-container'>
                <Box className='inner-box'>
                    <Typography variant='h1' sx={{fontWeight:800}}> 404 </Typography>
                    <Typography>Page Not Found !</Typography>
                    <Button variant='contained' type='button' color='info' onClick={goBackHandler}> <ArrowCircleLeftIcon /> Go Back </Button>
                </Box>
            </Box>
        </Layout>
    )
}

export default Page404