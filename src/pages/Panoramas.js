import React from 'react';
import { Pannellum } from 'pannellum-react';
import panorama from '../images/panoramas/panotest-6.jpg';
import '../styles/panorama/panorama.scss';
const Panoramas = () => {
  const screenwidth = window.innerWidth;
  console.log(screenwidth);
  return (
    <div className="panoramas">
      <Pannellum
        width={screenwidth < 1021 ? '80%' : '100%'}
        height={screenwidth < 1021 ? '450px' : '700px'}
        image={panorama}
        pitch={10}
        yaw={180}
        hfov={110}
        // maxYaw={110}
        // minYaw={-110}
        onLoad={() => {
          console.log('panorama loaded');
        }}
      />
      <Pannellum
        width={screenwidth < 1021 ? '80%' : '100%'}
        height={screenwidth < 1021 ? '450px' : '700px'}
        image="https://pannellum.org/images/alma.jpg"
        pitch={10}
        yaw={180}
        hfov={110}
        // maxYaw={110}
        // minYaw={-110}
        onLoad={() => {
          console.log('panorama loaded');
        }}
      />
      <span className="panoramas__divider"></span>
    </div>
  );
};

export default Panoramas;
