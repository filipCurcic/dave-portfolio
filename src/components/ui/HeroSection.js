import React from 'react';
import '../../styles/hero/hero.css';
import '../../styles/global.css';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <div className="hero__container">
      <Link to="/photography">
        <div className="content1 flex flex-c">
          <h1>photo</h1>
        </div>
      </Link>
      <Link to="/videography">
        <div className="content2 flex flex-c">
          <h1>video</h1>
        </div>
      </Link>
      <Link to="/panorama">
        <div className="content3 flex flex-c">
          <h1>panorama</h1>
        </div>
      </Link>
    </div>
  );
};

export default HeroSection;
