import React, { useEffect, useState } from 'react';
import { CircularProgress, Backdrop, Typography, Container } from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';

const Loader = ({path = 'login'}) => {
    const [timer, setTimer] = useState(3);
    const navigate = useNavigate();
    const location =  useLocation();
    useEffect(() => {
        const timeout = setTimeout(() => {
            setTimer((val) => val - 1);
        }, 1000);

        if (timer === 0) {
            navigate(`/${path}`,{
                state : location.pathname
            });
        }

        return () => clearTimeout(timeout);
    }, [timer, navigate,location,path]);


    return (
        <Backdrop open={true}>
            <Container style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Typography variant="body1" style={{ marginBottom: '16px' }}>
                    Redirecting to you in... {timer}
                </Typography>
                <div style={{ position: 'relative', width: '40px', height: '40px' }}>
                    <CircularProgress color="primary" style={{ position: 'absolute', top: '0', left: '0', right: '0', bottom: '0', margin: 'auto' }} />
                </div>
            </Container>
        </Backdrop>
    );
};

export default Loader;




