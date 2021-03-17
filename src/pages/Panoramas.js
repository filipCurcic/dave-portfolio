import React from 'react';
import { Pannellum } from 'pannellum-react';
import panorama from '../images/panoramas/panotest-6.jpg';
import '../styles/panorama/panorama.scss';
const Panoramas = () => {
  return (
    <div className="panoramas">
      <Pannellum
        width="100%"
        height="700px"
        image={panorama}
        pitch={10}
        yaw={180}
        hfov={110}
        // maxYaw={110}
        // minYaw={-110}
        autoLoad
        onLoad={() => {
          console.log('panorama loaded');
        }}
      />
      <span className="panoramas__divider"></span>
    </div>
  );
};

export default Panoramas;
