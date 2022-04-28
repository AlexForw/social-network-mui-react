import { Box } from '@mui/material';
import React from 'react';
import ListSocial from '../ListSocial'
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import GroupIcon from '@mui/icons-material/Group';
import GroupsIcon from '@mui/icons-material/Groups';
import { Link } from 'react-router-dom';


const Leftbar = ({ sx }) => {
    return (
        <Box flex={1} p={2} sx={sx}>
            <Box >
                <Box position='fixed'>
                    <Link to='/MyProfile'>
                        <ListSocial href='#' icon={<AccountBoxIcon />} primary='My profile'></ListSocial>
                    </Link>
                    <Link to='/'>
                        <ListSocial href='#' icon={<NewspaperIcon />} primary='News'></ListSocial>
                    </Link>
                    <Link to='/messenger'>
                        <ListSocial href='#' icon={<ChatBubbleOutlineIcon />} primary='Messenger'></ListSocial>
                    </Link>
                    <Link to='/friends'>
                        <ListSocial href='#' icon={<GroupIcon />} primary='Friends'></ListSocial>
                    </Link>
                    <Link to='/groups'>
                        <ListSocial href='#' icon={<GroupsIcon />} primary='Groups'></ListSocial>
                    </Link>
                </Box>
            </Box>
        </Box>
    );
};

export default Leftbar;