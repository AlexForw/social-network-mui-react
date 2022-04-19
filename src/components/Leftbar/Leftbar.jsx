import { Box } from '@mui/material';
import React from 'react';
import ListSocial from '../assets/ListSocial'

const Leftbar = () => {
    return (
        <Box flex={1} p={2} sx={{ display: { xs: 'none', md: 'block' } }}>
            <ListSocial>
                
            </ListSocial>
        </Box>
    );
};

export default Leftbar;