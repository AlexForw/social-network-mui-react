import { Box } from '@mui/material';
import React from 'react';
import ListSocial from '../assets/ListSocial'
import Avatar from '@mui/material/Avatar';
import AddIcon from '@mui/icons-material/Add';

const Rightbar = () => {
    return (
        <Box flex={2} p={2} sx={{ display: { xs: 'none', md: 'block' } }}>
            <Box sx={{ border: '2px solid black' }}>
                <Box sx={{ fontSize: '20px', padding: 2, fontWeight: 500 }}>May be your Friend!</Box>
                <ListSocial primary='Alan' icon={<Avatar />} addIcon={<AddIcon sx={{ '&:hover': {fontSize:'large', transition: 'all 0.4s ease-in', color: 'green', transform:'scale(2)',fontWeight:'900' }, '&:active':{transition: 'all 0.2s ease-in',fontSize:'20px'} }} />} />
                <ListSocial primary='Indus' icon={<Avatar />} addIcon={<AddIcon />} />
                <ListSocial primary='Grisha' icon={<Avatar />} addIcon={<AddIcon />} />
                <ListSocial primary='Alexey' icon={<Avatar />} addIcon={<AddIcon />} />
            </Box>
        </Box>
    );
};

export default Rightbar;