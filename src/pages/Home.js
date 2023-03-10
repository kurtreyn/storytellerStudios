import React from 'react';
import NavBar from '../components/NavBar/NavBar';
import Footer from '../components/Footer/Footer';
import ImageSlider from '../components/ImageSlider/ImageSlider';
import '../styles/generalStyle.css';

import banner from '../assets/images/banner.png';

export default function Home() {
  return (
    <main className="container-fluid page-container-container-flex-col width-100-percent height-100-vh margin-0">
      <header className="home-header margin-0">
        <img src={banner} alt="banner" className="top-banner-img" />
      </header>
      <NavBar />
      <div className="row content-container min-height-600">
        <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
          <ImageSlider />
        </div>
        <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6"></div>
      </div>
      <Footer />
    </main>
  );
}
