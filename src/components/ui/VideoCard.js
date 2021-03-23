import React, { useContext } from 'react';
import '../../styles/videography/videography.scss';
import { motion } from 'framer-motion';
import { AuthContext } from '../../auth/Auth';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import Card from '@material-ui/core/Card';
import { Divider } from '@material-ui/core';
import VideoPlayer from './VideoPlayer';

import { projectFirestore } from '../../firebase/config';

const VideoCard = ({ url, title, description, id }) => {
  const { currentUser } = useContext(AuthContext);
  const deleteVideo = (docId) => {
    projectFirestore.collection('videos').doc(docId).delete();
  };
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      transition={{ ease: 'easeOut', duration: 1 }}
    >
      <Card className="video__videoGrid__videoCard">
        <VideoPlayer embedId={url} />
        <div className="video__videoGrid__videoCard__textContent">
          <div
            className="flex flex-ai-c"
            style={{ justifyContent: 'space-between', width: '100%' }}
          >
            <h2>{title}</h2>
            {currentUser && (
              <FontAwesomeIcon
                className="video__videoGrid__videoCard__textContent__deleteIcon"
                icon={faTrashAlt}
                onClick={() => deleteVideo(id)}
              />
            )}
          </div>
          <Divider />
          <h4>{description}</h4>
        </div>
      </Card>
    </motion.div>
  );
};

export default VideoCard;
