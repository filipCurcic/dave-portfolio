import React, { useState } from 'react';
import useFirestore from '../../hooks/useFirestore';
import '../../styles/imageGrid/imageGrid.scss';
import ImageModal from './ImageModal';
import { motion } from 'framer-motion';
import Spinner from './Spinner';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { projectStorage, projectFirestore } from '../../firebase/config';
const ImageGrid = () => {
  const { docs } = useFirestore('images');
  console.log(docs);

  const [selectedImage, setSelectedImage] = useState(null);

  const storageRef = projectStorage.ref();

  if (docs.length === 0) {
    return <Spinner />;
  }

  const deleteImage = (id, ref) => {
    const imageRef = storageRef.child(ref);
    console.log(imageRef);
    imageRef
      .delete()
      .then(() => {
        projectFirestore.collection('images').doc(id).delete();
        console.log('deleted successfully');
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <div className="imageGrid">
        {docs &&
          docs.map((doc) => (
            <motion.div
              className="imageGrid__imageWrap"
              onClick={() => setSelectedImage(doc.url)}
              key={docs.id}
              layout
            >
              <FontAwesomeIcon
                className="imageGrid__deleteIcon"
                icon={faTrashAlt}
                onClick={() => deleteImage(doc.id, doc.imageName)}
              />
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
