import React, { useEffect, useState } from 'react';
import Layout from '../../components/Layout/Layout';
import { Typography, Grid, Box, Button } from '@mui/material';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import ProductCard from '../../components/Cards/ProductCard';
import { useCart } from '../../Context/cartContext';

const ProductDetails = () => {
    const params = useParams();
    const [product, setProduct] = useState({});
    const [relatedProduct, setRelatedProduct] = useState([]);
    const [cart,setCart] = useCart();
    useEffect(() => {
        if (params?.slug) getProduct();
    }, [params?.slug]);

    const getProduct = async () => {
        try {
            const res = await axios.get(
                `${process.env.REACT_APP_API}/api/v1/products/getaproduct/${params.slug}`
            );
            setProduct(res?.data?.product[0]);
            console.log(res?.data?.product[0])
            getSimilarProduct(res?.data?.product[0]?._id, res?.data?.product[0]?.category._id);
            //   console.log(res);
        } catch (error) {
            console.log(error);
        }
    };


    const getSimilarProduct = async (productId, categoryId) => {
        try {
            const res = await axios.get(`${process.env.REACT_APP_API}/api/v1/products/similar-products/${productId}/${categoryId}`);
            setRelatedProduct(res?.data?.products)
            console.log('similar products : ', res?.data?.products);
        } catch (error) {
            console.log(error);
        }
    }



    return (
        <Layout>
            <Grid container spacing={2}>
                <Grid item xs={6} height={'20vh'} display="flex" alignItems="center" justifyContent="center" marginTop={'8rem'}>
                    <Box sx={{ padding: '3rem', marginLeft: '3rem' }}>
                        {product._id && (
                            <img
                                src={`${process.env.REACT_APP_API}/api/v1/products/productphoto/${product._id}`}
                                alt={product.name}
                                style={{ height: '20rem', width: 'auto', objectFit: 'contain' }}
                            />
                        )}
                    </Box>
                </Grid>
                <Grid item xs={6}>
                    <Box marginTop="5rem" textAlign="center" justifyContent="center">
                        <Typography variant="h2">Product Details</Typography>
                        {/* Display other product details here */}
                        <Typography variant="h4" component="p" textTransform="capitalize">Product Name: {product?.name}</Typography>
                        <Typography variant="h4" component="p" textTransform="capitalize">Product Price: {product?.price}</Typography>
                        <Typography variant="h5" component="p" textTransform="capitalize">Product Description: {product?.description}</Typography>
                        <Typography variant="h5" component="p" textTransform="capitalize">Product Category: {product?.category?.name}</Typography>
                        <Button variant="contained" color="primary" textTransform="capitalize" onClick={() => {
                            setCart([...cart, product]);
                            localStorage.setItem('cart', JSON.stringify([...cart, product]));
                        }}>Add to Cart</Button>
                    </Box>


                </Grid>

                <Grid item xs={12}>
                    {relatedProduct.length < 1 ? <Typography> No similar products available</Typography> :
                        <Box padding={3}>
                            <Typography variant="h4" align='center' margin={8}>Similar Products </Typography>
                            <Box display="flex" flexWrap="wrap" justifyContent="center">
                                {relatedProduct?.map((product, index) => (
                                    <ProductCard
                                        key={index}
                                        name={product.name}
                                        description={product.description}
                                        price={product.price}
                                        photo={product._id}
                                        slug={product.slug}
                                        quantity={product.quantity}
                                        product={product}
                                    />
                                ))}
                            </Box>
                        </Box>
                    }
                </Grid>
            </Grid>
        </Layout>
    );
};

export default ProductDetails;
