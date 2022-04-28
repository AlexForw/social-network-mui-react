import { Box } from '@mui/material';
import React from 'react';
import ListSocial from '../ListSocial'
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import GroupIcon from '@mui/icons-material/Group';
import GroupsIcon from '@mui/icons-material/Groups';
import { NavLink } from 'react-router-dom';


const Leftbar = ({ sx }) => {
    return (
        <Box flex={1} p={2} sx={sx}>
            <Box >
                <Box position='fixed'>
                    <NavLink to='/myprofile'>
                        <ListSocial icon={<AccountBoxIcon />} primary='My profile'></ListSocial>
                    </NavLink>

                    <NavLink to='/'>
                        <ListSocial icon={<NewspaperIcon />} primary='News'></ListSocial>
                    </NavLink>
                    
                    <NavLink to='/messenger'>
                        <ListSocial icon={<ChatBubbleOutlineIcon />} primary='Messenger'></ListSocial>
                    </NavLink>

                    <NavLink to='/friends'>
                        <ListSocial icon={<GroupIcon />} primary='Friends'></ListSocial>
                    </NavLink>

                    <NavLink to='/groups'>
                        <ListSocial icon={<GroupsIcon />} primary='Groups'></ListSocial>
                    </NavLink>
                </Box>
            </Box>
        </Box>
    );
};

export default Leftbar;