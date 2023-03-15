import React from 'react';
import NavBar from '../components/NavBar/NavBar';
import Footer from '../components/Footer/Footer';
import PosterContainer from '../components/PosterContainer/PosterContainer';
import CarouselComponent from '../components/Carousel/CarouselComponent';
import '../styles/generalStyle.css';

import banner from '../assets/images/banner.png';

import { tempData } from '../temp/tempData';

function openWindow(url) {
  window.open(url, '_blank');
}

export default function Home() {
  return (
    <main className="container-fluid page-container-container-flex-col width-100-percent margin-0">
      <header className="home-header margin-0">
        <img src={banner} alt="banner" className="top-banner-img" />
      </header>
      <NavBar />
      <div className="flex-row-center">
        <h1 className="stnd-h1 color-white">Storyteller Studios</h1>
      </div>
      <div className="main-content">
        <div className="row flex-row-center">
          {tempData.map((item) => {
            return <PosterContainer key={item.id} image={item.poster_image} />;
          })}
        </div>
        <div className="row carousel-section">
          <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
            <CarouselComponent />
          </div>
          <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
            <p className="color-white">Welcome to Storyteller Studios</p>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
