import React from 'react';
import Navbar from "../components/Navbar";
import HeaderContent from "../components/HeadContent"
import AdviseECommersce from '../components/AdviseECommersce';
import MainContent from '../components/MainContent';
import Owners from '../components/Owners';
import Supports from '../components/Supports';
import Footer from "../components/Footer";
const Home = () => {
    return (
        <>
            <div className="main-header">
                <Navbar />
                <img src="/assets/images/header-back-img.png" alt="" />
                <HeaderContent />

                <AdviseECommersce />
            </div>
            
                <MainContent />

                <Owners />

                <Supports />

                <Footer /> 
        </>
    );
};

export default Home;