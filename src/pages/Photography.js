import React from 'react';
import ImageGrid from '../components/ui/ImageGrid';
import UploadForm from '../components/ui/UploadForm';
import '../styles/photography/photography.scss';

const Photography = () => {
  return (
    <div className="photography__container">
      <UploadForm />
      <ImageGrid />
    </div>
  );
};

export default Photography;
