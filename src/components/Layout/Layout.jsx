import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import './Layout.scss'
import { Box } from '@mui/material'
import { Helmet, HelmetProvider } from 'react-helmet-async';

// import { Helmet } from 'react-helmet'

const Layout = ({ children, title, description, keywords, author }) => {
  return (
    <HelmetProvider>
      <Helmet>
        <meta charSet='utf-8'/>
        <meta name="description" content={description}/>
        <meta name="keywords" content={keywords}/>
        <meta name="author" content={author}/>
        <title>{title}</title>
        
      </Helmet>
      <div><Header /></div>
      <Box sx={{ mt: 8 }}>{children}</Box>
      <Footer />
    </HelmetProvider>
  )
}




Layout.defaultProps = {
  title : "Ecommerce",
  description : "A product based Online Market",
  keywords : "shop,market,purchase,buy",
  author :"Himanshu Patel"
}

export default Layout