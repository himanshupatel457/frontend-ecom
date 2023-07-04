// import React, { useEffect, useState } from 'react';
// import Layout from '../../components/Layout/Layout';
// import axios from 'axios';
// import { Box, Container, Grid, Typography, TextField, Button } from '@mui/material';
// import Autocomplete from '@mui/material/Autocomplete';
// import AdminMenu from '../../components/AdminMenu/AdminMenu';
// import { useNavigate, useParams } from 'react-router-dom';

// const UpdateProduct = () => {
//     const navigate = useNavigate();
//     const params = useParams(null);
//     const [categories, setCategories] = useState([]);
//     const [name, setName] = useState('');
//     const [price, setPrice] = useState('');
//     const [description, setDescription] = useState('');
//     const [category, setCategory] = useState('');
//     const [quantity, setQuantity] = useState('');
//     const [photo, setPhoto] = useState(null);
//     const [photoName, setPhotoName] = useState('');




//     const getSingleProduct = async () => {
//         try {
//             const res = await axios.get(`${process.env.REACT_APP_API}/api/v1/products/getaproduct/${params.slug}`);
//             console.log(res.data.product[0].name);
//             setName(res.data.product[0].name);
//             setDescription(res.data.product[0].description);
//             setPrice(res.data.product[0].price);
//             setCategory(res.data.product[0].category);
//             setPhoto(res.data.product[0].phot);
//             setQuantity(res.data.product[0].quantity);
//         } catch (error) {
//             console.log(error);
//         }
//     }


//     // useEffect(() => {
//     // }, []);

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
//         getSingleProduct();
//     }, []);

//     const handleSubmit = async (event) => {
//         event.preventDefault();

//         const formData = new FormData();
//         formData.append('name', name);
//         formData.append('price', price);
//         formData.append('description', description);
//         formData.append('category', category ? category._id : null);
//         formData.append('quantity', quantity);
//         formData.append('photo', photo);

//         // Log the entire form data
//         for (let [key, value] of formData.entries()) {
//             console.log(`${key}: ${value}`);
//         }

//         try {
//             const res = await axios.post('${process.env.REACT_APP_API}/api/v1/products/create-product', formData);
//             console.log(res.data);
//         } catch (error) {
//             console.log(error);
//         }
//     };

//     const handleFileChange = (event) => {
//         const file = event.target.files[0];
//         setPhoto(file);
//         setPhotoName(file.name);
//     };







