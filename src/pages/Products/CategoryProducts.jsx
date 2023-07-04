import React, { useEffect, useState } from 'react'
import Layout from '../../components/Layout/Layout'
import { Box, Typography } from '@mui/material'
import axios from 'axios';
import { useParams } from 'react-router-dom';
import ProductCard from '../../components/Cards/ProductCard';

const CategoryProducts = () => {

    const [products, setProducts] = useState([]);
    const [category, setCategory] = useState([]);
    const params = useParams();
    const getProductByCategory = async () => {
        try {
            const { data } = await axios.get(`${process.env.REACT_APP_API}/api/v1/products/product-category/${params.slug}`);
            setProducts(data?.products);
            setCategory(data?.category);

        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        if (params?.slug) getProductByCategory();
    }, [params?.slug])


    return (
        <Layout>
            <Box>
                <Typography variant='h3' align='center'>category : {category.name}</Typography>
                <Typography variant='h3' align='center'>Products Found : {products.length}</Typography>
                <Box textAlign="center" p={3}>
                    <Typography variant="h4">All Products</Typography>
                    <Box display="flex" flexWrap="wrap" justifyContent="center">
                        {products?.map((product, index) => (
                            <ProductCard
                                key={index}
                                name={product.name}
                                description={product.description}
                                price={product.price}
                                photo={product._id}
                                slug={product.slug}
                                quantity={product.quantity}
                            />
                        ))}
                    </Box>

                </Box>

            </Box>
        </Layout>
    )
}

export default CategoryProducts