import React from 'react';
import ExactHeader from '../ExactHeader/ExactHeader';
import Navbar from '../Navbar/Navbar';
import './Header.css';
const Header = () => {
    return (
        <div className="bgColor">
         <Navbar></Navbar>  
         <ExactHeader></ExactHeader>
        <div id="parabola"></div>
        </div>
    );
};

export default Header;