import React, { useState, useEffect } from 'react';
import Layout from '../../components/Layout/Layout';
import AdminMenu from '../../components/AdminMenu/AdminMenu';
import { Box, Container, Divider, Grid, Typography } from '@mui/material';
import axios from 'axios';
import ProductCard from '../../components/Cards/ProductCard';


const Products = () => {
    const [products, setProducts] = useState([]);

    const getAllProducts = async () => {
        try {
            const res = await axios.get(`${process.env.REACT_APP_API}/api/v1/products/getproducts`);
            if (res?.data?.success) {
                setProducts(res.data.products);
                console.log(res.data);
            }
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getAllProducts();
    }, []);

    return (
        <Layout title={'Products-admin - Ecommerce'}>


            <Grid container>
                <Grid item xs={12} sm={2}>
                    <Typography variant='h4' align='center' margin={'3vh'}> Admin Menu </Typography>
                    <Divider sx={{marginBottom: '2vh'}}/>
                    <AdminMenu />
                </Grid>
                <Grid item xs={12} sm={10}>
                    <Box>
                        <Typography variant='h3' align='center'>All Products</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                        {products?.map((product, index) => (
                            <ProductCard
                                key={index}
                                name={product.name}
                                description={product.description}
                                price={product.price}
                                photo={product._id}
                                slug={product.slug}
                                quantity={product.quantity}
                                sx={{ flex: '0 0 calc(25% - 16px)' }}
                            />
                        ))}
                    </Box>
                </Grid>
            </Grid>


        </Layout>
    );
};

export default Products;
