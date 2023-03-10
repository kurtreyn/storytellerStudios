import React from 'react';
import '../styles/generalStyle.css';

import banner from '../assets/images/banner.png';

export default function Home() {
  return (
    <main className="page-container-container-flex-col width-100-percent height-100-vh">
      <header className="home-header">
        <img src={banner} alt="banner" className="top-banner" />
      </header>
      <p>Home</p>
    </main>
  );
}
