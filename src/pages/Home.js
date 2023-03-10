import React from 'react';
import '../styles/generalStyle.css';

import banner from '../assets/images/banner.png';

export default function Home() {
  return (
    <main className="page-container-container-flex-col width-100-percent height-100-vh margin-0">
      <header className="home-header margin-0">
        <img src={banner} alt="banner" className="top-banner-img" />
      </header>
      <p>Home</p>
    </main>
  );
}
