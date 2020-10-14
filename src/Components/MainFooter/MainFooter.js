import React from 'react';
import Footer from '../Footer/Footer';
import './MainFooter.css';
const MainFooter = () => {
    return (
      <footer className="footer-area clear-both footerColor">
        <Footer></Footer>
        <div className="copyRight text-center">
          <p>Copyright-Orange labs 2020</p>
        </div>
      </footer>
    );
};

export default MainFooter;