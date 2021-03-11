import React from 'react';
import '../../styles/hero/hero.css';
import '../../styles/global.css';

const HeroSection = () => {
  return (
    <div className="hero__container">
      <div className="content1 flex flex-c">
        <h1>photo</h1>
      </div>
      <div className="content2 flex flex-c">
        <h1>video</h1>
      </div>
      <div className="content3 flex flex-c">
        <h1>panorama</h1>
      </div>
    </div>
  );
};

export default HeroSection;
