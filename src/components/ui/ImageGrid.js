import React, { useState } from 'react';
import useFirestore from '../../hooks/useFirestore';
import '../../styles/imageGrid/imageGrid.scss';
import ImageModal from './ImageModal';
import { motion } from 'framer-motion';

const ImageGrid = () => {
  const { docs } = useFirestore('images');

  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <>
      <div className="imageGrid">
        {docs &&
          docs.map((doc) => (
            <motion.div
              className="imageGrid__imageWrap"
              onClick={() => setSelectedImage(doc.url)}
              key={docs.id}
              whileHover={{ opacity: 1 }}
              layout
            >
              <motion.img
                src={doc.url}
                alt="uploaded"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
              />
            </motion.div>
          ))}
      </div>
      {selectedImage && (
        <ImageModal image={selectedImage} setSelectedImage={setSelectedImage} />
      )}
    </>
  );
};

export default ImageGrid;
