import React, { useContext } from 'react';
import ImageGrid from '../components/ui/ImageGrid';
import UploadForm from '../components/ui/UploadForm';
import '../styles/photography/photography.scss';
import { AuthContext } from '../auth/Auth';

const Photography = () => {
  const { currentUser } = useContext(AuthContext);

  return (
    <div className="photography__container">
      {currentUser ? <UploadForm /> : null}
      <ImageGrid />
    </div>
  );
};

export default Photography;
