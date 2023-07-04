import React, { useEffect, useState } from 'react';
import AdminMenu from '../../components/AdminMenu/AdminMenu';
import {
    Box,
    Container,
    Divider,
    FormControl,
    InputLabel,
    MenuItem,
    Select,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Typography
} from '@mui/material';
import Layout from '../../components/Layout/Layout';
import moment from 'moment';
import { useAuth } from '../../Context/authContext';
import axios from 'axios';

const AdminOrders = () => {
    const [status, setStatus] = useState(['Not Process', 'Processing', 'Shipped', 'Delivered', 'Cancel']);
    const [changeStatus, setChangeStatus] = useState('');
    const [orders, setOrders] = useState([]);
    const [auth, setAuth] = useAuth();

    const handleStatusChange = async (orderId, value) => {
        try {
            await axios.put(`${process.env.REACT_APP_API}/api/v1/auth/order-status/${orderId}`, {
                status: value
            });
            getAllOrders();
        } catch (error) {
            console.log(error);
        }
    };

    const getAllOrders = async () => {
        try {
            const { data } = await axios.get(`${process.env.REACT_APP_API}/api/v1/auth/admin-orders`);
            setOrders(data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        if (auth?.token) getAllOrders();
    }, [auth?.token]);

    return (
        <Layout title={'Create-category -admin - Ecommerce'}>
            <Box sx={{ display: 'flex' }}>
                <Box sx={{ flex: '0 0 240px' }}>
                    <AdminMenu />
                </Box>
                <Box alignContent={'center'} justifyContent={'center'} sx={{ flex: '1', padding: '24px' }}>
                    <Typography align='center'> All Orders </Typography>
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
                                                <TableCell>
                                                    <FormControl>
                                                        <InputLabel id="status-label">Select Status</InputLabel>
                                                        <Select
                                                            labelId="status-label"
                                                            id="status-select"
                                                            value={order.status}
                                                            onChange={(event) => handleStatusChange(order._id, event.target.value)}
                                                        >
                                                            {status.map((statusItem, index) => (
                                                                <MenuItem key={index} value={statusItem}>{statusItem}</MenuItem>
                                                            ))}
                                                        </Select>
                                                    </FormControl>
                                                </TableCell>
                                                <TableCell>{order?.buyer?.name}</TableCell>
                                                <TableCell>{moment(order?.createdAt).fromNow()}</TableCell>
                                                <TableCell>{order?.payment.success ? 'Success' : 'Failed'}</TableCell>
                                                <TableCell>{order?.products?.length}</TableCell>
                                            </TableRow>
                                        </TableBody>
                                    </Table>
                                </TableContainer>
                                <Container>
                                    {order?.products?.map((product, index) => (
                                        <Box key={index} sx={{ display: 'flex', borderStyle: 'solid', borderColor: 'black', borderRadius: '8px', margin: 1 }}>
                                            <Container>
                                                {product._id && (
                                                    <img
                                                        src={`${process.env.REACT_APP_API}/api/v1/products/productphoto/${product._id}`}
                                                        alt={product.name}
                                                        style={{ height: '200px', width: '200px', objectFit: 'contain' }}
                                                    />
                                                )}
                                            </Container>
                                            <Container sx={{ textAlign: 'left', marginLeft: 0, margin: 2, padding: 3 }}>
                                                <Typography variant='h4'>Name: {product.name}</Typography>
                                                <Typography variant='h5'>Description: {product.description}</Typography>
                                                <Typography variant='h4'>Price: Rs. {product.price}</Typography>
                                            </Container>
                                        </Box>
                                    ))}
                                </Container>
                            </Box>
                        );
                    })}
                </Box>
            </Box>
        </Layout>
    );
};

export default AdminOrders;
