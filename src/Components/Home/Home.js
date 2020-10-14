import React from 'react';
import BrandIcon from '../BrandIcon/BrandIcon';
import Feedback from '../Feedback/Feedback';

import Header from '../Header/Header';
import MainFooter from '../MainFooter/MainFooter';
import OurWorks from '../OurWorks/OurWorks';
import ProvideService from '../ProviderService/ProvideService';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <BrandIcon></BrandIcon>
            <ProvideService></ProvideService>
            <OurWorks></OurWorks>
            <Feedback></Feedback>
            <MainFooter></MainFooter>
        </div>
    );
};

export default Home;