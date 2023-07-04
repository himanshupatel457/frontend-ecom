import React from 'react'
import Layout from '../../components/Layout/Layout'
import { Box, Button, Container, Grid, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import UserMenu from '../../components/UserMenu/UserMenu'
import { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react'
import { useAuth } from '../../Context/authContext'
import moment from 'moment/moment'



const Orders = () => {

    const [orders, setOrders] = useState([]);
    const [auth, setAuth] = useAuth();
    const getAllOrders = async () => {
        try {
            const { data } = await axios.get(`${process.env.REACT_APP_API}/api/v1/auth/orders`)
            console.log(data);
            setOrders(data)
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        if (auth?.token) getAllOrders();
    }, [auth?.token])


    return (
        <Layout title={'Orders - Ecommerce'}>
            <Box sx={{ display: 'flex' }}>
                <Box sx={{ flex: '0 0 240px' }}>
                    <UserMenu />
                </Box>
                <Box sx={{ flex: '1', padding: '24px' }}>
                    <Container maxWidth="lg">
                        <Grid container spacing={3}>
                            <Grid item xs={12}>
                                <Typography variant='h4'> Orders </Typography>
                                {orders?.map((order, index) => {
                                    return (
                                        <Box sx={{ borderStyle: 'solid', borderColor: 'black', borderRadius: '8px', margin: 1 }} key={index}>
                                            <TableContainer>
                                                <Table>
                                                    <TableHead>
                                                        <TableRow>
                                                            <TableCell>Serial No.</TableCell>
                                                            <TableCell>Status</TableCell>
                                                            <TableCell>Buyers</TableCell>
                                                            <TableCell>Orders</TableCell>
                                                            <TableCell>Payment</TableCell>
                                                            <TableCell>Quantity</TableCell>
                                                        </TableRow>
                                                    </TableHead>
                                                    <TableBody>
                                                        <TableRow>
                                                            <TableCell>{index + 1}</TableCell>
                                                            <TableCell>{order?.status}</TableCell>
                                                            <TableCell>{order?.buyer?.name}</TableCell>
                                                            <TableCell>{moment(order?.createdAt).fromNow()}</TableCell>
                                                            <TableCell>{order?.payment.success ? "Success" : "Failed"}</TableCell>
                                                            <TableCell>{order?.products?.length}</TableCell>
                                                        </TableRow>

                                                        {/* Add more rows as needed */}
                                                    </TableBody>
                                                </Table>
                                            </TableContainer>
                                            <Container>
                                                {
                                                    order?.products?.map((product, index) => (
                                                        <Box key={index} sx={{ display: 'flex', borderStyle: 'solid', borderColor: 'black', borderRadius: '8px', margin: 1 }}>
                                                            <Container>
                                                                {product._id && <img
                                                                    src={`${process.env.REACT_APP_API}/api/v1/products/productphoto/${product._id}`}
                                                                    alt={product.name}
                                                                    style={{ height: '200px', width: '200px', objectFit: 'contain' }}
                                                                />}
                                                            </Container>
                                                            <Container sx={{ textAlign: 'left', marginLeft: 0, margin: 2, padding: 3 }}>
                                                                <Typography variant='h4'>Name : {product.name}</Typography>
                                                                <Typography variant='h5'>Description :{product.description}</Typography>
                                                                <Typography variant='h4'> Price : Rs. {product.price}</Typography>
                                                            </Container>
                                                        </Box>
                                                    ))
                                                }
                                            </Container>
                                        </Box>
                                    )

                                })}
                            </Grid>
                        </Grid>
                    </Container>
                </Box>
            </Box>
        </Layout>
    )
}

export default Orders