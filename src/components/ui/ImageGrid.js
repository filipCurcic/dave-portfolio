import React, { useState } from 'react';
import useFirestore from '../../hooks/useFirestore';
import '../../styles/imageGrid/imageGrid.scss';
import ImageModal from './ImageModal';
import { motion } from 'framer-motion';
import Spinner from './Spinner';

const ImageGrid = () => {
  const { docs } = useFirestore('images');

  const [selectedImage, setSelectedImage] = useState(null);
  console.log(docs);

  if (docs.length === 0) {
    return <Spinner />;
  }

  return (
    <>
      <div className="imageGrid">
        {docs &&
          docs.map((doc) => (
            <motion.div
              className="imageGrid__imageWrap"
              onClick={() => setSelectedImage(doc.url)}
              key={docs.id}
              whileHover={{ filter: 'brightness(80%)' }}
              layout
            >
              <motion.img
                onError={() => <div></div>}
                src={doc.url}
                alt="uploaded"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ ease: 'easeOut', duration: 1 }}
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
