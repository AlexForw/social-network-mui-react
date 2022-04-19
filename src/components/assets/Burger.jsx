import React from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import { IconButton } from '@mui/material';


const Burger = () => {
    return (
        <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2, display: { xs: 'block', md: 'none' } }}
        >
            <MenuIcon />
        </IconButton>
    );
};

export default Burger;