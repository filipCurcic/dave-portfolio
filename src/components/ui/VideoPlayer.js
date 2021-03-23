import React from 'react';
import '../../styles/videoPlayer/videoPlayer.scss';
const VideoPlayer = ({ embedId }) => {
  return (
    <div className="videoPlayer">
      <iframe
        width="853px"
        height="480px"
        src={`https://www.youtube.com/embed/${embedId}`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded youtube"
      />
    </div>
  );
};

export default VideoPlayer;
