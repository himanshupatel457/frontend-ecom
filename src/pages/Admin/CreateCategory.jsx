

import React, { useState, useEffect } from 'react';
import Layout from '../../components/Layout/Layout';
import AdminMenu from '../../components/AdminMenu/AdminMenu';
import { Box, Container, Grid, Typography, Button, TextField, Snackbar } from '@mui/material';
import { Alert } from '@mui/material';
import axios from 'axios';

const CreateCategory = () => {
    const [categories, setCategories] = useState([]);
    const [newCategory, setNewCategory] = useState('');
    const [snackbarOpen, setSnackbarOpen] = useState(false);
    const [snackbarMessage, setSnackbarMessage] = useState('');
    const [snackbarSeverity, setSnackbarSeverity] = useState('success');

    const getAllCategory = async () => {
        try {
            const res = await axios.get(`${process.env.REACT_APP_API}/api/v1/category/allcategories`);
            // console.log(res.data.categories);
            if (res.data.success) {
                setCategories(res.data.categories);
            }
        } catch (error) {
            // console.log(error);
            handleSnackbarOpen('Failed to get categories', 'error');
        }
    };

    useEffect(() => {
        getAllCategory();
    }, []);

    const handleCreateCategory = async () => {
        try {
            const res = await axios.post(`${process.env.REACT_APP_API}/api/v1/category/create-category`, { name: newCategory });
            if (res.data.success) {
                handleSnackbarOpen('Category created successfully', 'success');
                setNewCategory('');
                getAllCategory();
            } else {
                handleSnackbarOpen(res.data.message, 'error');
            }
        } catch (error) {
            // console.log(error);
            handleSnackbarOpen('Failed to create category', 'error');
        }
    };

    const handleSnackbarOpen = (message, severity) => {
        setSnackbarMessage(message);
        setSnackbarSeverity(severity);
        setSnackbarOpen(true);
    };

    const handleSnackbarClose = () => {
        setSnackbarOpen(false);
    };

    const handleEditCategory = (categoryId) => {
        // console.log('Edit category with ID:', categoryId);
    };

    return (
        <Layout title={'Create-category -admin - Ecommerce'}>
            <Box sx={{ display: 'flex' }}>
                <Box sx={{ flex: '0 0 240px' }}>
                    <AdminMenu />
                </Box>
                <Box sx={{ flex: '1', padding: '24px' }}>
                    <Container maxWidth="lg">
                        <Grid container spacing={3}>
                            <Grid item xs={12}>
                                <Typography variant="h4"> Create Category </Typography>
                                <Box sx={{ marginBottom: '16px' }}>
                                    <TextField
                                        label="New Category"
                                        variant="outlined"
                                        fullWidth
                                        value={newCategory}
                                        onChange={(e) => setNewCategory(e.target.value)}
                                    />
                                    <Button variant="contained" onClick={handleCreateCategory} style={{ marginTop: '8px' }}>
                                        Create
                                    </Button>
                                </Box>
                                {categories?.map((category, index) => (
                                    <Grid
                                        key={category._id}
                                        container
                                        alignItems="center"
                                        marginBottom="8px"
                                        border="1px solid #ccc"
                                        padding="8px"
                                        borderRadius="4px"
                                    >
                                        <Grid item xs={12} sm={3} display="flex" justifyContent="center" alignItems="center">
                                            <Typography>{index + 1}.</Typography>
                                        </Grid>
                                        <Grid item xs={12} sm={6} sx={{ textAlign: { sm: 'left' } }}>
                                            <Typography>{category.name}</Typography>
                                        </Grid>
                                        <Grid item xs={12} sm={3} display="flex" justifyContent="center">
                                            <Button variant="outlined" size="small" onClick={() => handleEditCategory(category._id)}>
                                                Edit
                                            </Button>
                                        </Grid>
                                    </Grid>
                                ))}
                            </Grid>
                        </Grid>
                    </Container>
                </Box>
            </Box>
            <Snackbar open={snackbarOpen} autoHideDuration={3000} onClose={handleSnackbarClose}>
                <Alert severity={snackbarSeverity} onClose={handleSnackbarClose}>
                    {snackbarMessage}
                </Alert>
            </Snackbar>
        </Layout>
    );
};

export default CreateCategory;













// import React, { useState, useEffect } from 'react';
// import Layout from '../../components/Layout/Layout';
// import { useAuth } from '../../Context/authContext';
// import { Box, Grid, Typography, Checkbox, FormControl, FormLabel, Button } from '@mui/material';
// import axios from 'axios';
// import ProductCard from '../../components/Cards/ProductCard';
// import Autocomplete from '@mui/material/Autocomplete';
// import TextField from '@mui/material/TextField';
// import { PricesFilterContent } from '../../components/PricesFilterContent';
// import MenuListComposition from './MenuListComposition';

// const Home = () => {
//     const [auth, setAuth] = useAuth();
//     const [products, setProducts] = useState([]);
//     const [categories, setCategories] = useState([]);
//     const [selectedCategory, setSelectedCategory] = useState([]);
//     const [selectedPrice, setSelectedPrice] = useState([]);
//     const [total, setTotal] = useState(0);
//     const [page, setPage] = useState(1);
//     const [loading, setLoading] = useState(false);

