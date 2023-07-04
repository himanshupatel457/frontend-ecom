import React, { useEffect, useState } from 'react';
import Layout from '../../components/Layout/Layout';
import axios from 'axios';
import { Box, Container, Grid, Typography, TextField, Button } from '@mui/material';
import Autocomplete from '@mui/material/Autocomplete';
import AdminMenu from '../../components/AdminMenu/AdminMenu';

const CreateProduct = () => {
    const [categories, setCategories] = useState([]);
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('');
    const [quantity, setQuantity] = useState('');
    const [photo, setPhoto] = useState(null);
    const [photoName, setPhotoName] = useState('');

    const getAllCategories = async () => {
        try {
            const res = await axios.get(`${process.env.REACT_APP_API}/api/v1/category/allcategories`);
            if (res?.data?.success) {
                setCategories(res?.data?.categories);
            }
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getAllCategories();
    }, []);

    const handleSubmit = async (event) => {
        event.preventDefault();

        const formData = new FormData();
        formData.append('name', name);
        formData.append('price', price);
        formData.append('description', description);
        formData.append('category', category ? category._id : null);
        formData.append('quantity', quantity);
        formData.append('photo', photo);

        // Log the entire form data
        for (let [key, value] of formData.entries()) {
            console.log(`${key}: ${value}`);
        }

        try {
            const res = await axios.post(`${process.env.REACT_APP_API}/api/v1/products/create-product`, formData);
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
        <Layout title={'Create-Product -admin - Ecommerce'}>
            <Box sx={{ display: 'flex' }}>
                <Box sx={{ flex: '0 0 240px' }}>
                    <AdminMenu />
                </Box>
                <Box sx={{ flex: '1', padding: '24px' }}>
                    <Container>
                        <Container maxWidth="lg">
                            <Grid container spacing={3}>
                                <Grid item xs={12}>
                                    <Typography variant="h4">Create product</Typography>
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
                                                {photoName && (
                                                    <Typography variant="body1" sx={{ marginTop: '8px' }}>
                                                        Uploaded Photo: {photoName}
                                                    </Typography>
                                                )}
                                            </Grid>
                                            <Grid item xs={12}>
                                                <Button variant="contained" type="submit">
                                                    Create Product
                                                </Button>
                                            </Grid>
                                        </Grid>
                                    </form>
                                </Grid>
                            </Grid>
                        </Container>
                    </Container>
                </Box>
            </Box>
        </Layout>
    );
};

export default CreateProduct;


































    // const [category, setCategory] = useState(null);
    // const [photo, setPhoto] = useState(null);
    // const [photoName, setPhotoName] = useState('');
    // const [name, setName] = useState('');
    // const [description, setDescription] = useState('');
    // const [price, setPrice] = useState('');
    // const [quantity, setQuantity] = useState('');










//     import React, { useEffect, useState } from 'react';
// import Layout from '../../components/Layout/Layout';
// import axios from 'axios';
// import { Box, Container, Grid, Typography, TextField, Button } from '@mui/material';
// import Autocomplete from '@mui/material/Autocomplete';
// import AdminMenu from '../../components/AdminMenu/AdminMenu';

// const CreateProduct = () => {
//   const [categories, setCategories] = useState([]);
//   const [category, setCategory] = useState(null);
//   const [selectedCategory, setSelectedCategory] = useState(null);
//   const [photo, setPhoto] = useState(null);
//   const [photoName, setPhotoName] = useState('');
//   const [name, setName] = useState('');
//   const [description, setDescription] = useState('');
//   const [price, setPrice] = useState('');
//   const [quantity, setQuantity] = useState('');

//   const getAllCategories = async () => {
//     try {
//       const res = await axios.get('${process.env.REACT_APP_API}/api/v1/category/allcategories');
//       if (res?.data?.success) {
//         setCategories(res?.data?.categories);
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   useEffect(() => {
//     getAllCategories();
//   }, []);

//   const handleCategorySelect = (event, selectedCategory) => {
//     setCategory(selectedCategory);
//   };

//   const handleFileChange = (event) => {
//     const file = event.target.files[0];
//     setPhoto(file);
//     setPhotoName(file.name);
//   };

//   const handleSubmit = async () => {
//     const productData = {
//       name,
//       description,
//       price,
//       quantity,
//       category: category ? category._id : null,
//       photo: photo,
//     };

//     try {
//       const res = await axios.post('${process.env.REACT_APP_API}/api/v1/products/create-product', productData);
//       console.log(res.data);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   const handleDisplaySelectedCategory = () => {
//     setSelectedCategory(category);
//     console.log(category);
//   };

//   return (
//     <Layout title={'Create-Product -admin - Ecommerce'}>
//       <Box sx={{ display: 'flex' }}>
//         <Box sx={{ flex: '0 0 240px' }}>
//           <AdminMenu />
//         </Box>
//         <Box sx={{ flex: '1', padding: '24px' }}>
//           <Container>
//             <Container maxWidth="lg">
//               <Grid container spacing={3}>
//                 <Grid item xs={12}>
//                   <Typography variant="h4">Create product</Typography>
//                 </Grid>
//                 <Grid item xs={12}>
//                   <Grid container spacing={3}>
//                     <Grid item xs={12}>
//                       <TextField
//                         label="Name"
//                         variant="outlined"
//                         fullWidth
//                         value={name}
//                         onChange={(e) => setName(e.target.value)}
//                       />
//                     </Grid>
//                     <Grid item xs={12}>
//                       <TextField
//                         label="Description"
//                         variant="outlined"
//                         fullWidth
//                         multiline
//                         value={description}
//                         onChange={(e) => setDescription(e.target.value)}
//                       />
//                     </Grid>
//                     <Grid item xs={12} md={6}>
//                       <TextField
//                         label="Price"
//                         variant="outlined"
//                         fullWidth
//                         value={price}
//                         onChange={(e) => setPrice(e.target.value)}
//                       />
//                     </Grid>
//                     <Grid item xs={12} md={6}>
//                       <TextField
//                         label="Quantity"
//                         variant="outlined"
//                         fullWidth
//                         value={quantity}
//                         onChange={(e) => setQuantity(e.target.value)}
//                       />
//                     </Grid>
//                     <Grid item xs={12}>
//                       <Autocomplete
//                         id="combo-box-demo"
//                         options={categories}
//                         getOptionLabel={(category) => category ? category.name : ""}
//                         value={category}
//                         onChange={handleCategorySelect}
//                         renderOption={(props, category) => (
//                           <li {...props}>
//                             <Typography variant="body1">{category.name}</Typography>
//                           </li>
//                         )}
//                         renderInput={(params) => (
//                           <TextField
//                             {...params}
//                             label="Search Category"
//                             variant="outlined"
//                             fullWidth
//                           />
//                         )}
//                       />
//                     </Grid>
//                     <Grid item xs={12}>
//                       <input
//                         accept="image/*"
//                         id="photo"
//                         type="file"
//                         onChange={handleFileChange}
//                         style={{ display: 'none' }}
//                       />
//                       <label htmlFor="photo">
//                         <Button variant="contained" component="span">
//                           Upload Photo
//                         </Button>
//                       </label>
//                       {photoName && (
//                         <Typography variant="body1" sx={{ marginTop: '8px' }}>
//                           Uploaded Photo: {photoName}
//                         </Typography>
//                       )}
//                     </Grid>
//                     <Grid item xs={12}>
//                       <Button variant="contained" onClick={handleSubmit}>
//                         Create Product
//                       </Button>
//                     </Grid>
//                     <Grid item xs={12}>
//                       <Button variant="contained" onClick={handleDisplaySelectedCategory}>
//                         Display Selected Category
//                       </Button>
//                       {selectedCategory && (
//                         <Typography variant="body1" sx={{ marginTop: '8px' }}>
//                           Selected Category: {selectedCategory.name}
//                         </Typography>
//                       )}
//                     </Grid>
//                   </Grid>
//                 </Grid>
//               </Grid>
//             </Container>
//           </Container>
//         </Box>
//       </Box>
//     </Layout>
//   );
// };

// export default CreateProduct;






