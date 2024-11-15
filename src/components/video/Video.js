import React from "react";

const Video = ({ videoSrc, className = "" }) => {
  return (
    <video
      className={`w-[50%] rounded-lg h-[800px] ${className} `}
      autoPlay
      muted
      loop
    >
      <source src={videoSrc} type="video/mp4" />
    </video>
  );
};

export default Video;
