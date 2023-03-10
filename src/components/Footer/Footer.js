import React from 'react';
import './footer.css';

import facebookIcon from '../../assets/icons/facebookicon400x325.png';
import youtubeIcon from '../../assets/icons/youtubeicon400x325.png';
import storytellerIcon from '../../assets/icons/storytellericon400x325.png';

const IconContainer = (icon) => {
  return <img src={icon} alt="icon" className="footer-icon" />;
};

export default function Footer() {
  return (
    <footer className="row footer">
      <div className="col-4 col-sm-4 col-md-4 col-lg-4 col-xl-4">
        <img src={facebookIcon} alt="facebook icon" className="footer-icon" />
      </div>
      <div className="col-4 col-sm-4 col-md-4 col-lg-4 col-xl-4">
        <img
          src={storytellerIcon}
          alt="storyteller icon"
          className="footer-icon"
        />
      </div>
      <div className="col-4 col-sm-4 col-md-4 col-lg-4 col-xl-4">
        <img src={youtubeIcon} alt="youtube icon" className="footer-icon" />
      </div>
    </footer>
  );
}
