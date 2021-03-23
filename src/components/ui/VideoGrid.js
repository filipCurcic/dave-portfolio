import React from 'react';
import '../../styles/videography/videography.scss';
import VideoCard from './VideoCard';
import useFirestore from '../../hooks/useFirestore';
import { motion } from 'framer-motion';
const VideoGrid = () => {
  const { docs } = useFirestore('videos');
  console.log(docs);
  return (
    <div className="video__videoGrid">
      {docs &&
        docs.map((doc) => (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ ease: 'easeOut', duration: 1 }}
          >
            <VideoCard
              url={doc.url}
              title={doc.title}
              description={doc.description}
              id={doc.id}
              key={doc.id}
              layout
            />
          </motion.div>
        ))}
    </div>
  );
};

export default VideoGrid;
