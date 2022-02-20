import { Player, ControlBar } from "video-react";
import React from "react";
import Jump from 'react-reveal/Jump';

function Video() {
  return (
    <Jump><Player   src="./images/giff.jpeg" loop autoPlay>
      <ControlBar autoHide={false} disableDefaultControls={true}></ControlBar>
    </Player>
    </Jump>
    
  );
}

export default Video;