//     const getTotalCount = async () => {
//         try {
//             const res = await axios.get(`${process.env.REACT_APP_API}/api/v1/products/product-count`);
//             setTotal(res?.data?.totalCount);
//         } catch (error) {
//             console.log(error);
//         }
//     };

//     const getLoadMore = async () => {
//         try {
//             setLoading(true);
//             const res = await axios.get(`${process.env.REACT_APP_API}/api/v1/products/product-list/${page}`);
//             setLoading(false);
//             setProducts([...products, ...res?.data?.products]);
//             console.log(res);
//         } catch (error) {
//             console.log(error);
//         }
//     };

//     useEffect(() => {
//         if (page === 1) return;
//         getLoadMore();
//     }, [page]);

//     const getAllProducts = async () => {
//         try {
//             setLoading(true);
//             const res = await axios.get(`${process.env.REACT_APP_API}/api/v1/products/product-list/${page}`);
//             setLoading(false);
//             setProducts(res.data.products);
//             console.log(res);
//         } catch (error) {
//             setLoading(false);
//             console.log(error);
//         }
//     };

//     const getAllCategories = async () => {
//         try {
//             const res = await axios.get('${process.env.REACT_APP_API}/api/v1/category/allcategories');
//             if (res?.data?.success) {
//                 setCategories(res?.data?.categories);
//             }
//         } catch (error) {
//             console.log(error);
//         }
//     };

//     useEffect(() => {
//         getAllCategories();
//         getTotalCount();
//     }, []);

//     useEffect(() => {
//         if (!selectedCategory.length && !selectedPrice.length) getAllProducts();
//     }, []);

//     useEffect(() => {
//         if (selectedPrice.length || selectedPrice.length) getFilteredProducts();
//     }, [selectedCategory, selectedPrice]);

//     const handleCategoryFilter = (value, id) => {
//         let checkedOnes = [...selectedCategory];
//         if (value) {
//             checkedOnes.push(id);
//         } else {
//             checkedOnes = checkedOnes.filter((ele) => ele !== id);
//         }
//         setSelectedCategory(checkedOnes);
//     };

//     const handlePriceFilter = (value) => {
//         setSelectedPrice(value);
//     };

//     const handleApplyFilters = () => {
//         // Handle logic to apply filters
//         // You can access the selectedCategory and selectedPrice here
//         console.log('Selected Categories:', selectedCategory);
//         console.log('Selected Price:', selectedPrice);
//     };

//     const getFilteredProducts = async () => {
//         try {
//             const res = await axios.post(`${process.env.REACT_APP_API}/api/v1/products/products-filters`, {
//                 selectedCategory,
//                 selectedPrice,
//             });

//             setProducts(res?.data?.products);
//             console.log(res);
//         } catch (error) {
//             console.log(error);
//         }
//     };

//     return (
//         <Layout title={'All Products - Ecommerce'}>
//             <Grid container>
//                 <Grid item xs={12} sm={2}>
//                     {/* Left Section with Filters */}
//                     <Box textAlign="center" p={3}>
//                         <Typography variant="h4">Filters</Typography>
//                         {/* Category Filters */}
//                         <Box mt={3}>
//                             <Typography variant="subtitle1">Category</Typography>
//                             {categories.map((category) => (
//                                 <Box key={category._id} display="flex" alignItems="center" py={1}>
//                                     <Checkbox
//                                         checked={selectedCategory.includes(category._id)}
//                                         onChange={(e) => handleCategoryFilter(e.target.checked, category._id)}
//                                     />
//                                     <Typography>{category.name}</Typography>
//                                 </Box>
//                             ))}
//                         </Box>
//                         {/* Price Filter */}
//                         <Box mt={3}>
//                             <Typography variant="subtitle1">Price Range</Typography>
//                             <MenuListComposition />
//                         </Box>
//                         {/* Apply Filters Button */}
//                         <Box mt={3}>
//                             <Button variant="contained" onClick={handleApplyFilters}>
//                                 Apply Filters
//                             </Button>
//                         </Box>
//                         <Box mt={3}>
//                             <Button variant="contained" onClick={() => { window.location.reload(); }}>
//                                 Reset Filters
//                             </Button>
//                         </Box>
//                     </Box>
//                 </Grid>
//                 <Grid item xs={12} sm={9}>
//                     {/* Right Section with All Products */}
//                     <Box textAlign="center" p={3}>
//                         <Typography variant="h4">All Products</Typography>
//                         <Box display="flex" flexWrap="wrap" justifyContent="center">
//                             {products?.map((product, index) => (
//                                 <ProductCard
//                                     key={index}
//                                     name={product.name}
//                                     description={product.description}
//                                     price={product.price}
//                                     photo={product._id}
//                                     slug={product.slug}
//                                     quantity={product.quantity}
//                                     product={product}
//                                 />
//                             ))}
//                         </Box>
//                     </Box>
//                 </Grid>
//             </Grid>
//             <Box>
//                 {products && (products.length < total) && (
//                     <Button onClick={(e) => {
//                         e.preventDefault();
//                         setPage(page + 1);
//                     }}>
//                         {loading ? 'Loading' : 'Load More'}
//                     </Button>
//                 )}
//             </Box>
//         </Layout>
//     );
// };

// export default Home;
