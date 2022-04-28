import { AppBar, Box, Toolbar, IconButton } from '@mui/material';
import React from 'react';
import { AccessibilityNew } from '@mui/icons-material';
import Search from '../Search';
import AccountIcon from '../AccountIcon'
import Burger from '../Burger';
import SwitchTime from '../SwitchTime';

const Header = ({mode, setMode, setSearchNews}) => {


    return (

        <AppBar position='sticky'>
            <Toolbar sx={{
                display: 'flex',
                justifyContent: 'space-between',
            }}>
                <Burger />
                <IconButton p={2} variant='a' href='#' sx={{ color:'white',borderRadius:3,display: { xs: 'none', md: 'block' }, fontSize: '24px', cursor:'pointer' }}>Shelter</IconButton>
                <AccessibilityNew fontSize='large' sx={{ display: { xs:'none',sm: 'block', md: 'none' } }} />
                <Search onChange={e => setSearchNews(e.target.value)}/>
                <Box display='flex' alignItems='center'>
                    <Box><SwitchTime mode={mode} setMode={setMode}/></Box>
                    <AccountIcon />
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default Header;