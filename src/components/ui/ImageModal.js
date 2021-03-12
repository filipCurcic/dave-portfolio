import React from 'react';
import ReactDom from 'react-dom';
import '../../styles/imageModal/imageModal.scss';
import { motion } from 'framer-motion';

const ImageModal = ({ image, setSelectedImage }) => {
  const handleClick = (e) => {
    //to prevent closing the modal by clicking in the image rather than the backdrop
    if (e.target.classList.contains('imageModal__backdrop')) {
      setSelectedImage(null);
    }
  };
  return ReactDom.createPortal(
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="imageModal__backdrop"
      onClick={handleClick}
    >
      <motion.img
        initial={{ y: '-100vh' }}
        animate={{ y: 0 }}
        src={image}
        alt="enlarged"
      />
    </motion.div>,
    document.getElementById('imagePortal')
  );
};

export default ImageModal;
