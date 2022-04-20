import { Box } from '@mui/material';
import React from 'react';
import ListSocial from '../assets/ListSocial'
import Avatar from '@mui/material/Avatar';
import AddIcon from '@mui/icons-material/Add';
import Card from '@mui/material/Card';
import ListWrapper from '../assets/ListWrapper';


const Rightbar = () => {
    return (
        <Box flex={2} p={2} sx={{ display: { xs: 'none', md: 'block' } }}>

            <ListWrapper/>
            
            <Card>
                <Box sx={{ fontSize: '20px', padding: 2, fontWeight: 500 }}>May be your Friend!</Box>
                <ListSocial primary='Alan' icon={<Avatar />} optionalIcon={<AddIcon onClick={()=>console.log(2)} sx={{ '&:hover': {transition: 'all 0.4s ease-in', color: 'green', transform:'scale(1.36)',fontWeight:'900' }, '&:active':{transition: 'all 0.2s ease-in',transform:'scale(0.8)'} }} />} />
                <ListSocial primary='Indus' icon={<Avatar />} optionalIcon={<AddIcon sx={{ '&:hover': {transition: 'all 0.4s ease-in', color: 'green', transform:'scale(1.36)',fontWeight:'900' }, '&:active':{transition: 'all 0.2s ease-in',transform:'scale(0.8)'} }}/>} />
                <ListSocial primary='Grisha' icon={<Avatar />} optionalIcon={<AddIcon sx={{ '&:hover': {transition: 'all 0.4s ease-in', color: 'green', transform:'scale(1.36)',fontWeight:'900' }, '&:active':{transition: 'all 0.2s ease-in',transform:'scale(0.8)'} }}/>} />
                <ListSocial primary='Alexey' icon={<Avatar />} optionalIcon={<AddIcon sx={{ '&:hover': {transition: 'all 0.4s ease-in', color: 'green', transform:'scale(1.36)',fontWeight:'900' }, '&:active':{transition: 'all 0.2s ease-in',transform:'scale(0.8)'} }}/>} />
            </Card>
        </Box>
    );
};

export default Rightbar;