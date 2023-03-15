import React from 'react';
import './posterContainer.css';

export default function PosterContainer({ image, link }) {
  function openWindow(url) {
    window.open(url, '_blank');
  }
  return (
    <div className="poster-container">
      <img
        src={image}
        alt="movie poster"
        className="poster-image"
        onClick={() => openWindow(link)}
      />
    </div>
  );
}
