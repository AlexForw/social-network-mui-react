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
import PaidOutlinedIcon from '@mui/icons-material/PaidOutlined';
import SportsBasketballOutlinedIcon from '@mui/icons-material/SportsBasketballOutlined';
import PublicOutlinedIcon from '@mui/icons-material/PublicOutlined';
import GavelOutlinedIcon from '@mui/icons-material/GavelOutlined';
import ComputerOutlinedIcon from '@mui/icons-material/ComputerOutlined';
import AttractionsOutlinedIcon from '@mui/icons-material/AttractionsOutlined';
import PsychologyOutlinedIcon from '@mui/icons-material/PsychologyOutlined';
import TimeToLeaveOutlinedIcon from '@mui/icons-material/TimeToLeaveOutlined';



const Rightbar = ({setKindOfNews}) => {
    return (
        <Box flex={2} p={2} sx={{ display: { xs: 'none', bmd: 'block' } }}>

            <Box flex={4}>

                <Box sx={{ mb: 2 }}>
                    <ListSocial primary='Podcasts' icon={<HearingIcon />} />
                    <ListSocial primary='Photos' icon={<PhotoIcon />} />
                    <ListSocial primary='Videos' icon={<OndemandVideoIcon />} />
                    <ListWrapper titleText='News' >
                        <ListSocial onClick={() => setKindOfNews('business')} sx={{ pl: 4, pt: 0, pb: 0 }} primary='Business' icon={<PaidOutlinedIcon />} />
                        <ListSocial sx={{ pl: 4, pt: 0, pb: 0 }} primary='Sport' icon={<SportsBasketballOutlinedIcon />} />
                        <ListSocial sx={{ pl: 4, pt: 0, pb: 0 }} primary='World' icon={<PublicOutlinedIcon />} />
                        <ListSocial sx={{ pl: 4, pt: 0, pb: 0 }} primary='Politics' icon={<GavelOutlinedIcon />} />
                        <ListSocial sx={{ pl: 4, pt: 0, pb: 0 }} primary='Technology' icon={<ComputerOutlinedIcon />} />
                        <ListSocial sx={{ pl: 4, pt: 0, pb: 0 }} primary='Entertainment' icon={<AttractionsOutlinedIcon />} />
                        <ListSocial sx={{ pl: 4, pt: 0, pb: 0 }} primary='Science' icon={<PsychologyOutlinedIcon />} />
                        <ListSocial sx={{ pl: 4, pt: 0, pb: 0 }} primary='Cars' icon={<TimeToLeaveOutlinedIcon />} />
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