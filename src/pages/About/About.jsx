import React from 'react'
import Layout from '../../components/Layout/Layout'
import { Box, Typography } from '@mui/material'
import aboutUs from '../../asset/about.jpg'


//helmet
// title={'About Us - Ecommerce'}






const About = () => {
    return (
        <Layout title={'About Us - Ecommerce'}>
            <Box sx={{display : 'flex',flexDirection: 'column',textAlign:'center',alignContent:'center',justifyContent:'center'}}>
                <Typography variant='h3' sx={{padding:'5vh'}}>
                        About Us
                </Typography>
                <Box>
                    <img src={aboutUs} alt='About us'/>
                </Box>
                <Box>
                    <Typography sx={{ textAlign: 'justify', mx: 4, p: 5 }} variant='h6'>
                    The enchanting beauty of nature never fails to captivate our hearts. As the sun rises above the horizon, 
                    it paints the sky with a stunning palette of colors. The golden rays dance upon the morning dew, casting 
                    a magical glow upon the world. Birds greet the day with their cheerful melodies, filling the air with a symphon
                    y of nature's music. Flowers bloom, adorning the landscape with vibrant hues and delicate fragrances. The gentle breeze 
                    whispers through the trees, carrying with it the scent of freshly cut grass. As we venture out into the world, the city 
                    streets come alive with energy and excitement. People of all walks of life hurry along, pursuing their dreams and 
                    aspirations. The bustling markets offer a kaleidoscope of sights, sounds, and flavors. The aroma of street food tempts 
                    our taste buds, while artisans display their craftsmanship in vibrant bazaars. Amidst the urban hustle and bustle, green parks 
                    provide a sanctuary of tranquility. Families gather, children laugh, and memories are created. As the day comes to a close, the 
                    sun sets in a blaze of fiery colors, painting the sky with its final masterpiece. The city gradually settles into a peaceful rhythm, and the stars 
                    emerge to illuminate the night sky. It's a testament to the beauty and diversity of our world, 
                    reminding us to cherish every moment and embrace the wonders around us.
                    </Typography>
                </Box>
            </Box>
        </Layout>
    )
}






export default About