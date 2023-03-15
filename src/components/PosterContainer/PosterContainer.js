import React from 'react';
import './posterContainer.css';

export default function PosterContainer({ image }) {
  return (
    <div className="poster-container">
      <img src={image} alt="movie poster" className="poster-image" />
    </div>
  );
}
