import React from 'react';
import BrandIcon from '../BrandIcon/BrandIcon';
import Header from '../Header/Header';
import ProvideService from '../ProviderService/ProvideService';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <BrandIcon></BrandIcon>
            <ProvideService></ProvideService>
        </div>
    );
};

export default Home;