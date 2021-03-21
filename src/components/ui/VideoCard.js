import React from 'react';
import ReactPlayer from 'react-player';
import '../../styles/videography/videography.scss';
import { motion } from 'framer-motion';

import Card from '@material-ui/core/Card';
import { Divider } from '@material-ui/core';

const VideoCard = ({ url }) => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      transition={{ ease: 'easeOut', duration: 1 }}
    >
      <Card className="video__videoGrid__videoCard">
        <ReactPlayer url={url} />
        <div className="video__videoGrid__videoCard__textContent">
          <h2>Video Title</h2>
          <Divider />
          <h4>Brief Description</h4>
        </div>
      </Card>
    </motion.div>
  );
};

export default VideoCard;
