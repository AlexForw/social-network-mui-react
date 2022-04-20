import { Box } from '@mui/material';
import React from 'react';
import ListSocial from '../assets/ListSocial'
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import GroupIcon from '@mui/icons-material/Group';
import GroupsIcon from '@mui/icons-material/Groups';

const Leftbar = () => {
    return (
        <Box flex={1} p={2} sx={{ display: { xs: 'none', md: 'block' }, marginRight:{xs:8,bmd:10} }}>
            <Box >
                <Box position='fixed'>
                <ListSocial href='#' icon={<AccountBoxIcon />} primary='My profile'></ListSocial>
                <ListSocial href='#' icon={<NewspaperIcon />} primary='News'></ListSocial>
                <ListSocial href='#' icon={<ChatBubbleOutlineIcon />} primary='Messenger'></ListSocial>
                <ListSocial href='#' icon={<GroupIcon />} primary='Friends'></ListSocial>
                <ListSocial href='#' icon={<GroupsIcon />} primary='Groups'></ListSocial>
            </Box>
            </Box>
        </Box>
    );
};

export default Leftbar;