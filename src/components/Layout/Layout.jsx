import React from 'react';
import Header from './components/assets/Header/Header';
import { Stack } from '@mui/material';
import Leftbar from './components/Leftbar/Leftbar';
import { Outlet } from 'react-router-dom';



const Layout = ({mode, setMode, setSearchNews}) => {
    return (
        <>
          <Header mode={mode} setMode={setMode} setSearchNews={setSearchNews} />
          <Stack direction="row" justifyContent="space-between">
            <Leftbar sx={{ display: { xs: 'none', md: 'block' }, marginRight: { xs: 8, bmd: 10 } }} />
            <Outlet />
          </Stack>
        </>
    );
};

export default Layout;