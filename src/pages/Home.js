import React from 'react';
import NavBar from '../components/NavBar/NavBar';
import Footer from '../components/Footer/Footer';
import PosterContainer from '../components/PosterContainer/PosterContainer';
import CarouselComponent from '../components/Carousel/CarouselComponent';
import '../styles/generalStyle.css';

import banner from '../assets/images/banner.png';

import { tempData } from '../data/tempData';
import { PAGE_CONTENT as content } from '../data/content';

export default function Home() {
  return (
    <main className="container-fluid page-container-flex-col">
      <header className="home-header margin-0">
        <img src={banner} alt="banner" className="top-banner-img" />
      </header>
      <NavBar />
      <div className="flex-row-center margin-top-40">
        <h1 className="stnd-h1 color-white">Storyteller Studios</h1>
      </div>
      <div className="main-content">
        <div className="row flex-row-center poster-section">
          {tempData.map((item) => {
            return (
              <PosterContainer
                key={item.id}
                image={item.poster_image}
                link={item.youtube_link}
              />
            );
          })}
        </div>
        <div className="row carousel-section">
          <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
            <CarouselComponent />
          </div>
          <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 flex-col-center home-page-text-area">
            <p className="stnd-text color-white">{content.home_page_para}</p>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
