import { AppBar, Box, Toolbar } from '@mui/material';
import React from 'react';
import { AccessibilityNew } from '@mui/icons-material';
import Search from '../assets/Search';
import AccountIcon from '../assets/AccountIcon'
import Burger from '../assets/Burger';
import SwitchTime from '../assets/SwitchTime';


const Header = ({mode, setMode, setSearchNews}) => {


    return (

        <AppBar position='sticky'>
            <Toolbar sx={{
                display: 'flex',
                justifyContent: 'space-between',
            }}>
                <Burger />
                <Box p={2} variant='a' href='#'sx={{ display: { xs: 'none', md: 'block' }, fontSize: '24px' }}>Shelter</Box>
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