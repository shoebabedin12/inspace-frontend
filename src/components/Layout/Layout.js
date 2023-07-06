import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import SocialIcon from '../SocialIcon/SocialIcon';
import Navbar from '../Navbar/Navbar';

const Layout = () => {
    return (
        <>
            <Header/>
            <Outlet/>
            <SocialIcon/>
            <Navbar/>
        </>
    );
};

export default Layout;