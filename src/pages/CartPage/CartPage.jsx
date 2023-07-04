import React, { useEffect, useState } from 'react'
import Layout from '../../components/Layout/Layout'
import { Box, Button, Container, Divider, Typography } from '@mui/material'
import { useCart } from '../../Context/cartContext'
import { useAuth } from '../../Context/authContext'
import { useNavigate } from 'react-router-dom'
import DropIn from 'braintree-web-drop-in-react'
import axios from 'axios'

const CartPage = () => {
    const navigate = useNavigate();
    const [cart, setCart] = useCart();
    const [clientToken, setClientToken] = useState("");
    const [instance, setInstance] = useState("");
    const [loading, setLoading] = useState(false);
    const [auth, setAuth] = useAuth();

    const handleRemove = (productId) => {
        try {
            let cartCopy = [...cart];
            let index = cartCopy.findIndex((ele) => ele._id === productId);
            cartCopy.splice(index, 1);
            setCart(cartCopy);
            localStorage.setItem('cart', JSON.stringify(cartCopy));
        } catch (error) {
            console.log(error)
        }
    }

    const priceCalculator = () => {
        const total = cart.reduce((accumulator, product) => accumulator + product.price, 0);
        return total.toLocaleString('en-US', {
            style: 'currency',
            currency: 'INR',
        });
    };


    const getToken = async () => {
        try {
            const { data } = await axios.get(`${process.env.REACT_APP_API}/api/v1/products/braintree/gettoken`);
            setClientToken(data?.clientToken);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getToken();
    }, [auth?.token])


    const handlePayment = async () => {
        try {
            setLoading(true);
            const {nonce} = await instance.requestPaymentMethod();
            const {data} = await axios.post(`${process.env.REACT_APP_API}/api/v1/products/braintree/payment`,{
                nonce,
                cart
            })
            setLoading(false);
            localStorage.removeItem('cart');
            setCart([])
            navigate('/dashboard/user/orders')
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <Layout>
            <Box>
                <Box>
                    <Typography variant='h3' align='center'> {`Hello , ${auth?.token && auth?.user?.name} happy shopping `} </Typography>
                    <Typography variant='h4' align='center'>
                        {cart.length > 0
                            ? `You have ${cart.length} item${cart.length > 1 ? 's' : ''} in your wishlist${auth?.token ? '' : `, please login to check out`
                            }`
                            : `Your cart is empty`}
                    </Typography>
                    <Box sx={{ display: 'flex' }}>
                        <Container sx={{ margin: 2, textAlign: 'center', display: 'flex', flexDirection: 'column' }}>
                            <Typography variant='h3'>Cart Items</Typography>
                            {
                                cart?.map((product, index) => (
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
                                            <Button onClick={() => handleRemove(product._id)}>Remove</Button>
                                            {/* <Typography variant='h5'>{product.name}</Typography> */}
                                        </Container>
                                    </Box>
                                ))
                            }
                        </Container>

                        <Container sx={{ margin: 2, textAlign: 'center', display: 'flex', flexDirection: 'column' }} >
                            <Typography variant='h2'> Cart Summary </Typography>
                            <Typography variant='h5'> Total | Payment</Typography>
                            <Divider />
                            <Typography variant='h3'> Total : {priceCalculator()}</Typography>
                            {
                                auth?.user?.address ? (
                                    <>
                                        <Box>
                                            <Typography variant='h5'>Current Address</Typography>
                                            <Typography variant='h5'>{auth?.user?.address}</Typography>
                                            <Button onClick={() => navigate('/dashboard/user/profile')}> Update Address</Button>
                                        </Box>
                                    </>
                                ) : (
                                    <>
                                        <Box>
                                            {
                                                auth?.token ? (
                                                    <Button onClick={() => navigate('/dashboard/user/profile')} > update Address</Button>
                                                ) : (
                                                    <Button onClick={() => navigate('/login', {
                                                        state: '/cart'
                                                    })} > Please Login</Button>

                                                )
                                            }
                                        </Box>
                                    </>
                                )
                            }
                            {clientToken && (
                                <Box>
                                    <DropIn
                                        options={{ authorization: clientToken, paypal: { flow: "vault" } }}
                                        onInstance={(instance) => setInstance(instance)}
                                    />
                                    <Button disabled={loading || !instance || !auth?.user?.address} color="success" onClick={handlePayment}>
                                        {loading?'Loading ': 'Pay' }
                                    </Button>
                                </Box>
                            )}

                        </Container>
                    </Box>
                </Box>
            </Box>
        </Layout>
    )
}

export default CartPage