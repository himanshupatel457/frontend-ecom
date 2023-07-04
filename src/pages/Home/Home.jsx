


import React, { useState, useEffect } from 'react';
import Layout from '../../components/Layout/Layout';
import { useAuth } from '../../Context/authContext';
import { Box, Grid, Typography, Checkbox, FormControl, FormLabel, Button, Select, MenuItem } from '@mui/material';
import axios from 'axios';
import ProductCard from '../../components/Cards/ProductCard';
import { PricesFilterContent } from '../../components/PricesFilterContent';


const Home = () => {
    const [auth, setAuth] = useAuth();
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState([]);
    const [selectedPrice, setSelectedPrice] = useState([]);
    const [total, setTotal] = useState(0);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);


    const getTotalCount = async () => {
        try {
            const res = await axios.get(`${process.env.REACT_APP_API}/api/v1/products/product-count`)
            setTotal(res?.data?.totalCount)
        } catch (error) {
            //console.log(error);
        }
    }

    const getLoadMore = async () => {
        try {
            setLoading(true);
            const res = await axios.get(`${process.env.REACT_APP_API}/api/v1/products/product-list/${page}`);
            setLoading(false);
            setProducts([...products, ...res?.data?.products]);
            //console.log(res);
        } catch (error) {
            //console.log(error);
        }
    }
    useEffect(() => {
        if (page === 1) return;
        getLoadMore();
    }, [page])

    const getAllProducts = async () => {
        try {
            setLoading(true);
            const res = await axios.get(`${process.env.REACT_APP_API}/api/v1/products/product-list/${page}`);
            setLoading(false);
            setProducts(res.data.products);
            //console.log(res);
        } catch (error) {
            setLoading(false);
            //console.log(error);
        }
    };

    const getAllCategories = async () => {
        try {
            const res = await axios.get(`${process.env.REACT_APP_API}/api/v1/category/allcategories`);
            if (res?.data?.success) {
                setCategories(res?.data?.categories);
            }
        } catch (error) {
            //console.log(error);
        }
    };

    useEffect(() => {
        getAllCategories();
        getTotalCount();
    }, []);

    useEffect(() => {
        if (!selectedCategory.length && !selectedPrice.length) getAllProducts();
    }, [selectedCategory,selectedPrice])

    useEffect(() => {
        if (selectedCategory.length || selectedPrice.length) getFilteredProducts();
        // else getAllProducts();
    }, [selectedCategory, selectedPrice])

    const handleCategoryFilter = (value, id) => {
        let checkedOnes = [...selectedCategory];
        if (value) {
            checkedOnes.push(id);
        } else {
            checkedOnes = checkedOnes.filter((ele) => ele !== id);
        }
        setSelectedCategory(checkedOnes);
    };

    const handlePriceFilter = (event) => {
        setSelectedPrice(event.target.value);
    };

    const handleApplyFilters = () => {
        //console.log('Selected Categories:', selectedCategory);
        //console.log('Selected Price:', selectedPrice);
    };

    const getFilteredProducts = async () => {
        try {
            const res = await axios.post(`${process.env.REACT_APP_API}/api/v1/products/products-filters`, { selectedCategory, selectedPrice });

            setProducts(res?.data?.products);
            //console.log(res);
        } catch (error) {
            //console.log(error);

        }
    }

    return (
        <Layout title={'All Products - Ecommerce'}>
            <Grid container>
                <Grid item xs={12} sm={2}>
                    {/* Left Section with Filters */}
                    <Box textAlign="center" p={3} height={'100%'}>
                        <Typography variant="h4">Filters</Typography>
                        {/* Category Filters */}
                        <Box mt={3}>
                            <Typography variant="subtitle1">Category</Typography>
                            {categories && categories.map((category) => (
                                <Box key={category._id} display="flex" alignItems="center" py={1}>
                                    <Checkbox
                                        checked={selectedCategory.includes(category._id)}
                                        onChange={(e) => handleCategoryFilter(e.target.checked, category._id)}
                                    />
                                    <Typography>{category.name}</Typography>
                                </Box>
                            ))}
                        </Box>
                        {/* Price Filter */}
                        <Box mt={3}>
                            <Typography variant="subtitle1">Price Range</Typography>

                            <FormControl fullWidth>
                                <Select
                                    labelId="menu"
                                    id="menu-list"
                                    label="price"
                                    value={selectedPrice}
                                    onChange={handlePriceFilter}
                                >
                                    {PricesFilterContent.map((option) => (
                                        <MenuItem key={option._id} value={option.array}>
                                            {option.name}
                                        </MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={10}>
                    {/* Right Section with All Products */}
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
                                    product={product}
                                />
                            ))}
                        </Box>
                    </Box>
                </Grid>
            </Grid>
            <Box textAlign="center" display="flex" justifyContent="center">
                {products && (products.length < total) && (
                    <Button onClick={(e) => {
                        e.preventDefault();
                        setPage(page + 1);
                    }}>
                        {loading ? 'Loading' : 'Load More'}
                    </Button>
                )}
            </Box>

        </Layout>
    );
};

export default Home;







