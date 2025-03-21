import React, { useRef } from "react";

import estelar from "../assets/estelar.mp4";

function ReproductorVideo() {
  const videoRef = useRef(null);

  const videoPlay = () => {
    videoRef.current.play();
  };

  const videoPause = () => {
    videoRef.current.pause();
  };

  return (
    <div>
      <video ref={videoRef} width="300" height="300" controls>
        <source src={estelar} type="video/mp4"></source>
      </video>

      <div>
        <button onClick={videoPlay}>Play</button>
        <button onClick={videoPause}>Pause</button>
      </div>
    </div>
  );
}

export default ReproductorVideo;
