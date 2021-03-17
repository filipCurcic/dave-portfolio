import React from 'react';
import '../../styles/hero/hero.scss';
import '../../styles/_global.scss';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <div className="hero">
      <Link to="/photography">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ ease: 'easeOut', duration: 0.1 }}
          className="content1 flex flex-c"
          whileHover={{ filter: 'brightness(85%)' }}
        >
          <h1>photo</h1>
        </motion.div>
      </Link>
      <Link to="/videography">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ ease: 'easeOut', duration: 0.1 }}
          className="content2 flex flex-c"
          whileHover={{ filter: 'brightness(85%)' }}
        >
          <h1>video</h1>
        </motion.div>
      </Link>
      <Link to="/panorama">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ ease: 'easeOut', duration: 0.1 }}
          className="content3 flex flex-c"
          whileHover={{ filter: 'brightness(85%)' }}
        >
          <h1>panorama</h1>
        </motion.div>
      </Link>
    </div>
  );
};

export default HeroSection;
