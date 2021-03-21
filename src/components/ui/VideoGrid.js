import React from 'react';
import '../../styles/videography/videography.scss';
import VideoCard from './VideoCard';

const VideoGrid = () => {
  return (
    <div className="video__videoGrid">
      <VideoCard url="https://www.youtube.com/watch?v=qTPG9biTi0s" />
      <VideoCard url="https://www.youtube.com/watch?v=qTPG9biTi0s" />
      <VideoCard url="https://www.youtube.com/watch?v=qTPG9biTi0s" />
      <VideoCard url="https://www.youtube.com/watch?v=qTPG9biTi0s" />
      <VideoCard url="https://www.youtube.com/watch?v=qTPG9biTi0s" />
      <VideoCard url="https://www.youtube.com/watch?v=qTPG9biTi0s" />
    </div>
  );
};

export default VideoGrid;
