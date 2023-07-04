import React, { useState } from 'react';
import { Snackbar, Slide, Alert } from '@mui/material';

function TransitionLeft(props) {
    return <Slide {...props} direction="left" />;
}

const SuccessSnackbar = ({ message }) => {
    const [open, setOpen] = useState(true);

    const handleSnackbarClose = () => {
        setOpen(false);
    };

    return (
        <Snackbar
            open={open}
            autoHideDuration={6000}
            onClose={handleSnackbarClose}
            TransitionComponent={TransitionLeft}
        >
            <Alert onClose={handleSnackbarClose} severity="success" sx={{ width: '100%' }}>
                {message}
            </Alert>
        </Snackbar>
    );
};

export default SuccessSnackbar;
