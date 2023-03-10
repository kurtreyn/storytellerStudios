import React from 'react';
import './footer.css';

import facebookIcon from '../../assets/icons/facebookicon400x325.png';
import youtubeIcon from '../../assets/icons/youtubeicon400x325.png';
import storytellerIcon from '../../assets/icons/storytellericon400x325.png';

import { LINKS as links } from '../../global/LINKS';

export default function Footer() {
  const goToPage = (page) => {
    window.open(page);
  };
  return (
    <footer className="row footer">
      <div className="col-3 col-sm-3 col-md-3 col-lg-3 col-xl-3 footer-img-wrapper">
        <img
          src={facebookIcon}
          alt="facebook icon"
          className="footer-icon is-link"
          onClick={() => goToPage(links.facebook)}
        />
      </div>
      <div className="col-3 col-sm-3 col-md-3 col-lg-3 col-xl-3 footer-img-wrapper">
        <img
          src={storytellerIcon}
          alt="storyteller icon"
          className="footer-icon is-link"
        />
      </div>
      <div className="col-3 col-sm-3 col-md-3 col-lg-3 col-xl-3 footer-img-wrapper">
        <img
          src={youtubeIcon}
          alt="youtube icon"
          className="footer-icon is-link"
          onClick={() => goToPage(links.youtube)}
        />
      </div>
    </footer>
  );
}
