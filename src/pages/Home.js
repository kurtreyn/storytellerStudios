import React from 'react';
import NavBar from '../components/NavBar/NavBar';
import Footer from '../components/Footer/Footer';
import '../styles/generalStyle.css';

import banner from '../assets/images/banner.png';

export default function Home() {
  return (
    <>
      <main className="container-fluid page-container-container-flex-col width-100-percent height-100-vh margin-0 min-height-600">
        <header className="home-header margin-0">
          <img src={banner} alt="banner" className="top-banner-img" />
        </header>
        <NavBar />
        <div className="top-content min-height-600">
          <p className="color-white">Hello there</p>
        </div>
        <Footer />
      </main>
    </>
  );
}
