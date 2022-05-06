import React from 'react';
import Header from '../assets/Header/Header';
import { Outlet } from 'react-router-dom';



const LayoutForm = ({mode, setMode, setSearchNews}) => {
    return (
        <>
          <Header hidden='hidden' mode={mode} setMode={setMode} setSearchNews={setSearchNews} />
            <Outlet />
        </>
    );
};

export default LayoutForm;