//     return (
//         <Layout title={'Update-Product -admin - Ecommerce'}>
//             <Box sx={{ display: 'flex' }}>
//                 <Box sx={{ flex: '0 0 240px' }}>
//                     <AdminMenu />
//                 </Box>
//                 <Box sx={{ flex: '1', padding: '24px' }}>
//                     <Container>
//                         <Container maxWidth="lg">
//                             <Grid container spacing={3}>
//                                 <Grid item xs={12}>
//                                     <Typography variant="h4">Update product</Typography>
//                                 </Grid>
//                                 <Grid item xs={12}>
//                                     <form onSubmit={handleSubmit}>
//                                         <Grid container spacing={3}>
//                                             <Grid item xs={12}>
//                                                 <TextField
//                                                     label="Name"
//                                                     variant="outlined"
//                                                     fullWidth
//                                                     value={name}
//                                                     onChange={(e) => setName(e.target.value)}
//                                                 />
//                                             </Grid>
//                                             <Grid item xs={12}>
//                                                 <TextField
//                                                     label="Price"
//                                                     variant="outlined"
//                                                     fullWidth
//                                                     value={price}
//                                                     onChange={(e) => setPrice(e.target.value)}
//                                                 />
//                                             </Grid>
//                                             <Grid item xs={12}>
//                                                 <TextField
//                                                     label="Description"
//                                                     variant="outlined"
//                                                     fullWidth
//                                                     multiline
//                                                     value={description}
//                                                     onChange={(e) => setDescription(e.target.value)}
//                                                 />
//                                             </Grid>
//                                             <Grid item xs={12}>
//                                                 <Autocomplete
//                                                     id="combo-box-demo"
//                                                     options={categories}
//                                                     getOptionLabel={(category) => (category ? category.name : '')}
//                                                     value={category}
//                                                     onChange={(event, selectedCategory) => setCategory(selectedCategory)}
//                                                     renderOption={(props, category) => (
//                                                         <li {...props}>
//                                                             <Typography variant="body1">{category.name}</Typography>
//                                                         </li>
//                                                     )}
//                                                     renderInput={(params) => (
//                                                         <TextField {...params} label="Search Category" variant="outlined" fullWidth />
//                                                     )}
//                                                 />
//                                             </Grid>
//                                             <Grid item xs={12}>
//                                                 <TextField
//                                                     label="Quantity"
//                                                     variant="outlined"
//                                                     fullWidth
//                                                     value={quantity}
//                                                     onChange={(e) => setQuantity(e.target.value)}
//                                                 />
//                                             </Grid>
//                                             <Grid item xs={12}>
//                                                 <input
//                                                     accept="image/*"
//                                                     id="photo"
//                                                     type="file"
//                                                     onChange={handleFileChange}
//                                                     style={{ display: 'none' }}
//                                                 />
//                                                 <label htmlFor="photo">
//                                                     <Button variant="contained" component="span">
//                                                         Upload Photo
//                                                     </Button>
//                                                 </label>
//                                                 {photoName && (
//                                                     <Typography variant="body1" sx={{ marginTop: '8px' }}>
//                                                         Uploaded Photo: {photoName}
//                                                     </Typography>
//                                                 )}
//                                             </Grid>
//                                             <Grid item xs={12}>
//                                                 <Button variant="contained" type="submit">
//                                                     Update Product
//                                                 </Button>
//                                             </Grid>
//                                         </Grid>
//                                     </form>
//                                 </Grid>
//                             </Grid>
//                         </Container>
//                     </Container>
//                 </Box>
//             </Box>
//         </Layout>
//     )
// }

// export default UpdateProduct


import React, { useEffect, useState } from 'react';
import Layout from '../../components/Layout/Layout';
import axios from 'axios';
import { Box, Container, Grid, Typography, TextField, Button, FormControlLabel, Switch } from '@mui/material';
import Autocomplete from '@mui/material/Autocomplete';
import AdminMenu from '../../components/AdminMenu/AdminMenu';
import { useNavigate, useParams } from 'react-router-dom';

