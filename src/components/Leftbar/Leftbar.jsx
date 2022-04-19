import { Box } from '@mui/material';
import React from 'react';

const Leftbar = () => {
    return (
        <Box backgroundColor="red" flex={1} p={2} sx={{display:{xs:'none', md:'block'}}}>
            Left
        </Box>
    );
};

export default Leftbar;