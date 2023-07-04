// import React from 'react';
// import { Link as RouterLink, useNavigate } from 'react-router-dom';
// import { Box, Button, Card, CardContent, CardMedia, Typography } from '@mui/material';
// import { useCart } from '../../Context/cartContext';
// const ProductCard = ({ name, description, price, quantity, photo, slug ,product}) => {


//     const navigate = useNavigate();
//     const [cart,setCart] = useCart();

//     return (
//         <Card sx={{ width: '20%', maxHeight: '30%', margin: '16px' }}>
//             <CardMedia
//                 component="img"
//                 height="10%"
//                 width="auto"
//                 image={`${process.env.REACT_APP_API}/api/v1/products/productphoto/${photo}`}
//                 alt={name}
//                 sx={{ objectFit: 'contain' }}
//             />
//             <CardContent>
//                 <Typography variant="h6" component="div">
//                     <RouterLink to={`http://localhost:3000/dashboard/admin/update-product/${slug}`}>
//                         {name}
//                     </RouterLink>
//                 </Typography>
//                 <Typography variant="body2" color="text.secondary">
//                     {description}
//                 </Typography>
//                 <Typography variant="subtitle1" color="primary" sx={{ marginTop: '16px' }}>
//                     Price: ${price}
//                 </Typography>
//                 <Typography variant="body2" color="text.secondary" sx={{ marginTop: '8px' }}>
//                     Quantity: {quantity}
//                 </Typography>
//             </CardContent>
//             <Box>
//                 <Button onClick={()=>{
//                     setCart([...cart,product]);
//                     localStorage.setItem('cart',JSON.stringify([...cart,product]))
//                 }} >Add to Cart</Button>
//                 <Button onClick={() => navigate(`/product/${slug}`)}>Details</Button>
//             </Box>
//         </Card>
//     );
// };

// export default ProductCard;

















import React from 'react';
import { Link, Link as RouterLink, useNavigate } from 'react-router-dom';
import { Box, Button, Card, CardContent, CardMedia, Typography } from '@mui/material';
import { useCart } from '../../Context/cartContext';
import './ProductCard.scss';

const ProductCard = ({ name, description, price, quantity, photo, slug, product }) => {
    const navigate = useNavigate();
    const [cart, setCart] = useCart();

    return (
        <Card className="product-card">
            <CardMedia
                component="img"
                height="10%"
                width="auto"
                image={`${process.env.REACT_APP_API}/api/v1/products/productphoto/${photo}`}
                alt={name}
                className="product-card__image"
            />
            <CardContent className="product-card__content">
                <Typography variant="h6" component="div" align="center" sx={{ fontWeight: 'bold', textTransform: 'capitalize' }}>
                    <RouterLink
                        to={`http://${window.location.host}/dashboard/admin/update-product/${slug}`}
                        style={{ textDecoration: 'none', color: 'inherit' }}
                    >
                        {name}
                    </RouterLink>
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
                    <strong>Description:</strong> {description}
                </Typography>

                <Typography variant="subtitle2" color="text.primary" className="product-card__quantity" sx={{ mt: 1 }}>
                    <strong>Quantity:</strong> {quantity}
                </Typography>
                <Typography variant="subtitle1" color="primary" className="product-card__price" sx={{ mt: 2 }}>
                    Price: ${price}
                </Typography>
            </CardContent>
            <Box className="product-card__buttons">
                <Button
                    onClick={() => {
                        setCart([...cart, product]);
                        localStorage.setItem('cart', JSON.stringify([...cart, product]));
                    }}
                >
                    Add to Cart
                </Button>
                <Button onClick={() => navigate(`/product/${slug}`)}>Details</Button>
            </Box>
        </Card>
    );
};

export default ProductCard;