const UpdateProduct = () => {
    const navigate = useNavigate();
    const params = useParams(null);
    const [categories, setCategories] = useState([]);
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('');
    const [quantity, setQuantity] = useState('');
    const [photo, setPhoto] = useState(null);
    const [photoName, setPhotoName] = useState('');
    const [shippingDone, setShippingDone] = useState(false);
    const [id, setId] = useState(null);

    const getSingleProduct = async () => {
        try {
            const res = await axios.get(`${process.env.REACT_APP_API}/api/v1/products/getaproduct/${params.slug}`);
            console.log(res);
            setName(res.data.product[0].name);
            setDescription(res.data.product[0].description);
            setPrice(res.data.product[0].price);
            setCategory(res.data.product[0].category);
            setPhoto(res.data.product[0].photo);
            setQuantity(res.data.product[0].quantity);
            setId(res.data.product[0]._id);
        } catch (error) {
            console.log(error);
        }
    }

    const getAllCategories = async () => {
        try {
            const res = await axios.get('${process.env.REACT_APP_API}/api/v1/category/allcategories');
            if (res?.data?.success) {
                setCategories(res?.data?.categories);
            }
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getAllCategories();
        getSingleProduct();
    }, []);

    const deleteHandler = async () => {
        try {
            let ans = window.prompt('Are you sure to delete');
            if(!ans) return;
            const res = await axios.delete(`${process.env.REACT_APP_API}/api/v1/products/productdelete/${id}`)
            console.log(res);
            navigate('/dashboard/admin/products');
        } catch (error) {

        }
    }
    const handleSubmit = async (event) => {
        event.preventDefault();

        const formData = new FormData();
        formData.append('name', name);
        formData.append('price', price);
        formData.append('description', description);
        formData.append('category', category ? category._id : null);
        formData.append('quantity', quantity);
        photo && formData.append('photo', photo);
        formData.append('shippingDone', shippingDone);

        for (let [key, value] of formData.entries()) {
            console.log(`${key}: ${value}`);
        }

        try {
            const res = await axios.put(`${process.env.REACT_APP_API}/api/v1/products/update-product/${id}`, formData);
            console.log(res.data);
        } catch (error) {
            console.log(error);
        }
    };

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        setPhoto(file);
        setPhotoName(file.name);
    };

    return (
        <Layout title={'Update-Product -admin - Ecommerce'}>
            <Box sx={{ display: 'flex' }}>
                <Box sx={{ flex: '0 0 240px' }}>
                    <AdminMenu />
                </Box>
                <Box sx={{ flex: '1', padding: '24px' }}>
                    <Container>
                        <Container maxWidth="lg">
                            <Grid container spacing={3}>
                                <Grid item xs={12}>
                                    <Typography variant="h4">Update product</Typography>
                                </Grid>
                                <Grid item xs={12}>
                                    <form onSubmit={handleSubmit}>
                                        <Grid container spacing={3}>
                                            <Grid item xs={12}>
                                                <TextField
                                                    label="Name"
                                                    variant="outlined"
                                                    fullWidth
                                                    value={name}
                                                    onChange={(e) => setName(e.target.value)}
                                                />
                                            </Grid>
                                            <Grid item xs={12}>
                                                <TextField
                                                    label="Price"
                                                    variant="outlined"
                                                    fullWidth
                                                    value={price}
                                                    onChange={(e) => setPrice(e.target.value)}
                                                />
                                            </Grid>
                                            <Grid item xs={12}>
                                                <TextField
                                                    label="Description"
                                                    variant="outlined"
                                                    fullWidth
                                                    multiline
                                                    value={description}
                                                    onChange={(e) => setDescription(e.target.value)}
                                                />
                                            </Grid>
                                            <Grid item xs={12}>
                                                <Autocomplete
                                                    id="combo-box-demo"
                                                    options={categories}
                                                    getOptionLabel={(category) => (category ? category.name : '')}
                                                    value={category}
                                                    onChange={(event, selectedCategory) => setCategory(selectedCategory)}
                                                    renderOption={(props, category) => (
                                                        <li {...props}>
                                                            <Typography variant="body1">{category.name}</Typography>
                                                        </li>
                                                    )}
                                                    renderInput={(params) => (
                                                        <TextField {...params} label="Search Category" variant="outlined" fullWidth />
                                                    )}
                                                />
                                            </Grid>
                                            <Grid item xs={12}>
                                                <TextField
                                                    label="Quantity"
                                                    variant="outlined"
                                                    fullWidth
                                                    value={quantity}
                                                    onChange={(e) => setQuantity(e.target.value)}
                                                />
                                            </Grid>
                                            <Grid item xs={12}>
                                                <input
                                                    accept="image/*"
                                                    id="photo"
                                                    type="file"
                                                    onChange={handleFileChange}
                                                    style={{ display: 'none' }}
                                                />
                                                <label htmlFor="photo">
                                                    <Button variant="contained" component="span">
                                                        Upload Photo
                                                    </Button>
                                                </label>
                                                {(photoName && (
                                                    <Typography variant="body1" sx={{ marginTop: '8px' }}>
                                                        Uploaded Photo: {photoName}
                                                    </Typography>
                                                ))}
                                            </Grid>
                                            <Grid item xs={12}>
                                                <FormControlLabel
                                                    control={<Switch checked={shippingDone} onChange={(e) => setShippingDone(e.target.checked)} />}
                                                    label="Shipping Done"
                                                />
                                            </Grid>
                                            <Grid item xs={12}>
                                                <Button variant="contained" type="submit">
                                                    Update Product
                                                </Button>
                                            </Grid>
                                        </Grid>
                                    </form>
                                    <Box sx={{ marginTop: '4px' }}>
                                        <Button variant="contained" color='error' onClick={deleteHandler}>
                                            Delete Product
                                        </Button>
                                    </Box>
                                </Grid>
                            </Grid>
                        </Container>
                    </Container>
                </Box>
            </Box>
        </Layout>
    )
}

export default UpdateProduct;
