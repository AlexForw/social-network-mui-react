import { Box } from '@mui/material';
import React from 'react';
import ListSocial from '../assets/ListSocial'
import Avatar from '@mui/material/Avatar';
import AddIcon from '@mui/icons-material/Add';
import Card from '@mui/material/Card';
import ListWrapper from '../assets/ListWrapper';
import HearingIcon from '@mui/icons-material/Hearing';
import PhotoIcon from '@mui/icons-material/Photo';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';

const Rightbar = () => {
    return (
        <Box flex={2} p={2} sx={{ display: { xs: 'none', bmd: 'block' } }}>

            <Box flex={4}>

                <Box sx={{ mb: 2 }}>
                    <ListWrapper titleText='News' >
                        <ListSocial sx={{ pl: 4, pt: 0, pb: 0 }} primary='Photos' icon={<PhotoIcon />} />
                        <ListSocial sx={{ pl: 4, pt: 0, pb: 0 }} primary='Videos' icon={<OndemandVideoIcon />} />
                        <ListSocial sx={{ pl: 4, pt: 0, pb: 0 }} primary='Podcasts' icon={<HearingIcon />} />
                    </ListWrapper>
                </Box>

                <Card>
                    <Box sx={{ fontSize: '20px', padding: 2, fontWeight: 500 }}>People you may know:</Box>
                    <ListSocial primary='Alan' icon={<Avatar />} optionalIcon={<AddIcon onClick={() => console.log(2)} sx={{ '&:hover': { transition: 'all 0.4s ease-in', color: 'green', transform: 'scale(1.36)', fontWeight: '900' }, '&:active': { transition: 'all 0.2s ease-in', transform: 'scale(0.8)' } }} />} />
                    <ListSocial primary='Indus' icon={<Avatar />} optionalIcon={<AddIcon sx={{ '&:hover': { transition: 'all 0.4s ease-in', color: 'green', transform: 'scale(1.36)', fontWeight: '900' }, '&:active': { transition: 'all 0.2s ease-in', transform: 'scale(0.8)' } }} />} />
                    <ListSocial primary='Grisha' icon={<Avatar />} optionalIcon={<AddIcon sx={{ '&:hover': { transition: 'all 0.4s ease-in', color: 'green', transform: 'scale(1.36)', fontWeight: '900' }, '&:active': { transition: 'all 0.2s ease-in', transform: 'scale(0.8)' } }} />} />
                    <ListSocial primary='Alexey' icon={<Avatar />} optionalIcon={<AddIcon sx={{ '&:hover': { transition: 'all 0.4s ease-in', color: 'green', transform: 'scale(1.36)', fontWeight: '900' }, '&:active': { transition: 'all 0.2s ease-in', transform: 'scale(0.8)' } }} />} />
                </Card>

            </Box>
        </Box>
    );
};

export default Rightbar;