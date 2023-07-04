// import React, { useState } from 'react';
// import { Typography, TextField, Button, Grid, Paper, Box, Select, MenuItem } from '@mui/material';
// import axios from 'axios';

// const ProductDetails = ({ category }) => {
//     const [product, setProduct] = useState({
//         name: '',
//         description: '',
//         price: '',
//         category: '',
//         quantity: '',
//         photo: null,
//         shipping: false,
//     });

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setProduct((prevState) => ({
//             ...prevState,
//             [name]: value,
//         }));
//     };

//     const handlePhotoChange = (e) => {
//         const file = e.target.files[0];
//         setProduct((prevState) => ({
//             ...prevState,
//             photo: file,
//         }));
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         product.category = category;
//         // Do something with the product data (e.g., submit to API, update state)
//         const formData = new FormData();
//         formData.append('name', product.name);
//         formData.append('description', product.description);
//         formData.append('price', product.price);
//         formData.append('category', product.category);
//         formData.append('quantity', product.quantity);
//         formData.append('shipping', product.shipping);
//         formData.append('photo', product.photo);
//         try {
//             const res = await axios.post(`${process.env.REACT_APP_API}/api/v1/products/create-product`, formData);
//             if (res?.data?.success) {
//                 console.log('Product created:', product.name);
//             }
//         } catch (error) {
//             console.log(error);
//         }
//     };

//     return (
//         <div>
//             <Typography variant="h6">Product Details</Typography>
//             <Grid container spacing={2}>
//                 <Grid item xs={12} md={6}>
//                     <Paper elevation={3} sx={{ padding: 1, height: '90%' }}>
//                         {/* Image Upload */}
//                         <Typography variant="subtitle1">Upload Image</Typography>
//                         <input type="file" accept="image/*" onChange={handlePhotoChange} />

//                         {/* Image Preview */}
//                         {product.photo && (
//                             <Box
//                                 sx={{
//                                     display: 'flex',
//                                     flexDirection: 'column',
//                                     alignItems: 'center',
//                                     justifyContent: 'center',
//                                     marginTop: 2,
//                                     height: '50%',
//                                     width: '80%',
//                                 }}
//                             >
//                                 <Typography variant="subtitle1">Image Preview</Typography>
//                                 <img
//                                     src={URL.createObjectURL(product.photo)}
//                                     alt="Product"
//                                     style={{ width: '77%', objectFit: 'cover', height: '80%' }}
//                                 />
//                             </Box>
//                         )}
//                     </Paper>
//                 </Grid>
//                 <Grid item xs={12} md={6}>
//                     <Paper elevation={3} sx={{ padding: 2 }}>
//                         {/* Form */}
//                         <form onSubmit={handleSubmit}>
//                             <TextField
//                                 label="Name"
//                                 name="name"
//                                 value={product.name}
//                                 onChange={handleChange}
//                                 fullWidth
//                                 margin="normal"
//                             />
//                             <TextField
//                                 label="Description"
//                                 name="description"
//                                 value={product.description}
//                                 onChange={handleChange}
//                                 fullWidth
//                                 margin="normal"
//                             />
//                             <TextField
//                                 label="Price"
//                                 name="price"
//                                 value={product.price}
//                                 onChange={handleChange}
//                                 fullWidth
//                                 margin="normal"
//                             />
//                             <TextField
//                                 label="Quantity"
//                                 name="quantity"
//                                 value={product.quantity}
//                                 onChange={handleChange}
//                                 fullWidth
//                                 margin="normal"
//                             />
//                             <Select
//                                 label="Shipping"
//                                 name="shipping"
//                                 value={product.shipping}
//                                 onChange={handleChange}
//                                 fullWidth
//                                 margin="normal"
//                             >
//                                 <MenuItem value={false}>No</MenuItem>
//                                 <MenuItem value={true}>Yes</MenuItem>
//                             </Select>
//                             <Button type="submit" variant="contained" color="primary">
//                                 Create
//                             </Button>
//                         </form>
//                     </Paper>
//                 </Grid>
//             </Grid>
//         </div>
//     );
// };

// export default ProductDetails;
