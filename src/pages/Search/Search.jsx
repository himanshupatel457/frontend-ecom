import React from 'react'
import Layout from '../../components/Layout/Layout'
import { Box, Container, Typography } from '@mui/material'
import { useSearch } from '../../Context/searchContext'
import ProductCard from '../../components/Cards/ProductCard'

const Search = () => {
    const [values] = useSearch();
    return (
        <Layout title={'Search - Ecommerce'}>
            <Box padding={5}>
                <Box>
                    <Typography variant='h3'>Search Results</Typography>
                    <Typography variant='h5'>{values?.results.length < 1 ? 'No products matched with search' : `Found ${values.results.length}`}</Typography>
                </Box>
                <Box display="flex" flexWrap="wrap" justifyContent="center">
                    {values?.results?.map((product, index) => (
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
        </Layout>
    )
}

export default Search