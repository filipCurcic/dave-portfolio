import React, { useContext } from 'react';
import VideoGrid from '../components/ui/VideoGrid';
import VideoUploadForm from '../components/ui/VideoUploadForm';
import '../styles/videography/videography.scss';
import { AuthContext } from '../auth/Auth';
const Videography = () => {
  const { currentUser } = useContext(AuthContext);
  return (
    <div className="video flex flex-c flex-fd-c">
      {currentUser ? <VideoUploadForm /> : null}

      <VideoGrid />
    </div>
  );
};

export default Videography;
